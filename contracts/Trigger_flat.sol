// Sources flattened with hardhat v2.22.1 https://hardhat.org

// SPDX-License-Identifier: UNLICENSED

// File contracts/Trigger.sol

// Original license: SPDX_License_Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface IContract {
	function attempt() external;
}

contract Trigger {

	function call(address _contract) external {

		IContract(_contract).attempt();
	}

}
