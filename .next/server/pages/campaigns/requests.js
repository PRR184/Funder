"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ requests)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(82);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(456);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(91);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(483);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/RequestRow.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class RequestRow extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onApprove", async () => {
      const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    });

    _defineProperty(this, "onFinalise", async () => {
      const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
    });
  }

  render() {
    const {
      Row,
      Cell
    } = external_semantic_ui_react_.Table;
    const {
      id,
      request,
      approversCount
    } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
      disabled: request.complete,
      positive: readyToFinalize && !request.complete,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Cell, {
        children: id
      }), /*#__PURE__*/jsx_runtime_.jsx(Cell, {
        children: request.description
      }), /*#__PURE__*/jsx_runtime_.jsx(Cell, {
        children: web3/* default.utils.fromWei */.Z.utils.fromWei(request.value, 'ether')
      }), /*#__PURE__*/jsx_runtime_.jsx(Cell, {
        children: request.recipient
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Cell, {
        children: [request.approvalCount, " / ", approversCount]
      }), /*#__PURE__*/jsx_runtime_.jsx(Cell, {
        children: request.complete ? null : /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          color: "green",
          basic: true,
          onClick: this.onApprove,
          children: "Approve"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Cell, {
        children: request.complete ? null : /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
          color: "teal",
          basic: true,
          onClick: this.onFinalise,
          children: "Finalise"
        })
      })]
    });
  }

}

;
/* harmony default export */ const components_RequestRow = (RequestRow);
;// CONCATENATED MODULE: ./pages/campaigns/requests/index.js









class RequestIndex extends external_react_.Component {
  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    const campaign = (0,ethereum_campaign/* default */.Z)(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call();
    }));
    return {
      address,
      requests,
      requestCount,
      approversCount
    };
  }

  renderRow() {
    return this.props.requests.map((request, index) => {
      return /*#__PURE__*/jsx_runtime_.jsx(components_RequestRow, {
        request: request,
        id: index,
        address: this.props.address,
        approversCount: this.props.approversCount
      }, index);
    });
  }

  render() {
    const {
      Header,
      Row,
      HeaderCell,
      Body
    } = external_semantic_ui_react_.Table;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Request List"
      }), /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
        route: `/campaigns/${this.props.address}/requests/new`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
            primary: true,
            floated: "right",
            style: {
              marginBottom: 10
            },
            children: "Add Request"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Table, {
        celled: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderCell, {
              children: "ID"
            }), /*#__PURE__*/jsx_runtime_.jsx(HeaderCell, {
              children: "Description"
            }), /*#__PURE__*/jsx_runtime_.jsx(HeaderCell, {
              children: "Amount (Ether)"
            }), /*#__PURE__*/jsx_runtime_.jsx(HeaderCell, {
              children: "Recipient"
            }), /*#__PURE__*/jsx_runtime_.jsx(HeaderCell, {
              children: "Approval Count"
            }), /*#__PURE__*/jsx_runtime_.jsx(HeaderCell, {
              children: "Approve"
            }), /*#__PURE__*/jsx_runtime_.jsx(HeaderCell, {
              children: "Finalise"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Body, {
          children: this.renderRow()
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: ["Found ", this.props.requestCount, " requests."]
      })]
    });
  }

}

;
/* harmony default export */ const requests = (RequestIndex);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [517,91], () => (__webpack_exec__(818)));
module.exports = __webpack_exports__;

})();