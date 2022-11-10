/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#root * {\n  padding: 0px;\n}\n\n#app {\n  display: grid;\n  grid-template: 1fr / 1fr 2fr 2fr;\n  height: 500px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n#projects {\n  border-right: 1px solid black;\n  display:grid;\n  grid-template: 1fr 25px / 1fr;\n  \n}\n\n#tasks {\n  border-right: 1px solid black;\n  display: grid;\n  grid-template: 1fr 25px / 1fr;\n}\n\n#projectList {\n  display: grid;\n  grid-template: repeat(auto-fit, minmax(10px, 25px)) / 1fr;\n  align-content: flex-start;\n  text-align: center;\n}\n\n#taskList {\n  display: grid;\n  grid-template: repeat(auto-fit, minmax(10px, 25px)) / 1fr;\n  align-content: flex-start;\n  text-align: center;\n}\n\nbutton:hover {\n  cursor: pointer;\n  font-size: 1.3em;\n  text-shadow: -0.5px 0.5px 1px gray;\n  box-shadow: 0px 0px 3px 0px black;\n}\n\nbutton:active,\nbutton {\n  grid-column: span 1;\n  font-family: \"Times New Roman\", sans-serif;\n  font-size: 1.2em;\n  color: blue;\n  background-color: transparent;\n  border: none;\n}\n\n#addProjectButton,\n#addTaskButton {\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n}\n\ninput{\n  text-align: center;\n}\n\n#details {\n  resize: none;\n  padding: 0px 20px;\n  border: none;\n}\n\n#detailsBox {\n  display: grid;\n  border-bottom: 1px solid black;\n\n}\n\n#taskList *,\n#projectList * {\n  border-bottom: 1px solid black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,6BAA6B;;AAE/B;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,yDAAyD;EACzD,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,yDAAyD;EACzD,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kCAAkC;EAClC,iCAAiC;AACnC;;AAEA;;EAEE,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;EAChB,WAAW;EACX,6BAA6B;EAC7B,YAAY;AACd;;AAEA;;EAEE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;;AAEhC;;AAEA;;EAEE,8BAA8B;AAChC","sourcesContent":["#root * {\n  padding: 0px;\n}\n\n#app {\n  display: grid;\n  grid-template: 1fr / 1fr 2fr 2fr;\n  height: 500px;\n  border: 1px solid black;\n  border-bottom: none;\n}\n\n#projects {\n  border-right: 1px solid black;\n  display:grid;\n  grid-template: 1fr 25px / 1fr;\n  \n}\n\n#tasks {\n  border-right: 1px solid black;\n  display: grid;\n  grid-template: 1fr 25px / 1fr;\n}\n\n#projectList {\n  display: grid;\n  grid-template: repeat(auto-fit, minmax(10px, 25px)) / 1fr;\n  align-content: flex-start;\n  text-align: center;\n}\n\n#taskList {\n  display: grid;\n  grid-template: repeat(auto-fit, minmax(10px, 25px)) / 1fr;\n  align-content: flex-start;\n  text-align: center;\n}\n\nbutton:hover {\n  cursor: pointer;\n  font-size: 1.3em;\n  text-shadow: -0.5px 0.5px 1px gray;\n  box-shadow: 0px 0px 3px 0px black;\n}\n\nbutton:active,\nbutton {\n  grid-column: span 1;\n  font-family: \"Times New Roman\", sans-serif;\n  font-size: 1.2em;\n  color: blue;\n  background-color: transparent;\n  border: none;\n}\n\n#addProjectButton,\n#addTaskButton {\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n}\n\ninput{\n  text-align: center;\n}\n\n#details {\n  resize: none;\n  padding: 0px 20px;\n  border: none;\n}\n\n#detailsBox {\n  display: grid;\n  border-bottom: 1px solid black;\n\n}\n\n#taskList *,\n#projectList * {\n  border-bottom: 1px solid black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/details.ts":
/*!************************!*\
  !*** ./src/details.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clearDetails = exports.createDetailElement = void 0;
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const projects_1 = __webpack_require__(/*! ./projects */ "./src/projects.ts");
const tasks_1 = __webpack_require__(/*! ./tasks */ "./src/tasks.ts");
const createDetailElement = () => {
    const element = document.createElement('textarea');
    element.id = 'details';
    element.setAttribute('type', 'text');
    const lang = _1.app.projects[(0, projects_1.activeProject)()].tasks;
    if (lang !== undefined) {
        const long = lang[(0, tasks_1.activeTask)()];
        element.addEventListener("blur", () => {
            const text = element.value;
            long.details = text;
        });
        element.addEventListener("focusin", () => {
            const text = element.value;
            long.details = text;
        });
    }
    const detailsDiv = document.querySelector('#detailsBox');
    if (detailsDiv !== null) {
        detailsDiv.appendChild(element);
        detailsDiv.addEventListener('click', () => element.focus());
    }
    if (lang !== undefined) {
        let long = lang[(0, tasks_1.activeTask)()];
        if (long !== undefined) {
            long.hasOwnProperty('details')
                ? element.value = long.details
                : long.details = '';
        }
    }
    if (element !== null)
        element.focus();
};
exports.createDetailElement = createDetailElement;
const clearDetails = () => {
    const details = document.querySelector("#details");
    if (details !== null && details !== undefined)
        details.remove();
};
exports.clearDetails = clearDetails;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
__webpack_require__(/*! ./style */ "./src/style.css");
__webpack_require__(/*! ./projects */ "./src/projects.ts");
__webpack_require__(/*! ./tasks */ "./src/tasks.ts");
__webpack_require__(/*! ./details */ "./src/details.ts");
exports.app = {
    projects: [
        {
            title: "709",
        },
    ],
};
console.log(exports.app);


/***/ }),

/***/ "./src/projects.ts":
/*!*************************!*\
  !*** ./src/projects.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activeProject = exports.NewProject = void 0;
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const details_1 = __webpack_require__(/*! ./details */ "./src/details.ts");
const tasks_1 = __webpack_require__(/*! ./tasks */ "./src/tasks.ts");
const projectList = document.getElementById("projectList");
const projectButton = document.getElementById("addProjectButton");
document.addEventListener("DOMContentLoaded", () => {
    projectButton.addEventListener("click", addProjectInput);
});
const NewProject = (input) => {
    return { title: input };
};
exports.NewProject = NewProject;
const addProjectInput = () => {
    const titleInput = createProjectInput();
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(titleInput);
    const inputElement = document.querySelector(`.tempInput`);
    inputElement.focus();
    (0, details_1.clearDetails)();
    (0, tasks_1.clearTasks)();
};
const createProjectInput = () => {
    const newInput = document.createElement("input");
    newInput.classList.add("tempInput");
    newInput.addEventListener("blur", (event) => generateProject(event));
    newInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter")
            newInput.blur();
    });
    return newInput;
};
const generateProject = (event) => {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    inputElement.remove();
    removeInitialProject();
    _1.app.projects.push((0, exports.NewProject)(inputValue));
    addProjectTitle(inputValue);
};
const removeInitialProject = () => {
    if (_1.app.projects[0].title === "709")
        _1.app.projects.pop();
};
const addProjectTitle = (inputValue) => {
    const inputLabel = document.createElement("button");
    inputLabel.textContent = inputValue;
    inputLabel.classList.add(`project${_1.app.projects.length}`);
    removeActiveProject();
    inputLabel.id = "activeProject";
    (0, tasks_1.clearTasks)();
    chooseProject(inputLabel);
    projectList.appendChild(inputLabel);
    (0, tasks_1.addTaskInput)();
};
const chooseProject = (project) => {
    project.addEventListener("click", (e) => {
        (0, details_1.clearDetails)();
        (0, tasks_1.clearTasks)();
        if (e.target !== null) {
            removeActiveProject();
            if (e.target instanceof Element) {
                e.target.id = "activeProject";
            }
            displayProject();
        }
    });
};
const displayProject = () => {
    const project = _1.app.projects[(0, exports.activeProject)()];
    if (project.tasks !== undefined) {
        for (let i = 0; i < project.tasks.length; i++) {
            const element = project.tasks[i];
            const button = document.createElement("button");
            button.classList.add(`task${i + 1}`);
            button.textContent = `${element.title}`;
            tasks_1.taskList.appendChild(button);
            (0, tasks_1.chooseTask)(button);
        }
    }
};
const activeProject = () => {
    const activeProjectButton = document.querySelector("#activeProject");
    if (activeProjectButton !== undefined && activeProjectButton !== null) {
        const activeProjectNumber = Number.parseInt(activeProjectButton.className.slice(-1));
        return activeProjectNumber - 1;
    }
    return 5;
};
exports.activeProject = activeProject;
const removeActiveProject = () => {
    const activeProject = document.querySelector("#activeProject");
    if (activeProject !== null)
        activeProject.id = "";
};


/***/ }),

/***/ "./src/tasks.ts":
/*!**********************!*\
  !*** ./src/tasks.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activeTask = exports.chooseTask = exports.clearTasks = exports.addTaskInput = exports.taskList = void 0;
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const details_1 = __webpack_require__(/*! ./details */ "./src/details.ts");
const projects_1 = __webpack_require__(/*! ./projects */ "./src/projects.ts");
exports.taskList = document.getElementById("taskList");
const taskButton = document.getElementById("addTaskButton");
document.addEventListener("DOMContentLoaded", () => {
    taskButton.addEventListener("click", exports.addTaskInput);
});
const NewTask = (input) => {
    return { title: input };
};
const addTaskInput = () => {
    const titleInput = createTaskInput();
    exports.taskList === null || exports.taskList === void 0 ? void 0 : exports.taskList.appendChild(titleInput);
    const inputElement = document.querySelector(`.tempInput`);
    inputElement.focus();
    (0, details_1.clearDetails)();
};
exports.addTaskInput = addTaskInput;
const createTaskInput = () => {
    const newInput = document.createElement("input");
    newInput.classList.add("tempInput");
    newInput.addEventListener("blur", (event) => generateTask(event));
    newInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter")
            newInput.blur();
    });
    return newInput;
};
const addTaskTitle = (inputValue) => {
    const inputLabel = document.createElement("button");
    inputLabel.textContent = inputValue;
    inputLabel.classList.add(`task${getTaskLength()}`);
    removeActiveTask();
    inputLabel.id = "activeTask";
    (0, exports.chooseTask)(inputLabel);
    exports.taskList.appendChild(inputLabel);
};
const getTaskLength = () => {
    const activeProjectNumber = _1.app.projects[(0, projects_1.activeProject)()];
    if (activeProjectNumber.tasks !== undefined) {
        const taskLength = activeProjectNumber.tasks.length;
        return taskLength;
    }
};
const generateTask = (event) => {
    var _a;
    const inputElement = event.target;
    const inputValue = inputElement.value;
    inputElement.remove();
    if (_1.app.projects[(0, projects_1.activeProject)()].tasks === undefined)
        _1.app.projects[(0, projects_1.activeProject)()].tasks = [{}];
    initializeTasks();
    if (_1.app.projects[(0, projects_1.activeProject)()].tasks !== undefined) {
        (_a = _1.app.projects[(0, projects_1.activeProject)()].tasks) === null || _a === void 0 ? void 0 : _a.push(NewTask(inputValue));
    }
    addTaskTitle(inputValue);
    (0, details_1.createDetailElement)();
};
const initializeTasks = () => {
    const active = _1.app.projects[(0, projects_1.activeProject)()];
    if (active.tasks !== undefined) {
        if (active.tasks[0].title == undefined) {
            active.tasks.shift();
        }
    }
};
const clearTasks = () => {
    const tasks = document.querySelectorAll("#taskList > *");
    tasks.forEach((task) => {
        task.remove();
    });
};
exports.clearTasks = clearTasks;
const chooseTask = (project) => {
    project.addEventListener("click", (e) => {
        (0, details_1.clearDetails)();
        if (e.target !== null) {
            removeActiveTask();
            if (e.target instanceof Element) {
                e.target.id = "activeTask";
            }
            if (document.querySelector('#details') === undefined) {
                (0, details_1.createDetailElement)();
            }
            else
                (0, details_1.clearDetails)();
            (0, details_1.createDetailElement)();
        }
    });
};
exports.chooseTask = chooseTask;
const activeTask = () => {
    const activeTaskButton = document.querySelector("#activeTask");
    if (activeTaskButton !== undefined && activeTaskButton !== null) {
        const activeTaskNumber = Number.parseInt(activeTaskButton.className.slice(-1));
        return activeTaskNumber === 0 ? activeTaskNumber : activeTaskNumber - 1;
    }
    return 0;
};
exports.activeTask = activeTask;
const removeActiveTask = () => {
    const activeProject = document.querySelector("#activeTask");
    if (activeProject !== null)
        activeProject.id = "";
};


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGV0YWlscy50cyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrcy50cyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcm9vdCAqIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuI2FwcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDJmciAyZnI7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMjVweCAvIDFmcjtcXG4gIFxcbn1cXG5cXG4jdGFza3Mge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDI1cHggLyAxZnI7XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTBweCwgMjVweCkpIC8gMWZyO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2tMaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMHB4LCAyNXB4KSkgLyAxZnI7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHRleHQtc2hhZG93OiAtMC41cHggMC41cHggMXB4IGdyYXk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggYmxhY2s7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUsXFxuYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6IGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b24sXFxuI2FkZFRhc2tCdXR0b24ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5pbnB1dHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2RldGFpbHMge1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNkZXRhaWxzQm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuXFxufVxcblxcbiN0YXNrTGlzdCAqLFxcbiNwcm9qZWN0TGlzdCAqIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCOztBQUVoQzs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3Jvb3QgKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiNhcHAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAyZnIgMmZyO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDI1cHggLyAxZnI7XFxuICBcXG59XFxuXFxuI3Rhc2tzIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAyNXB4IC8gMWZyO1xcbn1cXG5cXG4jcHJvamVjdExpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwcHgsIDI1cHgpKSAvIDFmcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrTGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTBweCwgMjVweCkpIC8gMWZyO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICB0ZXh0LXNoYWRvdzogLTAuNXB4IDAuNXB4IDFweCBncmF5O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4IGJsYWNrO1xcbn1cXG5cXG5idXR0b246YWN0aXZlLFxcbmJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uLFxcbiNhZGRUYXNrQnV0dG9uIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXR7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jZGV0YWlsc0JveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG5cXG4jdGFza0xpc3QgKixcXG4jcHJvamVjdExpc3QgKiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsZWFyRGV0YWlscyA9IGV4cG9ydHMuY3JlYXRlRGV0YWlsRWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG5jb25zdCBwcm9qZWN0c18xID0gcmVxdWlyZShcIi4vcHJvamVjdHNcIik7XG5jb25zdCB0YXNrc18xID0gcmVxdWlyZShcIi4vdGFza3NcIik7XG5jb25zdCBjcmVhdGVEZXRhaWxFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVsZW1lbnQuaWQgPSAnZGV0YWlscyc7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGNvbnN0IGxhbmcgPSBfMS5hcHAucHJvamVjdHNbKDAsIHByb2plY3RzXzEuYWN0aXZlUHJvamVjdCkoKV0udGFza3M7XG4gICAgaWYgKGxhbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBsb25nID0gbGFuZ1soMCwgdGFza3NfMS5hY3RpdmVUYXNrKSgpXTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGxvbmcuZGV0YWlscyA9IHRleHQ7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgbG9uZy5kZXRhaWxzID0gdGV4dDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlsc0JveCcpO1xuICAgIGlmIChkZXRhaWxzRGl2ICE9PSBudWxsKSB7XG4gICAgICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGRldGFpbHNEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlbGVtZW50LmZvY3VzKCkpO1xuICAgIH1cbiAgICBpZiAobGFuZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBsb25nID0gbGFuZ1soMCwgdGFza3NfMS5hY3RpdmVUYXNrKSgpXTtcbiAgICAgICAgaWYgKGxvbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbG9uZy5oYXNPd25Qcm9wZXJ0eSgnZGV0YWlscycpXG4gICAgICAgICAgICAgICAgPyBlbGVtZW50LnZhbHVlID0gbG9uZy5kZXRhaWxzXG4gICAgICAgICAgICAgICAgOiBsb25nLmRldGFpbHMgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbClcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xufTtcbmV4cG9ydHMuY3JlYXRlRGV0YWlsRWxlbWVudCA9IGNyZWF0ZURldGFpbEVsZW1lbnQ7XG5jb25zdCBjbGVhckRldGFpbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKTtcbiAgICBpZiAoZGV0YWlscyAhPT0gbnVsbCAmJiBkZXRhaWxzICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGRldGFpbHMucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5jbGVhckRldGFpbHMgPSBjbGVhckRldGFpbHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXBwID0gdm9pZCAwO1xucmVxdWlyZShcIi4vc3R5bGVcIik7XG5yZXF1aXJlKFwiLi9wcm9qZWN0c1wiKTtcbnJlcXVpcmUoXCIuL3Rhc2tzXCIpO1xucmVxdWlyZShcIi4vZGV0YWlsc1wiKTtcbmV4cG9ydHMuYXBwID0ge1xuICAgIHByb2plY3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjcwOVwiLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuY29uc29sZS5sb2coZXhwb3J0cy5hcHApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFjdGl2ZVByb2plY3QgPSBleHBvcnRzLk5ld1Byb2plY3QgPSB2b2lkIDA7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgZGV0YWlsc18xID0gcmVxdWlyZShcIi4vZGV0YWlsc1wiKTtcbmNvbnN0IHRhc2tzXzEgPSByZXF1aXJlKFwiLi90YXNrc1wiKTtcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKTtcbmNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RCdXR0b25cIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdElucHV0KTtcbn0pO1xuY29uc3QgTmV3UHJvamVjdCA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlOiBpbnB1dCB9O1xufTtcbmV4cG9ydHMuTmV3UHJvamVjdCA9IE5ld1Byb2plY3Q7XG5jb25zdCBhZGRQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZVByb2plY3RJbnB1dCgpO1xuICAgIHByb2plY3RMaXN0ID09PSBudWxsIHx8IHByb2plY3RMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGVtcElucHV0YCk7XG4gICAgaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgKDAsIGRldGFpbHNfMS5jbGVhckRldGFpbHMpKCk7XG4gICAgKDAsIHRhc2tzXzEuY2xlYXJUYXNrcykoKTtcbn07XG5jb25zdCBjcmVhdGVQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3SW5wdXQuY2xhc3NMaXN0LmFkZChcInRlbXBJbnB1dFwiKTtcbiAgICBuZXdJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZXZlbnQpID0+IGdlbmVyYXRlUHJvamVjdChldmVudCkpO1xuICAgIG5ld0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpXG4gICAgICAgICAgICBuZXdJbnB1dC5ibHVyKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0lucHV0O1xufTtcbmNvbnN0IGdlbmVyYXRlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIGlucHV0RWxlbWVudC5yZW1vdmUoKTtcbiAgICByZW1vdmVJbml0aWFsUHJvamVjdCgpO1xuICAgIF8xLmFwcC5wcm9qZWN0cy5wdXNoKCgwLCBleHBvcnRzLk5ld1Byb2plY3QpKGlucHV0VmFsdWUpKTtcbiAgICBhZGRQcm9qZWN0VGl0bGUoaW5wdXRWYWx1ZSk7XG59O1xuY29uc3QgcmVtb3ZlSW5pdGlhbFByb2plY3QgPSAoKSA9PiB7XG4gICAgaWYgKF8xLmFwcC5wcm9qZWN0c1swXS50aXRsZSA9PT0gXCI3MDlcIilcbiAgICAgICAgXzEuYXBwLnByb2plY3RzLnBvcCgpO1xufTtcbmNvbnN0IGFkZFByb2plY3RUaXRsZSA9IChpbnB1dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGlucHV0VmFsdWU7XG4gICAgaW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0JHtfMS5hcHAucHJvamVjdHMubGVuZ3RofWApO1xuICAgIHJlbW92ZUFjdGl2ZVByb2plY3QoKTtcbiAgICBpbnB1dExhYmVsLmlkID0gXCJhY3RpdmVQcm9qZWN0XCI7XG4gICAgKDAsIHRhc2tzXzEuY2xlYXJUYXNrcykoKTtcbiAgICBjaG9vc2VQcm9qZWN0KGlucHV0TGFiZWwpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgICgwLCB0YXNrc18xLmFkZFRhc2tJbnB1dCkoKTtcbn07XG5jb25zdCBjaG9vc2VQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAoMCwgZGV0YWlsc18xLmNsZWFyRGV0YWlscykoKTtcbiAgICAgICAgKDAsIHRhc2tzXzEuY2xlYXJUYXNrcykoKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZW1vdmVBY3RpdmVQcm9qZWN0KCk7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuaWQgPSBcImFjdGl2ZVByb2plY3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCBkaXNwbGF5UHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gXzEuYXBwLnByb2plY3RzWygwLCBleHBvcnRzLmFjdGl2ZVByb2plY3QpKCldO1xuICAgIGlmIChwcm9qZWN0LnRhc2tzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcHJvamVjdC50YXNrc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgdGFzayR7aSArIDF9YCk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LnRpdGxlfWA7XG4gICAgICAgICAgICB0YXNrc18xLnRhc2tMaXN0LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICAoMCwgdGFza3NfMS5jaG9vc2VUYXNrKShidXR0b24pO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aXZlUHJvamVjdFwiKTtcbiAgICBpZiAoYWN0aXZlUHJvamVjdEJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGFjdGl2ZVByb2plY3RCdXR0b24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdE51bWJlciA9IE51bWJlci5wYXJzZUludChhY3RpdmVQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZS5zbGljZSgtMSkpO1xuICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdE51bWJlciAtIDE7XG4gICAgfVxuICAgIHJldHVybiA1O1xufTtcbmV4cG9ydHMuYWN0aXZlUHJvamVjdCA9IGFjdGl2ZVByb2plY3Q7XG5jb25zdCByZW1vdmVBY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FjdGl2ZVByb2plY3RcIik7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgIT09IG51bGwpXG4gICAgICAgIGFjdGl2ZVByb2plY3QuaWQgPSBcIlwiO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hY3RpdmVUYXNrID0gZXhwb3J0cy5jaG9vc2VUYXNrID0gZXhwb3J0cy5jbGVhclRhc2tzID0gZXhwb3J0cy5hZGRUYXNrSW5wdXQgPSBleHBvcnRzLnRhc2tMaXN0ID0gdm9pZCAwO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGRldGFpbHNfMSA9IHJlcXVpcmUoXCIuL2RldGFpbHNcIik7XG5jb25zdCBwcm9qZWN0c18xID0gcmVxdWlyZShcIi4vcHJvamVjdHNcIik7XG5leHBvcnRzLnRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFwiKTtcbmNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdXR0b25cIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwb3J0cy5hZGRUYXNrSW5wdXQpO1xufSk7XG5jb25zdCBOZXdUYXNrID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IGlucHV0IH07XG59O1xuY29uc3QgYWRkVGFza0lucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGVUYXNrSW5wdXQoKTtcbiAgICBleHBvcnRzLnRhc2tMaXN0ID09PSBudWxsIHx8IGV4cG9ydHMudGFza0xpc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV4cG9ydHMudGFza0xpc3QuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRlbXBJbnB1dGApO1xuICAgIGlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICgwLCBkZXRhaWxzXzEuY2xlYXJEZXRhaWxzKSgpO1xufTtcbmV4cG9ydHMuYWRkVGFza0lucHV0ID0gYWRkVGFza0lucHV0O1xuY29uc3QgY3JlYXRlVGFza0lucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wSW5wdXRcIik7XG4gICAgbmV3SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGV2ZW50KSA9PiBnZW5lcmF0ZVRhc2soZXZlbnQpKTtcbiAgICBuZXdJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKVxuICAgICAgICAgICAgbmV3SW5wdXQuYmx1cigpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdJbnB1dDtcbn07XG5jb25zdCBhZGRUYXNrVGl0bGUgPSAoaW5wdXRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dFZhbHVlO1xuICAgIGlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZChgdGFzayR7Z2V0VGFza0xlbmd0aCgpfWApO1xuICAgIHJlbW92ZUFjdGl2ZVRhc2soKTtcbiAgICBpbnB1dExhYmVsLmlkID0gXCJhY3RpdmVUYXNrXCI7XG4gICAgKDAsIGV4cG9ydHMuY2hvb3NlVGFzaykoaW5wdXRMYWJlbCk7XG4gICAgZXhwb3J0cy50YXNrTGlzdC5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbn07XG5jb25zdCBnZXRUYXNrTGVuZ3RoID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3ROdW1iZXIgPSBfMS5hcHAucHJvamVjdHNbKDAsIHByb2plY3RzXzEuYWN0aXZlUHJvamVjdCkoKV07XG4gICAgaWYgKGFjdGl2ZVByb2plY3ROdW1iZXIudGFza3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0YXNrTGVuZ3RoID0gYWN0aXZlUHJvamVjdE51bWJlci50YXNrcy5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0YXNrTGVuZ3RoO1xuICAgIH1cbn07XG5jb25zdCBnZW5lcmF0ZVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgaW5wdXRFbGVtZW50LnJlbW92ZSgpO1xuICAgIGlmIChfMS5hcHAucHJvamVjdHNbKDAsIHByb2plY3RzXzEuYWN0aXZlUHJvamVjdCkoKV0udGFza3MgPT09IHVuZGVmaW5lZClcbiAgICAgICAgXzEuYXBwLnByb2plY3RzWygwLCBwcm9qZWN0c18xLmFjdGl2ZVByb2plY3QpKCldLnRhc2tzID0gW3t9XTtcbiAgICBpbml0aWFsaXplVGFza3MoKTtcbiAgICBpZiAoXzEuYXBwLnByb2plY3RzWygwLCBwcm9qZWN0c18xLmFjdGl2ZVByb2plY3QpKCldLnRhc2tzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgKF9hID0gXzEuYXBwLnByb2plY3RzWygwLCBwcm9qZWN0c18xLmFjdGl2ZVByb2plY3QpKCldLnRhc2tzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHVzaChOZXdUYXNrKGlucHV0VmFsdWUpKTtcbiAgICB9XG4gICAgYWRkVGFza1RpdGxlKGlucHV0VmFsdWUpO1xuICAgICgwLCBkZXRhaWxzXzEuY3JlYXRlRGV0YWlsRWxlbWVudCkoKTtcbn07XG5jb25zdCBpbml0aWFsaXplVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gXzEuYXBwLnByb2plY3RzWygwLCBwcm9qZWN0c18xLmFjdGl2ZVByb2plY3QpKCldO1xuICAgIGlmIChhY3RpdmUudGFza3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYWN0aXZlLnRhc2tzWzBdLnRpdGxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZlLnRhc2tzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY2xlYXJUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFza0xpc3QgPiAqXCIpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmNsZWFyVGFza3MgPSBjbGVhclRhc2tzO1xuY29uc3QgY2hvb3NlVGFzayA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgKDAsIGRldGFpbHNfMS5jbGVhckRldGFpbHMpKCk7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVtb3ZlQWN0aXZlVGFzaygpO1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlkID0gXCJhY3RpdmVUYXNrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgKDAsIGRldGFpbHNfMS5jcmVhdGVEZXRhaWxFbGVtZW50KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICgwLCBkZXRhaWxzXzEuY2xlYXJEZXRhaWxzKSgpO1xuICAgICAgICAgICAgKDAsIGRldGFpbHNfMS5jcmVhdGVEZXRhaWxFbGVtZW50KSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0cy5jaG9vc2VUYXNrID0gY2hvb3NlVGFzaztcbmNvbnN0IGFjdGl2ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aXZlVGFza1wiKTtcbiAgICBpZiAoYWN0aXZlVGFza0J1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGFjdGl2ZVRhc2tCdXR0b24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFza051bWJlciA9IE51bWJlci5wYXJzZUludChhY3RpdmVUYXNrQnV0dG9uLmNsYXNzTmFtZS5zbGljZSgtMSkpO1xuICAgICAgICByZXR1cm4gYWN0aXZlVGFza051bWJlciA9PT0gMCA/IGFjdGl2ZVRhc2tOdW1iZXIgOiBhY3RpdmVUYXNrTnVtYmVyIC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuZXhwb3J0cy5hY3RpdmVUYXNrID0gYWN0aXZlVGFzaztcbmNvbnN0IHJlbW92ZUFjdGl2ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aXZlVGFza1wiKTtcbiAgICBpZiAoYWN0aXZlUHJvamVjdCAhPT0gbnVsbClcbiAgICAgICAgYWN0aXZlUHJvamVjdC5pZCA9IFwiXCI7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=