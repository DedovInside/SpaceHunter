import { Address, beginCell, Cell, Dictionary, toNano } from '@ton/core';
import { JettonMinter } from '../wrappers/JettonMinter';
import { compile, NetworkProvider } from '@ton/blueprint';
import { sha256_sync } from '@ton/crypto';

function createMetadataDict(): Dictionary<bigint, Cell> {
  const dict = Dictionary.empty(Dictionary.Keys.BigUint(256), Dictionary.Values.Cell());
  dict.set(BigInt('0x' + sha256_sync('name').toString('hex')), beginCell().storeStringTail('SpaceCoin').endCell());
  dict.set(BigInt('0x' + sha256_sync('symbol').toString('hex')), beginCell().storeStringTail('SPC').endCell());
  dict.set(BigInt('0x' + sha256_sync('decimals').toString('hex')), beginCell().storeStringTail('9').endCell());
  dict.set(BigInt('0x' + sha256_sync('description').toString('hex')), beginCell().storeStringTail('Токен для игры SpaceHunter').endCell());
  return dict;
}

export async function run(provider: NetworkProvider) {
  const jettonMinter = provider.open(JettonMinter.createFromConfig({
        adminAddress: provider.sender().address as Address,
        content: beginCell().storeUint(2, 8).storeDict(createMetadataDict()).endCell(), // onchain
        JettonWalletCode: await compile('JettonWallet')
  }, await compile('JettonMinter')));

  await jettonMinter.sendDeploy(provider.sender(), toNano('0.05'));

  await provider.waitForDeploy(jettonMinter.address)
}