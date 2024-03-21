const hre = require("hardhat");

// const TRIGGER_ADDRESS = "https://sepolia.etherscan.io/address/0xB4A4C42f85720A742F8121c65d9E3cBE12AAc8C6";
// const CONTRACT_ADDRESS = "https://sepolia.etherscan.io/address/0xDe20E9499df78195DC1348c52a9acDC4F08F8e66";
const TRIGGER_ADDRESS = "0xB4A4C42f85720A742F8121c65d9E3cBE12AAc8C6";
const CONTRACT_ADDRESS = "0xDe20E9499df78195DC1348c52a9acDC4F08F8e66";

async function main() {
	// console.log("Trigger Address:", TRIGGER_ADDRESS);
	// console.log("Contract Address:", CONTRACT_ADDRESS);

	const ABI = [
		{"anonymous":false,
			"inputs":[
				{"indexed":false,
				"internalType":"address",
				"name":"",
				"type":"address"}
			],
			"name":"Winner",
			"type":"event"
			},
		{"inputs":[],
			"name":"attempt",
			"outputs":[],
			"stateMutability":"nonpayable",
			"type":"function"
		}
	]

	const [ signer ] = await hre.ethers.getSigners();
  console.log("Signer.Address:", signer.address);

	const trigger = await hre.ethers.getContractAt("contracts/Trigger.sol:Trigger", TRIGGER_ADDRESS);
	// console.log("Trigger:", trigger);

	// const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS);
	const contract = await hre.ethers.getContractAt(ABI, CONTRACT_ADDRESS, signer);
	// console.log("Contract:", contract);
	console.log("Contract.Target:", contract.target);

	const success = await trigger.call(contract);
	console.log("Success:", success);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});