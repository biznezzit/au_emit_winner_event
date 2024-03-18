// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Contract {

    event Winner(address);

    function attempt() external {
        console.log("Sender:", msg.sender);
        console.log("Origin:", tx.origin);
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender); 
    }
}
