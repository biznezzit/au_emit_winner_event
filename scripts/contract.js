const hre = require("hardhat");

// const CONTRACT_ADDRESS = "https://sepolia.etherscan.io/address/0xB1A2164ef9F769d9063508044AB99B251ea3f2ab";
const CONTRACT_ADDRESS = "https://sepolia.etherscan.io/address/0xDe20E9499df78195DC1348c52a9acDC4F08F8e66";

async function main() {
	console.log(CONTRACT_ADDRESS);

	const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS);
	console.log(contract);

	await contract.attempt();

}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});