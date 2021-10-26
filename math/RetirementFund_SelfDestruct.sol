//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.9;

contract SelfDestruct {
    address immutable owner;
    
    constructor() payable {
        require(msg.value == 1, '1 wei pls');
        owner = msg.sender;
    }
    
    function die(address to) external {
        require(to != address(0), 'Null address');
        require(msg.sender == owner, 'Not owner');
        selfdestruct(payable(to));
    }
}