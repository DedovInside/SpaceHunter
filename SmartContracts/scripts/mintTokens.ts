import { Address, toNano } from '@ton/core';
import { JettonMinter } from '../wrappers/JettonMinter';
import { NetworkProvider } from '@ton/blueprint';
import { readFile } from 'fs/promises';
import { buildNftItemContentCell, NftCollection } from '../wrappers/NftCollection';

// Интерфейс для данных из JSON
interface MintData {
    addresses: string[];
    amounts: string[];
    nfts: {
      address: string;
      nft_ids: number[];
    }[];
}

interface NftMetadata {
    ipfs: string;
}

// Функция для чтения и парсинга JSON-файла
async function readMintData(): Promise<MintData> {
    try {
      const data = await readFile('mintData.json', 'utf8');
      return JSON.parse(data) as MintData;
    } catch (error) {
      throw new Error(`Ошибка при чтении или парсинге JSON!`);
    }
}

async function getIpfsLink(nftId: number): Promise<string> {
    try {
      const filePath = `./NFT/Result/${nftId}.json`;
      const data = await readFile(filePath, 'utf8');
      const metadata = JSON.parse(data) as NftMetadata;
      if (!metadata.ipfs) {
        throw new Error(`Поле ipfs отсутствует в файле ${filePath}`);
      }
      return metadata.ipfs;
    } catch (error) {
      throw new Error(`Ошибка при чтении или парсинге файла для NFT ${nftId}: ${error instanceof Error ? error.message : String(error)}`);
    }
}

// Функция для создания задержки между вызовами 
async function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function run(provider: NetworkProvider) {
    const ui = provider.ui();
  
    try {
      // Чтение данных из JSON
      const { addresses, amounts, nfts } = await readMintData();
  
      // Адреса контрактов
      const jettonMinterAddress = Address.parse('kQDXHKC2bsT-_3e-7OEGMiV_hD3PiE7n4sMpJkXmUjt25mTG');
      const nftCollectionAddress = Address.parse('kQDM78cBzU2L6OBtqVjSygKic3plLY-Y3Ad6apeRabq7dfnH');
  
      // Инициализация контрактов
      const jettonMinter = provider.open(JettonMinter.createFromAddress(jettonMinterAddress));
      const nftCollection = provider.open(NftCollection.createFromAddress(nftCollectionAddress));
      
      // Минтинг взаимозаменяемых токенов
      for (let i = 0; i < addresses.length; i++) {
        const toAddress = Address.parse(addresses[i]);
        const jettonAmount = toNano(amounts[i]);
  
        try {
          await jettonMinter.sendMint(provider.sender(), {
            toAddress,
            jettonAmount,
            amount: toNano('0.05'),
            queryId: Date.now(),
            value: toNano('0.2')
          });
          ui.write(`Минтинг ${amounts[i]} токенов для ${addresses[i]} завершен`);
          await delay(15000);
        } catch (error) {
          ui.write(`Ошибка при минтинге токенов для ${addresses[i]}`);
        }
      }
  

      // Минтинг NFT
    for (const userNft of nfts) {
        const toAddress = Address.parse(userNft.address);
        for (const nftId of userNft.nft_ids) {
          const itemIndex = nftId - 1;
  
          try {
            // Читаем IPFS-ссылку из соответствующего JSON-файла
            const ipfsLink = await getIpfsLink(nftId);
  
            await nftCollection.sendMintNft(provider.sender(), {
              value: toNano('0.05'), // Стоимость транзакции
              amount: toNano('0.05'), // Количество TON для газа
              itemIndex: itemIndex,
              itemOwnerAddress: toAddress,
              itemContent: buildNftItemContentCell({
                nftContent: ipfsLink // Используем IPFS-ссылку из файла
              }),
              query_id: Date.now()
            });
            ui.write(`Минтинг NFT ${itemIndex} для ${userNft.address} завершен (IPFS: ${ipfsLink})`);
            await delay(20000);
          } catch (error) {
            ui.write(`Ошибка при минтинге NFT ${itemIndex} для ${userNft.address}: ${error instanceof Error ? error.message : String(error)}`);
          }
        }
      }

  
      ui.write('Все операции минтинга завершены успешно');
    } catch (error) {
      ui.write(`Ошибка выполнения!`);
    }
}