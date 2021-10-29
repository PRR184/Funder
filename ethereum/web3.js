import Web3 from 'web3';

let web3;

//We are injecting web3 into our browser.
// const web3Injection = async()=>{
//     if(window.ethereum){
//         web3=new Web3(window.ethereum);
//         await window.ethereum.enable();
//     }else if(window.web3){
//         web3=new Web3(window.web3.currentProvider);
//     }
// }
// web3Injection();

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    // we are in browser and mestamask is running
    web3=new Web3(window.web3.currentProvider);
}else{
    // we are running on server or metamask is not present
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/491e04d8636a43d5a7320b00a207fc8a');
    web3=new Web3(provider);
}

export default web3;

// https://stackoverflow.com/questions/58121048/metamask-web3-ethereum-not-defined