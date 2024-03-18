const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Contract", function () {

  async function deploy() {

    const [owner, otherAccount] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();

    return { contract, owner, otherAccount };
	}

	it("should read the 'Contract' address.", async function() {
		const { contract, owner, otherAccount } = await loadFixture(deploy);
		const contractTarget = await contract.target;
		expect(contractTarget).to.have.string('0x');
	});

	it("should NOT call the method 'attempt()'", async function() {
		const { contract, owner, otherAccount } = await loadFixture(deploy);
		await expect(contract.attempt()).to.be.reverted;
	});

});
