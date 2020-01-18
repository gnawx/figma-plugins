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
exports.push([module.i, "body {\n  font: 12px sans-serif;\n  margin: 10px 15px;\n  text-align: center;\n}\np {\n  margin: 0px;\n  padding: 5px 0px;\n  text-align: left;\n}\n\nh4 {\n  margin: 0px;\n  padding: 5px 0px;\n  text-align: left;\n}\n\n/* --- Buttons --- */\n.btn-standalone button {\n  cursor: pointer;\n  border-radius: 5px;\n  background: white;\n  color: black;\n  border: none;\n  padding: 8px 100px;\n  margin: 5px 0px;\n  box-shadow: inset 0 0 0 1px black;\n  outline: none;\n}\n.btn-standalone button:focus {\n  box-shadow: inset 0 0 0 2px #18a0fb;\n}\n.btn-standalone button:disabled {\n  color: #bebebe;\n  box-shadow: inset 0 0 0 1px #bebebe;\n}\n\n/* --- Input --- */\ninput[type=\"text\"] {\n  width: 75%;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  padding: 5px;\n  text-align: left;\n  font-size: 12px;\n  float: left;\n}\ninput[type=\"checkbox\"] {\n  width: 100%;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  padding: 5px;\n  text-align: left;\n}\ninput[type=\"text\"]:hover {\n  box-shadow: inset 0 0 0 1px #f2f2f2;\n}\ninput:focus {\n  border-radius: 3px;\n  box-shadow: inset 0 0 0 2px #18a0fb;\n}\ninput:focus::selection {\n  background: #b9e2fe;\n}\ninput::selection {\n  background: #c8c8c8;\n}\ninput:disabled {\n  color: #bebebe;\n}\n.invalid {\n  box-shadow: inset 0 0 0 1px #ef5533;\n}\n\n/* --- Grid --- */\n.row {\n  padding: 2px 3px;\n}\n.column {\n  float: left;\n  vertical-align: middle;\n  width: 100%;\n}\n.column .zero-padding {\n  padding: 0 !important;\n}\n.half {\n  width: 50% !important;\n}\n.two-thirds {\n  width: 66.7% !important;\n}\n.third {\n  width: 33.3% !important;\n}\n.one-sixth {\n  width: 16.7% !important;\n}\n.three-fourths {\n  width: 75% !important;\n}\n.quarter {\n  width: 25% !important;\n}\n.label {\n  width: 65% !important;\n}\n.input-column {\n  width: 35% !important;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* --- Checkbox --- */\n/* The container */\n.container {\n  padding: 3px 0px;\n  display: block;\n  position: relative;\n  cursor: pointer;\n  width: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Hide the browser's default checkbox */\n.container input {\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n}\n.toggle-display {\n  display: none;\n}\n\n.toggle-display.is-visible {\n  display: block;\n}\n\n/* --- Custom Radio Button --- */\n/* Based on Codepen by Sal */\n.options-radio-buttons-wrapper {\n  clear: both;\n  display: flex;\n}\n.options-radio-button {\n  position: absolute;\n  left: -9999em;\n  top: -9999em;\n}\n.options-radio-button + label {\n  width: 33.3%;\n  float: left;\n  padding: 0.5em 1em;\n  cursor: pointer;\n  border: 0px;\n  color: #bebebe;\n  font-weight: 300;\n  margin-right: -1px;\n}\n.options-radio-button + label:first-of-type {\n  border-radius: 0.7em 0 0 0.7em;\n}\n.options-radio-button + label:last-of-type {\n  border-radius: 0 0.7em 0.7em 0;\n}\n.options-radio-button:hover + label {\n  color: #000000;\n  font-weight: 300;\n}\n.options-radio-button:checked + label {\n  color: #000000;\n  font-weight: 550;\n}\n\n/* --- Animated Loader --- */\n/* Based on loading.io */\n.lds-container {\n  position: fixed; /* Sit on top of the page content */\n  display: none; /* Hidden by default */\n  width: 100%; /* Full width (cover the whole page) */\n  height: 100%; /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */\n  z-index: 100 !important; /* Specify a stack order in case you're using a different order for other elements */\n}\n.lds-container.is-visible {\n  display: block;\n}\n.lds-dual-ring {\n  display: inline-block;\n  padding: 200px 0px;\n  width: 80px;\n  height: 80px;\n}\n.lds-dual-ring:after {\n  content: \" \";\n  display: block;\n  width: 30px;\n  height: 30px;\n  margin: 21px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  animation: lds-dual-ring 1.2s linear infinite;\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
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


/* Constants */
const defaultInputsForModes = {
    "count-and-table-size": ["tableWidth", "tableHeight", "columns", "rows"],
    "count-and-cell-size": ["columnWidth", "rowHeight", "columns", "rows"],
    "cell-and-table-size": [
        "tableWidth",
        "tableHeight",
        "columnWidth",
        "rowHeight"
    ]
};
const defaultValuesForInputs = {
    tableWidth: "1024",
    tableHeight: "768",
    columnWidth: "100",
    rowHeight: "30",
    columns: "5",
    rows: "8"
};
/* State Changes Variable */
let isShiftHeld = false;
let isAltHeld = false;
/* Run after onLoad */
window.addEventListener("load", function () {
    document.getElementById("tableWidth").select();
});
/* Toggle HTML Rendering */
function toggleEditable(htmlTagId, isPrerequisiteSelected, defaultValue) {
    const htmlTagById = getHTMLInputElementById(htmlTagId);
    if (htmlTagById.checked) {
        htmlTagById.checked = false;
    }
    if (isPrerequisiteSelected) {
        htmlTagById.disabled = false;
        htmlTagById.value = defaultValue;
    }
    else {
        htmlTagById.disabled = true;
        htmlTagById.value = "N.A.";
    }
    return null;
}
/* Select HTML Elements */
// Generic HTML Element
function getHTMLElementById(htmlElement) {
    return document.getElementById(htmlElement);
}
// HTML Input Element
function getHTMLInputElementById(htmlElement) {
    return document.getElementById(htmlElement);
}
/* Reset Invalid CSS */
function resetInvalidInput() {
    const inputList = Object.keys(defaultValuesForInputs);
    for (let input of inputList) {
        getHTMLElementById(input).classList.remove("invalid");
    }
}
/* Set Invalid CSS by List */
function setInvalidInputs(mode) {
    const inputList = defaultInputsForModes[mode];
    for (let input of inputList) {
        document.getElementById(input).classList.add("invalid");
    }
}
/* Toggle HTML Rendering */
function setDefault(mode) {
    const inputList = Object.keys(defaultValuesForInputs);
    for (let input of inputList) {
        if (defaultInputsForModes[mode].indexOf(input) > -1) {
            toggleEditable(input, true, defaultValuesForInputs[input]);
        }
        else {
            toggleEditable(input, false, defaultValuesForInputs[input]);
        }
    }
}
/* Validate User Input */
function validateUserInput(mode, columns, rows, columnWidth, rowHeight) {
    let validInput = true;
    // reset invalid CSS
    resetInvalidInput();
    // negative value check
    switch (mode) {
        case "count-and-table-size":
            if (!columns || columns < 0) {
                getHTMLInputElementById("columns").classList.add("invalid");
                validInput = false;
            }
            if (!rows || rows < 0) {
                getHTMLInputElementById("rows").classList.add("invalid");
                validInput = false;
            }
            if (!columnWidth || columnWidth < 0) {
                getHTMLInputElementById("columnWidth").classList.add("invalid");
                validInput = false;
            }
            if (!rowHeight || rowHeight < 0) {
                getHTMLInputElementById("rowHeight").classList.add("invalid");
                validInput = false;
            }
            getHTMLInputElementById("tableWidth").select();
            break;
        case "count-and-cell-size":
            if (!columns || columns <= 0) {
                getHTMLInputElementById("columns").classList.add("invalid");
                validInput = false;
            }
            if (!rows || rows <= 0) {
                getHTMLInputElementById("rows").classList.add("invalid");
                validInput = false;
            }
            if (!columnWidth || columnWidth <= 0) {
                getHTMLInputElementById("tableWidth").classList.add("invalid");
                validInput = false;
            }
            if (!rowHeight || rowHeight <= 0) {
                getHTMLInputElementById("tableHeight").classList.add("invalid");
                validInput = false;
            }
            getHTMLInputElementById("columns").select();
            break;
        case "cell-and-table-size":
            if (!columns || columns <= 0 || (columns > 0 && columnWidth <= 0)) {
                getHTMLInputElementById("tableWidth").classList.add("invalid");
                validInput = false;
            }
            if (!rows || rows <= 0 || (rows > 0 && rowHeight <= 0)) {
                getHTMLInputElementById("tableHeight").classList.add("invalid");
                validInput = false;
            }
            if (!columnWidth || columnWidth <= 0) {
                getHTMLInputElementById("columnWidth").classList.add("invalid");
                validInput = false;
            }
            if (!rowHeight || rowHeight <= 0) {
                getHTMLInputElementById("rowHeight").classList.add("invalid");
                validInput = false;
            }
            getHTMLInputElementById("tableWidth").select();
            break;
    }
    // limit check
    if (validInput) {
        if (columns * columnWidth > 5000 ||
            rows * rowHeight > 5000 ||
            columns > 100 ||
            rows > 100) {
            setInvalidInputs(mode);
            switch (mode) {
                case "count-and-table-size":
                    document.getElementById("tableWidth").select();
                    break;
                case "count-and-cell-size":
                    document.getElementById("columns").select();
                    break;
                case "cell-and-table-size":
                    document.getElementById("tableWidth").select();
                    break;
            }
            validInput = false;
        }
    }
    return validInput;
}
// Detect radio buttons state change
document.getElementById("count-and-table-size").onclick = () => {
    if (document.getElementById("count-and-table-size")
        .checked) {
        setDefault("count-and-table-size");
    }
};
document.getElementById("count-and-cell-size").onclick = () => {
    if (document.getElementById("count-and-cell-size").checked) {
        setDefault("count-and-cell-size");
    }
};
document.getElementById("cell-and-table-size").onclick = () => {
    if (document.getElementById("cell-and-table-size").checked) {
        setDefault("cell-and-table-size");
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
    toggleEditable("stripedbackgroundColor", document.getElementById("alternateBackgrounds")
        .checked, "#FFFFFF");
};
// Detect borders checkbox state change
document.getElementById("borders").onchange = () => {
    toggleEditable("borderColor", document.getElementById("borders").checked, "#C7C7C7");
};
// Detect inputs state change
document.getElementById("columns").onchange = () => {
    document.getElementById("columns").classList.remove("invalid");
};
document.getElementById("rows").onchange = () => {
    document.getElementById("rows").classList.remove("invalid");
};
document.getElementById("tableWidth").onchange = () => {
    document.getElementById("tableWidth").classList.remove("invalid");
};
document.getElementById("tableHeight").onchange = () => {
    document.getElementById("tableHeight").classList.remove("invalid");
};
document.getElementById("columnWidth").onchange = () => {
    document.getElementById("columnWidth").classList.remove("invalid");
};
document.getElementById("rowHeight").onchange = () => {
    document.getElementById("rowHeight").classList.remove("invalid");
};
/* Keyboard Navigation */
document.onkeydown = keyDown => {
    let activeElement = document.activeElement;
    if (keyDown.key === "Shift") {
        isShiftHeld = true;
    }
    else if (keyDown.key === "Alt") {
        isAltHeld = true;
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
        // Selected Mode
        const mode = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-table-size", "boolean")
            ? "count-and-table-size"
            : _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-cell-size", "boolean")
                ? "count-and-cell-size"
                : "cell-and-table-size";
        if (activeElement.id === "create" && isShiftHeld === false) {
            switch (mode) {
                case "count-and-table-size":
                    document.getElementById("tableWidth").select();
                    break;
                case "count-and-cell-size":
                    document.getElementById("columns").select();
                    break;
                case "cell-and-table-size":
                    document.getElementById("tableWidth").select();
                    break;
            }
            keyDown.preventDefault();
        }
        else if (mode === "count-and-cell-size" &&
            activeElement.id === "columns" &&
            isShiftHeld === true) {
            document.getElementById("create").focus();
            keyDown.preventDefault();
        }
        else if (activeElement.id === "tableWidth" && isShiftHeld === true) {
            document.getElementById("create").focus();
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
                toggleEditable("stripedbackgroundColor", activeElement.checked, "#FFFFFF");
            }
            else if (activeElement.id === "borders") {
                toggleEditable("borderColor", activeElement.checked, "#C7C7C7");
            }
        }
    }
    else if (keyDown.key === "1" ||
        keyDown.key === "2" ||
        keyDown.key === "3") {
        if (isAltHeld) {
            switch (keyDown.key) {
                case "1":
                    document.getElementById("cell-and-table-size").checked = true;
                    setDefault("cell-and-table-size");
                    keyDown.preventDefault();
                    break;
                case "2":
                    document.getElementById("count-and-cell-size").checked = true;
                    setDefault("count-and-cell-size");
                    keyDown.preventDefault();
                    break;
                case "3":
                    document.getElementById("count-and-table-size").checked = true;
                    setDefault("count-and-table-size");
                    keyDown.preventDefault();
                    break;
            }
        }
    }
};
document.onkeyup = keyUp => {
    if (keyUp.key === "Shift") {
        isShiftHeld = false;
    }
    else if (keyUp.key === "Alt") {
        isAltHeld = false;
    }
};
/* Process Input */
function processInputToMessage(isLoading) {
    // Selected Mode
    const mode = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-table-size", "boolean")
        ? "count-and-table-size"
        : _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("count-and-cell-size", "boolean")
            ? "count-and-cell-size"
            : "cell-and-table-size";
    // Header Info
    const header = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("header", "boolean");
    const headerHeight = header ? _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("headerHeight", "number") : 0;
    const floatingFilter = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("floatingFilter", "boolean");
    const floatingFilterHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("floatingFilterHeight", "number");
    // Properties and Customisations
    const borders = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("borders", "boolean");
    const alternateBackgrounds = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("alternateBackgrounds", "boolean");
    const primarybackgroundColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("primarybackgroundColor", "string");
    const stripedbackgroundColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("stripedbackgroundColor", "string");
    const borderColor = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("borderColor", "string");
    // Constraints Processing
    let columns = 0;
    let columnWidth = 0;
    let rows = 0;
    let rowHeight = 0;
    let referenceCoordinates = { x: 0, y: 0 };
    switch (mode) {
        case "count-and-table-size":
            columns = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columns", "number");
            rows = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rows", "number");
            columnWidth =
                _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableWidth", "number") / columns;
            rowHeight =
                (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableHeight", "number") -
                    headerHeight) /
                    rows;
            break;
        case "count-and-cell-size":
            columns = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columns", "number");
            rows = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rows", "number");
            columnWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columnWidth", "number");
            rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rowHeight", "number");
            break;
        case "cell-and-table-size":
            const tableWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableWidth", "number");
            const tableHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("tableHeight", "number");
            columnWidth = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("columnWidth", "number");
            rowHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["getValue"]("rowHeight", "number");
            columns = Math.floor(tableWidth / columnWidth);
            rows = Math.floor((tableHeight - headerHeight) / rowHeight + 1);
            referenceCoordinates.y = tableHeight % rowHeight;
            break;
    }
    // Validation
    const validWithinLimits = validateUserInput(mode, columns, rows, columnWidth, rowHeight);
    if (validWithinLimits) {
        setTimeout(() => {
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
        }, 100);
    }
    else {
        // Enable create button and hide loader
        document.getElementById("create").disabled = false;
        document.getElementById("lds").classList.remove("is-visible");
    }
}
/* Create Button Actions */
document.getElementById("create").onclick = () => {
    // Disable create button and display loader
    document.getElementById("create").disabled = true;
    document.getElementById("lds").classList.add("is-visible");
    // FIXME ensures that button is disabled and loader is displayed before processing input
    processInputToMessage(document.getElementById("create").disabled);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDBCQUEwQixz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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBYztBQUNuQztBQUNBLGNBQWMscURBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBYztBQUMvQjtBQUNBLFVBQVUscURBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFjO0FBQ2pDLGtDQUFrQyxxREFBYztBQUNoRCwyQkFBMkIscURBQWM7QUFDekMsaUNBQWlDLHFEQUFjO0FBQy9DO0FBQ0Esb0JBQW9CLHFEQUFjO0FBQ2xDLGlDQUFpQyxxREFBYztBQUMvQyxtQ0FBbUMscURBQWM7QUFDakQsbUNBQW1DLHFEQUFjO0FBQ2pELHdCQUF3QixxREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxzQkFBc0IscURBQWM7QUFDcEMsbUJBQW1CLHFEQUFjO0FBQ2pDO0FBQ0EsZ0JBQWdCLHFEQUFjO0FBQzlCO0FBQ0EsaUJBQWlCLHFEQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFjO0FBQ3BDLG1CQUFtQixxREFBYztBQUNqQywwQkFBMEIscURBQWM7QUFDeEMsd0JBQXdCLHFEQUFjO0FBQ3RDO0FBQ0E7QUFDQSwrQkFBK0IscURBQWM7QUFDN0MsZ0NBQWdDLHFEQUFjO0FBQzlDLDBCQUEwQixxREFBYztBQUN4Qyx3QkFBd0IscURBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3YUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMTBweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5wIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmg0IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIC0tLSBCdXR0b25zIC0tLSAqL1xcbi5idG4tc3RhbmRhbG9uZSBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTAwcHg7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYnRuLXN0YW5kYWxvbmUgYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMThhMGZiO1xcbn1cXG4uYnRuLXN0YW5kYWxvbmUgYnV0dG9uOmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNiZWJlYmU7XFxufVxcblxcbi8qIC0tLSBJbnB1dCAtLS0gKi9cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDc1JTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZjJmMmYyO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzE4YTBmYjtcXG59XFxuaW5wdXQ6Zm9jdXM6OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjllMmZlO1xcbn1cXG5pbnB1dDo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNjOGM4Yzg7XFxufVxcbmlucHV0OmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbn1cXG4uaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2VmNTUzMztcXG59XFxuXFxuLyogLS0tIEdyaWQgLS0tICovXFxuLnJvdyB7XFxuICBwYWRkaW5nOiAycHggM3B4O1xcbn1cXG4uY29sdW1uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29sdW1uIC56ZXJvLXBhZGRpbmcge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbn1cXG4uaGFsZiB7XFxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XFxufVxcbi50d28tdGhpcmRzIHtcXG4gIHdpZHRoOiA2Ni43JSAhaW1wb3J0YW50O1xcbn1cXG4udGhpcmQge1xcbiAgd2lkdGg6IDMzLjMlICFpbXBvcnRhbnQ7XFxufVxcbi5vbmUtc2l4dGgge1xcbiAgd2lkdGg6IDE2LjclICFpbXBvcnRhbnQ7XFxufVxcbi50aHJlZS1mb3VydGhzIHtcXG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcXG59XFxuLnF1YXJ0ZXIge1xcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xcbn1cXG4ubGFiZWwge1xcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xcbn1cXG4uaW5wdXQtY29sdW1uIHtcXG4gIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcXG59XFxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXFxuLnJvdzphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi8qIC0tLSBDaGVja2JveCAtLS0gKi9cXG4vKiBUaGUgY29udGFpbmVyICovXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzcHggMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTVweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLmNvbnRhaW5lciBpbnB1dCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9nZ2xlLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1kaXNwbGF5LmlzLXZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIC0tLSBDdXN0b20gUmFkaW8gQnV0dG9uIC0tLSAqL1xcbi8qIEJhc2VkIG9uIENvZGVwZW4gYnkgU2FsICovXFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9ucy13cmFwcGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC05OTk5ZW07XFxuICB0b3A6IC05OTk5ZW07XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsIHtcXG4gIHdpZHRoOiAzMy4zJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogI2JlYmViZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMC43ZW0gMCAwIDAuN2VtO1xcbn1cXG4ub3B0aW9ucy1yYWRpby1idXR0b24gKyBsYWJlbDpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwLjdlbSAwLjdlbSAwO1xcbn1cXG4ub3B0aW9ucy1yYWRpby1idXR0b246aG92ZXIgKyBsYWJlbCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbjpjaGVja2VkICsgbGFiZWwge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXdlaWdodDogNTUwO1xcbn1cXG5cXG4vKiAtLS0gQW5pbWF0ZWQgTG9hZGVyIC0tLSAqL1xcbi8qIEJhc2VkIG9uIGxvYWRpbmcuaW8gKi9cXG4ubGRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xcbiAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cXG59XFxuLmxkcy1jb250YWluZXIuaXMtdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmxkcy1kdWFsLXJpbmcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMjAwcHggMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbi5sZHMtZHVhbC1yaW5nOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDIxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQ7XFxuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbkBrZXlmcmFtZXMgbGRzLWR1YWwtcmluZyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgXCIuL3VpLmNzc1wiO1xuaW1wb3J0ICogYXMgRmlnbWEgZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbi8qIENvbnN0YW50cyAqL1xuY29uc3QgZGVmYXVsdElucHV0c0Zvck1vZGVzID0ge1xuICAgIFwiY291bnQtYW5kLXRhYmxlLXNpemVcIjogW1widGFibGVXaWR0aFwiLCBcInRhYmxlSGVpZ2h0XCIsIFwiY29sdW1uc1wiLCBcInJvd3NcIl0sXG4gICAgXCJjb3VudC1hbmQtY2VsbC1zaXplXCI6IFtcImNvbHVtbldpZHRoXCIsIFwicm93SGVpZ2h0XCIsIFwiY29sdW1uc1wiLCBcInJvd3NcIl0sXG4gICAgXCJjZWxsLWFuZC10YWJsZS1zaXplXCI6IFtcbiAgICAgICAgXCJ0YWJsZVdpZHRoXCIsXG4gICAgICAgIFwidGFibGVIZWlnaHRcIixcbiAgICAgICAgXCJjb2x1bW5XaWR0aFwiLFxuICAgICAgICBcInJvd0hlaWdodFwiXG4gICAgXVxufTtcbmNvbnN0IGRlZmF1bHRWYWx1ZXNGb3JJbnB1dHMgPSB7XG4gICAgdGFibGVXaWR0aDogXCIxMDI0XCIsXG4gICAgdGFibGVIZWlnaHQ6IFwiNzY4XCIsXG4gICAgY29sdW1uV2lkdGg6IFwiMTAwXCIsXG4gICAgcm93SGVpZ2h0OiBcIjMwXCIsXG4gICAgY29sdW1uczogXCI1XCIsXG4gICAgcm93czogXCI4XCJcbn07XG4vKiBTdGF0ZSBDaGFuZ2VzIFZhcmlhYmxlICovXG5sZXQgaXNTaGlmdEhlbGQgPSBmYWxzZTtcbmxldCBpc0FsdEhlbGQgPSBmYWxzZTtcbi8qIFJ1biBhZnRlciBvbkxvYWQgKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLnNlbGVjdCgpO1xufSk7XG4vKiBUb2dnbGUgSFRNTCBSZW5kZXJpbmcgKi9cbmZ1bmN0aW9uIHRvZ2dsZUVkaXRhYmxlKGh0bWxUYWdJZCwgaXNQcmVyZXF1aXNpdGVTZWxlY3RlZCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgY29uc3QgaHRtbFRhZ0J5SWQgPSBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChodG1sVGFnSWQpO1xuICAgIGlmIChodG1sVGFnQnlJZC5jaGVja2VkKSB7XG4gICAgICAgIGh0bWxUYWdCeUlkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzUHJlcmVxdWlzaXRlU2VsZWN0ZWQpIHtcbiAgICAgICAgaHRtbFRhZ0J5SWQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaHRtbFRhZ0J5SWQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBodG1sVGFnQnlJZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGh0bWxUYWdCeUlkLnZhbHVlID0gXCJOLkEuXCI7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLyogU2VsZWN0IEhUTUwgRWxlbWVudHMgKi9cbi8vIEdlbmVyaWMgSFRNTCBFbGVtZW50XG5mdW5jdGlvbiBnZXRIVE1MRWxlbWVudEJ5SWQoaHRtbEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbEVsZW1lbnQpO1xufVxuLy8gSFRNTCBJbnB1dCBFbGVtZW50XG5mdW5jdGlvbiBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChodG1sRWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sRWxlbWVudCk7XG59XG4vKiBSZXNldCBJbnZhbGlkIENTUyAqL1xuZnVuY3Rpb24gcmVzZXRJbnZhbGlkSW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXRMaXN0ID0gT2JqZWN0LmtleXMoZGVmYXVsdFZhbHVlc0ZvcklucHV0cyk7XG4gICAgZm9yIChsZXQgaW5wdXQgb2YgaW5wdXRMaXN0KSB7XG4gICAgICAgIGdldEhUTUxFbGVtZW50QnlJZChpbnB1dCkuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gICAgfVxufVxuLyogU2V0IEludmFsaWQgQ1NTIGJ5IExpc3QgKi9cbmZ1bmN0aW9uIHNldEludmFsaWRJbnB1dHMobW9kZSkge1xuICAgIGNvbnN0IGlucHV0TGlzdCA9IGRlZmF1bHRJbnB1dHNGb3JNb2Rlc1ttb2RlXTtcbiAgICBmb3IgKGxldCBpbnB1dCBvZiBpbnB1dExpc3QpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXQpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgIH1cbn1cbi8qIFRvZ2dsZSBIVE1MIFJlbmRlcmluZyAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdChtb2RlKSB7XG4gICAgY29uc3QgaW5wdXRMaXN0ID0gT2JqZWN0LmtleXMoZGVmYXVsdFZhbHVlc0ZvcklucHV0cyk7XG4gICAgZm9yIChsZXQgaW5wdXQgb2YgaW5wdXRMaXN0KSB7XG4gICAgICAgIGlmIChkZWZhdWx0SW5wdXRzRm9yTW9kZXNbbW9kZV0uaW5kZXhPZihpbnB1dCkgPiAtMSkge1xuICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoaW5wdXQsIHRydWUsIGRlZmF1bHRWYWx1ZXNGb3JJbnB1dHNbaW5wdXRdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKGlucHV0LCBmYWxzZSwgZGVmYXVsdFZhbHVlc0ZvcklucHV0c1tpbnB1dF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuLyogVmFsaWRhdGUgVXNlciBJbnB1dCAqL1xuZnVuY3Rpb24gdmFsaWRhdGVVc2VySW5wdXQobW9kZSwgY29sdW1ucywgcm93cywgY29sdW1uV2lkdGgsIHJvd0hlaWdodCkge1xuICAgIGxldCB2YWxpZElucHV0ID0gdHJ1ZTtcbiAgICAvLyByZXNldCBpbnZhbGlkIENTU1xuICAgIHJlc2V0SW52YWxpZElucHV0KCk7XG4gICAgLy8gbmVnYXRpdmUgdmFsdWUgY2hlY2tcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSBcImNvdW50LWFuZC10YWJsZS1zaXplXCI6XG4gICAgICAgICAgICBpZiAoIWNvbHVtbnMgfHwgY29sdW1ucyA8IDApIHtcbiAgICAgICAgICAgICAgICBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyb3dzIHx8IHJvd3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJyb3dzXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29sdW1uV2lkdGggfHwgY29sdW1uV2lkdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJjb2x1bW5XaWR0aFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJvd0hlaWdodCB8fCByb3dIZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJyb3dIZWlnaHRcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLnNlbGVjdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjb3VudC1hbmQtY2VsbC1zaXplXCI6XG4gICAgICAgICAgICBpZiAoIWNvbHVtbnMgfHwgY29sdW1ucyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcm93cyB8fCByb3dzIDw9IDApIHtcbiAgICAgICAgICAgICAgICBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChcInJvd3NcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb2x1bW5XaWR0aCB8fCBjb2x1bW5XaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcm93SGVpZ2h0IHx8IHJvd0hlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJ0YWJsZUhlaWdodFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuc2VsZWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjpcbiAgICAgICAgICAgIGlmICghY29sdW1ucyB8fCBjb2x1bW5zIDw9IDAgfHwgKGNvbHVtbnMgPiAwICYmIGNvbHVtbldpZHRoIDw9IDApKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcm93cyB8fCByb3dzIDw9IDAgfHwgKHJvd3MgPiAwICYmIHJvd0hlaWdodCA8PSAwKSkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwidGFibGVIZWlnaHRcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb2x1bW5XaWR0aCB8fCBjb2x1bW5XaWR0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJjb2x1bW5XaWR0aFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJvd0hlaWdodCB8fCByb3dIZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwicm93SGVpZ2h0XCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5zZWxlY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBsaW1pdCBjaGVja1xuICAgIGlmICh2YWxpZElucHV0KSB7XG4gICAgICAgIGlmIChjb2x1bW5zICogY29sdW1uV2lkdGggPiA1MDAwIHx8XG4gICAgICAgICAgICByb3dzICogcm93SGVpZ2h0ID4gNTAwMCB8fFxuICAgICAgICAgICAgY29sdW1ucyA+IDEwMCB8fFxuICAgICAgICAgICAgcm93cyA+IDEwMCkge1xuICAgICAgICAgICAgc2V0SW52YWxpZElucHV0cyhtb2RlKTtcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudC1hbmQtY2VsbC1zaXplXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsaWRJbnB1dDtcbn1cbi8vIERldGVjdCByYWRpbyBidXR0b25zIHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC10YWJsZS1zaXplXCIpXG4gICAgICAgIC5jaGVja2VkKSB7XG4gICAgICAgIHNldERlZmF1bHQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKTtcbiAgICB9XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiKS5jaGVja2VkKSB7XG4gICAgICAgIHNldERlZmF1bHQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpO1xuICAgIH1cbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtYW5kLXRhYmxlLXNpemVcIikub25jbGljayA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsLWFuZC10YWJsZS1zaXplXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgc2V0RGVmYXVsdChcImNlbGwtYW5kLXRhYmxlLXNpemVcIik7XG4gICAgfVxufTtcbi8vIERldGVjdCBoZWFkZXIgY2hlY2tib3ggc3RhdGUgY2hhbmdlXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVyXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmNoZWNrZWQsIFwiXCIpO1xuICAgIHRvZ2dsZUVkaXRhYmxlKFwiaGVhZGVySGVpZ2h0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpLmNoZWNrZWQsIFwiNjBcIik7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb2F0aW5nRmlsdGVyXCIpLmNoZWNrZWQsIFwiXCIpO1xufTtcbi8vIERldGVjdCBmbG9hdGluZyBmaWx0ZXIgY2hlY2tib3ggc3RhdGUgY2hhbmdlXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb2F0aW5nRmlsdGVyXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5jaGVja2VkLCBcIjMwXCIpO1xufTtcbi8vIERldGVjdCBzdHJpcGVkL2FsdGVybmF0ZSBiYWNrZ3JvdW5kIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHRlcm5hdGVCYWNrZ3JvdW5kc1wiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICB0b2dnbGVFZGl0YWJsZShcInN0cmlwZWRiYWNrZ3JvdW5kQ29sb3JcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHRlcm5hdGVCYWNrZ3JvdW5kc1wiKVxuICAgICAgICAuY2hlY2tlZCwgXCIjRkZGRkZGXCIpO1xufTtcbi8vIERldGVjdCBib3JkZXJzIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3JkZXJzXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIHRvZ2dsZUVkaXRhYmxlKFwiYm9yZGVyQ29sb3JcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3JkZXJzXCIpLmNoZWNrZWQsIFwiI0M3QzdDN1wiKTtcbn07XG4vLyBEZXRlY3QgaW5wdXRzIHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvd3NcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZUhlaWdodFwiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlSGVpZ2h0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uV2lkdGhcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5XaWR0aFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvd0hlaWdodFwiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvd0hlaWdodFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbn07XG4vKiBLZXlib2FyZCBOYXZpZ2F0aW9uICovXG5kb2N1bWVudC5vbmtleWRvd24gPSBrZXlEb3duID0+IHtcbiAgICBsZXQgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGtleURvd24ua2V5ID09PSBcIlNoaWZ0XCIpIHtcbiAgICAgICAgaXNTaGlmdEhlbGQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJBbHRcIikge1xuICAgICAgICBpc0FsdEhlbGQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXlEb3duLmtleS5tYXRjaCgvQXJyb3dcXHcrL2cpKSB7XG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50LnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChhY3RpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChpc1NoaWZ0SGVsZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleURvd24ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleURvd24ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgIC8vIFNlbGVjdGVkIE1vZGVcbiAgICAgICAgY29uc3QgbW9kZSA9IEZpZ21hLmdldFZhbHVlKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIiwgXCJib29sZWFuXCIpXG4gICAgICAgICAgICA/IFwiY291bnQtYW5kLXRhYmxlLXNpemVcIlxuICAgICAgICAgICAgOiBGaWdtYS5nZXRWYWx1ZShcImNvdW50LWFuZC1jZWxsLXNpemVcIiwgXCJib29sZWFuXCIpXG4gICAgICAgICAgICAgICAgPyBcImNvdW50LWFuZC1jZWxsLXNpemVcIlxuICAgICAgICAgICAgICAgIDogXCJjZWxsLWFuZC10YWJsZS1zaXplXCI7XG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImNyZWF0ZVwiICYmIGlzU2hpZnRIZWxkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvdW50LWFuZC10YWJsZS1zaXplXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvdW50LWFuZC1jZWxsLXNpemVcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiICYmXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmlkID09PSBcImNvbHVtbnNcIiAmJlxuICAgICAgICAgICAgaXNTaGlmdEhlbGQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICBrZXlEb3duLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJ0YWJsZVdpZHRoXCIgJiYgaXNTaGlmdEhlbGQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICBrZXlEb3duLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCA9ICFhY3RpdmVFbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJoZWFkZXJcIikge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImhlYWRlckhlaWdodFwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiNjBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImZsb2F0aW5nRmlsdGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCIzMFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIikge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwic3RyaXBlZGJhY2tncm91bmRDb2xvclwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiI0ZGRkZGRlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiYm9yZGVyc1wiKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJib3JkZXJDb2xvclwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiI0M3QzdDN1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCIxXCIgfHxcbiAgICAgICAga2V5RG93bi5rZXkgPT09IFwiMlwiIHx8XG4gICAgICAgIGtleURvd24ua2V5ID09PSBcIjNcIikge1xuICAgICAgICBpZiAoaXNBbHRIZWxkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleURvd24ua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsLWFuZC10YWJsZS1zaXplXCIpLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZXREZWZhdWx0KFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC1jZWxsLXNpemVcIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNldERlZmF1bHQoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICBrZXlEb3duLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNldERlZmF1bHQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5kb2N1bWVudC5vbmtleXVwID0ga2V5VXAgPT4ge1xuICAgIGlmIChrZXlVcC5rZXkgPT09IFwiU2hpZnRcIikge1xuICAgICAgICBpc1NoaWZ0SGVsZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXlVcC5rZXkgPT09IFwiQWx0XCIpIHtcbiAgICAgICAgaXNBbHRIZWxkID0gZmFsc2U7XG4gICAgfVxufTtcbi8qIFByb2Nlc3MgSW5wdXQgKi9cbmZ1bmN0aW9uIHByb2Nlc3NJbnB1dFRvTWVzc2FnZShpc0xvYWRpbmcpIHtcbiAgICAvLyBTZWxlY3RlZCBNb2RlXG4gICAgY29uc3QgbW9kZSA9IEZpZ21hLmdldFZhbHVlKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIiwgXCJib29sZWFuXCIpXG4gICAgICAgID8gXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiXG4gICAgICAgIDogRmlnbWEuZ2V0VmFsdWUoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIsIFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgPyBcImNvdW50LWFuZC1jZWxsLXNpemVcIlxuICAgICAgICAgICAgOiBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjtcbiAgICAvLyBIZWFkZXIgSW5mb1xuICAgIGNvbnN0IGhlYWRlciA9IEZpZ21hLmdldFZhbHVlKFwiaGVhZGVyXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXIgPyBGaWdtYS5nZXRWYWx1ZShcImhlYWRlckhlaWdodFwiLCBcIm51bWJlclwiKSA6IDA7XG4gICAgY29uc3QgZmxvYXRpbmdGaWx0ZXIgPSBGaWdtYS5nZXRWYWx1ZShcImZsb2F0aW5nRmlsdGVyXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBmbG9hdGluZ0ZpbHRlckhlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgLy8gUHJvcGVydGllcyBhbmQgQ3VzdG9taXNhdGlvbnNcbiAgICBjb25zdCBib3JkZXJzID0gRmlnbWEuZ2V0VmFsdWUoXCJib3JkZXJzXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBhbHRlcm5hdGVCYWNrZ3JvdW5kcyA9IEZpZ21hLmdldFZhbHVlKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIiwgXCJib29sZWFuXCIpO1xuICAgIGNvbnN0IHByaW1hcnliYWNrZ3JvdW5kQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcInByaW1hcnliYWNrZ3JvdW5kQ29sb3JcIiwgXCJzdHJpbmdcIik7XG4gICAgY29uc3Qgc3RyaXBlZGJhY2tncm91bmRDb2xvciA9IEZpZ21hLmdldFZhbHVlKFwic3RyaXBlZGJhY2tncm91bmRDb2xvclwiLCBcInN0cmluZ1wiKTtcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IEZpZ21hLmdldFZhbHVlKFwiYm9yZGVyQ29sb3JcIiwgXCJzdHJpbmdcIik7XG4gICAgLy8gQ29uc3RyYWludHMgUHJvY2Vzc2luZ1xuICAgIGxldCBjb2x1bW5zID0gMDtcbiAgICBsZXQgY29sdW1uV2lkdGggPSAwO1xuICAgIGxldCByb3dzID0gMDtcbiAgICBsZXQgcm93SGVpZ2h0ID0gMDtcbiAgICBsZXQgcmVmZXJlbmNlQ29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSBcImNvdW50LWFuZC10YWJsZS1zaXplXCI6XG4gICAgICAgICAgICBjb2x1bW5zID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5zXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgcm93cyA9IEZpZ21hLmdldFZhbHVlKFwicm93c1wiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID1cbiAgICAgICAgICAgICAgICBGaWdtYS5nZXRWYWx1ZShcInRhYmxlV2lkdGhcIiwgXCJudW1iZXJcIikgLyBjb2x1bW5zO1xuICAgICAgICAgICAgcm93SGVpZ2h0ID1cbiAgICAgICAgICAgICAgICAoRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZUhlaWdodFwiLCBcIm51bWJlclwiKSAtXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckhlaWdodCkgL1xuICAgICAgICAgICAgICAgICAgICByb3dzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjb3VudC1hbmQtY2VsbC1zaXplXCI6XG4gICAgICAgICAgICBjb2x1bW5zID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5zXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgcm93cyA9IEZpZ21hLmdldFZhbHVlKFwicm93c1wiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5XaWR0aFwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwicm93SGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjZWxsLWFuZC10YWJsZS1zaXplXCI6XG4gICAgICAgICAgICBjb25zdCB0YWJsZVdpZHRoID0gRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZVdpZHRoXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29uc3QgdGFibGVIZWlnaHQgPSBGaWdtYS5nZXRWYWx1ZShcInRhYmxlSGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29sdW1uV2lkdGggPSBGaWdtYS5nZXRWYWx1ZShcImNvbHVtbldpZHRoXCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgcm93SGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJyb3dIZWlnaHRcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb2x1bW5zID0gTWF0aC5mbG9vcih0YWJsZVdpZHRoIC8gY29sdW1uV2lkdGgpO1xuICAgICAgICAgICAgcm93cyA9IE1hdGguZmxvb3IoKHRhYmxlSGVpZ2h0IC0gaGVhZGVySGVpZ2h0KSAvIHJvd0hlaWdodCArIDEpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXMueSA9IHRhYmxlSGVpZ2h0ICUgcm93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFZhbGlkYXRpb25cbiAgICBjb25zdCB2YWxpZFdpdGhpbkxpbWl0cyA9IHZhbGlkYXRlVXNlcklucHV0KG1vZGUsIGNvbHVtbnMsIHJvd3MsIGNvbHVtbldpZHRoLCByb3dIZWlnaHQpO1xuICAgIGlmICh2YWxpZFdpdGhpbkxpbWl0cykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNyZWF0ZS10YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJvd0hlaWdodDogcm93SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJzOiBib3JkZXJzLFxuICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGVCYWNrZ3JvdW5kczogYWx0ZXJuYXRlQmFja2dyb3VuZHMsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQ6IGhlYWRlckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXI6IGZsb2F0aW5nRmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0ZpbHRlckhlaWdodDogZmxvYXRpbmdGaWx0ZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnliYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnliYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3I6IHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQ29vcmRpbmF0ZXM6IHJlZmVyZW5jZUNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgXCIqXCIpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gRW5hYmxlIGNyZWF0ZSBidXR0b24gYW5kIGhpZGUgbG9hZGVyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGRzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12aXNpYmxlXCIpO1xuICAgIH1cbn1cbi8qIENyZWF0ZSBCdXR0b24gQWN0aW9ucyAqL1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIikub25jbGljayA9ICgpID0+IHtcbiAgICAvLyBEaXNhYmxlIGNyZWF0ZSBidXR0b24gYW5kIGRpc3BsYXkgbG9hZGVyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIikuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGRzXCIpLmNsYXNzTGlzdC5hZGQoXCJpcy12aXNpYmxlXCIpO1xuICAgIC8vIEZJWE1FIGVuc3VyZXMgdGhhdCBidXR0b24gaXMgZGlzYWJsZWQgYW5kIGxvYWRlciBpcyBkaXNwbGF5ZWQgYmVmb3JlIHByb2Nlc3NpbmcgaW5wdXRcbiAgICBwcm9jZXNzSW5wdXRUb01lc3NhZ2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIikuZGlzYWJsZWQpO1xufTtcbiIsIi8qIEZpZ21hIEFQSSBGdW5jdGlvbiBBYnN0cmFjdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXMobm9kZXMsIHBhcmVudCkge1xuICAgIHJldHVybiBmaWdtYS5ncm91cChub2RlcywgcGFyZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uKCkge1xuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZSgpLnNlbGVjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24obm9kZSkge1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGU7XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpIHtcbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKiBDbG9uZSBmdW5jdGlvbiB0YWtlbiBmcm9tIEZpZ21hIFBsdWdpbiBBUEkgZXhhbXBsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwidW5kZWZpbmVkXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgIHR5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IGNsb25lKHgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBjbG9uZSh2YWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBcInVua25vd25cIjtcbn1cbi8qIEhFWCB0byBSR0IgQ29udmVyc2lvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xufVxuLyogRXh0cmFjdCBJbnB1dHMgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShodG1sVGFnSWQsIGlucHV0VHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHRtbFRhZ0lkKTtcbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==