const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
    process.env.METAMASK,
    process.env.INFURA
);
console.log(process.env.METAMASK,process.env.INFURA);
const web3 = new Web3(provider);

const deploy = async()=>{
    const accounts=await web3.eth.getAccounts();
    console.log('Accounts list',accounts);
    const result=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data:compiledFactory.bytecode})
        .send({from:accounts[0],gas:'1000000'});
    
    console.log('Address',result.options.address);
};

deploy();

// Address 0xD971b7859837701D5ddcA44c4AE62d5CaB4Bc776