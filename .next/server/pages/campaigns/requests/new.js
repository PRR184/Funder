"use strict";
(() => {
var exports = {};
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(483);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(456);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class RequestNew extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      description: '',
      recipient: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      this.setState({
        loading: true,
        errorMessage: ''
      });
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this.props.address);
      const {
        description,
        value,
        recipient
      } = this.state;

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__/* .default.eth.getAccounts */ .Z.eth.getAccounts();
        await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__/* .default.utils.toWei */ .Z.utils.toWei(value, 'ether'), recipient).send({
          from: accounts[0]
        });
        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
      } catch (error) {
        this.setState({
          errorMessage: error.message
        });
      }

      this.setState({
        loading: false
      });
    });
  }

  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    return {
      address
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
        route: `/campaigns/${this.props.address}/requests`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          children: "Back"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
        children: "Create a Request"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
            children: "Description"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.description,
            onChange: event => this.setState({
              description: event.target.value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
            children: "Value in Ether"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.value,
            onChange: event => this.setState({
              value: event.target.value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("label", {
            children: "Recipient"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            value: this.state.recipient,
            onChange: event => this.setState({
              recipient: event.target.value
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
          error: true,
          header: "Oops!",
          content: this.state.errorMessage
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          primary: true,
          loading: this.state.loading,
          children: "Create!"
        })]
      })]
    });
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestNew);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [517,91], () => (__webpack_exec__(309)));
module.exports = __webpack_exports__;

})();