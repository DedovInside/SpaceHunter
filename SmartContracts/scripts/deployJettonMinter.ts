import { Address, beginCell, Cell, Dictionary, toNano } from '@ton/core';
import { JettonMinter } from '../wrappers/JettonMinter';
import { compile, NetworkProvider } from '@ton/blueprint';
import { Sha256 } from "@aws-crypto/sha256-js";


const ONCHAIN_CONTENT_PREFIX = 0x00;
const SNAKE_PREFIX = 0x00;

// Параметры токена
const jettonParams = {
  owner: Address.parse("0QB6KnAEDyk4hU8lX0GGS00aH9RouoABrp6_0h1A9IMY-FC1"),
  name: "CosmoCoin",
  symbol: "CSM",
  decimals: "9",
  description: "Токен для игры Space Hunter",
};

export type JettonMetaDataKeys = "name" | "description" | "symbol" | "decimals";

const jettonOnChainMetadataSpec: {
  [key in JettonMetaDataKeys]: "utf8" | "ascii" | undefined;
} = {
  name: "utf8",
  description: "utf8",
  symbol: "utf8",
  decimals: "utf8",
};

// Функция для создания хеша SHA256
const sha256 = (str: string) => {
  const sha = new Sha256();
  sha.update(str);
  return Buffer.from(sha.digestSync());
};

// Функция для построения ячейки с метаданными
export function buildTokenMetadataCell(data: { [s: string]: string | undefined }): Cell {
  const KEYLEN = 256;

  // Создаём пустой словарь
  const dict = Dictionary.empty(Dictionary.Keys.Buffer(32), Dictionary.Values.Cell());

  Object.entries(data).forEach(([k, v]: [string, string | undefined]) => {
    if (!jettonOnChainMetadataSpec[k as JettonMetaDataKeys])
      throw new Error(`Unsupported onchain key: ${k}`);
    if (v === undefined || v === "") return;

    // Используем SHA256 для ключа
    const keyHash = sha256(k);

    // Создаём ячейку для значения в snake-формате
    const valueCell = beginCell().storeUint(0x00, 8); // SNAKE_PREFIX
    let currentCell = valueCell;
    let bufferToStore = Buffer.from(v, jettonOnChainMetadataSpec[k as JettonMetaDataKeys]);

    const CELL_MAX_SIZE_BYTES = Math.floor((1023 - 8) / 8);
    while (bufferToStore.length > 0) {
      currentCell.storeBuffer(bufferToStore.subarray(0, CELL_MAX_SIZE_BYTES));
      bufferToStore = bufferToStore.subarray(CELL_MAX_SIZE_BYTES);
      if (bufferToStore.length > 0) {
        const newCell = beginCell();
        currentCell.storeRef(newCell);
        currentCell = newCell;
      }
    }

    // Добавляем в словарь
    dict.set(keyHash, valueCell.endCell());
  });

  // Сохраняем словарь в ячейку
  return beginCell()
    .storeUint(0x00, 8) // ONCHAIN_CONTENT_PREFIX
    .storeDict(dict)
    .endCell();
}

export async function run(provider: NetworkProvider) {
  const metadataCell = buildTokenMetadataCell({
    name: jettonParams.name,
    symbol: jettonParams.symbol,
    decimals: jettonParams.decimals,
    description: jettonParams.description,
  });

  const jettonMinter = provider.open(JettonMinter.createFromConfig({
        adminAddress: provider.sender().address as Address,
        content: metadataCell, // onchain
        JettonWalletCode: await compile('JettonWallet')
  }, await compile('JettonMinter')));

  await jettonMinter.sendDeploy(provider.sender(), toNano('0.05'));

  await provider.waitForDeploy(jettonMinter.address)
}