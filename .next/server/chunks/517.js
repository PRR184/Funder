exports.id = 517;
exports.ids = [517];
exports.modules = {

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(456);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Header.js


 //Link->React component that is used to render anchor tags to navigate around application.



/* harmony default export */ const Header = (() => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
    style: {
      marginTop: '10px'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
      route: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "item",
        children: "CrowdCoin"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
      position: "right",
      children: [/*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
        route: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "item",
          children: "Campaigns"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
        route: "/campaigns/new",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "item",
          children: "+"
        })
      })]
    })]
  });
});
;// CONCATENATED MODULE: ./components/layout.js






/* harmony default export */ const layout = (props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), props.children]
  });
});

/***/ }),

/***/ 483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(409);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3; //We are injecting web3 into our browser.
// const web3Injection = async()=>{
//     if(window.ethereum){
//         web3=new Web3(window.ethereum);
//         await window.ethereum.enable();
//     }else if(window.web3){
//         web3=new Web3(window.web3.currentProvider);
//     }
// }
// web3Injection();

if (false) {} else {
  // we are running on server or metamask is not present
  const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('https://rinkeby.infura.io/v3/491e04d8636a43d5a7320b00a207fc8a');
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3); // https://stackoverflow.com/questions/58121048/metamask-web3-ethereum-not-defined

/***/ }),

/***/ 456:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const routes = __webpack_require__(247)();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show') // ':' means wildcard.
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ })

};
;