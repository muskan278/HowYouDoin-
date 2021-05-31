(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Layout/Homepage.js":
/*!***************************************!*\
  !*** ./components/Layout/Homepage.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Projects\\HowYouDoin\\client\\components\\Layout\\Homepage.js";



const Homepage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomepageContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfoContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "HowYouDoin'?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Relax."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Communicate."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Get Better."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MutedText, {
              children: "You are not alone. Find activities to make you feel better. Stay in touch with your therapist and let them help you."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonsContainer, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignupButton, {
                variant: "contained",
                color: "primary",
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginButton, {
                color: "primary",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageContainer, {
        src: "./vector-image.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);
const HomepageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const InfoContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  border-radius: 1rem;
  font-family: "Roboto", sans-serif;
  border: 5px solid rgb(216, 216, 216);
  border-radius: 2rem;
  flex-grow: 1;
  height: 90vh;
  margin: 2rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;
const ImageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().img)`
  background: transparent;
  height: 100vh;
  margin-left: 0;
`;
const MainContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 2rem;
`;
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)``;
const MutedText = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().p)`
  font-size: 1rem;
  color: rgb(182, 183, 193);
  width: 80%;
  margin-top: 1rem;
`;
const ButtonsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 60%;
`;
const SignupButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button)`
  &&& {
    margin-right: 1rem;
    background: rgb(0, 125, 254);
  }
`;
const LoginButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button)`
  &&& {
    color: rgb(0, 125, 254);
  }
`;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Layout/Homepage */ "./components/Layout/Homepage.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Projects\\HowYouDoin\\client\\pages\\index.js";



const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "HowYouDoin'?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Homepage__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL0xheW91dC9Ib21lcGFnZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiSG9tZXBhZ2UiLCJIb21lcGFnZUNvbnRhaW5lciIsInN0eWxlZCIsIkluZm9Db250YWluZXIiLCJJbWFnZUNvbnRhaW5lciIsIk1haW5Db250YWluZXIiLCJDb250YWluZXIiLCJNdXRlZFRleHQiLCJCdXR0b25zQ29udGFpbmVyIiwiU2lnbnVwQnV0dG9uIiwiQnV0dG9uIiwiTG9naW5CdXR0b24iLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpQkFBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLGFBQUQ7QUFBQSxpQ0FDRSw4REFBQyxTQUFEO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLGVBSUUsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQVFFLDhEQUFDLGdCQUFEO0FBQUEsc0NBQ0UsOERBQUMsWUFBRDtBQUFjLHVCQUFPLEVBQUMsV0FBdEI7QUFBa0MscUJBQUssRUFBQyxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFLDhEQUFDLFdBQUQ7QUFBYSxxQkFBSyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXFCRSw4REFBQyxjQUFEO0FBQWdCLFdBQUcsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTJCRCxDQTVCRDs7QUE4QkEsK0RBQWVBLFFBQWY7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0MsOERBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1DLGFBQWEsR0FBR0QsOERBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWkE7QUFjQSxNQUFNRSxjQUFjLEdBQUdGLDhEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBSkE7QUFNQSxNQUFNRyxhQUFhLEdBQUdILDhEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBUUEsTUFBTUksU0FBUyxHQUFHSiw4REFBVyxFQUE3QjtBQUVBLE1BQU1LLFNBQVMsR0FBR0wsNERBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBT0EsTUFBTU0sZ0JBQWdCLEdBQUdOLDhEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9BLE1BQU1PLFlBQVksR0FBR1Asd0RBQU0sQ0FBQ1EscURBQUQsQ0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7QUFPQSxNQUFNQyxXQUFXLEdBQUdULHdEQUFNLENBQUNRLHFEQUFELENBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsQ0FKQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBOztBQUVBLE1BQU1FLElBQUksR0FBRyxNQUFNO0FBQ2pCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUEsa0JBREY7QUFRRCxDQVREOztBQVdBLCtEQUFlQSxJQUFmLEU7Ozs7Ozs7Ozs7O0FDZEEsK0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IEhvbWVwYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SG9tZXBhZ2VDb250YWluZXI+XHJcbiAgICAgICAgPEluZm9Db250YWluZXI+XHJcbiAgICAgICAgICA8aDM+SG93WW91RG9pbic/PC9oMz5cclxuICAgICAgICAgIDxNYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxoMT5SZWxheC48L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT5Db21tdW5pY2F0ZS48L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT5HZXQgQmV0dGVyLjwvaDE+XHJcbiAgICAgICAgICAgICAgPE11dGVkVGV4dD5cclxuICAgICAgICAgICAgICAgIFlvdSBhcmUgbm90IGFsb25lLiBGaW5kIGFjdGl2aXRpZXMgdG8gbWFrZSB5b3UgZmVlbCBiZXR0ZXIuIFN0YXlcclxuICAgICAgICAgICAgICAgIGluIHRvdWNoIHdpdGggeW91ciB0aGVyYXBpc3QgYW5kIGxldCB0aGVtIGhlbHAgeW91LlxyXG4gICAgICAgICAgICAgIDwvTXV0ZWRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFNpZ251cEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgICAgICAgPC9TaWdudXBCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5CdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+TG9naW48L0xvZ2luQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L01haW5Db250YWluZXI+XHJcbiAgICAgICAgPC9JbmZvQ29udGFpbmVyPlxyXG4gICAgICAgIDxJbWFnZUNvbnRhaW5lciBzcmM9XCIuL3ZlY3Rvci1pbWFnZS5qcGdcIiAvPlxyXG4gICAgICA8L0hvbWVwYWdlQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xyXG5cclxuY29uc3QgSG9tZXBhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5cclxuY29uc3QgSW5mb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cclxuYDtcclxuXHJcbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmltZ2BcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgTXV0ZWRUZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiByZ2IoMTgyLCAxODMsIDE5Myk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHdpZHRoOiA2MCU7XHJcbmA7XHJcblxyXG5jb25zdCBTaWdudXBCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAmJiYge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDEyNSwgMjU0KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICYmJiB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDEyNSwgMjU0KTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBIb21lcGFnZSBmcm9tIFwiLi8uLi9jb21wb25lbnRzL0xheW91dC9Ib21lcGFnZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvd1lvdURvaW4nPzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SG9tZXBhZ2UgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9