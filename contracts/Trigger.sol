// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface IContract {
	function attempt() external;
}

contract Trigger {

	function call(address _contract) external {

		IContract(_contract).attempt();
	}

}