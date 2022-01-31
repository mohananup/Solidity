//contract test code will go here


// import { assert } from assert;
// import { ganache } from ganache;
// import { Web3 } from Web3;

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts()
    console.log(accounts);
    //Use one of the accounts to deploy
    // the contract

});

describe('Inbox', () =>{
    it('deplouys a contract',() => {

    });

});


