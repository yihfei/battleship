/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `main {\n    display: flex;\n    height: 100vh;\n    margin: 0px;\n    gap: 100px;\n    justify-content: center;\n}\n\nbody {\n    margin: 0px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.restart {\n    position: fixed;\n    text-align: center;\n    bottom: 15vh;\n    left: 50vw;\n    transform: translateX(-50%);\n    font-size: 3vh;   \n    border: none;\n    padding: 10px;\n    color: white;\n    background-color: rgb(74, 74, 74);\n}\n\n\n.human-grid, .computer-grid {\n    display: grid;\n    align-content: center;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n.human-grid div, .computer-grid div {\n    border: 1px solid black;\n    width: 25px;\n    height: 25px;\n    text-align: center;\n}\n\n.blue {\n    background-color: blue;\n    pointer-events: none;\n\n}\n\n.red {\n    background-color: red;\n    pointer-events: none;\n}\n\n.ship {\n    background-color: grey;\n}\n\nh1 {\n    position: fixed;\n    text-align: center;\n    top: 8vh;\n    left: 50vw;\n    transform: translateX(-50%);\n    font-size: 5vh;    \n}\n\n.result {\n    position: fixed;\n    text-align: center;\n    top: 18vh;\n    left: 50vw;\n    transform: translateX(-50%);\n    font-size: 5vh;\n}\n\n.computer-grid > div:hover {\n    background-color: rgb(179, 179, 179);\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_GameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameLogic */ \"./src/modules/GameLogic.js\");\n/* harmony import */ var _modules_DOMcontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOMcontroller */ \"./src/modules/DOMcontroller.js\");\n\n\n\n\nconst logic = new _modules_GameLogic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst controller = new _modules_DOMcontroller__WEBPACK_IMPORTED_MODULE_2__[\"default\"](logic);\nconst restartBtn = document.querySelector('.restart');\nrestartBtn.addEventListener('click', () => controller.resetBoards());\ncontroller.renderHumanBoard();\ncontroller.renderComputerBoard();\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOMcontroller.js":
/*!**************************************!*\
  !*** ./src/modules/DOMcontroller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Ship */ \"./src/modules/factories/Ship.js\");\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ \"./src/modules/factories/Player.js\");\n/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Gameboard */ \"./src/modules/factories/Gameboard.js\");\n/* harmony import */ var _GameLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameLogic */ \"./src/modules/GameLogic.js\");\n\n\n\n\n\nconst SIZE = 10;\nconst main = document.querySelector('main');\n\nclass DOMController {\n    constructor(gamelogic) {\n        this.gamelogic = gamelogic;\n    }\n    \n    \n    renderHumanBoard() {\n        const humanBoard = this.gamelogic.human.gameboard.shipBoard;\n\n        const humanContainer = document.createElement('div');\n        humanContainer.classList.add('human-grid');\n\n        for (let y = 0; y < SIZE; y++) {\n            for (let x = 0; x < SIZE; x++) {\n                let humanGrid = document.createElement('div');\n                if (humanBoard[x][y] !== null) {\n                    humanGrid.classList.add('ship');\n                    \n                }\n                humanGrid.setAttribute('data-x', x);\n                humanGrid.setAttribute('data-y', y);\n                humanContainer.appendChild(humanGrid);\n            }\n        }\n\n        main.appendChild(humanContainer);\n    }\n\n    renderComputerBoard() {\n        const computerBoard = this.gamelogic.computer.gameboard.shipboard;\n\n        const computerContainer = document.createElement('div');\n        computerContainer.classList.add('computer-grid');\n\n        for (let y = 0; y < SIZE; y++) {\n            for (let x = 0; x < SIZE; x++) {\n                let computerGrid = document.createElement('div');\n                \n                computerGrid.setAttribute('data-x', x);\n                computerGrid.setAttribute('data-y', y);\n                computerGrid.addEventListener('click', () => this.gamelogic.sendAttack(x, y));\n                computerContainer.appendChild(computerGrid);\n            }\n        }\n\n        main.appendChild(computerContainer);\n    }\n\n    resetBoards() {\n        main.textContent = '';        \n        this.gamelogic = new _GameLogic__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n        this.renderHumanBoard();\n        this.renderComputerBoard();\n    }\n    \n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);\n\n//# sourceURL=webpack://template/./src/modules/DOMcontroller.js?");

/***/ }),

/***/ "./src/modules/GameLogic.js":
/*!**********************************!*\
  !*** ./src/modules/GameLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Ship */ \"./src/modules/factories/Ship.js\");\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ \"./src/modules/factories/Player.js\");\n/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Gameboard */ \"./src/modules/factories/Gameboard.js\");\n\n\n\n\nclass GameLogic {\n    constructor () {\n        this.human = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.computer = new _factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n\n    // send computer attack\n    sendAttack(x, y) {\n        let grid = document.querySelector(`.computer-grid [data-x=\"${x}\"][data-y=\"${y}\"]`)\n        if (this.computer.gameboard.receiveAttack(x, y)) {\n            grid.classList.add('red');\n        } else {\n            grid.classList.add('blue');\n        }\n        this.computerAttack();\n        this.checkWinner();\n    }\n\n    // computer must respond with random atack\n    computerAttack() {\n        const available = this.human.gameboard.getFreeSquares();\n\n        const randomIndex = available[Math.floor(Math.random() * available.length)];\n        const x = randomIndex[0];\n        const y = randomIndex[1];\n        let grid = document.querySelector(`.human-grid [data-x=\"${x}\"][data-y=\"${y}\"]`);\n        if (this.human.gameboard.receiveAttack(x, y)) {\n            grid.classList.add('red');\n            grid.classList.remove('ship');\n        } else {\n            grid.classList.add('blue');\n        }\n\n    }\n\n    checkWinner() {\n        if (this.human.gameboard.getShipsSunk()) {\n            console.log('computer wins!');\n            const message = document.createElement('p');\n            message.textContent = 'computer wins';\n            message.classList.add('result');\n            document.querySelector('main').appendChild(message);\n        } else if (this.computer.gameboard.getShipsSunk()) {\n            console.log('human wins!');\n            const message = document.createElement('p');\n            message.textContent = 'human wins';\n            message.classList.add('result');\n            document.querySelector('main').appendChild(message);\n        }\n    }\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLogic);\n\n//# sourceURL=webpack://template/./src/modules/GameLogic.js?");

/***/ }),

/***/ "./src/modules/factories/Gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/factories/Gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/factories/Ship.js\");\n\n\nconst SIZE = 10;\n\nclass Gameboard {\n    constructor() {\n        this.shipBoard = [];\n        this.hitBoard = [];\n        this.ships = [];\n        this.initialize();\n    }\n\n    initialize() {\n        for (let i = 0; i < SIZE; i++) {\n            this.shipBoard[i] = [];\n            this.hitBoard[i] = [];\n            for (let j = 0; j < SIZE; j++) {\n                this.shipBoard[i][j] = null;\n                this.hitBoard[i][j] = null;\n            }\n        }\n    }\n\n    placeShip(xCoord, yCoord, isVertical, ship) {\n        if (isVertical) {\n            for (let y = yCoord; y < ship.length + yCoord; y++) {\n                if (this.shipBoard[xCoord][y] !== null) {\n                    throw new Error('ship already exists vertical');\n                }\n                \n            }\n            for (let y = yCoord; y < ship.length + yCoord; y++) {\n                this.shipBoard[xCoord][y] = ship;\n            }\n        } else {\n            for (let x = xCoord; x < ship.length + xCoord; x++) {\n                if (this.shipBoard[x][yCoord] !== null) {\n                    throw new Error('ship already exists');\n                }\n            }\n            for (let x = xCoord; x < ship.length + xCoord; x++) {\n                this.shipBoard[x][yCoord] = ship;\n            }\n        }\n        this.ships.push(ship);\n    }\n\n    receiveAttack(xCoord, yCoord) {\n        // if havent been hit before, and ship exists, add ship hit count\n        if (this.hitBoard[xCoord][yCoord] === null && this.shipBoard[xCoord][yCoord] !== null) {\n            this.shipBoard[xCoord][yCoord].hit();\n            this.hitBoard[xCoord][yCoord] = 'x';\n            return true;\n        }\n\n        // record\n        this.hitBoard[xCoord][yCoord] = 'x';\n        return false;\n    }\n\n    getMissedShots() {\n        let counter = 0;\n        for (let i = 0; i < SIZE; i++) {\n            for (let j = 0; j < SIZE; j++) {\n                if (this.shipBoard[i][j] === null && this.hitBoard[i][j] !== null) {\n                    counter++;\n                }\n            }\n        }\n        return counter;\n    }\n\n    getShipsSunk() {\n        return this.ships.every(ship => ship.isSunk());\n    }\n\n    getFreeSquares() {\n        const nullIndexes = [];\n  \n        for (let i = 0; i < this.hitBoard.length; i++) {\n            for (let j = 0; j < this.hitBoard[i].length; j++) {\n                if (this.hitBoard[i][j] === null) {\n                    nullIndexes.push([i, j]);\n                }\n            }   \n        } \n        return nullIndexes;\n        \n    }\n\n    placeRandomly() {\n        const carrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n        const battleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n        const cruiser = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const submarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n        const destroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n\n        const shipsArray = [carrier, battleship, cruiser, submarine, destroyer];\n\n        let curShip = shipsArray.shift();\n\n        while (this.ships.length < 5) {\n            const available = this.getFreeSquares();\n            const randomIndex = available[Math.floor(Math.random() * available.length)];    \n            \n            const x = randomIndex[0];\n            const y = randomIndex[1];\n\n            const isVertical = Math.random() < 0.5 ? true : false;\n\n            try {\n                this.placeShip(x, y, isVertical, curShip);\n            } catch (error) {\n                console.log(error);\n                continue;\n            }\n            \n            curShip = shipsArray.shift();\n        }\n\n        console.log(this.ships.length)\n        \n    \n    }\n\n\n    \n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://template/./src/modules/factories/Gameboard.js?");

/***/ }),

/***/ "./src/modules/factories/Player.js":
/*!*****************************************!*\
  !*** ./src/modules/factories/Player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/modules/factories/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/modules/factories/Ship.js\");\n\n\n\nclass Player {\n    constructor() {\n        this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.initialize();\n    }\n\n    initialize() {\n        // const carrier = new Ship(5);\n        // const battleship = new Ship(4);\n        // const cruiser = new Ship(3);\n        // const submarine = new Ship(3);\n        // const destroyer = new Ship(2);\n\n        // // predetermined coordinates\n        // this.gameboard.placeShip(0, 0, true, carrier);\n        // this.gameboard.placeShip(1, 0, true, battleship);\n        // this.gameboard.placeShip(2, 0, true, cruiser);\n        // this.gameboard.placeShip(3, 0, true, submarine);\n        // this.gameboard.placeShip(4, 0, true, destroyer);\n\n        this.gameboard.placeRandomly();\n    }\n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://template/./src/modules/factories/Player.js?");

/***/ }),

/***/ "./src/modules/factories/Ship.js":
/*!***************************************!*\
  !*** ./src/modules/factories/Ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.hits = 0;\n    }\n\n    hit() {\n        this.hits = this.hits + 1;\n    }\n\n    isSunk() {\n        return this.length <= this.hits;\n    }\n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://template/./src/modules/factories/Ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;