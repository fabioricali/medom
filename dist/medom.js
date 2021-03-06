// [AIV_SHORT]  Medom Build version: 0.3.1  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("medom", [], factory);
	else if(typeof exports === 'object')
		exports["medom"] = factory();
	else
		root["medom"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    ROOT: '__MEDOM__',
    SIGN: '__MEDOM_SIGN__',
    EVENTS: ['show', 'hide', 'beforeContentChange', 'contentChange', 'state', 'beforeState'],
    PARSER: {
        REGEX: {
            ATTR: /{{(.*?)}}/,
            TEXT: /{{(.*?)}}/g
        },
        TAG: {
            TEXT: 'medom-text-node'
        }
    },
    ATTR: {
        WIDGET: 'data-medom-widget'
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0),
    ROOT = _require.ROOT;

var type = __webpack_require__(10);

/**
 * @class
 */

var DOM = function () {
    function DOM() {
        _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
        key: '_rootExists',
        value: function _rootExists(element) {
            return ROOT in element;
        }
    }, {
        key: '_getRoot',
        value: function _getRoot(element) {
            return element[ROOT];
        }

        /**
         * Get Medome component by Element
         * @param element
         * @returns {*}
         */

    }, {
        key: 'get',
        value: function get(element) {
            var items = [];
            var aType = type.get(element);

            if (aType === 'Array' || aType === 'NodeList') {
                items = !Array.isArray(element) ? Array.from(element) : element;
                var result = [];

                items.forEach(function (item) {
                    if (DOM._rootExists(item)) result.push(DOM._getRoot(item));
                });

                return result;
            } else if (element instanceof Element) {
                return DOM._getRoot(element);
            }
        }

        /**
         * Get Medom component by query
         * @param query
         * @param [ctx=document]
         * @returns {*}
         */

    }, {
        key: 'getByQuery',
        value: function getByQuery(query) {
            var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

            return DOM.get(ctx.querySelector(query));
        }

        /**
         * Get Medom components by query
         * @param query
         * @param [ctx=document]
         * @returns {*}
         */

    }, {
        key: 'getByQueryAll',
        value: function getByQueryAll(query) {
            var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

            return DOM.get(ctx.querySelectorAll(query));
        }
    }]);

    return DOM;
}();

module.exports = DOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Medom
 * @type {{Component: Component, DOM: DOM}}
 */
module.exports = {
  Component: __webpack_require__(5),
  DOM: __webpack_require__(2)
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var html = __webpack_require__(6);
var extend = __webpack_require__(8);

var _require = __webpack_require__(0),
    ROOT = _require.ROOT,
    EVENTS = _require.EVENTS,
    ATTR = _require.ATTR;

var Flak = __webpack_require__(9);
var DOM = __webpack_require__(2);
var equal = __webpack_require__(11);
var copy = __webpack_require__(12);
var parser = __webpack_require__(13);
var helper = __webpack_require__(15);

/**
 * @class
 */

var Component = function () {

    /**
     * Create instance
     * @param {string} tpl html string
     * @param {object} [cfg] configuration
     * @param {string} [cfg.widget] widget name
     * @param {string} [cfg.state] set initial state
     */
    function Component(tpl) {
        var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Component);

        this.cfg = extend.copy(cfg, {
            widget: '',
            state: {}
        });

        Object.defineProperty(this, 'dom', {
            value: html.create(tpl)
        });

        Object.defineProperty(this, 'state', {
            value: null,
            writable: true
        });

        Object.defineProperty(this, 'propsMap', {
            value: null,
            writable: true
        });

        Object.defineProperty(this, 'props', {
            value: null,
            writable: true
        });

        Object.defineProperty(this.dom, ROOT, {
            value: this
        });

        Object.defineProperty(this, 'emitter', {
            value: new Flak()
        });

        if (this.cfg.widget) {
            this.dom.setAttribute(ATTR.WIDGET, this.cfg.widget);
        }

        this._visible = true;

        this.propsMap = parser(this.dom);

        this.setState(this.cfg.state);
    }

    /**
     * Get component by widget name
     * @param {string} widget name
     * @returns {Component|undefined}
     */


    _createClass(Component, [{
        key: 'getWidget',
        value: function getWidget(widget) {
            return DOM.getByQuery('[' + ATTR.WIDGET + '="' + widget + '"]', this.dom);
        }

        /**
         * Get component by query
         * @param {string} query selector
         * @returns {Component|undefined}
         */

    }, {
        key: 'get',
        value: function get(query) {
            return DOM.getByQuery(query, this.dom);
        }

        /**
         * Get all components by query
         * @param {string} query selector
         * @returns {array}
         */

    }, {
        key: 'getAll',
        value: function getAll(query) {
            return DOM.getByQueryAll(query, this.dom);
        }

        /**
         * Check if component is visibile
         * @returns {boolean}
         */

    }, {
        key: 'isVisible',
        value: function isVisible() {
            return this._visible;
        }

        /**
         * Hide component
         * @param {object} [opt]
         * @param {string} [opt.type=display]
         * @returns {Component}
         * @fires Component#hide
         */

    }, {
        key: 'hide',
        value: function hide() {
            var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this.isVisible()) return this;

            opt = extend(opt, {
                type: 'display'
            });

            this.dom.style[opt.type] = opt.type === 'display' ? 'none' : 'hidden';

            this._visible = false;

            this.emitter.fire('hide', this);

            return this;
        }

        /**
         * Show component
         * @param {object} [opt]
         * @param {string} [opt.type=display]
         * @param {string} [opt.showType=block]
         * @returns {Component}
         * @fires Component#show
         */

    }, {
        key: 'show',
        value: function show() {
            var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            if (this.isVisible()) return this;

            opt = extend(opt, {
                type: 'display',
                showType: 'block'
            });

            this.dom.style[opt.type] = opt.showType;

            this._visible = true;

            this.emitter.fire('show', this);

            return this;
        }

        /**
         * Set props
         * @param {object} props
         * @returns {Component}
         * @fires Component#props
         * @fires Component#beforeProps
         */

    }, {
        key: 'setProps',
        value: function setProps() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!equal(props, this.props)) {
                var prevProps = copy(this.props);
                var newProps = copy(props);

                if (this.emitter.fireTheFirst('beforeProps', newProps, prevProps, this) === false) return this;

                var find = function find(props, targetProps) {
                    for (var p in props) {
                        if (props.hasOwnProperty(p) && targetProps.hasOwnProperty(p)) {
                            if (helper.isSigned(targetProps[p])) {
                                targetProps[p].nodeValue = props[p];
                            } else if (_typeof(props[p]) === 'object') {
                                find(props[p], targetProps[p]);
                            }
                        }
                    }
                };

                find(props, this.propsMap);

                this.props = newProps;
                this.emitter.fire('props', this.props, prevProps, this);
            }
            return this;
        }

        /**
         * Set state
         * @param {*} state
         * @returns {Component}
         * @fires Component#state
         * @fires Component#beforeState
         */

    }, {
        key: 'setState',
        value: function setState(state) {
            if (!equal(state, this.state)) {
                var prevState = copy(this.state);
                var newState = copy(state);

                if (this.emitter.fireTheFirst('beforeState', newState, prevState, this) === false) return this;

                this.state = newState;
                this.emitter.fire('state', this.state, prevState, this);
            }
            return this;
        }

        /**
         * Get current state
         * @returns {*}
         */

    }, {
        key: 'getState',
        value: function getState() {
            return this.state;
        }

        /**
         * Update content
         * @param content
         * @returns {Component}
         * @fires Component#beforeContentChange
         * @fires Component#contentChange
         */

    }, {
        key: 'setContent',
        value: function setContent(content) {
            if (content) {
                var old = this.dom.innerHTML;

                if (this.emitter.fireTheFirst('beforeContentChange', content, old, this) === false) return this;

                this.dom.innerHTML = content;
                if (content !== old) this.emitter.fire('contentChange', content, old, this);
            }
            return this;
        }

        /**
         * Get content
         * @returns {HTMLElement}
         */

    }, {
        key: 'getContent',
        value: function getContent() {
            return this.dom.innerHTML;
        }

        /**
         * Append other Medom components
         * @param {...(Component|HTMLElement)} cmp component to append
         * @returns {Component}
         * @fires Component#contentChange
         */

    }, {
        key: 'append',
        value: function append() {

            var items = [];

            for (var _len = arguments.length, cmp = Array(_len), _key = 0; _key < _len; _key++) {
                cmp[_key] = arguments[_key];
            }

            cmp.forEach(function (item) {
                if (Component.isComponent(item)) items.push(item.dom);else {
                    items.push(item);
                }
            });

            var old = this.getContent();

            html.render(this.dom, items);

            var content = this.getContent();

            if (content !== old) this.emitter.fire('contentChange', content, old, this);

            return this;
        }

        /**
         * Render component to target
         * @param target
         * @param {object} [opt]
         * @param {boolean} [opt.append=true]
         * @returns {Component}
         */

    }, {
        key: 'renderTo',
        value: function renderTo(target, opt) {
            opt = extend.copy(opt, {
                append: true
            });

            if (!opt.append) target.innerHTML = '';

            html.render(target, this.dom);
            return this;
        }

        /**
         * Adds listener to instance
         * @param eventName {string} event name
         * @param callback {Function} callback
         * @returns {Component}
         */

    }, {
        key: 'on',
        value: function on(eventName, callback) {
            if (Component.isComponentEvent(eventName)) this.emitter.on.call(this.emitter, eventName, callback);else {
                this.dom.addEventListener(eventName, callback);
            }
            return this;
        }

        /**
         * Suspends firing of the named event(s), works only with native component event.
         * @param eventName {...string} multiple event names to suspend
         * @returns {Component}
         */

    }, {
        key: 'suspendEvent',
        value: function suspendEvent() {
            for (var _len2 = arguments.length, eventName = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                eventName[_key2] = arguments[_key2];
            }

            this.emitter.suspendEvent.call(this.emitter, eventName);
            return this;
        }

        /**
         * Resumes firing of the named event(s), works only with native component event.
         * @param eventName {...string} multiple event names to resume.
         * @returns {Component}
         */

    }, {
        key: 'resumeEvent',
        value: function resumeEvent() {
            for (var _len3 = arguments.length, eventName = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                eventName[_key3] = arguments[_key3];
            }

            this.emitter.resumeEvent.call(this.emitter, eventName);
            return this;
        }

        /**
         * Suspends all events, works only with native component event.
         * @returns {Component}
         */

    }, {
        key: 'suspendEvents',
        value: function suspendEvents() {
            this.emitter.suspendEvents.call(this.emitter);
            return this;
        }

        /**
         * Resume all events, works only with native component event.
         * @returns {Component}
         */

    }, {
        key: 'resumeEvents',
        value: function resumeEvents() {
            this.emitter.resumeEvents.call(this.emitter);
            return this;
        }

        /**
         * Triggered when component content is changed
         * @event Component#beforeContentChange
         * @param {HTMLElement} candidate content
         * @param {HTMLElement} old content
         * @param {Component} me
         */

        /**
         * Triggered when component content is changed
         * @event Component#contentChange
         * @param {HTMLElement} current content
         * @param {HTMLElement} old content
         * @param {Component} me
         */

        /**
         * Triggered when component is show
         * @event Component#show
         * @param {Component} me
         */

        /**
         * Triggered when component is hidden
         * @event Component#hide
         * @param {Component} me
         */

        /**
         * Triggered before change state
         * @event Component#beforeState
         * @param {*} newState
         * @param {*} prevState
         * @param {Component} me
         */

        /**
         * Triggered when component change state
         * @event Component#state
         * @param {*} state
         * @param {*} prevState
         * @param {Component} me
         */

        /**
         * Check if is a Medom component
         * @param {*} cmp
         * @returns {boolean}
         */

    }], [{
        key: 'isComponent',
        value: function isComponent(cmp) {
            return cmp instanceof Component;
        }

        /**
         * @ignore
         */

    }, {
        key: 'isComponentEvent',
        value: function isComponentEvent(eventName) {
            return EVENTS.includes(eventName);
        }
    }]);

    return Component;
}();

module.exports = Component;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(7);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function toArray(value) {
    if (value === null || value === undefined) return [];else return Array.isArray(value) ? value : [value];
}

/**
 * dohtml
 * @type {{create: dom.create, isValidNode: dom.isValidNode, render: dom.render}}
 */
var dom = {
    /**
     * Create DOM element
     * @param str html string or a single tag
     * @returns {Element | Node | null}
     */
    create: function create(str) {
        var element;
        str = str.trim();

        if (/<.*>/g.test(str)) {
            var template = document.createElement('div');
            template.innerHTML = str;
            element = template.firstChild;
        } else {
            element = document.createElement(str);
        }

        if (!this.isValidNode(element)) throw new Error('Element not valid');
        return element;
    },

    /**
     * Check if is a valid Node
     * @param {*} el
     * @returns {Boolean}
     */
    isValidNode: function isValidNode(el) {
        return el && 'nodeType' in el;
    },

    /**
     * Append multiple elements into target element
     * @param {Element} target
     * @param {Array | Element} els
     * @returns {Element | Node | Error}
     */
    render: function render(target, els) {
        els = toArray(els);
        if (!this.isValidNode(target)) throw new Error('Require a valid HTML Element');

        els.forEach(function (el) {
            target.appendChild(el);
        });
        return target;
    }
};

module.exports = dom;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// [AIV]  Defaulty Build version: 2.1.0  
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["defaulty"] = factory();else root["defaulty"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = __webpack_require__(1);

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      var deepCopy = __webpack_require__(2);

      /**
       * Copies deep missing properties to the target object
       * @param targetObj {Object} target object
       * @param defaultObj {Object} default object
       * @param exclude {Array} exclude properties from copy
       * @returns {*}
       */

      var defaulty = function defaulty(targetObj, defaultObj) {
        var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        for (var i in defaultObj) {
          /* istanbul ignore else  */
          if (defaultObj.hasOwnProperty(i) && exclude.indexOf(i) === -1) {
            if (!targetObj.hasOwnProperty(i) || typeof targetObj[i] === 'undefined') {
              targetObj[i] = defaultObj[i];
            } else if (_typeof(targetObj[i]) === 'object') {
              defaulty(targetObj[i], defaultObj[i]);
            }
          }
        }
        return targetObj;
      };

      /**
       * Creates new target object and copies deep missing properties to the target object
       * @param args[0] {Object} target object
       * @param args[1] {Object} default object
       * @param args[2] {Array} exclude properties from copy
       * @returns {*}
       */
      var copy = function copy() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        //args[0] = Object.assign({}, args[0]);
        args[0] = deepCopy(args[0]);
        return defaulty.apply(undefined, args);
      };

      module.exports = defaulty;
      module.exports.copy = copy;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      ;(function (name, root, factory) {
        if ((false ? 'undefined' : _typeof(exports)) === 'object') {
          module.exports = factory();
        }
        /* istanbul ignore next */
        else if (true) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
            root[name] = factory();
          }
      })('dcopy', undefined, function () {
        /**
         * Deep copy objects and arrays
         *
         * @param {Object/Array} target
         * @return {Object/Array} copy
         * @api public
         */

        return function (target) {
          if (/number|string|boolean/.test(typeof target === 'undefined' ? 'undefined' : _typeof(target))) {
            return target;
          }
          if (target instanceof Date) {
            return new Date(target.getTime());
          }

          var copy = target instanceof Array ? [] : {};
          walk(target, copy);
          return copy;

          function walk(target, copy) {
            for (var key in target) {
              var obj = target[key];
              if (obj instanceof Date) {
                var value = new Date(obj.getTime());
                add(copy, key, value);
              } else if (obj instanceof Function) {
                var value = obj;
                add(copy, key, value);
              } else if (obj instanceof Array) {
                var value = [];
                var last = add(copy, key, value);
                walk(obj, last);
              } else if (obj instanceof Object) {
                var value = {};
                var last = add(copy, key, value);
                walk(obj, last);
              } else {
                var value = obj;
                add(copy, key, value);
              }
            }
          }
        };

        /**
         * Adds a value to the copy object based on its type
         *
         * @api private
         */

        function add(copy, key, value) {
          if (copy instanceof Array) {
            copy.push(value);
            return copy[copy.length - 1];
          } else if (copy instanceof Object) {
            copy[key] = value;
            return copy[key];
          }
        }
      });

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// [AIV]  Flak Build version: 1.0.0  
(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["flak"] = factory();else root["flak"] = factory();
})(undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 0);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = __webpack_require__(1);

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var helper = __webpack_require__(2);
            var error = __webpack_require__(3);

            var Flak = function () {
                //TODO add support to cross-domain through postMessage, see: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
                /**
                 * Constructor
                 * @param [opts] {Object} options
                 * @param [opts.maxListeners=10] {number} Max number listeners per event
                 * @param [opts.asyncDelay=10] {number} Delay in ms for async method `fireAsync`
                 * @example
                 * const emitter = new Flak();
                 */
                function Flak() {
                    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _classCallCheck(this, Flak);

                    /**
                     * Class options
                     * @type {{maxListeners: number, asyncDelay: number}}
                     * @ignore
                     */
                    this.defaultClassOpts = {
                        maxListeners: 10,
                        asyncDelay: 10 // ms
                    };

                    /**
                     * Event options
                     * @type {{maxCalls: number, prepend: boolean}}
                     * @ignore
                     */
                    this.defaultListenerOpts = {
                        maxCalls: 0,
                        prepend: false
                    };

                    this.opts = helper.defaults(opts, this.defaultClassOpts);
                    this.events = {};
                }

                /**
                 * Create event and add listener
                 * @param eventName {string} event name
                 * @param listener {Function} listener function
                 * @param [opts] {Object} option object
                 * @param [opts.maxCalls=0] {number} Max calls for event created, disabled if is `0`
                 * @param [opts.prepend=false] {boolean} Adds the listener function to the beginning of the listeners array for the event named `eventName`
                 * @private
                 * @ignore
                 */

                _createClass(Flak, [{
                    key: '_createEvent',
                    value: function _createEvent(eventName, listener, opts) {

                        if (!this.events[eventName]) this.events[eventName] = [];

                        if (this.opts.maxListeners) {
                            var maxListeners = this.opts.maxListeners;
                            var listenersCount = this.events[eventName].length;
                            if (listenersCount >= maxListeners) throw new Error(error[3] + maxListeners);
                        }

                        listener.opts = helper.defaults(opts, this.defaultListenerOpts);

                        listener.state = {
                            suspended: false,
                            calls: 0
                        };

                        if (opts.prepend) this.events[eventName].unshift(listener);else this.events[eventName].push(listener);

                        this._created.call(this, eventName, listener, opts);
                    }

                    /**
                     * Call event
                     * @param eventName {string} event name
                     * @param eventListener {Function} event listener
                     * @param args args {*} ...arguments
                     * @private
                     * @ignore
                     */

                }, {
                    key: '_callEvent',
                    value: function _callEvent(eventName, eventListener, args) {
                        if (eventListener.state.suspended) return;

                        if (eventListener.opts.maxCalls && eventListener.state.calls++ >= eventListener.opts.maxCalls) {
                            this.off(eventName, eventListener);
                            return;
                        }

                        this._catchAll.call(this, args);
                        return eventListener.apply(this, args);
                    }

                    /**
                     *
                     * @param events {Array} event list
                     * @param suspended {boolean}
                     * @returns {Flak}
                     * @private
                     * @ignore
                     */

                }, {
                    key: '_suspendEvent',
                    value: function _suspendEvent() {
                        var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var suspended = arguments[1];

                        var eventName = void 0;

                        for (var event in events) {
                            eventName = events[event];
                            if (this.events[eventName]) {
                                this.events[eventName].forEach(function (e) {
                                    e.state.suspended = suspended;
                                });
                            }
                        }

                        return this;
                    }

                    /**
                     * Callback on create
                     * @private
                     * @ignore
                     */

                }, {
                    key: '_created',
                    value: function _created() {}

                    /**
                     * Callback on remove
                     * @private
                     * @ignore
                     */

                }, {
                    key: '_removed',
                    value: function _removed() {}

                    /**
                     * Callback catch all
                     * @private
                     * @ignore
                     */

                }, {
                    key: '_catchAll',
                    value: function _catchAll() {}

                    /**
                     * Adds event listener for eventName
                     * @param eventName {string} event name
                     * @param listener {(Function|Function[])} listener function
                     * @param [opts] {Object} option object
                     * @param [opts.maxCalls=0] {number} Max calls for event created, disabled if is `0`
                     * @param [opts.prepend=false] {boolean} Adds the listener function to the beginning of the listeners array for the event named `eventName`
                     * @returns {Flak}
                     * @example
                     * emitter.on('myEvent', (param)=>{
                     *      console.log(param);
                     * });
                     */

                }, {
                    key: 'on',
                    value: function on(eventName, listener) {
                        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                        if (!helper.is(eventName, 'string')) throw new Error(error[0]);

                        eventName = eventName.trim();

                        if (!eventName.length) throw new Error(error[4]);

                        if (helper.is(listener, 'array')) {
                            for (var i in listener) {
                                if (listener.hasOwnProperty(i)) {
                                    if (!helper.is(listener[i], 'function')) throw new Error(error[1]);
                                    this._createEvent(eventName, listener[i], opts);
                                }
                            }
                        } else {
                            if (!helper.is(listener, 'function')) throw new Error(error[1]);
                            this._createEvent(eventName, listener, opts);
                        }

                        return this;
                    }

                    /**
                     * Adds a one time listener function for the event named eventName.
                     * This is a wrapper method of `on` that set to `opts.maxCalls = 1`
                     * @param eventName {string} event name
                     * @param listener {(Function|Function[])} listener function
                     * @returns {Flak}
                     * @example
                     * emitter.once('myEvent', (param)=>{
                     *      console.log(param);
                     * });
                     */

                }, {
                    key: 'once',
                    value: function once(eventName, listener) {
                        return this.on(eventName, listener, {
                            maxCalls: 1
                        });
                    }

                    /**
                     * Calls each of the listeners registered for the event
                     * @param eventName {string} event name
                     * @param [args] {*} ...arguments
                     * @returns {Flak}
                     * @example
                     * emitter.fire('myEvent', param1, param2, ...);
                     */

                }, {
                    key: 'fire',
                    value: function fire(eventName) {

                        if (this.exists(eventName)) {
                            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                args[_key - 1] = arguments[_key];
                            }

                            for (var j = 0; j < this.events[eventName].length; j++) {
                                this._callEvent(eventName, this.events[eventName][j], args);
                            }
                        }return this;
                    }

                    /**
                     * Calls the first of the listeners registered for the event and return it
                     * @param eventName {string} event name
                     * @param [args] {*} ...arguments
                     * @returns {*}
                     * @since 0.3.0
                     * @example
                     * emitter.on('myEvent', (param1, param2)=>{
                     *      return param1 + '-' + param2;
                     * });
                     * console.log('foo-bar' === emitter.fireTheFirst('myEvent', 'foo', 'bar')) //=> true;
                     */

                }, {
                    key: 'fireTheFirst',
                    value: function fireTheFirst(eventName) {
                        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                            args[_key2 - 1] = arguments[_key2];
                        }

                        /* istanbul ignore else  */
                        if (this.exists(eventName)) return this._callEvent(eventName, this.events[eventName][0], args);
                    }

                    /**
                     * Calls each of the listeners registered for the event, this method is async
                     * @param eventName {string} event name
                     * @param args {*} ...arguments
                     * @example
                     * emitter.fireAsync('myEvent', param1, param2, ...);
                     */

                }, {
                    key: 'fireAsync',
                    value: function fireAsync(eventName) {
                        var _this = this;

                        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                            args[_key3 - 1] = arguments[_key3];
                        }

                        args.unshift(eventName);
                        setTimeout(function () {
                            _this.fire.apply(_this, args);
                        }, this.opts.asyncDelay);
                    }

                    /**
                     * Remove event/listener
                     * @param eventName {string} event name
                     * @param [listener] {Function} listener function, if is set remove listener only for this event
                     * @returns {Flak}
                     * @example
                     * emitter.off('myEvent'); // remove event
                     * emitter.off('myEvent', listener); // remove specific listener
                     */

                }, {
                    key: 'off',
                    value: function off(eventName, listener) {
                        if (!helper.is(eventName, 'string')) throw new Error(error[0]);

                        /* istanbul ignore else  */
                        if (this.events[eventName]) if (typeof listener === 'function') {
                            for (var i = 0; i < this.events[eventName].length; i++) {
                                if (this.events[eventName][i] === listener) {
                                    this.events[eventName].splice(i, 1);
                                    this._removed.call(this, eventName, listener);
                                }
                            }
                        } else {
                            delete this.events[eventName];
                            this._removed.call(this, eventName);
                        }

                        return this;
                    }

                    /**
                     * Adds the listener function to the beginning of the listeners array for the event named eventName.
                     * This is a wrapper method of `on` that set to `opts.prepend = true`
                     * @param eventName {string} event name
                     * @param listener {(Function|Function[])} listener function
                     * @returns {Flak}
                     */

                }, {
                    key: 'prependListener',
                    value: function prependListener(eventName, listener) {
                        return this.on(eventName, listener, {
                            prepend: true
                        });
                    }

                    /**
                     * Adds a one time listener function to the beginning of the listeners array for the event named eventName.
                     * This is a wrapper method of `on` that set to `opts.maxCalls = 1` and `opts.prepend = true`
                     * @param eventName {string} event name
                     * @param listener {(Function|Function[])} listener function
                     * @returns {Flak}
                     */

                }, {
                    key: 'prependOnceListener',
                    value: function prependOnceListener(eventName, listener) {
                        return this.on(eventName, listener, {
                            maxCalls: 1,
                            prepend: true
                        });
                    }

                    /**
                     * Suspends firing of the named event(s).
                     * @param eventName {...string} multiple event names to suspend
                     * @returns {Flak}
                     */

                }, {
                    key: 'suspendEvent',
                    value: function suspendEvent() {
                        for (var _len4 = arguments.length, eventName = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                            eventName[_key4] = arguments[_key4];
                        }

                        return this._suspendEvent(eventName, true);
                    }

                    /**
                     * Resumes firing of the named event(s).
                     * @param eventName {...string} multiple event names to resume.
                     * @returns {Flak}
                     */

                }, {
                    key: 'resumeEvent',
                    value: function resumeEvent() {
                        for (var _len5 = arguments.length, eventName = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                            eventName[_key5] = arguments[_key5];
                        }

                        return this._suspendEvent(eventName, false);
                    }

                    /**
                     * Suspends all events.
                     * @returns {Flak}
                     */

                }, {
                    key: 'suspendEvents',
                    value: function suspendEvents() {
                        return this._suspendEvent(Object.keys(this.events), true);
                    }

                    /**
                     * Resume all events.
                     * @returns {Flak}
                     */

                }, {
                    key: 'resumeEvents',
                    value: function resumeEvents() {
                        return this._suspendEvent(Object.keys(this.events), false);
                    }

                    /**
                     * Check if an event is suspended
                     * @param eventName {string}
                     * @returns {boolean}
                     */

                }, {
                    key: 'isSuspended',
                    value: function isSuspended(eventName) {
                        /* istanbul ignore else  */
                        if (!this.exists(eventName)) return false;
                        return this.events[eventName][0].state.suspended;
                    }

                    /**
                     * Remove all events
                     * @returns {Flak}
                     * @example
                     * emitter.clear();
                     */

                }, {
                    key: 'clear',
                    value: function clear() {
                        this.events = [];
                        return this;
                    }

                    /**
                     * Get listeners count
                     * @param eventName {string} event name
                     * @returns {number}
                     * @example
                     * emitter.on('event', listener1);
                     * emitter.on('event', listener2);
                     * emitter.on('event1', listener3);
                     *
                     * emitter.getListenersCount('event'); // 2
                     */

                }, {
                    key: 'getListenersCount',
                    value: function getListenersCount(eventName) {
                        return this.getListeners(eventName).length;
                    }

                    /**
                     * Get listeners list of event
                     * @param eventName {string} event name
                     * @returns {Array}
                     */

                }, {
                    key: 'getListeners',
                    value: function getListeners(eventName) {
                        if (!helper.is(eventName, 'string')) throw new Error(error[0]);

                        if (!this.exists(eventName)) throw new Error(error[5]);

                        return this.events[eventName];
                    }

                    /**
                     * Get events list
                     * @returns {Object}
                     */

                }, {
                    key: 'getEvents',
                    value: function getEvents() {
                        return this.events;
                    }

                    /**
                     * Check if event exists
                     * @param eventName {string} event name
                     * @returns {boolean}
                     */

                }, {
                    key: 'exists',
                    value: function exists(eventName) {
                        if (!helper.is(eventName, 'string')) throw new Error(error[0]);

                        return !helper.is(this.events[eventName], 'undefined');
                    }

                    /**
                     * Get max number of listeners per event
                     * @returns {number}
                     */

                }, {
                    key: 'getMaxListeners',
                    value: function getMaxListeners() {
                        return this.opts.maxListeners;
                    }

                    /**
                     * Set max number of listeners per event
                     * @param value {int} number max listeners
                     * @returns {Flak}
                     */

                }, {
                    key: 'setMaxListeners',
                    value: function setMaxListeners(value) {
                        if (!helper.is(value, 'number')) throw new Error(error[2]);

                        this.opts.maxListeners = value;
                        return this;
                    }

                    /**
                     * Triggered when an event is fired
                     * @param callback {Function} callback function
                     * @returns {Flak}
                     * @since 0.2.0
                     * @example
                     * emitter.onCatchAll(args=>{
                     *      // args is an array of params
                     *      console.log(args);
                     * });
                     *
                     * emitter.on('myEvent', param=>{
                     *      console.log(param);
                     * });
                     *
                     * emitter.fire('myEvent');
                     */

                }, {
                    key: 'onCatchAll',
                    value: function onCatchAll(callback) {
                        this._catchAll = callback;
                        return this;
                    }

                    /**
                     * Triggered when an event is created
                     * @param callback {Function} callback function
                     * @returns {Flak}
                     * @example
                     * emitter.onCreated(obj=>{
                     *      console.log(obj); //-> eventName, listener, opts
                     * });
                     *
                     * emitter.on('myEvent', (param)=>{
                     *      console.log(param);
                     * });
                     */

                }, {
                    key: 'onCreated',
                    value: function onCreated(callback) {
                        this._created = callback;
                        return this;
                    }

                    /**
                     * Triggered when an event is removed
                     * @param callback {Function} callback function
                     * @returns {Flak}
                     * @example
                     * emitter.onRemoved(obj=>{
                     *      console.log(obj); //-> eventName, (listener)
                     * });
                     *
                     * emitter.off('myEvent');
                     */

                }, {
                    key: 'onRemoved',
                    value: function onRemoved(callback) {
                        this._removed = callback;
                        return this;
                    }
                }]);

                return Flak;
            }();

            module.exports = Flak;
            module.exports._error = error;

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var helper = {};

            /**
             * Get object type
             * @param object {*}
             * @param type {string}
             * @returns {boolean}
             */
            helper.is = function (object, type) {
                var objectToString = Object.prototype.toString.call(object);
                return objectToString.toLowerCase() === '[object ' + type + ']'.toLowerCase();
            };

            /**
             * Set default value
             * @param opts {Object} options
             * @param defaultOpts {Object} default options
             * @returns {*}
             */
            helper.defaults = function (opts, defaultOpts) {
                for (var i in defaultOpts) {
                    if (defaultOpts.hasOwnProperty(i)) if (!opts.hasOwnProperty(i)) {
                        opts[i] = defaultOpts[i];
                    } else {
                        if (_typeof(opts[i]) === 'object') {
                            helper.defaults(opts[i], defaultOpts[i]);
                        }
                    }
                }
                return opts;
            };

            module.exports = helper;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = ['event name is required and must be a string', 'listener is required and must be a function or an array of function', 'value must be a number', 'increase maxListeners per event: ', 'event name not valid', 'event not found'];

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @global
 * @type {{_toString: (function(*=)), get: (function(Object)), is: (function(Object, string)), throw: (function(Object, string, *=))}}
 */
var Typis = {

    /**
     * Convert object to string
     * @param object
     * @returns {*}
     * @private
     * @ignore
     */
    _toString: function _toString(object) {
        return Object.prototype.toString.call(object);
    },

    /**
     * Get object type
     * @param object {Object} object
     * @returns {string}
     * @example
     * typis.get('hello'); //=> String
     */
    get: function get(object) {
        var toString = Typis._toString(object);
        return toString.slice(8, toString.length - 1);
    },

    /**
     * Check object type
     * @param object {Object} object
     * @param type {string} type string can be also lowercase
     * @returns {boolean}
     * @example
     * typis.is('hello', 'number'); //=> false
     */
    is: function is(object, type) {
        if (typeof type !== 'string') throw new Error('type must be a string');
        return Typis.get(object).toLowerCase() === type.toLowerCase();
    },

    /**
     * Check object type and throw an error if not satisfied
     * @param object {Object} object
     * @param type {string} type string can be also lowercase
     * @param [msg] {string} message error
     * @returns {boolean}
     * @example
     * try {
     *      typis.throw('hello', 'number');
     * } catch(e) {
     *      console.log(e);
     * }
     */
    throw: function _throw(object, type) {
        var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        if (!Typis.is(object, type)) {
            throw new Error(msg || 'object type mismatch, must be a ' + type);
        }
        return true;
    }
};

module.exports = Typis;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  var arrA = isArray(a),
      arrB = isArray(b),
      i,
      length,
      key;

  if (arrA && arrB) {
    length = a.length;
    if (length != b.length) return false;
    for (i = 0; i < length; i++) {
      if (!equal(a[i], b[i])) return false;
    }return true;
  }

  if (arrA != arrB) return false;

  var dateA = a instanceof Date,
      dateB = b instanceof Date;
  if (dateA != dateB) return false;
  if (dateA && dateB) return a.getTime() == b.getTime();

  var regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
  if (regexpA != regexpB) return false;
  if (regexpA && regexpB) return a.toString() == b.toString();

  if (a instanceof Object && b instanceof Object) {
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) return false;

    for (i = 0; i < length; i++) {
      if (!hasProp.call(b, keys[i])) return false;
    }for (i = 0; i < length; i++) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (name, root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
  }
  /* istanbul ignore next */
  else if (true) {
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
      root[name] = factory();
    }
})('dcopy', undefined, function () {
  /**
   * Deep copy objects and arrays
   *
   * @param {Object/Array} target
   * @return {Object/Array} copy
   * @api public
   */

  return function (target) {
    if (/number|string|boolean/.test(typeof target === 'undefined' ? 'undefined' : _typeof(target))) {
      return target;
    }
    if (target instanceof Date) {
      return new Date(target.getTime());
    }

    var copy = target instanceof Array ? [] : {};
    walk(target, copy);
    return copy;

    function walk(target, copy) {
      for (var key in target) {
        var obj = target[key];
        if (obj instanceof Date) {
          var value = new Date(obj.getTime());
          add(copy, key, value);
        } else if (obj instanceof Function) {
          var value = obj;
          add(copy, key, value);
        } else if (obj instanceof Array) {
          var value = [];
          var last = add(copy, key, value);
          walk(obj, last);
        } else if (obj instanceof Object) {
          var value = {};
          var last = add(copy, key, value);
          walk(obj, last);
        } else {
          var value = obj;
          add(copy, key, value);
        }
      }
    }
  };

  /**
   * Adds a value to the copy object based on its type
   *
   * @api private
   */

  function add(copy, key, value) {
    if (copy instanceof Array) {
      copy.push(value);
      return copy[copy.length - 1];
    } else if (copy instanceof Object) {
      copy[key] = value;
      return copy[key];
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helper = __webpack_require__(14);

var _require = __webpack_require__(0),
    PARSER = _require.PARSER,
    SIGN = _require.SIGN;

/**
 * Parse component
 * @param cmp
 * @returns {{}}
 */


function parser(cmp) {

    var props = {};
    var textNodes = [];
    var regexAttr = PARSER.REGEX.ATTR;
    var regexText = PARSER.REGEX.TEXT;

    var el = cmp.hasOwnProperty('dom') ? cmp.dom : cmp || document.createElement('div');

    function scanner(n) {
        do {
            if (n.nodeType === 1) {
                //console.log('attribute.value',Array.from(n.attributes));
                Array.from(n.attributes).forEach(function (attribute) {
                    //console.log('attribute.value', attribute.name);
                    var key = attribute.value.match(regexAttr);
                    if (key) {
                        var name = key[1];
                        var component = void 0;

                        if (n.nodeName.toLowerCase() === PARSER.TAG.TEXT) {
                            component = document.createTextNode('');
                            textNodes.push({
                                old: n,
                                new: component
                            });
                        } else {
                            component = attribute;
                        }

                        // Sign component
                        component[SIGN] = true;

                        helper.createProp(name, props, component);
                    }
                });
            }
            if (n.hasChildNodes()) {
                scanner(n.firstChild);
            }
        } while (n = n.nextSibling);
    }

    helper.transformTag(el, regexText);
    scanner(el);
    helper.replaceComponent(textNodes);

    return props;
}

module.exports = parser;
module.exports.helper = helper;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    PARSER = _require.PARSER;

function sanitize(field) {
    //console.log('field', field);
    return field.replace(/[ "=]/g, '');
}

function transformTag(el, regex) {
    el.innerHTML = el.innerHTML.replace(regex, function replacer(match) {
        // Remove spaces
        match = sanitize(match);
        return '<' + PARSER.TAG.TEXT + ' value=' + match + '></' + PARSER.TAG.TEXT + '>';
    });
}

function replaceComponent(textNodes) {
    textNodes.forEach(function (item) {
        item.old.parentNode.replaceChild(item.new, item.old);
    });
}

function createProp(name, props, component) {
    name.split('.').reduce(function (o, i, y, m) {
        var isLast = m[m.length - 1] === i;
        if (isLast) {
            if (o.hasOwnProperty(i)) {
                if (!o[i].length) o[i] = [component];else {
                    if (!Array.isArray(o[i])) o[i] = [o[i]];
                    o[i].push(component);
                }
            } else {
                o[i] = component;
            }
        } else if (!o.hasOwnProperty(i)) {
            o[i] = [];
        }

        return o[i];
    }, props);
}

module.exports = {
    createProp: createProp,
    sanitize: sanitize,
    transformTag: transformTag,
    replaceComponent: replaceComponent
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    SIGN = _require.SIGN;

function isSigned(n) {
    return n.hasOwnProperty(SIGN);
}

module.exports = {
    isSigned: isSigned
};

/***/ })
/******/ ]);
}); 