import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { Course } from '../wrappers/Course';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('Course', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Course');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let course: SandboxContract<Course>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        course = blockchain.openContract(Course.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await course.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: course.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and course are ready to use
    });
});
