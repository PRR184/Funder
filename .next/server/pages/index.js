"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(777);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(456);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








class CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static async getInitialProps() {
    const campaigns = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_1__/* .default.methods.getDeployedCampaigns */ .Z.methods.getDeployedCampaigns().call();
    return {
      campaigns
    };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
          route: `/campaigns/${address}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            children: "View Campaign"
          })
        }),
        fluid: true
      };
    });
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {
      items: items
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      children: ["`        ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
          children: "Open Campaigns"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
          route: "/campaigns/new",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
              content: "Create Campaign",
              icon: "add circle",
              primary: true,
              floated: "right"
            })
          })
        }), this.renderCampaigns()]
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignIndex);

/***/ }),

/***/ 247:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 347:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 409:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [517,777], () => (__webpack_exec__(124)));
module.exports = __webpack_exports__;

})();