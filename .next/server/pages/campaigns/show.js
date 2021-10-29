"use strict";
(() => {
var exports = {};
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(82);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(91);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(483);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(456);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/ContributeForm.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ContributeForm extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      this.setState({
        loading: true,
        errorMessage: ''
      });
      const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);

      try {
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: web3/* default.utils.toWei */.Z.utils.toWei(this.state.value, 'ether')
        }); // Refresh page to show updated details.

        routes.Router.replaceRoute(`/campaigns/${this.props.address}`);
      } catch (error) {
        this.setState({
          errorMessage: error.message
        });
      }

      this.setState({
        loading: false,
        value: ''
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Amount to contribute"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
          label: "ether",
          labelPosition: "right",
          value: this.state.value,
          onChange: event => this.setState({
            value: event.target.value
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
        primary: true,
        loading: this.state.loading,
        children: "Contribute!"
      })]
    });
  }

}

;
/* harmony default export */ const components_ContributeForm = (ContributeForm);
;// CONCATENATED MODULE: ./pages/campaigns/show.js










class CampaignShow extends external_react_.Component {
  static async getInitialProps(props) {
    const campaign = (0,ethereum_campaign/* default */.Z)(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    console.log(summary);
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestCount,
      approversCount,
      manager
    } = this.props;
    const items = [{
      header: manager,
      description: 'The Manager created this campaign and can withdraw money',
      meta: 'Address of Manager',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: minimumContribution,
      description: 'You must contribute atleast this much Wei to become a contributor',
      meta: 'Minimum Contribution (Wei)'
    }, {
      header: requestCount,
      description: 'A request is made to withdraw money from contract. Requests are approved by contributors.',
      meta: 'Number of Requests'
    }, {
      header: approversCount,
      description: 'Number of people who have already donated to this campaign.',
      meta: 'Number of Approvers'
    }, {
      header: web3/* default.utils.fromWei */.Z.utils.fromWei(balance, 'ether'),
      description: 'The Balance is ow much money the campaign has left to spend',
      meta: 'Campaigns Balance (Ether)'
    }];
    return /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
      items: items
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Campaign Show"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
            width: 10,
            children: this.renderCards()
          }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
            width: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_ContributeForm, {
              address: this.props.address
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
            children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
              route: `/campaigns/${this.props.address}/requests`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                  primary: true,
                  children: "View Requests"
                })
              })
            })
          })
        })]
      })]
    });
  }

}

/* harmony default export */ const show = (CampaignShow);

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
var __webpack_exports__ = __webpack_require__.X(0, [517,91], () => (__webpack_exec__(689)));
module.exports = __webpack_exports__;

})();