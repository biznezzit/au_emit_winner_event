// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

interface IContract {
	function attempt() external;
}

contract Trigger {

	function call(address _contract) external {

		console.log("Address:", _contract);

		IContract(_contract).attempt();
	}

}