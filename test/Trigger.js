const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Trigger contract", function() {

  async function deploy() {

    const [owner, otherAccount] = await ethers.getSigners();

    const Trigger = await ethers.getContractFactory("contracts/Trigger.sol:Trigger");
    const trigger = await Trigger.deploy();

    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();

    return { trigger, contract, owner, otherAccount };
	}

	it("should read the 'Trigger' and 'Contract' addresses.", async function() {
		const { trigger, contract, owner, otherAccount } = await loadFixture(deploy);
		const triggerTarget = await trigger.target;
		const contractTarget = await contract.target;
		expect(triggerTarget).to.have.string('0x'); 
		expect(contractTarget).to.have.string('0x');
	});

	it("should call the 'Contract' method 'attempt'", async function() {
		const { trigger, contract, owner, otherAccount } = await loadFixture(deploy);
		const contractTarget = await contract.target;
		expect(await trigger.call(contractTarget)).to.emit(contract, "Winner");
	});

});