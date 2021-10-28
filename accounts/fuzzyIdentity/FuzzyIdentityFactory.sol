//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.9;

interface IName {
    function name() external view returns (bytes32);
}

interface IChallenge {
    function authenticate() external;
}

contract FuzzyIdentityFactory {
    function createContract(bytes32 salt) external returns (address) {
        FuzzyIdentity newContract = new FuzzyIdentity{salt: salt}();
        require(isBadCode(address(newContract)));
        return address(newContract);
    } 
    
    function isBadCode(address _addr) public pure returns (bool) {
        bytes20 addr = bytes20(_addr);
        bytes20 id = hex"000000000000000000000000000000000badc0de";
        bytes20 mask = hex"000000000000000000000000000000000fffffff";

        for (uint256 i = 0; i < 34; i++) {
            if (addr & mask == id) {
                return true;
            }
            mask <<= 4;
            id <<= 4;
        }

        return false;
    }
}

contract FuzzyIdentity is IName {
    function name() external pure returns (bytes32){
        return bytes32("smarx");
    }
    
    function callAuthenticate(IChallenge challenge) external {
        challenge.authenticate();
    }
}