import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Dictionary, Sender, SendMode } from '@ton/core';
import { encodeOffChainContent } from './helpers/content';

export type RoyaltyParams = {
    royaltyFactor: number;
    royaltyBase: number;
    royaltyAddress: Address;
};

export type NftCollectionConfig = {
    ownerAddress: Address;
    nextItemIndex: number;
    content: Cell;
    nftItemCode: Cell;
    royaltyParams: RoyaltyParams;
};

export type NftCollectionContent = {
    collectionContent: string;
};

export type NftItemContent = {
    nftContent: string;
}

export function buildNftCollectionContentCell(data: NftCollectionContent): Cell {
    let contentCell = beginCell();

    const collectionContent = encodeOffChainContent(data.collectionContent);
    contentCell.storeRef(collectionContent);

    return contentCell.endCell();
}

export function buildNftItemContentCell(data: NftItemContent): Cell {
    let contentCell = beginCell();

    const nftContent = encodeOffChainContent(data.nftContent);
    contentCell.storeRef(nftContent)

    return contentCell.endCell();
}

export function nftCollectionConfigToCell(config: NftCollectionConfig): Cell {
    return beginCell()
        .storeAddress(config.ownerAddress)
        .storeUint(config.nextItemIndex, 64)
        .storeRef(config.content)
        .storeRef(config.nftItemCode)
        .storeRef(
            beginCell()
                .storeUint(config.royaltyParams.royaltyFactor, 16)
                .storeUint(config.royaltyParams.royaltyBase, 16)
                .storeAddress(config.royaltyParams.royaltyAddress)
        )
    .endCell();
}

export class NftCollection implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new NftCollection(address);
    }

    static createFromConfig(config: NftCollectionConfig, code: Cell, workchain = 0) {
        const data = nftCollectionConfigToCell(config);
        const init = { code, data };
        return new NftCollection(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }

    async sendMintNft(provider: ContractProvider, via: Sender,
        opts: {
            value: bigint;
            query_id: number;
            itemIndex: number;
            itemOwnerAddress: Address;
            itemContent: Cell;
            amount: bigint;
        }
    ) {
        const nftMessage = beginCell();
        nftMessage.storeAddress(opts.itemOwnerAddress)
        nftMessage.storeRef(opts.itemContent)

        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(1, 32)
                .storeUint(opts.query_id, 64)
                .storeUint(opts.itemIndex, 64)
                .storeCoins(opts.amount)
                .storeRef(nftMessage)
            .endCell(),
        });
    }

    async changeOwner(
        provider: ContractProvider,
        via: Sender,
        newOwner: Address,
        opts: { value: bigint; query_id: number }
    ): Promise<void> {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(3, 32)         
                .storeUint(opts.query_id, 64)   
                .storeAddress(newOwner)
            .endCell(),
        });
    }

    async getCollectionData(provider: ContractProvider): Promise<{
        nextItemIndex: number;
        content: Cell;
        ownerAddress: Address;
    }> {
        const result = await provider.get('get_collection_data', []);
        const nextItemIndex = result.stack.readNumber();
        const content = result.stack.readCell();
        const ownerAddress = result.stack.readAddress();

        return {
            nextItemIndex,
            content,
            ownerAddress,
        };
    }
}
