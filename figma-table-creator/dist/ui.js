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
            switch (mode) {
                case "count-and-table-size":
                    document.getElementById("columns").classList.add("invalid");
                    document.getElementById("rows").classList.add("invalid");
                    document.getElementById("columnWidth").classList.add("invalid");
                    document.getElementById("rowHeight").classList.add("invalid");
                    document.getElementById("tableWidth").select();
                    break;
                case "count-and-cell-size":
                    document.getElementById("columns").classList.add("invalid");
                    document.getElementById("rows").classList.add("invalid");
                    document.getElementById("columnWidth").classList.add("invalid");
                    document.getElementById("rowHeight").classList.add("invalid");
                    document.getElementById("columns").select();
                    break;
                case "cell-and-table-size":
                    document.getElementById("tableWidth").classList.add("invalid");
                    document.getElementById("tableHeight").classList.add("invalid");
                    document.getElementById("columnWidth").classList.add("invalid");
                    document.getElementById("rowHeight").classList.add("invalid");
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
                    break;
                case "2":
                    document.getElementById("count-and-cell-size").checked = true;
                    setDefault("count-and-cell-size");
                    break;
                case "3":
                    document.getElementById("count-and-table-size").checked = true;
                    setDefault("count-and-table-size");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDBCQUEwQixz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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFjO0FBQ25DO0FBQ0EsY0FBYyxxREFBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFjO0FBQy9CO0FBQ0EsVUFBVSxxREFBYztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQWM7QUFDakMsa0NBQWtDLHFEQUFjO0FBQ2hELDJCQUEyQixxREFBYztBQUN6QyxpQ0FBaUMscURBQWM7QUFDL0M7QUFDQSxvQkFBb0IscURBQWM7QUFDbEMsaUNBQWlDLHFEQUFjO0FBQy9DLG1DQUFtQyxxREFBYztBQUNqRCxtQ0FBbUMscURBQWM7QUFDakQsd0JBQXdCLHFEQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLHNCQUFzQixxREFBYztBQUNwQyxtQkFBbUIscURBQWM7QUFDakM7QUFDQSxnQkFBZ0IscURBQWM7QUFDOUI7QUFDQSxpQkFBaUIscURBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQWM7QUFDcEMsbUJBQW1CLHFEQUFjO0FBQ2pDLDBCQUEwQixxREFBYztBQUN4Qyx3QkFBd0IscURBQWM7QUFDdEM7QUFDQTtBQUNBLCtCQUErQixxREFBYztBQUM3QyxnQ0FBZ0MscURBQWM7QUFDOUMsMEJBQTBCLHFEQUFjO0FBQ3hDLHdCQUF3QixxREFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4QixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnAge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogLS0tIEJ1dHRvbnMgLS0tICovXFxuLmJ0bi1zdGFuZGFsb25lIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCAxMDBweDtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCBibGFjaztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5idG4tc3RhbmRhbG9uZSBidXR0b246Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMxOGEwZmI7XFxufVxcbi5idG4tc3RhbmRhbG9uZSBidXR0b246ZGlzYWJsZWQge1xcbiAgY29sb3I6ICNiZWJlYmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2JlYmViZTtcXG59XFxuXFxuLyogLS0tIElucHV0IC0tLSAqL1xcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogNzUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmMmYyZjI7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMThhMGZiO1xcbn1cXG5pbnB1dDpmb2N1czo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiOWUyZmU7XFxufVxcbmlucHV0OjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2M4YzhjODtcXG59XFxuaW5wdXQ6ZGlzYWJsZWQge1xcbiAgY29sb3I6ICNiZWJlYmU7XFxufVxcbi5pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZWY1NTMzO1xcbn1cXG5cXG4vKiAtLS0gR3JpZCAtLS0gKi9cXG4ucm93IHtcXG4gIHBhZGRpbmc6IDJweCAzcHg7XFxufVxcbi5jb2x1bW4ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb2x1bW4gLnplcm8tcGFkZGluZyB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxufVxcbi5oYWxmIHtcXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcXG59XFxuLnR3by10aGlyZHMge1xcbiAgd2lkdGg6IDY2LjclICFpbXBvcnRhbnQ7XFxufVxcbi50aGlyZCB7XFxuICB3aWR0aDogMzMuMyUgIWltcG9ydGFudDtcXG59XFxuLm9uZS1zaXh0aCB7XFxuICB3aWR0aDogMTYuNyUgIWltcG9ydGFudDtcXG59XFxuLnRocmVlLWZvdXJ0aHMge1xcbiAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xcbn1cXG4ucXVhcnRlciB7XFxuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XFxufVxcbi5sYWJlbCB7XFxuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XFxufVxcbi5pbnB1dC1jb2x1bW4ge1xcbiAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xcbn1cXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cXG4ucm93OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuXFxuLyogLS0tIENoZWNrYm94IC0tLSAqL1xcbi8qIFRoZSBjb250YWluZXIgKi9cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDNweCAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4uY29udGFpbmVyIGlucHV0IHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2dnbGUtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlLWRpc3BsYXkuaXMtdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBSYWRpbyBCdXR0b24gLS0tICovXFxuLyogQmFzZWQgb24gQ29kZXBlbiBieSBTYWwgKi9cXG4ub3B0aW9ucy1yYWRpby1idXR0b25zLXdyYXBwZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ub3B0aW9ucy1yYWRpby1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTk5OTllbTtcXG4gIHRvcDogLTk5OTllbTtcXG59XFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uICsgbGFiZWwge1xcbiAgd2lkdGg6IDMzLjMlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiAjYmViZWJlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi1yaWdodDogLTFweDtcXG59XFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uICsgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjdlbSAwIDAgMC43ZW07XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbiArIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAuN2VtIDAuN2VtIDA7XFxufVxcbi5vcHRpb25zLXJhZGlvLWJ1dHRvbjpob3ZlciArIGxhYmVsIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLm9wdGlvbnMtcmFkaW8tYnV0dG9uOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi8qIC0tLSBBbmltYXRlZCBMb2FkZXIgLS0tICovXFxuLyogQmFzZWQgb24gbG9hZGluZy5pbyAqL1xcbi5sZHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXFxuICB6LWluZGV4OiAxMDAgIWltcG9ydGFudDsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xcbn1cXG4ubGRzLWNvbnRhaW5lci5pcy12aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubGRzLWR1YWwtcmluZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAyMDBweCAwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG59XFxuLmxkcy1kdWFsLXJpbmc6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcXG4gIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuQGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbaV0pO1xuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBsaXN0W2ldWzFdLFxuICAgICAgbWVkaWE6IGxpc3RbaV1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGxpc3RbaV1bM11cbiAgICB9O1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ucHVzaChhZGRTdHlsZShwYXJ0LCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbW9kdWxlSWQgPSBvcHRpb25zLmJhc2UgPyBtb2R1bGVJZCArIG9wdGlvbnMuYmFzZSA6IG1vZHVsZUlkO1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcblxuICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICB9XG5cbiAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICAgIH1cblxuICAgIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBqID0gbmV3TGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtqXSgpO1xuICAgIH1cblxuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPSBuZXdMaXN0Lmxlbmd0aDtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgc3R5bGVzSW5Eb21bbW9kdWxlSWRdO1xuICAgIH1cbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCBcIi4vdWkuY3NzXCI7XG5pbXBvcnQgKiBhcyBGaWdtYSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuLyogQ29uc3RhbnRzICovXG5jb25zdCBkZWZhdWx0SW5wdXRzRm9yTW9kZXMgPSB7XG4gICAgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOiBbXCJ0YWJsZVdpZHRoXCIsIFwidGFibGVIZWlnaHRcIiwgXCJjb2x1bW5zXCIsIFwicm93c1wiXSxcbiAgICBcImNvdW50LWFuZC1jZWxsLXNpemVcIjogW1wiY29sdW1uV2lkdGhcIiwgXCJyb3dIZWlnaHRcIiwgXCJjb2x1bW5zXCIsIFwicm93c1wiXSxcbiAgICBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjogW1xuICAgICAgICBcInRhYmxlV2lkdGhcIixcbiAgICAgICAgXCJ0YWJsZUhlaWdodFwiLFxuICAgICAgICBcImNvbHVtbldpZHRoXCIsXG4gICAgICAgIFwicm93SGVpZ2h0XCJcbiAgICBdXG59O1xuY29uc3QgZGVmYXVsdFZhbHVlc0ZvcklucHV0cyA9IHtcbiAgICB0YWJsZVdpZHRoOiBcIjEwMjRcIixcbiAgICB0YWJsZUhlaWdodDogXCI3NjhcIixcbiAgICBjb2x1bW5XaWR0aDogXCIxMDBcIixcbiAgICByb3dIZWlnaHQ6IFwiMzBcIixcbiAgICBjb2x1bW5zOiBcIjVcIixcbiAgICByb3dzOiBcIjhcIlxufTtcbi8qIFN0YXRlIENoYW5nZXMgVmFyaWFibGUgKi9cbmxldCBpc1NoaWZ0SGVsZCA9IGZhbHNlO1xubGV0IGlzQWx0SGVsZCA9IGZhbHNlO1xuLyogUnVuIGFmdGVyIG9uTG9hZCAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuc2VsZWN0KCk7XG59KTtcbi8qIFRvZ2dsZSBIVE1MIFJlbmRlcmluZyAqL1xuZnVuY3Rpb24gdG9nZ2xlRWRpdGFibGUoaHRtbFRhZ0lkLCBpc1ByZXJlcXVpc2l0ZVNlbGVjdGVkLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCBodG1sVGFnQnlJZCA9IGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKGh0bWxUYWdJZCk7XG4gICAgaWYgKGh0bWxUYWdCeUlkLmNoZWNrZWQpIHtcbiAgICAgICAgaHRtbFRhZ0J5SWQuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNQcmVyZXF1aXNpdGVTZWxlY3RlZCkge1xuICAgICAgICBodG1sVGFnQnlJZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBodG1sVGFnQnlJZC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGh0bWxUYWdCeUlkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgaHRtbFRhZ0J5SWQudmFsdWUgPSBcIk4uQS5cIjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4vKiBTZWxlY3QgSFRNTCBFbGVtZW50cyAqL1xuLy8gR2VuZXJpYyBIVE1MIEVsZW1lbnRcbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50QnlJZChodG1sRWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sRWxlbWVudCk7XG59XG4vLyBIVE1MIElucHV0IEVsZW1lbnRcbmZ1bmN0aW9uIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKGh0bWxFbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxFbGVtZW50KTtcbn1cbi8qIFJlc2V0IEludmFsaWQgQ1NTICovXG5mdW5jdGlvbiByZXNldEludmFsaWRJbnB1dCgpIHtcbiAgICBjb25zdCBpbnB1dExpc3QgPSBPYmplY3Qua2V5cyhkZWZhdWx0VmFsdWVzRm9ySW5wdXRzKTtcbiAgICBmb3IgKGxldCBpbnB1dCBvZiBpbnB1dExpc3QpIHtcbiAgICAgICAgZ2V0SFRNTEVsZW1lbnRCeUlkKGlucHV0KS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbiAgICB9XG59XG4vKiBUb2dnbGUgSFRNTCBSZW5kZXJpbmcgKi9cbmZ1bmN0aW9uIHNldERlZmF1bHQobW9kZSkge1xuICAgIGNvbnN0IGlucHV0TGlzdCA9IE9iamVjdC5rZXlzKGRlZmF1bHRWYWx1ZXNGb3JJbnB1dHMpO1xuICAgIGZvciAobGV0IGlucHV0IG9mIGlucHV0TGlzdCkge1xuICAgICAgICBpZiAoZGVmYXVsdElucHV0c0Zvck1vZGVzW21vZGVdLmluZGV4T2YoaW5wdXQpID4gLTEpIHtcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKGlucHV0LCB0cnVlLCBkZWZhdWx0VmFsdWVzRm9ySW5wdXRzW2lucHV0XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShpbnB1dCwgZmFsc2UsIGRlZmF1bHRWYWx1ZXNGb3JJbnB1dHNbaW5wdXRdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qIFZhbGlkYXRlIFVzZXIgSW5wdXQgKi9cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcklucHV0KG1vZGUsIGNvbHVtbnMsIHJvd3MsIGNvbHVtbldpZHRoLCByb3dIZWlnaHQpIHtcbiAgICBsZXQgdmFsaWRJbnB1dCA9IHRydWU7XG4gICAgLy8gcmVzZXQgaW52YWxpZCBDU1NcbiAgICByZXNldEludmFsaWRJbnB1dCgpO1xuICAgIC8vIG5lZ2F0aXZlIHZhbHVlIGNoZWNrXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIGNhc2UgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgaWYgKCFjb2x1bW5zIHx8IGNvbHVtbnMgPCAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcm93cyB8fCByb3dzIDwgMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwicm93c1wiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbHVtbldpZHRoIHx8IGNvbHVtbldpZHRoIDwgMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwiY29sdW1uV2lkdGhcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyb3dIZWlnaHQgfHwgcm93SGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwicm93SGVpZ2h0XCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5zZWxlY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiOlxuICAgICAgICAgICAgaWYgKCFjb2x1bW5zIHx8IGNvbHVtbnMgPD0gMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJvd3MgfHwgcm93cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJyb3dzXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29sdW1uV2lkdGggfHwgY29sdW1uV2lkdGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJvd0hlaWdodCB8fCByb3dIZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwidGFibGVIZWlnaHRcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0SFRNTElucHV0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLnNlbGVjdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjZWxsLWFuZC10YWJsZS1zaXplXCI6XG4gICAgICAgICAgICBpZiAoIWNvbHVtbnMgfHwgY29sdW1ucyA8PSAwIHx8IChjb2x1bW5zID4gMCAmJiBjb2x1bW5XaWR0aCA8PSAwKSkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJvd3MgfHwgcm93cyA8PSAwIHx8IChyb3dzID4gMCAmJiByb3dIZWlnaHQgPD0gMCkpIHtcbiAgICAgICAgICAgICAgICBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChcInRhYmxlSGVpZ2h0XCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgIHZhbGlkSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29sdW1uV2lkdGggfHwgY29sdW1uV2lkdGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGdldEhUTUxJbnB1dEVsZW1lbnRCeUlkKFwiY29sdW1uV2lkdGhcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgdmFsaWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyb3dIZWlnaHQgfHwgcm93SGVpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChcInJvd0hlaWdodFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRIVE1MSW5wdXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuc2VsZWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gbGltaXQgY2hlY2tcbiAgICBpZiAodmFsaWRJbnB1dCkge1xuICAgICAgICBpZiAoY29sdW1ucyAqIGNvbHVtbldpZHRoID4gNTAwMCB8fFxuICAgICAgICAgICAgcm93cyAqIHJvd0hlaWdodCA+IDUwMDAgfHxcbiAgICAgICAgICAgIGNvbHVtbnMgPiAxMDAgfHxcbiAgICAgICAgICAgIHJvd3MgPiAxMDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm93c1wiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5XaWR0aFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dIZWlnaHRcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvdW50LWFuZC1jZWxsLXNpemVcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5zXCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvd3NcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uV2lkdGhcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm93SGVpZ2h0XCIpLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjZWxsLWFuZC10YWJsZS1zaXplXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZUhlaWdodFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5XaWR0aFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dIZWlnaHRcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVXaWR0aFwiKS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWxpZElucHV0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkSW5wdXQ7XG59XG4vLyBEZXRlY3QgcmFkaW8gYnV0dG9ucyBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIikub25jbGljayA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKVxuICAgICAgICAuY2hlY2tlZCkge1xuICAgICAgICBzZXREZWZhdWx0KFwiY291bnQtYW5kLXRhYmxlLXNpemVcIik7XG4gICAgfVxufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50LWFuZC1jZWxsLXNpemVcIikuY2hlY2tlZCkge1xuICAgICAgICBzZXREZWZhdWx0KFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiKTtcbiAgICB9XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsLWFuZC10YWJsZS1zaXplXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiKS5jaGVja2VkKSB7XG4gICAgICAgIHNldERlZmF1bHQoXCJjZWxsLWFuZC10YWJsZS1zaXplXCIpO1xuICAgIH1cbn07XG4vLyBEZXRlY3QgaGVhZGVyIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlclwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5jaGVja2VkLCBcIlwiKTtcbiAgICB0b2dnbGVFZGl0YWJsZShcImhlYWRlckhlaWdodFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKS5jaGVja2VkLCBcIjYwXCIpO1xuICAgIHRvZ2dsZUVkaXRhYmxlKFwiZmxvYXRpbmdGaWx0ZXJIZWlnaHRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5jaGVja2VkLCBcIlwiKTtcbn07XG4vLyBEZXRlY3QgZmxvYXRpbmcgZmlsdGVyIGNoZWNrYm94IHN0YXRlIGNoYW5nZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG9hdGluZ0ZpbHRlclwiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvYXRpbmdGaWx0ZXJcIikuY2hlY2tlZCwgXCIzMFwiKTtcbn07XG4vLyBEZXRlY3Qgc3RyaXBlZC9hbHRlcm5hdGUgYmFja2dyb3VuZCBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgdG9nZ2xlRWRpdGFibGUoXCJzdHJpcGVkYmFja2dyb3VuZENvbG9yXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx0ZXJuYXRlQmFja2dyb3VuZHNcIilcbiAgICAgICAgLmNoZWNrZWQsIFwiI0ZGRkZGRlwiKTtcbn07XG4vLyBEZXRlY3QgYm9yZGVycyBjaGVja2JveCBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9yZGVyc1wiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICB0b2dnbGVFZGl0YWJsZShcImJvcmRlckNvbG9yXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9yZGVyc1wiKS5jaGVja2VkLCBcIiNDN0M3QzdcIik7XG59O1xuLy8gRGV0ZWN0IGlucHV0cyBzdGF0ZSBjaGFuZ2VcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbnNcIikuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dzXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm93c1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVIZWlnaHRcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZUhlaWdodFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbldpZHRoXCIpLm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uV2lkdGhcIikuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dIZWlnaHRcIikub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dIZWlnaHRcIikuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG59O1xuLyogS2V5Ym9hcmQgTmF2aWdhdGlvbiAqL1xuZG9jdW1lbnQub25rZXlkb3duID0ga2V5RG93biA9PiB7XG4gICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChrZXlEb3duLmtleSA9PT0gXCJTaGlmdFwiKSB7XG4gICAgICAgIGlzU2hpZnRIZWxkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkgPT09IFwiQWx0XCIpIHtcbiAgICAgICAgaXNBbHRIZWxkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkubWF0Y2goL0Fycm93XFx3Ky9nKSkge1xuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC50eXBlID09PSBcInRleHRcIikge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoYWN0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaXNTaGlmdEhlbGQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXlEb3duLmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAvLyBTZWxlY3RlZCBNb2RlXG4gICAgICAgIGNvbnN0IG1vZGUgPSBGaWdtYS5nZXRWYWx1ZShcImNvdW50LWFuZC10YWJsZS1zaXplXCIsIFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgPyBcImNvdW50LWFuZC10YWJsZS1zaXplXCJcbiAgICAgICAgICAgIDogRmlnbWEuZ2V0VmFsdWUoXCJjb3VudC1hbmQtY2VsbC1zaXplXCIsIFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgICAgID8gXCJjb3VudC1hbmQtY2VsbC1zaXplXCJcbiAgICAgICAgICAgICAgICA6IFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiO1xuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJjcmVhdGVcIiAmJiBpc1NoaWZ0SGVsZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlV2lkdGhcIikuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudC1hbmQtY2VsbC1zaXplXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uc1wiKS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbGwtYW5kLXRhYmxlLXNpemVcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVdpZHRoXCIpLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleURvd24ucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RlID09PSBcImNvdW50LWFuZC1jZWxsLXNpemVcIiAmJlxuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJjb2x1bW5zXCIgJiZcbiAgICAgICAgICAgIGlzU2hpZnRIZWxkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKS5mb2N1cygpO1xuICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwidGFibGVXaWR0aFwiICYmIGlzU2hpZnRIZWxkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKS5mb2N1cygpO1xuICAgICAgICAgICAga2V5RG93bi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleURvd24ua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmNoZWNrZWQgPSAhYWN0aXZlRWxlbWVudC5jaGVja2VkO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaWQgPT09IFwiaGVhZGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcImZsb2F0aW5nRmlsdGVyXCIsIGFjdGl2ZUVsZW1lbnQuY2hlY2tlZCwgXCJcIik7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJoZWFkZXJIZWlnaHRcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIjYwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aXZlRWxlbWVudC5pZCA9PT0gXCJmbG9hdGluZ0ZpbHRlclwiKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWRpdGFibGUoXCJmbG9hdGluZ0ZpbHRlckhlaWdodFwiLCBhY3RpdmVFbGVtZW50LmNoZWNrZWQsIFwiMzBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImFsdGVybmF0ZUJhY2tncm91bmRzXCIpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVFZGl0YWJsZShcInN0cmlwZWRiYWNrZ3JvdW5kQ29sb3JcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIiNGRkZGRkZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3RpdmVFbGVtZW50LmlkID09PSBcImJvcmRlcnNcIikge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUVkaXRhYmxlKFwiYm9yZGVyQ29sb3JcIiwgYWN0aXZlRWxlbWVudC5jaGVja2VkLCBcIiNDN0M3QzdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5RG93bi5rZXkgPT09IFwiMVwiIHx8XG4gICAgICAgIGtleURvd24ua2V5ID09PSBcIjJcIiB8fFxuICAgICAgICBrZXlEb3duLmtleSA9PT0gXCIzXCIpIHtcbiAgICAgICAgaWYgKGlzQWx0SGVsZCkge1xuICAgICAgICAgICAgc3dpdGNoIChrZXlEb3duLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVmYXVsdChcImNlbGwtYW5kLXRhYmxlLXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVmYXVsdChcImNvdW50LWFuZC1jZWxsLXNpemVcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnQtYW5kLXRhYmxlLXNpemVcIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNldERlZmF1bHQoXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuZG9jdW1lbnQub25rZXl1cCA9IGtleVVwID0+IHtcbiAgICBpZiAoa2V5VXAua2V5ID09PSBcIlNoaWZ0XCIpIHtcbiAgICAgICAgaXNTaGlmdEhlbGQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5VXAua2V5ID09PSBcIkFsdFwiKSB7XG4gICAgICAgIGlzQWx0SGVsZCA9IGZhbHNlO1xuICAgIH1cbn07XG4vKiBQcm9jZXNzIElucHV0ICovXG5mdW5jdGlvbiBwcm9jZXNzSW5wdXRUb01lc3NhZ2UoaXNMb2FkaW5nKSB7XG4gICAgLy8gU2VsZWN0ZWQgTW9kZVxuICAgIGNvbnN0IG1vZGUgPSBGaWdtYS5nZXRWYWx1ZShcImNvdW50LWFuZC10YWJsZS1zaXplXCIsIFwiYm9vbGVhblwiKVxuICAgICAgICA/IFwiY291bnQtYW5kLXRhYmxlLXNpemVcIlxuICAgICAgICA6IEZpZ21hLmdldFZhbHVlKFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiLCBcImJvb2xlYW5cIilcbiAgICAgICAgICAgID8gXCJjb3VudC1hbmQtY2VsbC1zaXplXCJcbiAgICAgICAgICAgIDogXCJjZWxsLWFuZC10YWJsZS1zaXplXCI7XG4gICAgLy8gSGVhZGVyIEluZm9cbiAgICBjb25zdCBoZWFkZXIgPSBGaWdtYS5nZXRWYWx1ZShcImhlYWRlclwiLCBcImJvb2xlYW5cIik7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyID8gRmlnbWEuZ2V0VmFsdWUoXCJoZWFkZXJIZWlnaHRcIiwgXCJudW1iZXJcIikgOiAwO1xuICAgIGNvbnN0IGZsb2F0aW5nRmlsdGVyID0gRmlnbWEuZ2V0VmFsdWUoXCJmbG9hdGluZ0ZpbHRlclwiLCBcImJvb2xlYW5cIik7XG4gICAgY29uc3QgZmxvYXRpbmdGaWx0ZXJIZWlnaHQgPSBGaWdtYS5nZXRWYWx1ZShcImZsb2F0aW5nRmlsdGVySGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xuICAgIC8vIFByb3BlcnRpZXMgYW5kIEN1c3RvbWlzYXRpb25zXG4gICAgY29uc3QgYm9yZGVycyA9IEZpZ21hLmdldFZhbHVlKFwiYm9yZGVyc1wiLCBcImJvb2xlYW5cIik7XG4gICAgY29uc3QgYWx0ZXJuYXRlQmFja2dyb3VuZHMgPSBGaWdtYS5nZXRWYWx1ZShcImFsdGVybmF0ZUJhY2tncm91bmRzXCIsIFwiYm9vbGVhblwiKTtcbiAgICBjb25zdCBwcmltYXJ5YmFja2dyb3VuZENvbG9yID0gRmlnbWEuZ2V0VmFsdWUoXCJwcmltYXJ5YmFja2dyb3VuZENvbG9yXCIsIFwic3RyaW5nXCIpO1xuICAgIGNvbnN0IHN0cmlwZWRiYWNrZ3JvdW5kQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcInN0cmlwZWRiYWNrZ3JvdW5kQ29sb3JcIiwgXCJzdHJpbmdcIik7XG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSBGaWdtYS5nZXRWYWx1ZShcImJvcmRlckNvbG9yXCIsIFwic3RyaW5nXCIpO1xuICAgIC8vIENvbnN0cmFpbnRzIFByb2Nlc3NpbmdcbiAgICBsZXQgY29sdW1ucyA9IDA7XG4gICAgbGV0IGNvbHVtbldpZHRoID0gMDtcbiAgICBsZXQgcm93cyA9IDA7XG4gICAgbGV0IHJvd0hlaWdodCA9IDA7XG4gICAgbGV0IHJlZmVyZW5jZUNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIGNhc2UgXCJjb3VudC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgY29sdW1ucyA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uc1wiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIHJvd3MgPSBGaWdtYS5nZXRWYWx1ZShcInJvd3NcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb2x1bW5XaWR0aCA9XG4gICAgICAgICAgICAgICAgRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZVdpZHRoXCIsIFwibnVtYmVyXCIpIC8gY29sdW1ucztcbiAgICAgICAgICAgIHJvd0hlaWdodCA9XG4gICAgICAgICAgICAgICAgKEZpZ21hLmdldFZhbHVlKFwidGFibGVIZWlnaHRcIiwgXCJudW1iZXJcIikgLVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQpIC9cbiAgICAgICAgICAgICAgICAgICAgcm93cztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY291bnQtYW5kLWNlbGwtc2l6ZVwiOlxuICAgICAgICAgICAgY29sdW1ucyA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uc1wiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIHJvd3MgPSBGaWdtYS5nZXRWYWx1ZShcInJvd3NcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICBjb2x1bW5XaWR0aCA9IEZpZ21hLmdldFZhbHVlKFwiY29sdW1uV2lkdGhcIiwgXCJudW1iZXJcIik7XG4gICAgICAgICAgICByb3dIZWlnaHQgPSBGaWdtYS5nZXRWYWx1ZShcInJvd0hlaWdodFwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY2VsbC1hbmQtdGFibGUtc2l6ZVwiOlxuICAgICAgICAgICAgY29uc3QgdGFibGVXaWR0aCA9IEZpZ21hLmdldFZhbHVlKFwidGFibGVXaWR0aFwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVpZ2h0ID0gRmlnbWEuZ2V0VmFsdWUoXCJ0YWJsZUhlaWdodFwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID0gRmlnbWEuZ2V0VmFsdWUoXCJjb2x1bW5XaWR0aFwiLCBcIm51bWJlclwiKTtcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IEZpZ21hLmdldFZhbHVlKFwicm93SGVpZ2h0XCIsIFwibnVtYmVyXCIpO1xuICAgICAgICAgICAgY29sdW1ucyA9IE1hdGguZmxvb3IodGFibGVXaWR0aCAvIGNvbHVtbldpZHRoKTtcbiAgICAgICAgICAgIHJvd3MgPSBNYXRoLmZsb29yKCh0YWJsZUhlaWdodCAtIGhlYWRlckhlaWdodCkgLyByb3dIZWlnaHQgKyAxKTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzLnkgPSB0YWJsZUhlaWdodCAlIHJvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBWYWxpZGF0aW9uXG4gICAgY29uc3QgdmFsaWRXaXRoaW5MaW1pdHMgPSB2YWxpZGF0ZVVzZXJJbnB1dChtb2RlLCBjb2x1bW5zLCByb3dzLCBjb2x1bW5XaWR0aCwgcm93SGVpZ2h0KTtcbiAgICBpZiAodmFsaWRXaXRoaW5MaW1pdHMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjcmVhdGUtdGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IGNvbHVtbldpZHRoLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgICAgICAgICAgICByb3dIZWlnaHQ6IHJvd0hlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyczogYm9yZGVycyxcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlQmFja2dyb3VuZHM6IGFsdGVybmF0ZUJhY2tncm91bmRzLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IGhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiBoZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nRmlsdGVyOiBmbG9hdGluZ0ZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXJIZWlnaHQ6IGZsb2F0aW5nRmlsdGVySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5YmFja2dyb3VuZENvbG9yOiBwcmltYXJ5YmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBzdHJpcGVkYmFja2dyb3VuZENvbG9yOiBzdHJpcGVkYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUNvb3JkaW5hdGVzOiByZWZlcmVuY2VDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFwiKlwiKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEVuYWJsZSBjcmVhdGUgYnV0dG9uIGFuZCBoaWRlIGxvYWRlclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxkc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmlzaWJsZVwiKTtcbiAgICB9XG59XG4vKiBDcmVhdGUgQnV0dG9uIEFjdGlvbnMgKi9cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gRGlzYWJsZSBjcmVhdGUgYnV0dG9uIGFuZCBkaXNwbGF5IGxvYWRlclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxkc1wiKS5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAvLyBGSVhNRSBlbnN1cmVzIHRoYXQgYnV0dG9uIGlzIGRpc2FibGVkIGFuZCBsb2FkZXIgaXMgZGlzcGxheWVkIGJlZm9yZSBwcm9jZXNzaW5nIGlucHV0XG4gICAgcHJvY2Vzc0lucHV0VG9NZXNzYWdlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpLmRpc2FibGVkKTtcbn07XG4iLCIvKiBGaWdtYSBBUEkgRnVuY3Rpb24gQWJzdHJhY3Rpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzKG5vZGVzLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gZmlnbWEuZ3JvdXAobm9kZXMsIHBhcmVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0Q3VycmVudFBhZ2UoKS5zZWxlY3Rpb247XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uKG5vZGUpIHtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlO1xuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEFuZFpvb21JbnRvVmlldyhub2RlKSB7XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KG5vZGUpO1xuICAgIHJldHVybiBudWxsO1xufVxuLyogQ2xvbmUgZnVuY3Rpb24gdGFrZW4gZnJvbSBGaWdtYSBQbHVnaW4gQVBJIGV4YW1wbGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgIHR5cGUgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICB0eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBjbG9uZSh4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgb1trZXldID0gY2xvbmUodmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgXCJ1bmtub3duXCI7XG59XG4vKiBIRVggdG8gUkdCIENvbnZlcnNpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICAgICAgICB9XG4gICAgICAgIDogbnVsbDtcbn1cbi8qIEV4dHJhY3QgSW5wdXRzICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoaHRtbFRhZ0lkLCBpbnB1dFR5cGUpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGh0bWxUYWdJZCk7XG4gICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=