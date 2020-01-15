/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  font: 12px sans-serif;\n  margin: 10px 15px;\n  text-align: center;\n}\np {\n  margin: 0px;\n  padding: 5px 0px;\n  text-align: left;\n}\n\nh4 {\n  margin: 0px;\n  padding: 5px 0px;\n  text-align: left;\n}\n\n/* --- Buttons --- */\n.btn-standalone button {\n  cursor: pointer;\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 40px;\n  margin: 5px 0px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n.btn-standalone button:focus {\n  box-shadow: inset 0 0 0 2px #18a0fb;\n}\n#create {\n  box-shadow: none;\n  background: #00a9e0;\n  color: white;\n}\n#create:focus {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3);\n}\n\n/* --- Input --- */\ninput[type=\"text\"] {\n  width: 75%;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  padding: 5px;\n  text-align: left;\n  font-weight: bold;\n  float: left;\n}\ninput[type=\"checkbox\"] {\n  width: 100%;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  padding: 5px;\n  text-align: left;\n  font-weight: bold;\n}\ninput:hover {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\ninput:focus {\n  box-shadow: inset 0 0 0 2px #18a0fb;\n}\n\n/* --- Grid --- */\n.row {\n  padding: 2px 3px;\n}\n.column {\n  float: left;\n  vertical-align: middle;\n  width: 100%;\n}\n.column .zero-padding {\n  padding: 0 !important;\n}\n.half {\n  width: 50% !important;\n}\n.two-thirds {\n  width: 66.7% !important;\n}\n.third {\n  width: 33.3% !important;\n}\n.one-sixth {\n  width: 16.7% !important;\n}\n.three-fourths {\n  width: 75% !important;\n}\n.quarter {\n  width: 25% !important;\n}\n.label {\n  width: 65% !important;\n}\n.input-column {\n  width: 35% !important;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* --- Checkbox --- */\n/* The container */\n.container {\n  padding: 3px 0px;\n  display: block;\n  position: relative;\n  cursor: pointer;\n  width: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.container input {\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n}\n.toggle-display {\n  display: none;\n}\n\n.toggle-display.is-visible {\n  display: block;\n}\n\n/* --- Custom Radio Button --- */\n/* Based on Codepen by Sal */\n.options-radio-buttons-wrapper {\n  clear: both;\n  display: inline-block;\n}\n.options-radio-button {\n  position: absolute;\n  left: -9999em;\n  top: -9999em;\n}\n.options-radio-button + label {\n  float: left;\n  padding: 0.5em 1em;\n  cursor: pointer;\n  border: 1px solid #28608f;\n  margin-right: -1px;\n  color: #fff;\n  background-color: #00a9e0;\n}\n.options-radio-button + label:first-of-type {\n  border-radius: 0.7em 0 0 0.7em;\n}\n.options-radio-button + label:last-of-type {\n  border-radius: 0 0.7em 0.7em 0;\n}\n.options-radio-button:checked + label {\n  background-color: #4b86b4;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");


/* State Changes Variable */
let isShiftHeld = false;
/* Run after onLoad */
window.addEventListener("load", function () {
    document.getElementById("columns").select();
});
/* Toggle HTML Rendering */
function toggleEditable(htmlTagId, isPrerequisiteSelected, defaultValue) {
    const htmlTagById = document.getElementById(htmlTagId);
    if (htmlTagById.checked) {
        htmlTagById.checked = false;
    }
    if (isPrerequisiteSelected) {
        htmlTagById.disabled = false;
        htmlTagById.value = defaultValue;
    }
    else {
        htmlTagById.disabled = true;
        htmlTagById.value = "";
    }
    return null;
}
// Detect radio buttons state change
document.getElementById("count-and-table-size").onclick = () => {
    if (document.getElementById("count-and-table-size")
        .checked) {
        toggleEditable("columnWidth", false, "100");
        toggleEditable("rowHeight", false, "30");
        toggleEditable("tableWidth", true, "1024");
        toggleEditable("tableHeight", true, "768");
        toggleEditable("columns", true, "5");
        toggleEditable("rows", true, "8");
    }
};
document.getElementById("count-and-cell-size").onclick = () => {
    if (document.getElementById("count-and-cell-size").checked) {
        toggleEditable("columnWidth", true, "100");
        toggleEditable("rowHeight", true, "30");
        toggleEditable("tableWidth", false, "1024");
        toggleEditable("tableHeight", false, "768");
        toggleEditable("columns", true, "5");
        toggleEditable("rows", true, "8");
    }
};
document.getElementById("cell-and-table-size").onclick = () => {
    if (document.getElementById("cell-and-table-size").checked) {
        toggleEditable("columnWidth", true, "100");
        toggleEditable("rowHeight", true, "30");
        toggleEditable("tableWidth", true, "1024");
        toggleEditable("tableHeight", true, "768");
        toggleEditable("columns", false, "5");
        toggleEditable("rows", false, "8");
    }
};
// Detect header checkbox state change
document.getElementById("header").onchange = () => {
    toggleEditable("floatingFilter", document.getElementById("header").checked, "");
    toggleEditable("headerHeight", document.getElementById("header").checked, "60");
    toggleEditable("floatingFilterHeight", document.getElementById("floatingFilter").checked, "");
};
// Detect floating filter checkbox state change
document.getElementById("floatingFilter").onchange = () => {
    toggleEditable("floatingFilterHeight", document.getElementById("floatingFilter").checked, "30");
};
// Detect striped/alternate background checkbox state change
document.getElementById("alternateBackgrounds").onchange = () => {
    toggleEditable("stripedBackgroundColor", document.getElementById("alternateBackgrounds")
        .checked, "#FFFFFF");
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
    toggleEditable("borderColor", document.getElementById("borders").checked, "#C7C7C7");
};
/* Keyboard Navigation */
document.onkeydown = keyDown => {
    let activeElement = document.activeElement;
    if (keyDown.key === "Shift") {
        isShiftHeld = true;
    }
    else if (keyDown.key.match(/Arrow\w+/g)) {
        if (activeElement.type === "text") {
            let value = parseInt(activeElement.value);
            if (isShiftHeld === false) {
                switch (keyDown.key) {
                    case "ArrowUp":
                        value += 1;
                        break;
                    case "ArrowDown":
                        value -= 1;
                        break;
                }
            }
            else {
                switch (keyDown.key) {
                    case "ArrowUp":
                        value += 10;
                        break;
                    case "ArrowDown":
                        value -= 10;
                        break;
                }
            }
            document.activeElement.value = value.toString();
        }
    }
    else if (keyDown.key === "Tab") {
        if (activeElement.id === "cancel" && isShiftHeld === false) {
            document.getElementById("columns").focus();
            keyDown.preventDefault();
        }
        else if (activeElement.id === "columns" && isShiftHeld === true) {
            document.getElementById("cancel").focus();
            keyDown.preventDefault();
        }
    }
    else if (keyDown.key === "Enter") {
        if (activeElement.type === "checkbox") {
            activeElement.checked = !activeElement.checked;
            if (activeElement.id === "header") {
                toggleEditable("floatingFilter", activeElement.checked, "");
                toggleEditable("headerHeight", activeElement.checked, "60");
            }
            else if (activeElement.id === "floatingFilter") {
                toggleEditable("floatingFilterHeight", activeElement.checked, "30");
            }
            else if (activeElement.id === "alternateBackgrounds") {
                toggleEditable("stripedBackgroundColor", activeElement.checked, "#FFFFFF");
            }
            else if (activeElement.id === "borders") {
                toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
            }
        }
    }
};
document.onkeyup = keyUp => {
    if (keyUp.key === "Shift") {
        isShiftHeld = false;
    }
};
/* Create and Cancel Button Actions */
document.getElementById("create").onclick = () => {
    const columns = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columns", "number");
    const columnWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columnWidth", "number");
    const rows = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rows", "number");
    const rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rowHeight", "number");
    const borders = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("borders", "boolean");
    const alternateBackgrounds = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("alternateBackgrounds", "boolean");
    const header = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("header", "boolean");
    const headerHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("headerHeight", "number");
    const floatingFilter = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("floatingFilter", "boolean");
    const floatingFilterHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("floatingFilterHeight", "number");
    const primarybackgroundColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("primarybackgroundColor", "string");
    const stripedbackgroundColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("stripedbackgroundColor", "string");
    const borderColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("borderColor", "string");
    const referenceCoordinates = { x: 0, y: 0 };
    parent.postMessage({
        pluginMessage: {
            type: "create-table",
            columns: columns,
            columnWidth: columnWidth,
            rows: rows,
            rowHeight: rowHeight,
            borders: borders,
            alternateBackgrounds: alternateBackgrounds,
            header: header,
            headerHeight: headerHeight,
            floatingFilter: floatingFilter,
            floatingFilterHeight: floatingFilterHeight,
            primarybackgroundColor: primarybackgroundColor,
            stripedbackgroundColor: stripedbackgroundColor,
            borderColor: borderColor,
            referenceCoordinates: referenceCoordinates
        }
    }, "*");
};
document.getElementById("cancel").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: groupNodes, getCurrentPage, getSelection, setSelection, scrollAndZoomIntoView, clone, hexToRgb, getValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupNodes", function() { return groupNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelection", function() { return setSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollAndZoomIntoView", function() { return scrollAndZoomIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* Figma API Function Abstraction */
function groupNodes(nodes, parent) {
    return figma.group(nodes, parent);
}
function getCurrentPage() {
    return figma.currentPage;
}
function getSelection() {
    return getCurrentPage().selection;
}
function setSelection(node) {
    figma.currentPage.selection = node;
    return null;
}
function scrollAndZoomIntoView(node) {
    figma.viewport.scrollAndZoomIntoView(node);
    return null;
}
/* Clone function taken from Figma Plugin API example */
function clone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === "undefined" ||
        type === "number" ||
        type === "string" ||
        type === "boolean") {
        return val;
    }
    else if (type === "object") {
        if (val instanceof Array) {
            return val.map(x => clone(x));
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            let o = {};
            for (const key in val) {
                o[key] = clone(val[key]);
            }
            return o;
        }
    }
    throw "unknown";
}
/* HEX to RGB Conversion */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null;
}
/* Extract Inputs */
function getValue(htmlTagId, inputType) {
    const input = document.getElementById(htmlTagId);
    switch (inputType) {
        case "number":
            return parseInt(input.value, 10);
            break;
        case "boolean":
            return input.checked;
            break;
        case "string":
            return input.value;
            break;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDBCQUEwQixz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eUIscURBQWM7QUFDdkMsMkJBQTJCLHFEQUFjO0FBQ3pDLGlDQUFpQyxxREFBYztBQUMvQyxtQ0FBbUMscURBQWM7QUFDakQsbUNBQW1DLHFEQUFjO0FBQ2pELHdCQUF3QixxREFBYztBQUN0QyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLGlCQUFpQixFQUFFO0FBQzVEOzs7Ozs7Ozs7Ozs7O0FDbkxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250OiAxMnB4IHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDEwcHggMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxucCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5oNCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vKiAtLS0gQnV0dG9ucyAtLS0gKi9cXG4uYnRuLXN0YW5kYWxvbmUgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDQwcHg7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYnRuLXN0YW5kYWxvbmUgYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMThhMGZiO1xcbn1cXG4jY3JlYXRlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDBhOWUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlYXRlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi8qIC0tLSBJbnB1dCAtLS0gKi9cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDc1JTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMThhMGZiO1xcbn1cXG5cXG4vKiAtLS0gR3JpZCAtLS0gKi9cXG4ucm93IHtcXG4gIHBhZGRpbmc6IDJweCAzcHg7XFxufVxcbi5jb2x1bW4ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb2x1bW4gLnplcm8tcGFkZGluZyB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcbi5oYWxmIHtcXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG59XFxuLnR3by10aGlyZHMge1xcbiAgd2lkdGg6IDY2LjclICFpbXBvcnRhbnQ7XFxufVxcbi50aGlyZCB7XFxuICB3aWR0aDogMzMuMyUgIWltcG9ydGFudDtcXG59XFxuLm9uZS1zaXh0aCB7XFxuICB3aWR0aDogMTYuNyUgIWltcG9ydGFudDtcXG59XFxuLnRocmVlLWZvdXJ0aHMge1xcbiAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xcbn1cXG4ucXVhcnRlciB7XFxuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XFxufVxcbi5sYWJlbCB7XFxuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XFxufVxcbi5pbnB1dC1jb2x1bW4ge1xcbiAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xcbn1cXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cXG4ucm93OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLyogLS0tIENoZWNrYm94IC0tLSAqL1xcbi8qIFRoZSBjb250YWluZXIgKi9cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDNweCAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4uY29udGFpbmVyIGlucHV0IHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2dnbGUtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlLWRpc3BsYXkuaXMtdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBSYWRpbyBCdXR0b24gLS0tICovXFxuLyogQmFzZWQgb24gQ29kZXBlbiBieSBTYWwgKi9cXG4ub3B0aW9ucy1yYWRpby1idXR0b25zLXdyYXBwZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtOTk5OWVtO1xcbiAgdG9wOiAtOTk5OWVtO1xcbn1cXG4ub3B0aW9ucy1yYWRpby1idXR0b24gKyBsYWJlbCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyODYwOGY7XFxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE5ZTA7XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMC43ZW0gMCAwIDAuN2VtO1xcbn1cXG4ub3B0aW9ucy1yYWRpby1idXR0b24gKyBsYWJlbDpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwLjdlbSAwLjdlbSAwO1xcbn1cXG4ub3B0aW9ucy1yYWRpby1idXR0b246Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Yjg2YjQ7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgXCIuL3VpLmNzc1wiO1xuaW1wb3J0ICogYXMgRmlnbWEgZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbi8qIFN0YXRlIENoYW5nZXMgVmFyaWFibGUgKi9cbmxldCBpc1NoaWZ0SGVsZCA9IGZhbHNlO1xuLyogUnVuIGFmdGVyIG9uTG9hZCAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuc2VsZWN0KCk7XG59KTtcbi8qIFRvZ2dsZSBIVE1MIFJlbmRlcmluZyAqL1xuZnVuY3Rpb24gdG9nZ2xlRWRpdGFibGUoaHRtbFRhZ0lkLCBpc1ByZXJlcXVpc2l0ZVNlbGVjdGVkLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCBodG1sVGFnQnlJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxUYWdJZCk7XG4gICAgaWYgKGh0bWxUYWdCeUlkLmNoZWNrZWQpIHtcbiAgICAgICAgaHRtbFRhZ0J5SWQuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNQcmVyZXF1aXNpdGVTZWxlY3RlZCkge1xuICAgICAgICBodG1sVGFnQnlJZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBodG1sVGFnQnlJZC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGh0bWxUYWdCeUlkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgaHRtbFRhZ0J5SWQudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8vIERldGVjdCByYWRpbyBidXR0b25zIHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC10YWJsZS1zaXplXCIpXG4gICAgICAgIC5jaGVja2VkKSB7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uV2lkdGhcIiwgZmFsc2UsIFwiMTAwXCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInJvd0hlaWdodFwiLCBmYWxzZSwgXCIzMFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZVdpZHRoXCIsIHRydWUsIFwiMTAyNFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJ0YWJsZUhlaWdodFwiLCB0cnVlLCBcIjc2OFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5zXCIsIHRydWUsIFwiNVwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dzXCIsIHRydWUsIFwiOFwiKTtcbiAgICB9XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiKS5jaGVja2VkKSB7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uV2lkdGhcIiwgdHJ1ZSwgXCIxMDBcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwicm93SGVpZ2h0XCIsIHRydWUsIFwiMzBcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwidGFibGVXaWR0aFwiLCBmYWxzZSwgXCIxMDI0XCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInRhYmxlSGVpZ2h0XCIsIGZhbHNlLCBcIjc2OFwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJjb2x1bW5zXCIsIHRydWUsIFwiNVwiKTtcbiAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJyb3dzXCIsIHRydWUsIFwiOFwiKTtcbiAgICB9XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsLWFuZC10YWJsZS1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiKS5jaGVja2VkKSB7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uV2lkdGhcIiwgdHJ1ZSwgXCIxMDBcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwicm93SGVpZ2h0XCIsIHRydWUsIFwiMzBcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwidGFibGVXaWR0aFwiLCB0cnVlLCBcIjEwMjRcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwidGFibGVIZWlnaHRcIiwgdHJ1ZSwgXCI3NjhcIik7XG4gICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiY29sdW1uc1wiLCBmYWxzZSwgXCI1XCIpO1xuICAgICAgICB0b2dnbGVFZGl0YWJsZShcInJvd3NcIiwgZmFsc2UsIFwiOFwiKTtcbiAgICB9XG59O1xuLy8gRGV0ZWN0IGhlYWRlciBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuY2hlY2tlZCwgXCJcIik7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJoZWFkZXJIZWlnaHRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikuY2hlY2tlZCwgXCI2MFwiKTtcbiAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIikuY2hlY2tlZCwgXCJcIik7XG59O1xuLy8gRGV0ZWN0IGZsb2F0aW5nIGZpbHRlciBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb2F0aW5nRmlsdGVyXCIpLmNoZWNrZWQsIFwiMzBcIik7XG59O1xuLy8gRGV0ZWN0IHN0cmlwZWQvYWx0ZXJuYXRlIGJhY2tncm91bmQgY2hlY2tib3ggc3RhdGUgY2hhbmdlXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIHRvZ2dsZUVkaXRhYmxlKFwic3RyaXBlZEJhY2tncm91bmRDb2xvclwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpXG4gICAgICAgIC5jaGVja2VkLCBcIiNGRkZGRkZcIik7XG59O1xuLy8gRGV0ZWN0IGJvcmRlcnMgY2hlY2tib3ggc3RhdGUgY2hhbmdlXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvcmRlcnNcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJib3JkZXJDb2xvclwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvcmRlcnNcIikuY2hlY2tlZCwgXCIjQzdDN0M3XCIpO1xufTtcbi8qIEtleWJvYXJkIE5hdmlnYXRpb24gKi9cbmRvY3VtZW50Lm9ua2V5ZG93biA9IGtleURvd24gPT4ge1xuICAgIGxldCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoa2V5RG93bi5rZXkgPT09IFwiU2hpZnRcIikge1xuICAgICAgICBpc1NoaWZ0SGVsZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5Lm1hdGNoKC9BcnJvd1xcdysvZykpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGFjdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzU2hpZnRIZWxkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5RG93bi5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5RG93bi5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiY2FuY2VsXCIgJiYgaXNTaGlmdEhlbGQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIGtleURvd24ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImNvbHVtbnNcIiAmJiBpc1NoaWZ0SGVsZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIikuZm9jdXMoKTtcbiAgICAgICAgICAgIGtleURvd24ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5jaGVja2VkID0gIWFjdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImhlYWRlclwiKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlclwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiaGVhZGVySGVpZ2h0XCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCI2MFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiZmxvYXRpbmdGaWx0ZXJcIikge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIjMwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJhbHRlcm5hdGVCYWNrZ3JvdW5kc1wiKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJzdHJpcGVkQmFja2dyb3VuZENvbG9yXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCIjRkZGRkZGXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJib3JkZXJzXCIpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImJvcmRlckNvbG9yXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCIjQzdDN0M3XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmRvY3VtZW50Lm9ua2V5dXAgPSBrZXlVcCA9PiB7XG4gICAgaWYgKGtleVVwLmtleSA9PT0gXCJTaGlmdFwiKSB7XG4gICAgICAgIGlzU2hpZnRIZWxkID0gZmFsc2U7XG4gICAgfVxufTtcbi8qIENyZWF0ZSBhbmQgQ2FuY2VsIEJ1dHRvbiBBY3Rpb25zICovXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBGaWdtYS5nZXRWYWx1ZShcImNvbHVtbnNcIiwgXCJudW1iZXJcIik7XG4gICAgY29uc3QgY29sdW1uV2lkdGggPSBGaWdtYS5nZXRWYWx1ZShcImNvbHVtbldpZHRoXCIsIFwibnVtYmVyXCIpO1xuICAgIGNvbnN0IHJvd3MgPSBGaWdtYS5nZXRWYWx1ZShcInJvd3NcIiwgXCJudW1iZXJcIik7XG4gICAgY29uc3Qgcm93SGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJyb3dIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgY29uc3QgYm9yZGVycyA9IEZpZ21hLmdldFZhbHVlKFwiYm9yZGVyc1wiLCBcImJvb2xlYW5cIik7XG4gICAgY29uc3QgYWx0ZXJuYXRlQmFja2dyb3VuZHMgPSBGaWdtYS5nZXRWYWx1ZShcImFsdGVybmF0ZUJhY2tncm91bmRzXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBGaWdtYS5nZXRWYWx1ZShcImhlYWRlclwiLCBcImJvb2xlYW5cIik7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJoZWFkZXJIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgY29uc3QgZmxvYXRpbmdGaWx0ZXIgPSBGaWdtYS5nZXRWYWx1ZShcImZsb2F0aW5nRmlsdGVyXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckhlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgY29uc3QgcHJpbWFyeWJhY2tncm91bmRDb2xvciA9IEZpZ21hLmdldFZhbHVlKFwicHJpbWFyeWJhY2tncm91bmRDb2xvclwiLCBcInN0cmluZ1wiKTtcbiAgICBjb25zdCBzdHJpcGVkYmFja2dyb3VuZENvbG9yID0gRmlnbWEuZ2V0VmFsdWUoXCJzdHJpcGVkYmFja2dyb3VuZENvbG9yXCIsIFwic3RyaW5nXCIpO1xuICAgIGNvbnN0IGJvcmRlckNvbG9yID0gRmlnbWEuZ2V0VmFsdWUoXCJib3JkZXJDb2xvclwiLCBcInN0cmluZ1wiKTtcbiAgICBjb25zdCByZWZlcmVuY2VDb29yZGluYXRlcyA9IHsgeDogMCwgeTogMCB9O1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY3JlYXRlLXRhYmxlXCIsXG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICAgICAgY29sdW1uV2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgICAgcm93czogcm93cyxcbiAgICAgICAgICAgIHJvd0hlaWdodDogcm93SGVpZ2h0LFxuICAgICAgICAgICAgYm9yZGVyczogYm9yZGVycyxcbiAgICAgICAgICAgIGFsdGVybmF0ZUJhY2tncm91bmRzOiBhbHRlcm5hdGVCYWNrZ3JvdW5kcyxcbiAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiBoZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICBmbG9hdGluZ0ZpbHRlcjogZmxvYXRpbmdGaWx0ZXIsXG4gICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckhlaWdodDogZmxvYXRpbmdGaWx0ZXJIZWlnaHQsXG4gICAgICAgICAgICBwcmltYXJ5YmFja2dyb3VuZENvbG9yOiBwcmltYXJ5YmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgc3RyaXBlZGJhY2tncm91bmRDb2xvcjogc3RyaXBlZGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzOiByZWZlcmVuY2VDb29yZGluYXRlc1xuICAgICAgICB9XG4gICAgfSwgXCIqXCIpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiBcImNhbmNlbFwiIH0gfSwgXCIqXCIpO1xufTtcbiIsIi8qIEZpZ21hIEFQSSBGdW5jdGlvbiBBYnN0cmFjdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXMobm9kZXMsIHBhcmVudCkge1xuICAgIHJldHVybiBmaWdtYS5ncm91cChub2RlcywgcGFyZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZSgpLnNlbGVjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24obm9kZSkge1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGU7XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpIHtcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKiBDbG9uZSBmdW5jdGlvbiB0YWtlbiBmcm9tIEZpZ21hIFBsdWdpbiBBUEkgZXhhbXBsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgIHR5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lKHgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBcInVua25vd25cIjtcbn1cbi8qIEhFWCB0byBSR0IgQ29udmVyc2lvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xufVxuLyogRXh0cmFjdCBJbnB1dHMgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShodG1sVGFnSWQsIGlucHV0VHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbFRhZ0lkKTtcbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==