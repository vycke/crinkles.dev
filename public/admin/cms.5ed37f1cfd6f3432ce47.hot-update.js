webpackHotUpdate("cms",{

/***/ "./src/components/BlogPostTemplate.js":
/*!********************************************!*\
  !*** ./src/components/BlogPostTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_string2html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/string2html */ "./src/utils/string2html.js");
/* harmony import */ var _utils_camelCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/camelCase */ "./src/utils/camelCase.js");
/* harmony import */ var _utils_readingTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/readingTime */ "./src/utils/readingTime.js");
/* harmony import */ var _svg_arrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/arrowRight */ "./src/components/svg/arrowRight.js");
/* harmony import */ var _svg_arrowLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg/arrowLeft */ "./src/components/svg/arrowLeft.js");

var _jsxFileName = "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/BlogPostTemplate.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();









var BlogPostTemplate = function BlogPostTemplate(_ref) {
  var meta = _ref.meta,
      children = _ref.children;
  var content = typeof children === 'string' ? Object(_utils_string2html__WEBPACK_IMPORTED_MODULE_3__["string2html"])(children) : children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "post__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, meta.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, meta.date + " \u2022 " + Object(_utils_readingTime__WEBPACK_IMPORTED_MODULE_5__["formatReadingTime"])(meta.words)), meta.tags && meta.tags.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "post__tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, meta.tags.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: i,
      to: "/tags/" + Object(_utils_camelCase__WEBPACK_IMPORTED_MODULE_4__["default"])(t),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, t.toLowerCase());
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "card post__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "post__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, meta.next && !meta.prev && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), meta.prev && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: meta.prev.link,
    className: "previous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_arrowLeft__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: left,
    alt: "Arrow left logo",
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), meta.prev.title), meta.next && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: meta.next.link,
    className: "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, meta.next.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_arrowRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))));
};

var _default = BlogPostTemplate;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlogPostTemplate, "BlogPostTemplate", "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/BlogPostTemplate.js");
  reactHotLoader.register(_default, "default", "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/BlogPostTemplate.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/svg/arrowLeft.js":
/*!*****************************************!*\
  !*** ./src/components/svg/arrowLeft.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/svg/arrowLeft.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();



var _default = function _default() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "449px",
    height: "438px",
    viewBox: "0 0 449 438",
    version: "1.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "arrow-left-solid",
    fill: "#20282D",
    fillRule: "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M258.5,408.1 L236.3,430.3 C226.9,439.7 211.7,439.7 202.4,430.3 L8,236 C-1.4,226.6 -1.4,211.4 8,202.1 L202.4,7.7 C211.8,-1.7 227,-1.7 236.3,7.7 L258.5,29.9 C268,39.4 267.8,54.9 258.1,64.2 L137.6,179 L425,179 C438.3,179 449,189.7 449,203 L449,235 C449,248.3 438.3,259 425,259 L137.6,259 L258.1,373.8 C267.9,383.1 268.1,398.6 258.5,408.1 Z",
    id: "Path",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/svg/arrowLeft.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/svg/arrowRight.js":
/*!******************************************!*\
  !*** ./src/components/svg/arrowRight.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/svg/arrowRight.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();



var _default = function _default() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "449px",
    height: "438px",
    viewBox: "0 0 449 438",
    version: "1.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "arrow-right-solid",
    fill: "#20282D",
    fillRule: "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M190.5,29.9 L212.7,7.7 C222.1,-1.7 237.3,-1.7 246.6,7.7 L441,202 C450.4,211.4 450.4,226.6 441,235.9 L246.6,430.3 C237.2,439.7 222,439.7 212.7,430.3 L190.5,408.1 C181,398.6 181.2,383.1 190.9,373.8 L311.4,259 L24,259 C10.7,259 0,248.3 0,235 L0,203 C0,189.7 10.7,179 24,179 L311.4,179 L190.9,64.2 C181.1,54.9 180.9,39.4 190.5,29.9 Z",
    id: "Path",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/kevinpennekamp/Projects/kevtiq/kevtiq.co/src/components/svg/arrowRight.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/img/arrow-left-solid.svg":
false,

/***/ "./src/img/arrow-right-solid.svg":
false

})
//# sourceMappingURL=cms.5ed37f1cfd6f3432ce47.hot-update.js.map