"use strict";
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ factory)
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(483);
;// CONCATENATED MODULE: ./ethereum/build/CampaignFactory.json
const CampaignFactory_namespaceObject = JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDeployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createCampaign\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"}');
;// CONCATENATED MODULE: ./ethereum/factory.js

 // console.log(campaignFactory.interface);

console.log(process.env.DEPLOYED_ADDRESS);
const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(CampaignFactory_namespaceObject.w3), process.env.DEPLOYED_ADDRESS);
/* harmony default export */ const factory = (instance);

/***/ })

};
;