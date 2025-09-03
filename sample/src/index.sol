// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;
contract sayHello {
    
    function hello(string memory _name)public pure returns(string memory Hello){

Hello = string.concat("Hello ",_name,"!!!");



    }


}