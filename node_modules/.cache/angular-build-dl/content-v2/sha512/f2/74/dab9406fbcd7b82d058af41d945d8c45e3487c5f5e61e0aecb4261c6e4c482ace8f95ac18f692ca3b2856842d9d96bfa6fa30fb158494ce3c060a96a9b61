function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photo-tab-photo-tab-module"], {
  /***/
  "./node_modules/@byteowls/capacitor-filesharer/dist/esm/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@byteowls/capacitor-filesharer/dist/esm/index.js ***!
    \***********************************************************************/

  /*! exports provided: FileSharerPluginWeb, FileSharer */

  /***/
  function node_modulesByteowlsCapacitorFilesharerDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./web */
    "./node_modules/@byteowls/capacitor-filesharer/dist/esm/web.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileSharerPluginWeb", function () {
      return _web__WEBPACK_IMPORTED_MODULE_0__["FileSharerPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileSharer", function () {
      return _web__WEBPACK_IMPORTED_MODULE_0__["FileSharer"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@byteowls/capacitor-filesharer/dist/esm/web.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@byteowls/capacitor-filesharer/dist/esm/web.js ***!
    \*********************************************************************/

  /*! exports provided: FileSharerPluginWeb, FileSharer */

  /***/
  function node_modulesByteowlsCapacitorFilesharerDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSharerPluginWeb", function () {
      return FileSharerPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSharer", function () {
      return FileSharer;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var FileSharerPluginWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
      _inherits(FileSharerPluginWeb, _capacitor_core__WEBP);

      var _super = _createSuper(FileSharerPluginWeb);

      function FileSharerPluginWeb() {
        _classCallCheck(this, FileSharerPluginWeb);

        return _super.call(this, {
          name: 'FileSharer',
          platforms: ['web']
        });
      }

      _createClass(FileSharerPluginWeb, [{
        key: "share",
        value: function share(options) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      var blob = new Blob([_this.toByteArray(options.base64Data)], {
                        type: options.contentType
                      });
                      file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](blob, options.filename);
                      resolve();
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "toByteArray",
        value: function toByteArray(base64Data) {
          var byteCharacters = atob(base64Data);
          var byteNumbers = new Array(byteCharacters.length);

          for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }

          return new Uint8Array(byteNumbers);
        }
      }]);

      return FileSharerPluginWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

    var FileSharer = new FileSharerPluginWeb(); // this does not work for angular. You need to register the plugin in app.component.ts again.

    Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(FileSharer); //# sourceMappingURL=web.js.map

    /***/
  },

  /***/
  "./node_modules/file-saver/dist/FileSaver.min.js":
  /*!*******************************************************!*\
    !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFileSaverDistFileSaverMinJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (a, b) {
      if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
    })(this, function () {
      "use strict";

      function b(a, b) {
        return "undefined" == typeof b ? b = {
          autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
          autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
          type: a.type
        }) : a;
      }

      function c(a, b, c) {
        var d = new XMLHttpRequest();
        d.open("GET", a), d.responseType = "blob", d.onload = function () {
          g(d.response, b, c);
        }, d.onerror = function () {
          console.error("could not download file");
        }, d.send();
      }

      function d(a) {
        var b = new XMLHttpRequest();
        b.open("HEAD", a, !1);

        try {
          b.send();
        } catch (a) {}

        return 200 <= b.status && 299 >= b.status;
      }

      function e(a) {
        try {
          a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
          var b = document.createEvent("MouseEvents");
          b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
      }

      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
          a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
          g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
        var i = f.URL || f.webkitURL,
            j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
          i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function () {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
          var i = document.createElement("a");
          i.href = f, i.target = "_blank", setTimeout(function () {
            e(i);
          });
        }
      } : function (b, d, e, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
        var h = "application/octet-stream" === b.type,
            i = /constructor/i.test(f.HTMLElement) || f.safari,
            j = /CriOS\/[\d]+/.test(navigator.userAgent);

        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function () {
            var a = k.result;
            a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
          }, k.readAsDataURL(b);
        } else {
          var l = f.URL || f.webkitURL,
              m = l.createObjectURL(b);
          g ? g.location = m : location.href = m, g = null, setTimeout(function () {
            l.revokeObjectURL(m);
          }, 4E4);
        }
      });
      f.saveAs = g.saveAs = g, true && (module.exports = g);
    }); //# sourceMappingURL=FileSaver.min.js.map

    /***/

  },

  /***/
  "./src/app/explore-container/explore-container.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExploreContainerComponent = /*#__PURE__*/function () {
      function ExploreContainerComponent() {
        _classCallCheck(this, ExploreContainerComponent);
      }

      _createClass(ExploreContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExploreContainerComponent;
    }();

    ExploreContainerComponent.ɵfac = function ExploreContainerComponent_Factory(t) {
      return new (t || ExploreContainerComponent)();
    };

    ExploreContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExploreContainerComponent,
      selectors: [["app-explore-container"]],
      inputs: {
        name: "name"
      },
      decls: 7,
      vars: 1,
      consts: [["id", "container"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://ionicframework.com/docs/components"]],
      template: function ExploreContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Explore ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UI Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        }
      },
      styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZHVyYW5kL3BlcnNvL21zcHJfYXIvc3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-explore-container',
          templateUrl: './explore-container.component.html',
          styleUrls: ['./explore-container.component.scss']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/explore-container/explore-container.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/explore-container/explore-container.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _explore_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./explore-container.component */
    "./src/app/explore-container/explore-container.component.ts");

    var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
      _classCallCheck(this, ExploreContainerComponentModule);
    };

    ExploreContainerComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExploreContainerComponentModule
    });
    ExploreContainerComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExploreContainerComponentModule_Factory(t) {
        return new (t || ExploreContainerComponentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExploreContainerComponentModule, {
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreContainerComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]],
          exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/photo-tab/photo-tab.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/photo-tab/photo-tab.module.ts ***!
    \***********************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppPhotoTabPhotoTabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _photo_tab_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./photo-tab.page */
    "./src/app/photo-tab/photo-tab.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: Tab2PageModule
    });
    Tab2PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function Tab2PageModule_Factory(t) {
        return new (t || Tab2PageModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _photo_tab_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab2PageModule, {
        declarations: [_photo_tab_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Tab2PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _photo_tab_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]
          }])],
          declarations: [_photo_tab_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/photo-tab/photo-tab.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/photo-tab/photo-tab.page.ts ***!
    \*********************************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppPhotoTabPhotoTabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/screenshot/ngx */
    "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _byteowls_capacitor_filesharer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @byteowls/capacitor-filesharer */
    "./node_modules/@byteowls/capacitor-filesharer/dist/esm/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function Tab2Page_span_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Tab2Page_span_5_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.takeScreenshotURI();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Partager ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "mon dessin !");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function Tab2Page_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.userMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function Tab2Page_ion_content_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
      }
    }

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(actionSheetController, screenshot) {
        _classCallCheck(this, Tab2Page);

        this.actionSheetController = actionSheetController;
        this.screenshot = screenshot;
        this.state = false;
      }

      _createClass(Tab2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.displayCamera = true;
                    this.displayAlertMissing = true;
                    this.displayShareButton = false;
                    this.userMessage = 'Montre-moi <br />ton dessin !';
                    this.initErrorMessageLoader();
                    Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_4__["registerWebPlugin"])(_byteowls_capacitor_filesharer__WEBPACK_IMPORTED_MODULE_5__["FileSharer"]);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "initErrorMessageLoader",
        value: function initErrorMessageLoader() {
          window.addEventListener('message', handleMessage, false);
          var self = this;

          function handleMessage(event) {
            if (event.data === 'IS_VISIBLE') {
              self.displayAlertMissing = false;
              self.displayShareButton = true;
            } else if (event.data === 'IS_NOT_VISIBLE') {
              self.displayAlertMissing = true;
              self.displayShareButton = false;
              self.userMessage = 'Je ne vois pas <br />ton dessin !';
            }
          }
        }
      }, {
        key: "takeScreenshotURI",
        value: function takeScreenshotURI() {
          var _this2 = this;

          this.screenshot.URI(80).then(function (res) {
            var uri = res.URI;

            _this2.shareScreenshot(uri);
          });
        }
      }, {
        key: "shareScreenshot",
        value: function shareScreenshot(uri) {
          _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].FileSharer.share({
            filename: "myscreenshot.jpg",
            base64Data: uri,
            contentType: "image/jpg"
          }).then(function () {
            console.log("hello :D");
          })["catch"](function (error) {
            console.error("File sharing failed", error.message);
          });
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ɵfac = function Tab2Page_Factory(t) {
      return new (t || Tab2Page)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__["Screenshot"]));
    };

    Tab2Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Tab2Page,
      selectors: [["app-photo-tab"]],
      decls: 13,
      vars: 9,
      consts: [[1, "app-container"], [1, "header"], [1, "logo-container"], ["id", "logo", 3, "src"], ["id", "logoCripsy", 3, "src"], ["class", "share-container", 3, "click", 4, "ngIf"], ["id", "alertMissing", "class", "missing-container", 4, "ngIf"], [3, "fullscreen", 4, "ngIf"], ["id", "screenshotContainer"], [3, "src"], [1, "base"], [1, "share-container", 3, "click"], ["name", "share"], ["id", "alertMissing", 1, "missing-container"], [3, "innerHTML"], [3, "fullscreen"], ["name", "arcomponent", "src", "../assets/augmented-reality/scene.html", 2, "position", "absolute", "width", "100%", "height", "100%", "border", "none"]],
      template: function Tab2Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Tab2Page_span_5_Template, 6, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Tab2Page_span_6_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Tab2Page_ion_content_7_Template, 2, 1, "ion-content", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/icon/logo.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/icon/logo_crispy.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayShareButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayAlertMissing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayCamera);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.displayCamera);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.screenshot);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/background/illustration_jungle.png");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
      styles: ["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: absolute;\n  --background: transparent;\n  text-align: center;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 6px 2em 0 1em;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  width: 8%;\n  margin: 0;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   #logoCripsy[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 20px auto 20px auto;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .share-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #044137;\n  color: white;\n  padding: 10px 16px 10px 16px;\n  border-radius: 20px;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .share-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #F6DC1D;\n  font-size: 44px;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .share-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: initial;\n  margin-left: 10px;\n  font-family: Chalkduster, fantasy;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .missing-container[_ngcontent-%COMP%] {\n  background-color: rgba(246, 220, 29, 0.6);\n  color: #044137;\n  margin-top: 40%;\n  padding: 10px 16px 10px 16px;\n  border-radius: 20px;\n}\n\n.app-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: initial;\n  margin-left: 10px;\n  font-family: Chalkduster, fantasy;\n}\n\n.app-container[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  --background: transparent;\n  bottom: 1px;\n}\n\n.app-container[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  margin-top: 100%;\n}\n\n#screenshotContainer[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n#alertMissing[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZHVyYW5kL3BlcnNvL21zcHJfYXIvc3JjL2FwcC9waG90by10YWIvcGhvdG8tdGFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGhvdG8tdGFiL3Bob3RvLXRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURBRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDR047O0FERk07RUFDRSxTQUFBO0VBQ0EsU0FBQTtBQ0lSOztBREZNO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FDSVI7O0FEREk7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNHTjs7QURGTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDSVI7O0FERk07RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0lSOztBREFJO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNFTjs7QURBSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDRU47O0FESUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNGSjs7QURHSTtFQUNFLGdCQUFBO0FDRE47O0FET0E7RUFDRSxVQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9waG90by10YWIvcGhvdG8tdGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5oZWFkZXIge1xuICAgIHotaW5kZXg6IDM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbjogNnB4IDJlbSAwIDFlbTtcbiAgICAgICNsb2dvIHtcbiAgICAgICAgd2lkdGg6IDglO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAjbG9nb0NyaXBzeSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcbiAgICAgIH1cbiAgICB9XG4gICAgLnNoYXJlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ0MTM3O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4IDEwcHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjRjZEQzFEO1xuICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IENoYWxrZHVzdGVyLCBmYW50YXN5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5taXNzaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjIwLCAyOSwgMC42KTtcbiAgICAgIGNvbG9yOiAjMDQ0MTM3O1xuICAgICAgbWFyZ2luLXRvcDogNDAlO1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4IDEwcHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfSAgICAgIFxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBmb250LWZhbWlseTogQ2hhbGtkdXN0ZXIsIGZhbnRhc3k7XG4gICAgfVxuXG4gIH1cblxuXG4gIC5iYXNlIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvdHRvbTogMXB4O1xuICAgIGlvbi1pbWcge1xuICAgICAgbWFyZ2luLXRvcDogMTAwJTtcbiAgICB9XG4gICAgLy9ib3R0b206IDFweDtcbiAgfVxufVxuXG4jc2NyZWVuc2hvdENvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNhbGVydE1pc3Npbmcge1xuICB6LWluZGV4OiAxO1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hcHAtY29udGFpbmVyIC5oZWFkZXIge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtY29udGFpbmVyIC5oZWFkZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiA2cHggMmVtIDAgMWVtO1xufVxuLmFwcC1jb250YWluZXIgLmhlYWRlciAubG9nby1jb250YWluZXIgI2xvZ28ge1xuICB3aWR0aDogOCU7XG4gIG1hcmdpbjogMDtcbn1cbi5hcHAtY29udGFpbmVyIC5oZWFkZXIgLmxvZ28tY29udGFpbmVyICNsb2dvQ3JpcHN5IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xufVxuLmFwcC1jb250YWluZXIgLmhlYWRlciAuc2hhcmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ0MTM3O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTZweCAxMHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uYXBwLWNvbnRhaW5lciAuaGVhZGVyIC5zaGFyZS1jb250YWluZXIgaW9uLWljb24ge1xuICBjb2xvcjogI0Y2REMxRDtcbiAgZm9udC1zaXplOiA0NHB4O1xufVxuLmFwcC1jb250YWluZXIgLmhlYWRlciAuc2hhcmUtY29udGFpbmVyIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogQ2hhbGtkdXN0ZXIsIGZhbnRhc3k7XG59XG4uYXBwLWNvbnRhaW5lciAuaGVhZGVyIC5taXNzaW5nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyMjAsIDI5LCAwLjYpO1xuICBjb2xvcjogIzA0NDEzNztcbiAgbWFyZ2luLXRvcDogNDAlO1xuICBwYWRkaW5nOiAxMHB4IDE2cHggMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmFwcC1jb250YWluZXIgLmhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6IENoYWxrZHVzdGVyLCBmYW50YXN5O1xufVxuLmFwcC1jb250YWluZXIgLmJhc2Uge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMXB4O1xufVxuLmFwcC1jb250YWluZXIgLmJhc2UgaW9uLWltZyB7XG4gIG1hcmdpbi10b3A6IDEwMCU7XG59XG5cbiNzY3JlZW5zaG90Q29udGFpbmVyIHtcbiAgei1pbmRleDogMTtcbn1cblxuI2FsZXJ0TWlzc2luZyB7XG4gIHotaW5kZXg6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Tab2Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-photo-tab',
          templateUrl: 'photo-tab.page.html',
          styleUrls: ['photo-tab.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_3__["Screenshot"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=photo-tab-photo-tab-module-es5.js.map