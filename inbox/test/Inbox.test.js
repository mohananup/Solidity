// contract test code will go here
import assert from assert;
import ganache from ganache;
import Web3 from web3;


const web3 = new Web3(ganache.provider());

beforeEach(() =>{
    //Get a list of all accounts
    web3.eth.getAccounts()
    .then(fetchedAccounts => {
        console.log(fetchedAccounts);
    });
    //Use one of the accounts to deploy
    // the contract

});

describe('Inbox', () =>{
    it('deplouys a contract',() => {

    });

});


