import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

// console.log(campaignFactory.interface);
console.log(process.env.DEPLOYED_ADDRESS);
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    process.env.DEPLOYED_ADDRESS
);

export default instance;