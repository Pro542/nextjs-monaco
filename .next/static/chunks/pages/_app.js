/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/pages/_app.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/pages/_app.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ../.yarn/berry/cache/regenerator-runtime-npm-0.13.4-09f9ad5d1a-9.zip/node_modules/regenerator-runtime/runtime.js */ \"../.yarn/berry/cache/regenerator-runtime-npm-0.13.4-09f9ad5d1a-9.zip/node_modules/regenerator-runtime/runtime.js\"));\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function get() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function get() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault1(__webpack_require__(/*! react */ \"../.yarn/berry/cache/react-npm-17.0.2-99ba37d931-9.zip/node_modules/react/index.js\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/shared/lib/utils.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault1(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(_runtimeJs.default.mark(function _callee(param) {\n        var Component, ctx, pageProps;\n        return _runtimeJs.default.wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    Component = param.Component, ctx = param.ctx;\n                    _ctx.next = 3;\n                    return (0, _utils).loadGetInitialProps(Component, ctx);\n                case 3:\n                    pageProps = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        pageProps: pageProps\n                    });\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nvar App = /*#__PURE__*/ function(_Component) {\n    _inherits(App, _Component);\n    var _super = _createSuper(App);\n    function App() {\n        _classCallCheck(this, App);\n        return _super.apply(this, arguments);\n    }\n    _createClass(App, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _props = this.props, Component = _props.Component, pageProps = _props.pageProps;\n                return(/*#__PURE__*/ _react.default.createElement(Component, Object.assign({\n                }, pageProps)));\n            }\n        }\n    ]);\n    return App;\n}(_react.default.Component);\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtNzUxYWY0MmRkMS8yLy55YXJuL2JlcnJ5L2NhY2hlL25leHQtbnBtLTEyLjAuNC1mY2JkNmU1ZDNlLTkuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1pBLDhDQUE2QyxDQUFDO0lBQzFDRyxLQUFLLEVBQUUsSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGSCxtREFBa0QsQ0FBQztJQUMvQ0ksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLENBQWJBLEdBQUcsR0FBYSxDQUFDO1FBQ2IsTUFBTSxDQUFDQyxNQUFNLENBQUNDLGVBQWU7SUFDakMsQ0FBQztBQUNMLENBQUMsRUFBQztBQUNGUCx1REFBc0QsQ0FBQztJQUNuREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxRQUFRLENBQWJBLEdBQUcsR0FBYSxDQUFDO1FBQ2IsTUFBTSxDQUFDQyxNQUFNLENBQUNFLG1CQUFtQjtJQUNyQyxDQUFDO0FBQ0wsQ0FBQyxFQUFDO0FBQ0ZOLGtCQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDUSxNQUFNLEdBQUdDLHVCQUFzQixDQUFDQyxtQkFBTyxDQUFDLGlHQUFPO0FBQ25ELEdBQUcsQ0FBQ04sTUFBTSxHQUFHTSxtQkFBTyxDQUFDLHdLQUFxQjtTQUNqQ0Msa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3hFLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsR0FBRyxDQUFDQyxJQUFJLEdBQUdQLEdBQUcsQ0FB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VSxDQUF6QkEsU0FBUztnQkFDN0IsTUFBTSxDQUFDLEVBQWEsWUFBQzdCLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDcUMsYUFBYSxDQUFDVCxTQUFTLEVBQUVyQyxNQUFNLENBQUMrQyxNQUFNLENBQUMsQ0FBQztnQkFDNUUsQ0FBQyxFQUFFUixTQUFTO1lBQ2hCLENBQUM7OztXQUxDSSxHQUFHO0VBQVNqQyxNQUFNLENBQUNELE9BQU8sQ0FBQzRCLFNBQVM7QUFPMUNNLEdBQUcsQ0FBQ0ssbUJBQW1CLEdBQUdQLGtCQUFrQjtBQUM1Q0UsR0FBRyxDQUFDTSxlQUFlLEdBQUdSLGtCQUFrQjtBQUN4Q3ZDLGtCQUFlLEdBQUd5QyxHQUFHLENBRXJCLENBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLy55YXJuL19fdmlydHVhbF9fL25leHQtdmlydHVhbC03NTFhZjQyZGQxLzIvLnlhcm4vYmVycnkvY2FjaGUvbmV4dC1ucG0tMTIuMC40LWZjYmQ2ZTVkM2UtOS56aXAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzPzg0MTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app! ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/_app\",\n      function () {\n        return __webpack_require__(/*! private-next-pages/_app */ \"./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/pages/_app.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/_app\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtNzUxYWY0MmRkMS8yLy55YXJuL2JlcnJ5L2NhY2hlL25leHQtbnBtLTEyLjAuNC1mY2JkNmU1ZDNlLTkuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcz9wYWdlPSUyRl9hcHAmYWJzb2x1dGVQYWdlUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHNLQUF5QjtBQUNoRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YmNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvX2FwcFwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app!"), __webpack_exec__("./.yarn/__virtual__/next-virtual-751af42dd1/2/.yarn/berry/cache/next-npm-12.0.4-fcbd6e5d3e-9.zip/node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);