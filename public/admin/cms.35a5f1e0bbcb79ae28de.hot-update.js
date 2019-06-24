webpackHotUpdate("cms",{

/***/ "./src/components/TagList.js":
/*!***********************************!*\
  !*** ./src/components/TagList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/camelCase */ "./src/utils/camelCase.js");
var _jsxFileName = "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/TagList.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





var TagList = function TagList(_ref) {
  var tag = _ref.tag,
      tags = _ref.tags,
      className = _ref.className,
      max = _ref.max;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, tag && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "overview__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Selected tag: " + tag.toLowerCase()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tags " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, tags.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: i,
      to: "/tags/" + Object(_utils_camelCase__WEBPACK_IMPORTED_MODULE_2__["default"])(t),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, t.toLowerCase()));
  }))));
};

TagList.defaultProps = {
  className: '',
  max: 100
};
var _default = TagList;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TagList, "TagList", "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/TagList.js");
  reactHotLoader.register(_default, "default", "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/TagList.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.35a5f1e0bbcb79ae28de.hot-update.js.map