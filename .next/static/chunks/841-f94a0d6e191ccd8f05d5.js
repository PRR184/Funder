(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{7082:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});t(67294);var a=t(95712),s=t(12393),i=t(66456),r=t(85893),u=function(){return(0,r.jsxs)(s.Z,{style:{marginTop:"10px"},children:[(0,r.jsx)(i.Link,{route:"/",children:(0,r.jsx)("a",{className:"item",children:"CrowdCoin"})}),(0,r.jsxs)(s.Z.Menu,{position:"right",children:[(0,r.jsx)(i.Link,{route:"/",children:(0,r.jsx)("a",{className:"item",children:"Campaigns"})}),(0,r.jsx)(i.Link,{route:"/campaigns/new",children:(0,r.jsx)("a",{className:"item",children:"+"})})]})]})},c=(t(49186),function(n){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(u,{}),n.children]})})},52777:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});var a=t(61483),s=JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDeployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createCampaign\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"}'),i=t(34155);console.log(i.env.DEPLOYED_ADDRESS);var r=new a.Z.eth.Contract(JSON.parse(s.w3),i.env.DEPLOYED_ADDRESS)},61483:function(n,e,t){"use strict";var a,s=t(3283),i=t.n(s);if("undefined"!==typeof window.web3)a=new(i())(window.web3.currentProvider);else{var r=new(i().providers.HttpProvider)("https://rinkeby.infura.io/v3/491e04d8636a43d5a7320b00a207fc8a");a=new(i())(r)}e.Z=a},66456:function(n,e,t){var a=t(37018)();a.add("/campaigns/new","/campaigns/new").add("/campaigns/:address","/campaigns/show").add("/campaigns/:address/requests","/campaigns/requests/index").add("/campaigns/:address/requests/new","/campaigns/requests/new"),n.exports=a},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){}}]);