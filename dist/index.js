(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../../node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "../../node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
            s = arguments[i2];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p = Object.getOwnPropertySymbols(s); i2 < p.length; i2++) {
              if (e.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i2]))
                t[p[i2]] = s[p[i2]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i2 = decorators.length - 1; i2 >= 0; i2--)
              if (d = decorators[i2])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value2) {
            return value2 instanceof P ? value2 : new P(function(resolve) {
              resolve(value2);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value2) {
              try {
                step(generator.next(value2));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value2) {
              try {
                step(generator["throw"](value2));
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
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i2 >= o.length)
                  o = void 0;
                return { value: o && o[i2++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i2 = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i2.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i2["return"]))
                m.call(i2);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
            ar = ar.concat(__read2(arguments[i2]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
            s += arguments[i2].length;
          for (var r = Array(s), k = 0, i2 = 0; i2 < il; i2++)
            for (var a = arguments[i2], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from2, pack) {
          if (pack || arguments.length === 2)
            for (var i2 = 0, l = from2.length, ar; i2 < l; i2++) {
              if (ar || !(i2 in from2)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from2, 0, i2);
                ar[i2] = from2[i2];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from2));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i2, q = [];
          return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2;
          function verb(n) {
            if (g[n])
              i2[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value2) {
            resume("next", value2);
          }
          function reject(value2) {
            resume("throw", value2);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i2, p;
          return i2 = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i2[Symbol.iterator] = function() {
            return this;
          }, i2;
          function verb(n, f) {
            i2[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i2;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2);
          function verb(n) {
            i2[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value2, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value2) : f ? f.value = value2 : state.set(receiver, value2), value2;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/rxjs/util/root.js
  var require_root = __commonJS({
    "node_modules/rxjs/util/root.js"(exports) {
      "use strict";
      var __window = typeof window !== "undefined" && window;
      var __self = typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && self;
      var __global = typeof global !== "undefined" && global;
      var _root = __window || __global || __self;
      exports.root = _root;
      (function() {
        if (!_root) {
          throw new Error("RxJS could not find any global context (window, self, global)");
        }
      })();
    }
  });

  // node_modules/rxjs/util/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/rxjs/util/isFunction.js"(exports) {
      "use strict";
      function isFunction(x) {
        return typeof x === "function";
      }
      exports.isFunction = isFunction;
    }
  });

  // node_modules/rxjs/util/isArray.js
  var require_isArray = __commonJS({
    "node_modules/rxjs/util/isArray.js"(exports) {
      "use strict";
      exports.isArray = Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }
  });

  // node_modules/rxjs/util/isObject.js
  var require_isObject = __commonJS({
    "node_modules/rxjs/util/isObject.js"(exports) {
      "use strict";
      function isObject(x) {
        return x != null && typeof x === "object";
      }
      exports.isObject = isObject;
    }
  });

  // node_modules/rxjs/util/errorObject.js
  var require_errorObject = __commonJS({
    "node_modules/rxjs/util/errorObject.js"(exports) {
      "use strict";
      exports.errorObject = { e: {} };
    }
  });

  // node_modules/rxjs/util/tryCatch.js
  var require_tryCatch = __commonJS({
    "node_modules/rxjs/util/tryCatch.js"(exports) {
      "use strict";
      var errorObject_1 = require_errorObject();
      var tryCatchTarget;
      function tryCatcher() {
        try {
          return tryCatchTarget.apply(this, arguments);
        } catch (e) {
          errorObject_1.errorObject.e = e;
          return errorObject_1.errorObject;
        }
      }
      function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
      }
      exports.tryCatch = tryCatch;
    }
  });

  // node_modules/rxjs/util/UnsubscriptionError.js
  var require_UnsubscriptionError = __commonJS({
    "node_modules/rxjs/util/UnsubscriptionError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var UnsubscriptionError = function(_super) {
        __extends2(UnsubscriptionError2, _super);
        function UnsubscriptionError2(errors) {
          _super.call(this);
          this.errors = errors;
          var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function(err2, i2) {
            return i2 + 1 + ") " + err2.toString();
          }).join("\n  ") : "");
          this.name = err.name = "UnsubscriptionError";
          this.stack = err.stack;
          this.message = err.message;
        }
        return UnsubscriptionError2;
      }(Error);
      exports.UnsubscriptionError = UnsubscriptionError;
    }
  });

  // node_modules/rxjs/Subscription.js
  var require_Subscription = __commonJS({
    "node_modules/rxjs/Subscription.js"(exports) {
      "use strict";
      var isArray_1 = require_isArray();
      var isObject_1 = require_isObject();
      var isFunction_1 = require_isFunction();
      var tryCatch_1 = require_tryCatch();
      var errorObject_1 = require_errorObject();
      var UnsubscriptionError_1 = require_UnsubscriptionError();
      var Subscription = function() {
        function Subscription2(unsubscribe) {
          this.closed = false;
          this._parent = null;
          this._parents = null;
          this._subscriptions = null;
          if (unsubscribe) {
            this._unsubscribe = unsubscribe;
          }
        }
        Subscription2.prototype.unsubscribe = function() {
          var hasErrors = false;
          var errors;
          if (this.closed) {
            return;
          }
          var _a7 = this, _parent = _a7._parent, _parents = _a7._parents, _unsubscribe = _a7._unsubscribe, _subscriptions = _a7._subscriptions;
          this.closed = true;
          this._parent = null;
          this._parents = null;
          this._subscriptions = null;
          var index = -1;
          var len = _parents ? _parents.length : 0;
          while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
          }
          if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
              hasErrors = true;
              errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
          }
          if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
              var sub = _subscriptions[index];
              if (isObject_1.isObject(sub)) {
                var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                if (trial === errorObject_1.errorObject) {
                  hasErrors = true;
                  errors = errors || [];
                  var err = errorObject_1.errorObject.e;
                  if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                  } else {
                    errors.push(err);
                  }
                }
              }
            }
          }
          if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        };
        Subscription2.prototype.add = function(teardown) {
          if (!teardown || teardown === Subscription2.EMPTY) {
            return Subscription2.EMPTY;
          }
          if (teardown === this) {
            return this;
          }
          var subscription = teardown;
          switch (typeof teardown) {
            case "function":
              subscription = new Subscription2(teardown);
            case "object":
              if (subscription.closed || typeof subscription.unsubscribe !== "function") {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (typeof subscription._addParent !== "function") {
                var tmp = subscription;
                subscription = new Subscription2();
                subscription._subscriptions = [tmp];
              }
              break;
            default:
              throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
          var subscriptions = this._subscriptions || (this._subscriptions = []);
          subscriptions.push(subscription);
          subscription._addParent(this);
          return subscription;
        };
        Subscription2.prototype.remove = function(subscription) {
          var subscriptions = this._subscriptions;
          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        };
        Subscription2.prototype._addParent = function(parent) {
          var _a7 = this, _parent = _a7._parent, _parents = _a7._parents;
          if (!_parent || _parent === parent) {
            this._parent = parent;
          } else if (!_parents) {
            this._parents = [parent];
          } else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
          }
        };
        Subscription2.EMPTY = function(empty9) {
          empty9.closed = true;
          return empty9;
        }(new Subscription2());
        return Subscription2;
      }();
      exports.Subscription = Subscription;
      function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function(errs, err) {
          return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
        }, []);
      }
    }
  });

  // node_modules/rxjs/Observer.js
  var require_Observer = __commonJS({
    "node_modules/rxjs/Observer.js"(exports) {
      "use strict";
      exports.empty = {
        closed: true,
        next: function(value2) {
        },
        error: function(err) {
          throw err;
        },
        complete: function() {
        }
      };
    }
  });

  // node_modules/rxjs/symbol/rxSubscriber.js
  var require_rxSubscriber = __commonJS({
    "node_modules/rxjs/symbol/rxSubscriber.js"(exports) {
      "use strict";
      var root_1 = require_root();
      var Symbol2 = root_1.root.Symbol;
      exports.rxSubscriber = typeof Symbol2 === "function" && typeof Symbol2.for === "function" ? Symbol2.for("rxSubscriber") : "@@rxSubscriber";
      exports.$$rxSubscriber = exports.rxSubscriber;
    }
  });

  // node_modules/rxjs/Subscriber.js
  var require_Subscriber = __commonJS({
    "node_modules/rxjs/Subscriber.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var isFunction_1 = require_isFunction();
      var Subscription_1 = require_Subscription();
      var Observer_1 = require_Observer();
      var rxSubscriber_1 = require_rxSubscriber();
      var Subscriber = function(_super) {
        __extends2(Subscriber2, _super);
        function Subscriber2(destinationOrNext, error, complete) {
          _super.call(this);
          this.syncErrorValue = null;
          this.syncErrorThrown = false;
          this.syncErrorThrowable = false;
          this.isStopped = false;
          switch (arguments.length) {
            case 0:
              this.destination = Observer_1.empty;
              break;
            case 1:
              if (!destinationOrNext) {
                this.destination = Observer_1.empty;
                break;
              }
              if (typeof destinationOrNext === "object") {
                if (isTrustedSubscriber(destinationOrNext)) {
                  var trustedSubscriber = destinationOrNext[rxSubscriber_1.rxSubscriber]();
                  this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                  this.destination = trustedSubscriber;
                  trustedSubscriber.add(this);
                } else {
                  this.syncErrorThrowable = true;
                  this.destination = new SafeSubscriber(this, destinationOrNext);
                }
                break;
              }
            default:
              this.syncErrorThrowable = true;
              this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
              break;
          }
        }
        Subscriber2.prototype[rxSubscriber_1.rxSubscriber] = function() {
          return this;
        };
        Subscriber2.create = function(next, error, complete) {
          var subscriber = new Subscriber2(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        };
        Subscriber2.prototype.next = function(value2) {
          if (!this.isStopped) {
            this._next(value2);
          }
        };
        Subscriber2.prototype.error = function(err) {
          if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
          }
        };
        Subscriber2.prototype.complete = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
          }
        };
        Subscriber2.prototype.unsubscribe = function() {
          if (this.closed) {
            return;
          }
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
        };
        Subscriber2.prototype._next = function(value2) {
          this.destination.next(value2);
        };
        Subscriber2.prototype._error = function(err) {
          this.destination.error(err);
          this.unsubscribe();
        };
        Subscriber2.prototype._complete = function() {
          this.destination.complete();
          this.unsubscribe();
        };
        Subscriber2.prototype._unsubscribeAndRecycle = function() {
          var _a7 = this, _parent = _a7._parent, _parents = _a7._parents;
          this._parent = null;
          this._parents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parent = _parent;
          this._parents = _parents;
          return this;
        };
        return Subscriber2;
      }(Subscription_1.Subscription);
      exports.Subscriber = Subscriber;
      var SafeSubscriber = function(_super) {
        __extends2(SafeSubscriber2, _super);
        function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
          _super.call(this);
          this._parentSubscriber = _parentSubscriber;
          var next;
          var context = this;
          if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
          } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
              context = Object.create(observerOrNext);
              if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
              }
              context.unsubscribe = this.unsubscribe.bind(this);
            }
          }
          this._context = context;
          this._next = next;
          this._error = error;
          this._complete = complete;
        }
        SafeSubscriber2.prototype.next = function(value2) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value2);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value2)) {
              this.unsubscribe();
            }
          }
        };
        SafeSubscriber2.prototype.error = function(err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
              if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);
                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);
                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();
              throw err;
            } else {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
              this.unsubscribe();
            }
          }
        };
        SafeSubscriber2.prototype.complete = function() {
          var _this = this;
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
              var wrappedComplete = function() {
                return _this._complete.call(_this._context);
              };
              if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);
                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        };
        SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value2) {
          try {
            fn.call(this._context, value2);
          } catch (err) {
            this.unsubscribe();
            throw err;
          }
        };
        SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value2) {
          try {
            fn.call(this._context, value2);
          } catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          }
          return false;
        };
        SafeSubscriber2.prototype._unsubscribe = function() {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;
          _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber2;
      }(Subscriber);
      function isTrustedSubscriber(obj) {
        return obj instanceof Subscriber || "syncErrorThrowable" in obj && obj[rxSubscriber_1.rxSubscriber];
      }
    }
  });

  // node_modules/rxjs/util/toSubscriber.js
  var require_toSubscriber = __commonJS({
    "node_modules/rxjs/util/toSubscriber.js"(exports) {
      "use strict";
      var Subscriber_1 = require_Subscriber();
      var rxSubscriber_1 = require_rxSubscriber();
      var Observer_1 = require_Observer();
      function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
          if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
          }
          if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
          }
        }
        if (!nextOrObserver && !error && !complete) {
          return new Subscriber_1.Subscriber(Observer_1.empty);
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
      }
      exports.toSubscriber = toSubscriber;
    }
  });

  // node_modules/rxjs/symbol/observable.js
  var require_observable = __commonJS({
    "node_modules/rxjs/symbol/observable.js"(exports) {
      "use strict";
      var root_1 = require_root();
      function getSymbolObservable(context) {
        var $$observable;
        var Symbol2 = context.Symbol;
        if (typeof Symbol2 === "function") {
          if (Symbol2.observable) {
            $$observable = Symbol2.observable;
          } else {
            $$observable = Symbol2("observable");
            Symbol2.observable = $$observable;
          }
        } else {
          $$observable = "@@observable";
        }
        return $$observable;
      }
      exports.getSymbolObservable = getSymbolObservable;
      exports.observable = getSymbolObservable(root_1.root);
      exports.$$observable = exports.observable;
    }
  });

  // node_modules/rxjs/util/noop.js
  var require_noop = __commonJS({
    "node_modules/rxjs/util/noop.js"(exports) {
      "use strict";
      function noop() {
      }
      exports.noop = noop;
    }
  });

  // node_modules/rxjs/util/pipe.js
  var require_pipe = __commonJS({
    "node_modules/rxjs/util/pipe.js"(exports) {
      "use strict";
      var noop_1 = require_noop();
      function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          fns[_i - 0] = arguments[_i];
        }
        return pipeFromArray(fns);
      }
      exports.pipe = pipe;
      function pipeFromArray(fns) {
        if (!fns) {
          return noop_1.noop;
        }
        if (fns.length === 1) {
          return fns[0];
        }
        return function piped(input) {
          return fns.reduce(function(prev2, fn) {
            return fn(prev2);
          }, input);
        };
      }
      exports.pipeFromArray = pipeFromArray;
    }
  });

  // node_modules/rxjs/Observable.js
  var require_Observable = __commonJS({
    "node_modules/rxjs/Observable.js"(exports) {
      "use strict";
      var root_1 = require_root();
      var toSubscriber_1 = require_toSubscriber();
      var observable_1 = require_observable();
      var pipe_1 = require_pipe();
      var Observable3 = function() {
        function Observable4(subscribe) {
          this._isScalar = false;
          if (subscribe) {
            this._subscribe = subscribe;
          }
        }
        Observable4.prototype.lift = function(operator) {
          var observable = new Observable4();
          observable.source = this;
          observable.operator = operator;
          return observable;
        };
        Observable4.prototype.subscribe = function(observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
          if (operator) {
            operator.call(sink, this.source);
          } else {
            sink.add(this.source || !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
          }
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
          return sink;
        };
        Observable4.prototype._trySubscribe = function(sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
          }
        };
        Observable4.prototype.forEach = function(next, PromiseCtor) {
          var _this = this;
          if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
              PromiseCtor = root_1.root.Rx.config.Promise;
            } else if (root_1.root.Promise) {
              PromiseCtor = root_1.root.Promise;
            }
          }
          if (!PromiseCtor) {
            throw new Error("no Promise impl found");
          }
          return new PromiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value2) {
              if (subscription) {
                try {
                  next(value2);
                } catch (err) {
                  reject(err);
                  subscription.unsubscribe();
                }
              } else {
                next(value2);
              }
            }, reject, resolve);
          });
        };
        Observable4.prototype._subscribe = function(subscriber) {
          return this.source.subscribe(subscriber);
        };
        Observable4.prototype[observable_1.observable] = function() {
          return this;
        };
        Observable4.prototype.pipe = function() {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i - 0] = arguments[_i];
          }
          if (operations.length === 0) {
            return this;
          }
          return pipe_1.pipeFromArray(operations)(this);
        };
        Observable4.prototype.toPromise = function(PromiseCtor) {
          var _this = this;
          if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
              PromiseCtor = root_1.root.Rx.config.Promise;
            } else if (root_1.root.Promise) {
              PromiseCtor = root_1.root.Promise;
            }
          }
          if (!PromiseCtor) {
            throw new Error("no Promise impl found");
          }
          return new PromiseCtor(function(resolve, reject) {
            var value2;
            _this.subscribe(function(x) {
              return value2 = x;
            }, function(err) {
              return reject(err);
            }, function() {
              return resolve(value2);
            });
          });
        };
        Observable4.create = function(subscribe) {
          return new Observable4(subscribe);
        };
        return Observable4;
      }();
      exports.Observable = Observable3;
    }
  });

  // node_modules/rxjs/observable/ScalarObservable.js
  var require_ScalarObservable = __commonJS({
    "node_modules/rxjs/observable/ScalarObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Observable_1 = require_Observable();
      var ScalarObservable = function(_super) {
        __extends2(ScalarObservable2, _super);
        function ScalarObservable2(value2, scheduler) {
          _super.call(this);
          this.value = value2;
          this.scheduler = scheduler;
          this._isScalar = true;
          if (scheduler) {
            this._isScalar = false;
          }
        }
        ScalarObservable2.create = function(value2, scheduler) {
          return new ScalarObservable2(value2, scheduler);
        };
        ScalarObservable2.dispatch = function(state) {
          var done = state.done, value2 = state.value, subscriber = state.subscriber;
          if (done) {
            subscriber.complete();
            return;
          }
          subscriber.next(value2);
          if (subscriber.closed) {
            return;
          }
          state.done = true;
          this.schedule(state);
        };
        ScalarObservable2.prototype._subscribe = function(subscriber) {
          var value2 = this.value;
          var scheduler = this.scheduler;
          if (scheduler) {
            return scheduler.schedule(ScalarObservable2.dispatch, 0, {
              done: false,
              value: value2,
              subscriber
            });
          } else {
            subscriber.next(value2);
            if (!subscriber.closed) {
              subscriber.complete();
            }
          }
        };
        return ScalarObservable2;
      }(Observable_1.Observable);
      exports.ScalarObservable = ScalarObservable;
    }
  });

  // node_modules/rxjs/observable/EmptyObservable.js
  var require_EmptyObservable = __commonJS({
    "node_modules/rxjs/observable/EmptyObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Observable_1 = require_Observable();
      var EmptyObservable = function(_super) {
        __extends2(EmptyObservable2, _super);
        function EmptyObservable2(scheduler) {
          _super.call(this);
          this.scheduler = scheduler;
        }
        EmptyObservable2.create = function(scheduler) {
          return new EmptyObservable2(scheduler);
        };
        EmptyObservable2.dispatch = function(arg) {
          var subscriber = arg.subscriber;
          subscriber.complete();
        };
        EmptyObservable2.prototype._subscribe = function(subscriber) {
          var scheduler = this.scheduler;
          if (scheduler) {
            return scheduler.schedule(EmptyObservable2.dispatch, 0, { subscriber });
          } else {
            subscriber.complete();
          }
        };
        return EmptyObservable2;
      }(Observable_1.Observable);
      exports.EmptyObservable = EmptyObservable;
    }
  });

  // node_modules/rxjs/util/isScheduler.js
  var require_isScheduler = __commonJS({
    "node_modules/rxjs/util/isScheduler.js"(exports) {
      "use strict";
      function isScheduler(value2) {
        return value2 && typeof value2.schedule === "function";
      }
      exports.isScheduler = isScheduler;
    }
  });

  // node_modules/rxjs/observable/ArrayObservable.js
  var require_ArrayObservable = __commonJS({
    "node_modules/rxjs/observable/ArrayObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Observable_1 = require_Observable();
      var ScalarObservable_1 = require_ScalarObservable();
      var EmptyObservable_1 = require_EmptyObservable();
      var isScheduler_1 = require_isScheduler();
      var ArrayObservable = function(_super) {
        __extends2(ArrayObservable2, _super);
        function ArrayObservable2(array2, scheduler) {
          _super.call(this);
          this.array = array2;
          this.scheduler = scheduler;
          if (!scheduler && array2.length === 1) {
            this._isScalar = true;
            this.value = array2[0];
          }
        }
        ArrayObservable2.create = function(array2, scheduler) {
          return new ArrayObservable2(array2, scheduler);
        };
        ArrayObservable2.of = function() {
          var array2 = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            array2[_i - 0] = arguments[_i];
          }
          var scheduler = array2[array2.length - 1];
          if (isScheduler_1.isScheduler(scheduler)) {
            array2.pop();
          } else {
            scheduler = null;
          }
          var len = array2.length;
          if (len > 1) {
            return new ArrayObservable2(array2, scheduler);
          } else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array2[0], scheduler);
          } else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
          }
        };
        ArrayObservable2.dispatch = function(state) {
          var array2 = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
          if (index >= count) {
            subscriber.complete();
            return;
          }
          subscriber.next(array2[index]);
          if (subscriber.closed) {
            return;
          }
          state.index = index + 1;
          this.schedule(state);
        };
        ArrayObservable2.prototype._subscribe = function(subscriber) {
          var index = 0;
          var array2 = this.array;
          var count = array2.length;
          var scheduler = this.scheduler;
          if (scheduler) {
            return scheduler.schedule(ArrayObservable2.dispatch, 0, {
              array: array2,
              index,
              count,
              subscriber
            });
          } else {
            for (var i2 = 0; i2 < count && !subscriber.closed; i2++) {
              subscriber.next(array2[i2]);
            }
            subscriber.complete();
          }
        };
        return ArrayObservable2;
      }(Observable_1.Observable);
      exports.ArrayObservable = ArrayObservable;
    }
  });

  // node_modules/rxjs/OuterSubscriber.js
  var require_OuterSubscriber = __commonJS({
    "node_modules/rxjs/OuterSubscriber.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      var OuterSubscriber = function(_super) {
        __extends2(OuterSubscriber2, _super);
        function OuterSubscriber2() {
          _super.apply(this, arguments);
        }
        OuterSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.destination.next(innerValue);
        };
        OuterSubscriber2.prototype.notifyError = function(error, innerSub) {
          this.destination.error(error);
        };
        OuterSubscriber2.prototype.notifyComplete = function(innerSub) {
          this.destination.complete();
        };
        return OuterSubscriber2;
      }(Subscriber_1.Subscriber);
      exports.OuterSubscriber = OuterSubscriber;
    }
  });

  // node_modules/rxjs/util/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/rxjs/util/isArrayLike.js"(exports) {
      "use strict";
      exports.isArrayLike = function(x) {
        return x && typeof x.length === "number";
      };
    }
  });

  // node_modules/rxjs/util/isPromise.js
  var require_isPromise = __commonJS({
    "node_modules/rxjs/util/isPromise.js"(exports) {
      "use strict";
      function isPromise(value2) {
        return value2 && typeof value2.subscribe !== "function" && typeof value2.then === "function";
      }
      exports.isPromise = isPromise;
    }
  });

  // node_modules/rxjs/symbol/iterator.js
  var require_iterator = __commonJS({
    "node_modules/rxjs/symbol/iterator.js"(exports) {
      "use strict";
      var root_1 = require_root();
      function symbolIteratorPonyfill(root) {
        var Symbol2 = root.Symbol;
        if (typeof Symbol2 === "function") {
          if (!Symbol2.iterator) {
            Symbol2.iterator = Symbol2("iterator polyfill");
          }
          return Symbol2.iterator;
        } else {
          var Set_1 = root.Set;
          if (Set_1 && typeof new Set_1()["@@iterator"] === "function") {
            return "@@iterator";
          }
          var Map_1 = root.Map;
          if (Map_1) {
            var keys = Object.getOwnPropertyNames(Map_1.prototype);
            for (var i2 = 0; i2 < keys.length; ++i2) {
              var key = keys[i2];
              if (key !== "entries" && key !== "size" && Map_1.prototype[key] === Map_1.prototype["entries"]) {
                return key;
              }
            }
          }
          return "@@iterator";
        }
      }
      exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
      exports.iterator = symbolIteratorPonyfill(root_1.root);
      exports.$$iterator = exports.iterator;
    }
  });

  // node_modules/rxjs/InnerSubscriber.js
  var require_InnerSubscriber = __commonJS({
    "node_modules/rxjs/InnerSubscriber.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      var InnerSubscriber = function(_super) {
        __extends2(InnerSubscriber2, _super);
        function InnerSubscriber2(parent, outerValue, outerIndex) {
          _super.call(this);
          this.parent = parent;
          this.outerValue = outerValue;
          this.outerIndex = outerIndex;
          this.index = 0;
        }
        InnerSubscriber2.prototype._next = function(value2) {
          this.parent.notifyNext(this.outerValue, value2, this.outerIndex, this.index++, this);
        };
        InnerSubscriber2.prototype._error = function(error) {
          this.parent.notifyError(error, this);
          this.unsubscribe();
        };
        InnerSubscriber2.prototype._complete = function() {
          this.parent.notifyComplete(this);
          this.unsubscribe();
        };
        return InnerSubscriber2;
      }(Subscriber_1.Subscriber);
      exports.InnerSubscriber = InnerSubscriber;
    }
  });

  // node_modules/rxjs/util/subscribeToResult.js
  var require_subscribeToResult = __commonJS({
    "node_modules/rxjs/util/subscribeToResult.js"(exports) {
      "use strict";
      var root_1 = require_root();
      var isArrayLike_1 = require_isArrayLike();
      var isPromise_1 = require_isPromise();
      var isObject_1 = require_isObject();
      var Observable_1 = require_Observable();
      var iterator_1 = require_iterator();
      var InnerSubscriber_1 = require_InnerSubscriber();
      var observable_1 = require_observable();
      function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        if (destination.closed) {
          return null;
        }
        if (result instanceof Observable_1.Observable) {
          if (result._isScalar) {
            destination.next(result.value);
            destination.complete();
            return null;
          } else {
            destination.syncErrorThrowable = true;
            return result.subscribe(destination);
          }
        } else if (isArrayLike_1.isArrayLike(result)) {
          for (var i2 = 0, len = result.length; i2 < len && !destination.closed; i2++) {
            destination.next(result[i2]);
          }
          if (!destination.closed) {
            destination.complete();
          }
        } else if (isPromise_1.isPromise(result)) {
          result.then(function(value3) {
            if (!destination.closed) {
              destination.next(value3);
              destination.complete();
            }
          }, function(err) {
            return destination.error(err);
          }).then(null, function(err) {
            root_1.root.setTimeout(function() {
              throw err;
            });
          });
          return destination;
        } else if (result && typeof result[iterator_1.iterator] === "function") {
          var iterator = result[iterator_1.iterator]();
          do {
            var item = iterator.next();
            if (item.done) {
              destination.complete();
              break;
            }
            destination.next(item.value);
            if (destination.closed) {
              break;
            }
          } while (true);
        } else if (result && typeof result[observable_1.observable] === "function") {
          var obs = result[observable_1.observable]();
          if (typeof obs.subscribe !== "function") {
            destination.error(new TypeError("Provided object does not correctly implement Symbol.observable"));
          } else {
            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
          }
        } else {
          var value2 = isObject_1.isObject(result) ? "an invalid object" : "'" + result + "'";
          var msg = "You provided " + value2 + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
          destination.error(new TypeError(msg));
        }
        return null;
      }
      exports.subscribeToResult = subscribeToResult;
    }
  });

  // node_modules/rxjs/operators/zip.js
  var require_zip = __commonJS({
    "node_modules/rxjs/operators/zip.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var ArrayObservable_1 = require_ArrayObservable();
      var isArray_1 = require_isArray();
      var Subscriber_1 = require_Subscriber();
      var OuterSubscriber_1 = require_OuterSubscriber();
      var subscribeToResult_1 = require_subscribeToResult();
      var iterator_1 = require_iterator();
      function zip2() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
        }
        return function zipOperatorFunction(source) {
          return source.lift.call(zipStatic.apply(void 0, [source].concat(observables)));
        };
      }
      exports.zip = zip2;
      function zipStatic() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
        }
        var project = observables[observables.length - 1];
        if (typeof project === "function") {
          observables.pop();
        }
        return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
      }
      exports.zipStatic = zipStatic;
      var ZipOperator = function() {
        function ZipOperator2(project) {
          this.project = project;
        }
        ZipOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new ZipSubscriber(subscriber, this.project));
        };
        return ZipOperator2;
      }();
      exports.ZipOperator = ZipOperator;
      var ZipSubscriber = function(_super) {
        __extends2(ZipSubscriber2, _super);
        function ZipSubscriber2(destination, project, values) {
          if (values === void 0) {
            values = /* @__PURE__ */ Object.create(null);
          }
          _super.call(this, destination);
          this.iterators = [];
          this.active = 0;
          this.project = typeof project === "function" ? project : null;
          this.values = values;
        }
        ZipSubscriber2.prototype._next = function(value2) {
          var iterators = this.iterators;
          if (isArray_1.isArray(value2)) {
            iterators.push(new StaticArrayIterator(value2));
          } else if (typeof value2[iterator_1.iterator] === "function") {
            iterators.push(new StaticIterator(value2[iterator_1.iterator]()));
          } else {
            iterators.push(new ZipBufferIterator(this.destination, this, value2));
          }
        };
        ZipSubscriber2.prototype._complete = function() {
          var iterators = this.iterators;
          var len = iterators.length;
          if (len === 0) {
            this.destination.complete();
            return;
          }
          this.active = len;
          for (var i2 = 0; i2 < len; i2++) {
            var iterator = iterators[i2];
            if (iterator.stillUnsubscribed) {
              this.add(iterator.subscribe(iterator, i2));
            } else {
              this.active--;
            }
          }
        };
        ZipSubscriber2.prototype.notifyInactive = function() {
          this.active--;
          if (this.active === 0) {
            this.destination.complete();
          }
        };
        ZipSubscriber2.prototype.checkIterators = function() {
          var iterators = this.iterators;
          var len = iterators.length;
          var destination = this.destination;
          for (var i2 = 0; i2 < len; i2++) {
            var iterator = iterators[i2];
            if (typeof iterator.hasValue === "function" && !iterator.hasValue()) {
              return;
            }
          }
          var shouldComplete = false;
          var args = [];
          for (var i2 = 0; i2 < len; i2++) {
            var iterator = iterators[i2];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
              shouldComplete = true;
            }
            if (result.done) {
              destination.complete();
              return;
            }
            args.push(result.value);
          }
          if (this.project) {
            this._tryProject(args);
          } else {
            destination.next(args);
          }
          if (shouldComplete) {
            destination.complete();
          }
        };
        ZipSubscriber2.prototype._tryProject = function(args) {
          var result;
          try {
            result = this.project.apply(this, args);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          this.destination.next(result);
        };
        return ZipSubscriber2;
      }(Subscriber_1.Subscriber);
      exports.ZipSubscriber = ZipSubscriber;
      var StaticIterator = function() {
        function StaticIterator2(iterator) {
          this.iterator = iterator;
          this.nextResult = iterator.next();
        }
        StaticIterator2.prototype.hasValue = function() {
          return true;
        };
        StaticIterator2.prototype.next = function() {
          var result = this.nextResult;
          this.nextResult = this.iterator.next();
          return result;
        };
        StaticIterator2.prototype.hasCompleted = function() {
          var nextResult = this.nextResult;
          return nextResult && nextResult.done;
        };
        return StaticIterator2;
      }();
      var StaticArrayIterator = function() {
        function StaticArrayIterator2(array2) {
          this.array = array2;
          this.index = 0;
          this.length = 0;
          this.length = array2.length;
        }
        StaticArrayIterator2.prototype[iterator_1.iterator] = function() {
          return this;
        };
        StaticArrayIterator2.prototype.next = function(value2) {
          var i2 = this.index++;
          var array2 = this.array;
          return i2 < this.length ? { value: array2[i2], done: false } : { value: null, done: true };
        };
        StaticArrayIterator2.prototype.hasValue = function() {
          return this.array.length > this.index;
        };
        StaticArrayIterator2.prototype.hasCompleted = function() {
          return this.array.length === this.index;
        };
        return StaticArrayIterator2;
      }();
      var ZipBufferIterator = function(_super) {
        __extends2(ZipBufferIterator2, _super);
        function ZipBufferIterator2(destination, parent, observable) {
          _super.call(this, destination);
          this.parent = parent;
          this.observable = observable;
          this.stillUnsubscribed = true;
          this.buffer = [];
          this.isComplete = false;
        }
        ZipBufferIterator2.prototype[iterator_1.iterator] = function() {
          return this;
        };
        ZipBufferIterator2.prototype.next = function() {
          var buffer = this.buffer;
          if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
          } else {
            return { value: buffer.shift(), done: false };
          }
        };
        ZipBufferIterator2.prototype.hasValue = function() {
          return this.buffer.length > 0;
        };
        ZipBufferIterator2.prototype.hasCompleted = function() {
          return this.buffer.length === 0 && this.isComplete;
        };
        ZipBufferIterator2.prototype.notifyComplete = function() {
          if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
          } else {
            this.destination.complete();
          }
        };
        ZipBufferIterator2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.buffer.push(innerValue);
          this.parent.checkIterators();
        };
        ZipBufferIterator2.prototype.subscribe = function(value2, index) {
          return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
        };
        return ZipBufferIterator2;
      }(OuterSubscriber_1.OuterSubscriber);
    }
  });

  // node_modules/rxjs/observable/zip.js
  var require_zip2 = __commonJS({
    "node_modules/rxjs/observable/zip.js"(exports) {
      "use strict";
      var zip_1 = require_zip();
      exports.zip = zip_1.zipStatic;
    }
  });

  // node_modules/rxjs/util/ObjectUnsubscribedError.js
  var require_ObjectUnsubscribedError = __commonJS({
    "node_modules/rxjs/util/ObjectUnsubscribedError.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var ObjectUnsubscribedError = function(_super) {
        __extends2(ObjectUnsubscribedError2, _super);
        function ObjectUnsubscribedError2() {
          var err = _super.call(this, "object unsubscribed");
          this.name = err.name = "ObjectUnsubscribedError";
          this.stack = err.stack;
          this.message = err.message;
        }
        return ObjectUnsubscribedError2;
      }(Error);
      exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
    }
  });

  // node_modules/rxjs/SubjectSubscription.js
  var require_SubjectSubscription = __commonJS({
    "node_modules/rxjs/SubjectSubscription.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscription_1 = require_Subscription();
      var SubjectSubscription = function(_super) {
        __extends2(SubjectSubscription2, _super);
        function SubjectSubscription2(subject, subscriber) {
          _super.call(this);
          this.subject = subject;
          this.subscriber = subscriber;
          this.closed = false;
        }
        SubjectSubscription2.prototype.unsubscribe = function() {
          if (this.closed) {
            return;
          }
          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;
          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
          }
          var subscriberIndex = observers.indexOf(this.subscriber);
          if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
          }
        };
        return SubjectSubscription2;
      }(Subscription_1.Subscription);
      exports.SubjectSubscription = SubjectSubscription;
    }
  });

  // node_modules/rxjs/Subject.js
  var require_Subject = __commonJS({
    "node_modules/rxjs/Subject.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Observable_1 = require_Observable();
      var Subscriber_1 = require_Subscriber();
      var Subscription_1 = require_Subscription();
      var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
      var SubjectSubscription_1 = require_SubjectSubscription();
      var rxSubscriber_1 = require_rxSubscriber();
      var SubjectSubscriber = function(_super) {
        __extends2(SubjectSubscriber2, _super);
        function SubjectSubscriber2(destination) {
          _super.call(this, destination);
          this.destination = destination;
        }
        return SubjectSubscriber2;
      }(Subscriber_1.Subscriber);
      exports.SubjectSubscriber = SubjectSubscriber;
      var Subject = function(_super) {
        __extends2(Subject2, _super);
        function Subject2() {
          _super.call(this);
          this.observers = [];
          this.closed = false;
          this.isStopped = false;
          this.hasError = false;
          this.thrownError = null;
        }
        Subject2.prototype[rxSubscriber_1.rxSubscriber] = function() {
          return new SubjectSubscriber(this);
        };
        Subject2.prototype.lift = function(operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        };
        Subject2.prototype.next = function(value2) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }
          if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i2 = 0; i2 < len; i2++) {
              copy[i2].next(value2);
            }
          }
        };
        Subject2.prototype.error = function(err) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }
          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i2 = 0; i2 < len; i2++) {
            copy[i2].error(err);
          }
          this.observers.length = 0;
        };
        Subject2.prototype.complete = function() {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i2 = 0; i2 < len; i2++) {
            copy[i2].complete();
          }
          this.observers.length = 0;
        };
        Subject2.prototype.unsubscribe = function() {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        };
        Subject2.prototype._trySubscribe = function(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
          }
        };
        Subject2.prototype._subscribe = function(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
          } else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
          } else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
          }
        };
        Subject2.prototype.asObservable = function() {
          var observable = new Observable_1.Observable();
          observable.source = this;
          return observable;
        };
        Subject2.create = function(destination, source) {
          return new AnonymousSubject(destination, source);
        };
        return Subject2;
      }(Observable_1.Observable);
      exports.Subject = Subject;
      var AnonymousSubject = function(_super) {
        __extends2(AnonymousSubject2, _super);
        function AnonymousSubject2(destination, source) {
          _super.call(this);
          this.destination = destination;
          this.source = source;
        }
        AnonymousSubject2.prototype.next = function(value2) {
          var destination = this.destination;
          if (destination && destination.next) {
            destination.next(value2);
          }
        };
        AnonymousSubject2.prototype.error = function(err) {
          var destination = this.destination;
          if (destination && destination.error) {
            this.destination.error(err);
          }
        };
        AnonymousSubject2.prototype.complete = function() {
          var destination = this.destination;
          if (destination && destination.complete) {
            this.destination.complete();
          }
        };
        AnonymousSubject2.prototype._subscribe = function(subscriber) {
          var source = this.source;
          if (source) {
            return this.source.subscribe(subscriber);
          } else {
            return Subscription_1.Subscription.EMPTY;
          }
        };
        return AnonymousSubject2;
      }(Subject);
      exports.AnonymousSubject = AnonymousSubject;
    }
  });

  // node_modules/rxjs/BehaviorSubject.js
  var require_BehaviorSubject = __commonJS({
    "node_modules/rxjs/BehaviorSubject.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subject_1 = require_Subject();
      var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
      var BehaviorSubject8 = function(_super) {
        __extends2(BehaviorSubject9, _super);
        function BehaviorSubject9(_value) {
          _super.call(this);
          this._value = _value;
        }
        Object.defineProperty(BehaviorSubject9.prototype, "value", {
          get: function() {
            return this.getValue();
          },
          enumerable: true,
          configurable: true
        });
        BehaviorSubject9.prototype._subscribe = function(subscriber) {
          var subscription = _super.prototype._subscribe.call(this, subscriber);
          if (subscription && !subscription.closed) {
            subscriber.next(this._value);
          }
          return subscription;
        };
        BehaviorSubject9.prototype.getValue = function() {
          if (this.hasError) {
            throw this.thrownError;
          } else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          } else {
            return this._value;
          }
        };
        BehaviorSubject9.prototype.next = function(value2) {
          _super.prototype.next.call(this, this._value = value2);
        };
        return BehaviorSubject9;
      }(Subject_1.Subject);
      exports.BehaviorSubject = BehaviorSubject8;
    }
  });

  // node_modules/rxjs/observable/of.js
  var require_of = __commonJS({
    "node_modules/rxjs/observable/of.js"(exports) {
      "use strict";
      var ArrayObservable_1 = require_ArrayObservable();
      exports.of = ArrayObservable_1.ArrayObservable.of;
    }
  });

  // node_modules/rxjs/operators/refCount.js
  var require_refCount = __commonJS({
    "node_modules/rxjs/operators/refCount.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      function refCount() {
        return function refCountOperatorFunction(source) {
          return source.lift(new RefCountOperator(source));
        };
      }
      exports.refCount = refCount;
      var RefCountOperator = function() {
        function RefCountOperator2(connectable) {
          this.connectable = connectable;
        }
        RefCountOperator2.prototype.call = function(subscriber, source) {
          var connectable = this.connectable;
          connectable._refCount++;
          var refCounter = new RefCountSubscriber(subscriber, connectable);
          var subscription = source.subscribe(refCounter);
          if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
          }
          return subscription;
        };
        return RefCountOperator2;
      }();
      var RefCountSubscriber = function(_super) {
        __extends2(RefCountSubscriber2, _super);
        function RefCountSubscriber2(destination, connectable) {
          _super.call(this, destination);
          this.connectable = connectable;
        }
        RefCountSubscriber2.prototype._unsubscribe = function() {
          var connectable = this.connectable;
          if (!connectable) {
            this.connection = null;
            return;
          }
          this.connectable = null;
          var refCount2 = connectable._refCount;
          if (refCount2 <= 0) {
            this.connection = null;
            return;
          }
          connectable._refCount = refCount2 - 1;
          if (refCount2 > 1) {
            this.connection = null;
            return;
          }
          var connection = this.connection;
          var sharedConnection = connectable._connection;
          this.connection = null;
          if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
          }
        };
        return RefCountSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/observable/ConnectableObservable.js
  var require_ConnectableObservable = __commonJS({
    "node_modules/rxjs/observable/ConnectableObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subject_1 = require_Subject();
      var Observable_1 = require_Observable();
      var Subscriber_1 = require_Subscriber();
      var Subscription_1 = require_Subscription();
      var refCount_1 = require_refCount();
      var ConnectableObservable = function(_super) {
        __extends2(ConnectableObservable2, _super);
        function ConnectableObservable2(source, subjectFactory) {
          _super.call(this);
          this.source = source;
          this.subjectFactory = subjectFactory;
          this._refCount = 0;
          this._isComplete = false;
        }
        ConnectableObservable2.prototype._subscribe = function(subscriber) {
          return this.getSubject().subscribe(subscriber);
        };
        ConnectableObservable2.prototype.getSubject = function() {
          var subject = this._subject;
          if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
          }
          return this._subject;
        };
        ConnectableObservable2.prototype.connect = function() {
          var connection = this._connection;
          if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
              this._connection = null;
              connection = Subscription_1.Subscription.EMPTY;
            } else {
              this._connection = connection;
            }
          }
          return connection;
        };
        ConnectableObservable2.prototype.refCount = function() {
          return refCount_1.refCount()(this);
        };
        return ConnectableObservable2;
      }(Observable_1.Observable);
      exports.ConnectableObservable = ConnectableObservable;
      var connectableProto = ConnectableObservable.prototype;
      exports.connectableObservableDescriptor = {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
      };
      var ConnectableSubscriber = function(_super) {
        __extends2(ConnectableSubscriber2, _super);
        function ConnectableSubscriber2(destination, connectable) {
          _super.call(this, destination);
          this.connectable = connectable;
        }
        ConnectableSubscriber2.prototype._error = function(err) {
          this._unsubscribe();
          _super.prototype._error.call(this, err);
        };
        ConnectableSubscriber2.prototype._complete = function() {
          this.connectable._isComplete = true;
          this._unsubscribe();
          _super.prototype._complete.call(this);
        };
        ConnectableSubscriber2.prototype._unsubscribe = function() {
          var connectable = this.connectable;
          if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
              connection.unsubscribe();
            }
          }
        };
        return ConnectableSubscriber2;
      }(Subject_1.SubjectSubscriber);
      var RefCountOperator = function() {
        function RefCountOperator2(connectable) {
          this.connectable = connectable;
        }
        RefCountOperator2.prototype.call = function(subscriber, source) {
          var connectable = this.connectable;
          connectable._refCount++;
          var refCounter = new RefCountSubscriber(subscriber, connectable);
          var subscription = source.subscribe(refCounter);
          if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
          }
          return subscription;
        };
        return RefCountOperator2;
      }();
      var RefCountSubscriber = function(_super) {
        __extends2(RefCountSubscriber2, _super);
        function RefCountSubscriber2(destination, connectable) {
          _super.call(this, destination);
          this.connectable = connectable;
        }
        RefCountSubscriber2.prototype._unsubscribe = function() {
          var connectable = this.connectable;
          if (!connectable) {
            this.connection = null;
            return;
          }
          this.connectable = null;
          var refCount = connectable._refCount;
          if (refCount <= 0) {
            this.connection = null;
            return;
          }
          connectable._refCount = refCount - 1;
          if (refCount > 1) {
            this.connection = null;
            return;
          }
          var connection = this.connection;
          var sharedConnection = connectable._connection;
          this.connection = null;
          if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
          }
        };
        return RefCountSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/operators/multicast.js
  var require_multicast = __commonJS({
    "node_modules/rxjs/operators/multicast.js"(exports) {
      "use strict";
      var ConnectableObservable_1 = require_ConnectableObservable();
      function multicast(subjectOrSubjectFactory, selector) {
        return function multicastOperatorFunction(source) {
          var subjectFactory;
          if (typeof subjectOrSubjectFactory === "function") {
            subjectFactory = subjectOrSubjectFactory;
          } else {
            subjectFactory = function subjectFactory2() {
              return subjectOrSubjectFactory;
            };
          }
          if (typeof selector === "function") {
            return source.lift(new MulticastOperator(subjectFactory, selector));
          }
          var connectable = Object.create(source, ConnectableObservable_1.connectableObservableDescriptor);
          connectable.source = source;
          connectable.subjectFactory = subjectFactory;
          return connectable;
        };
      }
      exports.multicast = multicast;
      var MulticastOperator = function() {
        function MulticastOperator2(subjectFactory, selector) {
          this.subjectFactory = subjectFactory;
          this.selector = selector;
        }
        MulticastOperator2.prototype.call = function(subscriber, source) {
          var selector = this.selector;
          var subject = this.subjectFactory();
          var subscription = selector(subject).subscribe(subscriber);
          subscription.add(source.subscribe(subject));
          return subscription;
        };
        return MulticastOperator2;
      }();
      exports.MulticastOperator = MulticastOperator;
    }
  });

  // node_modules/rxjs/operators/share.js
  var require_share = __commonJS({
    "node_modules/rxjs/operators/share.js"(exports) {
      "use strict";
      var multicast_1 = require_multicast();
      var refCount_1 = require_refCount();
      var Subject_1 = require_Subject();
      function shareSubjectFactory() {
        return new Subject_1.Subject();
      }
      function share3() {
        return function(source) {
          return refCount_1.refCount()(multicast_1.multicast(shareSubjectFactory)(source));
        };
      }
      exports.share = share3;
    }
  });

  // node_modules/rxjs/operators/map.js
  var require_map = __commonJS({
    "node_modules/rxjs/operators/map.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      function map19(project, thisArg) {
        return function mapOperation(source) {
          if (typeof project !== "function") {
            throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
          }
          return source.lift(new MapOperator(project, thisArg));
        };
      }
      exports.map = map19;
      var MapOperator = function() {
        function MapOperator2(project, thisArg) {
          this.project = project;
          this.thisArg = thisArg;
        }
        MapOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator2;
      }();
      exports.MapOperator = MapOperator;
      var MapSubscriber = function(_super) {
        __extends2(MapSubscriber2, _super);
        function MapSubscriber2(destination, project, thisArg) {
          _super.call(this, destination);
          this.project = project;
          this.count = 0;
          this.thisArg = thisArg || this;
        }
        MapSubscriber2.prototype._next = function(value2) {
          var result;
          try {
            result = this.project.call(this.thisArg, value2, this.count++);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          this.destination.next(result);
        };
        return MapSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/operators/tap.js
  var require_tap = __commonJS({
    "node_modules/rxjs/operators/tap.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      function tap16(nextOrObserver, error, complete) {
        return function tapOperatorFunction(source) {
          return source.lift(new DoOperator(nextOrObserver, error, complete));
        };
      }
      exports.tap = tap16;
      var DoOperator = function() {
        function DoOperator2(nextOrObserver, error, complete) {
          this.nextOrObserver = nextOrObserver;
          this.error = error;
          this.complete = complete;
        }
        DoOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
        };
        return DoOperator2;
      }();
      var DoSubscriber = function(_super) {
        __extends2(DoSubscriber2, _super);
        function DoSubscriber2(destination, nextOrObserver, error, complete) {
          _super.call(this, destination);
          var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
          safeSubscriber.syncErrorThrowable = true;
          this.add(safeSubscriber);
          this.safeSubscriber = safeSubscriber;
        }
        DoSubscriber2.prototype._next = function(value2) {
          var safeSubscriber = this.safeSubscriber;
          safeSubscriber.next(value2);
          if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
          } else {
            this.destination.next(value2);
          }
        };
        DoSubscriber2.prototype._error = function(err) {
          var safeSubscriber = this.safeSubscriber;
          safeSubscriber.error(err);
          if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
          } else {
            this.destination.error(err);
          }
        };
        DoSubscriber2.prototype._complete = function() {
          var safeSubscriber = this.safeSubscriber;
          safeSubscriber.complete();
          if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
          } else {
            this.destination.complete();
          }
        };
        return DoSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/util/isNumeric.js
  var require_isNumeric = __commonJS({
    "node_modules/rxjs/util/isNumeric.js"(exports) {
      "use strict";
      var isArray_1 = require_isArray();
      function isNumeric(val) {
        return !isArray_1.isArray(val) && val - parseFloat(val) + 1 >= 0;
      }
      exports.isNumeric = isNumeric;
    }
  });

  // node_modules/rxjs/scheduler/Action.js
  var require_Action = __commonJS({
    "node_modules/rxjs/scheduler/Action.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscription_1 = require_Subscription();
      var Action = function(_super) {
        __extends2(Action2, _super);
        function Action2(scheduler, work) {
          _super.call(this);
        }
        Action2.prototype.schedule = function(state, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          return this;
        };
        return Action2;
      }(Subscription_1.Subscription);
      exports.Action = Action;
    }
  });

  // node_modules/rxjs/scheduler/AsyncAction.js
  var require_AsyncAction = __commonJS({
    "node_modules/rxjs/scheduler/AsyncAction.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var root_1 = require_root();
      var Action_1 = require_Action();
      var AsyncAction = function(_super) {
        __extends2(AsyncAction2, _super);
        function AsyncAction2(scheduler, work) {
          _super.call(this, scheduler, work);
          this.scheduler = scheduler;
          this.pending = false;
          this.work = work;
        }
        AsyncAction2.prototype.schedule = function(state, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          if (this.closed) {
            return this;
          }
          this.state = state;
          this.pending = true;
          var id = this.id;
          var scheduler = this.scheduler;
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
          }
          this.delay = delay;
          this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
          return this;
        };
        AsyncAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
        };
        AsyncAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
          }
          return root_1.root.clearInterval(id) && void 0 || void 0;
        };
        AsyncAction2.prototype.execute = function(state, delay) {
          if (this.closed) {
            return new Error("executing a cancelled action");
          }
          this.pending = false;
          var error = this._execute(state, delay);
          if (error) {
            return error;
          } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
          }
        };
        AsyncAction2.prototype._execute = function(state, delay) {
          var errored = false;
          var errorValue = void 0;
          try {
            this.work(state);
          } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
          }
          if (errored) {
            this.unsubscribe();
            return errorValue;
          }
        };
        AsyncAction2.prototype._unsubscribe = function() {
          var id = this.id;
          var scheduler = this.scheduler;
          var actions = scheduler.actions;
          var index = actions.indexOf(this);
          this.work = null;
          this.state = null;
          this.pending = false;
          this.scheduler = null;
          if (index !== -1) {
            actions.splice(index, 1);
          }
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
        };
        return AsyncAction2;
      }(Action_1.Action);
      exports.AsyncAction = AsyncAction;
    }
  });

  // node_modules/rxjs/Scheduler.js
  var require_Scheduler = __commonJS({
    "node_modules/rxjs/Scheduler.js"(exports) {
      "use strict";
      var Scheduler = function() {
        function Scheduler2(SchedulerAction, now) {
          if (now === void 0) {
            now = Scheduler2.now;
          }
          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }
        Scheduler2.prototype.schedule = function(work, delay, state) {
          if (delay === void 0) {
            delay = 0;
          }
          return new this.SchedulerAction(this, work).schedule(state, delay);
        };
        Scheduler2.now = Date.now ? Date.now : function() {
          return +new Date();
        };
        return Scheduler2;
      }();
      exports.Scheduler = Scheduler;
    }
  });

  // node_modules/rxjs/scheduler/AsyncScheduler.js
  var require_AsyncScheduler = __commonJS({
    "node_modules/rxjs/scheduler/AsyncScheduler.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Scheduler_1 = require_Scheduler();
      var AsyncScheduler = function(_super) {
        __extends2(AsyncScheduler2, _super);
        function AsyncScheduler2() {
          _super.apply(this, arguments);
          this.actions = [];
          this.active = false;
          this.scheduled = void 0;
        }
        AsyncScheduler2.prototype.flush = function(action) {
          var actions = this.actions;
          if (this.active) {
            actions.push(action);
            return;
          }
          var error;
          this.active = true;
          do {
            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          } while (action = actions.shift());
          this.active = false;
          if (error) {
            while (action = actions.shift()) {
              action.unsubscribe();
            }
            throw error;
          }
        };
        return AsyncScheduler2;
      }(Scheduler_1.Scheduler);
      exports.AsyncScheduler = AsyncScheduler;
    }
  });

  // node_modules/rxjs/scheduler/async.js
  var require_async = __commonJS({
    "node_modules/rxjs/scheduler/async.js"(exports) {
      "use strict";
      var AsyncAction_1 = require_AsyncAction();
      var AsyncScheduler_1 = require_AsyncScheduler();
      exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
    }
  });

  // node_modules/rxjs/util/isDate.js
  var require_isDate = __commonJS({
    "node_modules/rxjs/util/isDate.js"(exports) {
      "use strict";
      function isDate(value2) {
        return value2 instanceof Date && !isNaN(+value2);
      }
      exports.isDate = isDate;
    }
  });

  // node_modules/rxjs/observable/TimerObservable.js
  var require_TimerObservable = __commonJS({
    "node_modules/rxjs/observable/TimerObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var isNumeric_1 = require_isNumeric();
      var Observable_1 = require_Observable();
      var async_1 = require_async();
      var isScheduler_1 = require_isScheduler();
      var isDate_1 = require_isDate();
      var TimerObservable = function(_super) {
        __extends2(TimerObservable2, _super);
        function TimerObservable2(dueTime, period, scheduler) {
          if (dueTime === void 0) {
            dueTime = 0;
          }
          _super.call(this);
          this.period = -1;
          this.dueTime = 0;
          if (isNumeric_1.isNumeric(period)) {
            this.period = Number(period) < 1 && 1 || Number(period);
          } else if (isScheduler_1.isScheduler(period)) {
            scheduler = period;
          }
          if (!isScheduler_1.isScheduler(scheduler)) {
            scheduler = async_1.async;
          }
          this.scheduler = scheduler;
          this.dueTime = isDate_1.isDate(dueTime) ? +dueTime - this.scheduler.now() : dueTime;
        }
        TimerObservable2.create = function(initialDelay, period, scheduler) {
          if (initialDelay === void 0) {
            initialDelay = 0;
          }
          return new TimerObservable2(initialDelay, period, scheduler);
        };
        TimerObservable2.dispatch = function(state) {
          var index = state.index, period = state.period, subscriber = state.subscriber;
          var action = this;
          subscriber.next(index);
          if (subscriber.closed) {
            return;
          } else if (period === -1) {
            return subscriber.complete();
          }
          state.index = index + 1;
          action.schedule(state, period);
        };
        TimerObservable2.prototype._subscribe = function(subscriber) {
          var index = 0;
          var _a7 = this, period = _a7.period, dueTime = _a7.dueTime, scheduler = _a7.scheduler;
          return scheduler.schedule(TimerObservable2.dispatch, dueTime, {
            index,
            period,
            subscriber
          });
        };
        return TimerObservable2;
      }(Observable_1.Observable);
      exports.TimerObservable = TimerObservable;
    }
  });

  // node_modules/rxjs/observable/timer.js
  var require_timer = __commonJS({
    "node_modules/rxjs/observable/timer.js"(exports) {
      "use strict";
      var TimerObservable_1 = require_TimerObservable();
      exports.timer = TimerObservable_1.TimerObservable.create;
    }
  });

  // node_modules/rxjs/operators/filter.js
  var require_filter = __commonJS({
    "node_modules/rxjs/operators/filter.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      function filter16(predicate, thisArg) {
        return function filterOperatorFunction(source) {
          return source.lift(new FilterOperator(predicate, thisArg));
        };
      }
      exports.filter = filter16;
      var FilterOperator = function() {
        function FilterOperator2(predicate, thisArg) {
          this.predicate = predicate;
          this.thisArg = thisArg;
        }
        FilterOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
        };
        return FilterOperator2;
      }();
      var FilterSubscriber = function(_super) {
        __extends2(FilterSubscriber2, _super);
        function FilterSubscriber2(destination, predicate, thisArg) {
          _super.call(this, destination);
          this.predicate = predicate;
          this.thisArg = thisArg;
          this.count = 0;
        }
        FilterSubscriber2.prototype._next = function(value2) {
          var result;
          try {
            result = this.predicate.call(this.thisArg, value2, this.count++);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          if (result) {
            this.destination.next(value2);
          }
        };
        return FilterSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/operators/withLatestFrom.js
  var require_withLatestFrom = __commonJS({
    "node_modules/rxjs/operators/withLatestFrom.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var OuterSubscriber_1 = require_OuterSubscriber();
      var subscribeToResult_1 = require_subscribeToResult();
      function withLatestFrom27() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return function(source) {
          var project;
          if (typeof args[args.length - 1] === "function") {
            project = args.pop();
          }
          var observables = args;
          return source.lift(new WithLatestFromOperator(observables, project));
        };
      }
      exports.withLatestFrom = withLatestFrom27;
      var WithLatestFromOperator = function() {
        function WithLatestFromOperator2(observables, project) {
          this.observables = observables;
          this.project = project;
        }
        WithLatestFromOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
        };
        return WithLatestFromOperator2;
      }();
      var WithLatestFromSubscriber = function(_super) {
        __extends2(WithLatestFromSubscriber2, _super);
        function WithLatestFromSubscriber2(destination, observables, project) {
          _super.call(this, destination);
          this.observables = observables;
          this.project = project;
          this.toRespond = [];
          var len = observables.length;
          this.values = new Array(len);
          for (var i2 = 0; i2 < len; i2++) {
            this.toRespond.push(i2);
          }
          for (var i2 = 0; i2 < len; i2++) {
            var observable = observables[i2];
            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i2));
          }
        }
        WithLatestFromSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.values[outerIndex] = innerValue;
          var toRespond = this.toRespond;
          if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
              toRespond.splice(found, 1);
            }
          }
        };
        WithLatestFromSubscriber2.prototype.notifyComplete = function() {
        };
        WithLatestFromSubscriber2.prototype._next = function(value2) {
          if (this.toRespond.length === 0) {
            var args = [value2].concat(this.values);
            if (this.project) {
              this._tryProject(args);
            } else {
              this.destination.next(args);
            }
          }
        };
        WithLatestFromSubscriber2.prototype._tryProject = function(args) {
          var result;
          try {
            result = this.project.apply(this, args);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          this.destination.next(result);
        };
        return WithLatestFromSubscriber2;
      }(OuterSubscriber_1.OuterSubscriber);
    }
  });

  // node_modules/rxjs/operators/switchMap.js
  var require_switchMap = __commonJS({
    "node_modules/rxjs/operators/switchMap.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var OuterSubscriber_1 = require_OuterSubscriber();
      var subscribeToResult_1 = require_subscribeToResult();
      function switchMap7(project, resultSelector) {
        return function switchMapOperatorFunction(source) {
          return source.lift(new SwitchMapOperator(project, resultSelector));
        };
      }
      exports.switchMap = switchMap7;
      var SwitchMapOperator = function() {
        function SwitchMapOperator2(project, resultSelector) {
          this.project = project;
          this.resultSelector = resultSelector;
        }
        SwitchMapOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
        };
        return SwitchMapOperator2;
      }();
      var SwitchMapSubscriber = function(_super) {
        __extends2(SwitchMapSubscriber2, _super);
        function SwitchMapSubscriber2(destination, project, resultSelector) {
          _super.call(this, destination);
          this.project = project;
          this.resultSelector = resultSelector;
          this.index = 0;
        }
        SwitchMapSubscriber2.prototype._next = function(value2) {
          var result;
          var index = this.index++;
          try {
            result = this.project(value2, index);
          } catch (error) {
            this.destination.error(error);
            return;
          }
          this._innerSub(result, value2, index);
        };
        SwitchMapSubscriber2.prototype._innerSub = function(result, value2, index) {
          var innerSubscription = this.innerSubscription;
          if (innerSubscription) {
            innerSubscription.unsubscribe();
          }
          this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value2, index));
        };
        SwitchMapSubscriber2.prototype._complete = function() {
          var innerSubscription = this.innerSubscription;
          if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
          }
        };
        SwitchMapSubscriber2.prototype._unsubscribe = function() {
          this.innerSubscription = null;
        };
        SwitchMapSubscriber2.prototype.notifyComplete = function(innerSub) {
          this.remove(innerSub);
          this.innerSubscription = null;
          if (this.isStopped) {
            _super.prototype._complete.call(this);
          }
        };
        SwitchMapSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
          } else {
            this.destination.next(innerValue);
          }
        };
        SwitchMapSubscriber2.prototype._tryNotifyNext = function(outerValue, innerValue, outerIndex, innerIndex) {
          var result;
          try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          this.destination.next(result);
        };
        return SwitchMapSubscriber2;
      }(OuterSubscriber_1.OuterSubscriber);
    }
  });

  // node_modules/rxjs/operators/pluck.js
  var require_pluck = __commonJS({
    "node_modules/rxjs/operators/pluck.js"(exports) {
      "use strict";
      var map_1 = require_map();
      function pluck16() {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          properties[_i - 0] = arguments[_i];
        }
        var length2 = properties.length;
        if (length2 === 0) {
          throw new Error("list of properties cannot be empty.");
        }
        return function(source) {
          return map_1.map(plucker(properties, length2))(source);
        };
      }
      exports.pluck = pluck16;
      function plucker(props, length2) {
        var mapper = function(x) {
          var currentProp = x;
          for (var i2 = 0; i2 < length2; i2++) {
            var p = currentProp[props[i2]];
            if (typeof p !== "undefined") {
              currentProp = p;
            } else {
              return void 0;
            }
          }
          return currentProp;
        };
        return mapper;
      }
    }
  });

  // node_modules/rxjs/operators/ignoreElements.js
  var require_ignoreElements = __commonJS({
    "node_modules/rxjs/operators/ignoreElements.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      var noop_1 = require_noop();
      function ignoreElements9() {
        return function ignoreElementsOperatorFunction(source) {
          return source.lift(new IgnoreElementsOperator());
        };
      }
      exports.ignoreElements = ignoreElements9;
      var IgnoreElementsOperator = function() {
        function IgnoreElementsOperator2() {
        }
        IgnoreElementsOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new IgnoreElementsSubscriber(subscriber));
        };
        return IgnoreElementsOperator2;
      }();
      var IgnoreElementsSubscriber = function(_super) {
        __extends2(IgnoreElementsSubscriber2, _super);
        function IgnoreElementsSubscriber2() {
          _super.apply(this, arguments);
        }
        IgnoreElementsSubscriber2.prototype._next = function(unused) {
          noop_1.noop();
        };
        return IgnoreElementsSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/observable/PromiseObservable.js
  var require_PromiseObservable = __commonJS({
    "node_modules/rxjs/observable/PromiseObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var root_1 = require_root();
      var Observable_1 = require_Observable();
      var PromiseObservable = function(_super) {
        __extends2(PromiseObservable2, _super);
        function PromiseObservable2(promise, scheduler) {
          _super.call(this);
          this.promise = promise;
          this.scheduler = scheduler;
        }
        PromiseObservable2.create = function(promise, scheduler) {
          return new PromiseObservable2(promise, scheduler);
        };
        PromiseObservable2.prototype._subscribe = function(subscriber) {
          var _this = this;
          var promise = this.promise;
          var scheduler = this.scheduler;
          if (scheduler == null) {
            if (this._isScalar) {
              if (!subscriber.closed) {
                subscriber.next(this.value);
                subscriber.complete();
              }
            } else {
              promise.then(function(value2) {
                _this.value = value2;
                _this._isScalar = true;
                if (!subscriber.closed) {
                  subscriber.next(value2);
                  subscriber.complete();
                }
              }, function(err) {
                if (!subscriber.closed) {
                  subscriber.error(err);
                }
              }).then(null, function(err) {
                root_1.root.setTimeout(function() {
                  throw err;
                });
              });
            }
          } else {
            if (this._isScalar) {
              if (!subscriber.closed) {
                return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber });
              }
            } else {
              promise.then(function(value2) {
                _this.value = value2;
                _this._isScalar = true;
                if (!subscriber.closed) {
                  subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value2, subscriber }));
                }
              }, function(err) {
                if (!subscriber.closed) {
                  subscriber.add(scheduler.schedule(dispatchError, 0, { err, subscriber }));
                }
              }).then(null, function(err) {
                root_1.root.setTimeout(function() {
                  throw err;
                });
              });
            }
          }
        };
        return PromiseObservable2;
      }(Observable_1.Observable);
      exports.PromiseObservable = PromiseObservable;
      function dispatchNext(arg) {
        var value2 = arg.value, subscriber = arg.subscriber;
        if (!subscriber.closed) {
          subscriber.next(value2);
          subscriber.complete();
        }
      }
      function dispatchError(arg) {
        var err = arg.err, subscriber = arg.subscriber;
        if (!subscriber.closed) {
          subscriber.error(err);
        }
      }
    }
  });

  // node_modules/rxjs/observable/IteratorObservable.js
  var require_IteratorObservable = __commonJS({
    "node_modules/rxjs/observable/IteratorObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var root_1 = require_root();
      var Observable_1 = require_Observable();
      var iterator_1 = require_iterator();
      var IteratorObservable = function(_super) {
        __extends2(IteratorObservable2, _super);
        function IteratorObservable2(iterator, scheduler) {
          _super.call(this);
          this.scheduler = scheduler;
          if (iterator == null) {
            throw new Error("iterator cannot be null.");
          }
          this.iterator = getIterator(iterator);
        }
        IteratorObservable2.create = function(iterator, scheduler) {
          return new IteratorObservable2(iterator, scheduler);
        };
        IteratorObservable2.dispatch = function(state) {
          var index = state.index, hasError = state.hasError, iterator = state.iterator, subscriber = state.subscriber;
          if (hasError) {
            subscriber.error(state.error);
            return;
          }
          var result = iterator.next();
          if (result.done) {
            subscriber.complete();
            return;
          }
          subscriber.next(result.value);
          state.index = index + 1;
          if (subscriber.closed) {
            if (typeof iterator.return === "function") {
              iterator.return();
            }
            return;
          }
          this.schedule(state);
        };
        IteratorObservable2.prototype._subscribe = function(subscriber) {
          var index = 0;
          var _a7 = this, iterator = _a7.iterator, scheduler = _a7.scheduler;
          if (scheduler) {
            return scheduler.schedule(IteratorObservable2.dispatch, 0, {
              index,
              iterator,
              subscriber
            });
          } else {
            do {
              var result = iterator.next();
              if (result.done) {
                subscriber.complete();
                break;
              } else {
                subscriber.next(result.value);
              }
              if (subscriber.closed) {
                if (typeof iterator.return === "function") {
                  iterator.return();
                }
                break;
              }
            } while (true);
          }
        };
        return IteratorObservable2;
      }(Observable_1.Observable);
      exports.IteratorObservable = IteratorObservable;
      var StringIterator = function() {
        function StringIterator2(str, idx, len) {
          if (idx === void 0) {
            idx = 0;
          }
          if (len === void 0) {
            len = str.length;
          }
          this.str = str;
          this.idx = idx;
          this.len = len;
        }
        StringIterator2.prototype[iterator_1.iterator] = function() {
          return this;
        };
        StringIterator2.prototype.next = function() {
          return this.idx < this.len ? {
            done: false,
            value: this.str.charAt(this.idx++)
          } : {
            done: true,
            value: void 0
          };
        };
        return StringIterator2;
      }();
      var ArrayIterator = function() {
        function ArrayIterator2(arr, idx, len) {
          if (idx === void 0) {
            idx = 0;
          }
          if (len === void 0) {
            len = toLength(arr);
          }
          this.arr = arr;
          this.idx = idx;
          this.len = len;
        }
        ArrayIterator2.prototype[iterator_1.iterator] = function() {
          return this;
        };
        ArrayIterator2.prototype.next = function() {
          return this.idx < this.len ? {
            done: false,
            value: this.arr[this.idx++]
          } : {
            done: true,
            value: void 0
          };
        };
        return ArrayIterator2;
      }();
      function getIterator(obj) {
        var i2 = obj[iterator_1.iterator];
        if (!i2 && typeof obj === "string") {
          return new StringIterator(obj);
        }
        if (!i2 && obj.length !== void 0) {
          return new ArrayIterator(obj);
        }
        if (!i2) {
          throw new TypeError("object is not iterable");
        }
        return obj[iterator_1.iterator]();
      }
      var maxSafeInteger = Math.pow(2, 53) - 1;
      function toLength(o) {
        var len = +o.length;
        if (isNaN(len)) {
          return 0;
        }
        if (len === 0 || !numberIsFinite(len)) {
          return len;
        }
        len = sign(len) * Math.floor(Math.abs(len));
        if (len <= 0) {
          return 0;
        }
        if (len > maxSafeInteger) {
          return maxSafeInteger;
        }
        return len;
      }
      function numberIsFinite(value2) {
        return typeof value2 === "number" && root_1.root.isFinite(value2);
      }
      function sign(value2) {
        var valueAsNumber = +value2;
        if (valueAsNumber === 0) {
          return valueAsNumber;
        }
        if (isNaN(valueAsNumber)) {
          return valueAsNumber;
        }
        return valueAsNumber < 0 ? -1 : 1;
      }
    }
  });

  // node_modules/rxjs/observable/ArrayLikeObservable.js
  var require_ArrayLikeObservable = __commonJS({
    "node_modules/rxjs/observable/ArrayLikeObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Observable_1 = require_Observable();
      var ScalarObservable_1 = require_ScalarObservable();
      var EmptyObservable_1 = require_EmptyObservable();
      var ArrayLikeObservable = function(_super) {
        __extends2(ArrayLikeObservable2, _super);
        function ArrayLikeObservable2(arrayLike, scheduler) {
          _super.call(this);
          this.arrayLike = arrayLike;
          this.scheduler = scheduler;
          if (!scheduler && arrayLike.length === 1) {
            this._isScalar = true;
            this.value = arrayLike[0];
          }
        }
        ArrayLikeObservable2.create = function(arrayLike, scheduler) {
          var length2 = arrayLike.length;
          if (length2 === 0) {
            return new EmptyObservable_1.EmptyObservable();
          } else if (length2 === 1) {
            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
          } else {
            return new ArrayLikeObservable2(arrayLike, scheduler);
          }
        };
        ArrayLikeObservable2.dispatch = function(state) {
          var arrayLike = state.arrayLike, index = state.index, length2 = state.length, subscriber = state.subscriber;
          if (subscriber.closed) {
            return;
          }
          if (index >= length2) {
            subscriber.complete();
            return;
          }
          subscriber.next(arrayLike[index]);
          state.index = index + 1;
          this.schedule(state);
        };
        ArrayLikeObservable2.prototype._subscribe = function(subscriber) {
          var index = 0;
          var _a7 = this, arrayLike = _a7.arrayLike, scheduler = _a7.scheduler;
          var length2 = arrayLike.length;
          if (scheduler) {
            return scheduler.schedule(ArrayLikeObservable2.dispatch, 0, {
              arrayLike,
              index,
              length: length2,
              subscriber
            });
          } else {
            for (var i2 = 0; i2 < length2 && !subscriber.closed; i2++) {
              subscriber.next(arrayLike[i2]);
            }
            subscriber.complete();
          }
        };
        return ArrayLikeObservable2;
      }(Observable_1.Observable);
      exports.ArrayLikeObservable = ArrayLikeObservable;
    }
  });

  // node_modules/rxjs/Notification.js
  var require_Notification = __commonJS({
    "node_modules/rxjs/Notification.js"(exports) {
      "use strict";
      var Observable_1 = require_Observable();
      var Notification = function() {
        function Notification2(kind, value2, error) {
          this.kind = kind;
          this.value = value2;
          this.error = error;
          this.hasValue = kind === "N";
        }
        Notification2.prototype.observe = function(observer) {
          switch (this.kind) {
            case "N":
              return observer.next && observer.next(this.value);
            case "E":
              return observer.error && observer.error(this.error);
            case "C":
              return observer.complete && observer.complete();
          }
        };
        Notification2.prototype.do = function(next, error, complete) {
          var kind = this.kind;
          switch (kind) {
            case "N":
              return next && next(this.value);
            case "E":
              return error && error(this.error);
            case "C":
              return complete && complete();
          }
        };
        Notification2.prototype.accept = function(nextOrObserver, error, complete) {
          if (nextOrObserver && typeof nextOrObserver.next === "function") {
            return this.observe(nextOrObserver);
          } else {
            return this.do(nextOrObserver, error, complete);
          }
        };
        Notification2.prototype.toObservable = function() {
          var kind = this.kind;
          switch (kind) {
            case "N":
              return Observable_1.Observable.of(this.value);
            case "E":
              return Observable_1.Observable.throw(this.error);
            case "C":
              return Observable_1.Observable.empty();
          }
          throw new Error("unexpected notification kind value");
        };
        Notification2.createNext = function(value2) {
          if (typeof value2 !== "undefined") {
            return new Notification2("N", value2);
          }
          return Notification2.undefinedValueNotification;
        };
        Notification2.createError = function(err) {
          return new Notification2("E", void 0, err);
        };
        Notification2.createComplete = function() {
          return Notification2.completeNotification;
        };
        Notification2.completeNotification = new Notification2("C");
        Notification2.undefinedValueNotification = new Notification2("N", void 0);
        return Notification2;
      }();
      exports.Notification = Notification;
    }
  });

  // node_modules/rxjs/operators/observeOn.js
  var require_observeOn = __commonJS({
    "node_modules/rxjs/operators/observeOn.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      var Notification_1 = require_Notification();
      function observeOn(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return function observeOnOperatorFunction(source) {
          return source.lift(new ObserveOnOperator(scheduler, delay));
        };
      }
      exports.observeOn = observeOn;
      var ObserveOnOperator = function() {
        function ObserveOnOperator2(scheduler, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          this.scheduler = scheduler;
          this.delay = delay;
        }
        ObserveOnOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
        };
        return ObserveOnOperator2;
      }();
      exports.ObserveOnOperator = ObserveOnOperator;
      var ObserveOnSubscriber = function(_super) {
        __extends2(ObserveOnSubscriber2, _super);
        function ObserveOnSubscriber2(destination, scheduler, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          _super.call(this, destination);
          this.scheduler = scheduler;
          this.delay = delay;
        }
        ObserveOnSubscriber2.dispatch = function(arg) {
          var notification = arg.notification, destination = arg.destination;
          notification.observe(destination);
          this.unsubscribe();
        };
        ObserveOnSubscriber2.prototype.scheduleMessage = function(notification) {
          this.add(this.scheduler.schedule(ObserveOnSubscriber2.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        };
        ObserveOnSubscriber2.prototype._next = function(value2) {
          this.scheduleMessage(Notification_1.Notification.createNext(value2));
        };
        ObserveOnSubscriber2.prototype._error = function(err) {
          this.scheduleMessage(Notification_1.Notification.createError(err));
        };
        ObserveOnSubscriber2.prototype._complete = function() {
          this.scheduleMessage(Notification_1.Notification.createComplete());
        };
        return ObserveOnSubscriber2;
      }(Subscriber_1.Subscriber);
      exports.ObserveOnSubscriber = ObserveOnSubscriber;
      var ObserveOnMessage = function() {
        function ObserveOnMessage2(notification, destination) {
          this.notification = notification;
          this.destination = destination;
        }
        return ObserveOnMessage2;
      }();
      exports.ObserveOnMessage = ObserveOnMessage;
    }
  });

  // node_modules/rxjs/observable/FromObservable.js
  var require_FromObservable = __commonJS({
    "node_modules/rxjs/observable/FromObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var isArray_1 = require_isArray();
      var isArrayLike_1 = require_isArrayLike();
      var isPromise_1 = require_isPromise();
      var PromiseObservable_1 = require_PromiseObservable();
      var IteratorObservable_1 = require_IteratorObservable();
      var ArrayObservable_1 = require_ArrayObservable();
      var ArrayLikeObservable_1 = require_ArrayLikeObservable();
      var iterator_1 = require_iterator();
      var Observable_1 = require_Observable();
      var observeOn_1 = require_observeOn();
      var observable_1 = require_observable();
      var FromObservable = function(_super) {
        __extends2(FromObservable2, _super);
        function FromObservable2(ish, scheduler) {
          _super.call(this, null);
          this.ish = ish;
          this.scheduler = scheduler;
        }
        FromObservable2.create = function(ish, scheduler) {
          if (ish != null) {
            if (typeof ish[observable_1.observable] === "function") {
              if (ish instanceof Observable_1.Observable && !scheduler) {
                return ish;
              }
              return new FromObservable2(ish, scheduler);
            } else if (isArray_1.isArray(ish)) {
              return new ArrayObservable_1.ArrayObservable(ish, scheduler);
            } else if (isPromise_1.isPromise(ish)) {
              return new PromiseObservable_1.PromiseObservable(ish, scheduler);
            } else if (typeof ish[iterator_1.iterator] === "function" || typeof ish === "string") {
              return new IteratorObservable_1.IteratorObservable(ish, scheduler);
            } else if (isArrayLike_1.isArrayLike(ish)) {
              return new ArrayLikeObservable_1.ArrayLikeObservable(ish, scheduler);
            }
          }
          throw new TypeError((ish !== null && typeof ish || ish) + " is not observable");
        };
        FromObservable2.prototype._subscribe = function(subscriber) {
          var ish = this.ish;
          var scheduler = this.scheduler;
          if (scheduler == null) {
            return ish[observable_1.observable]().subscribe(subscriber);
          } else {
            return ish[observable_1.observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
          }
        };
        return FromObservable2;
      }(Observable_1.Observable);
      exports.FromObservable = FromObservable;
    }
  });

  // node_modules/rxjs/observable/from.js
  var require_from = __commonJS({
    "node_modules/rxjs/observable/from.js"(exports) {
      "use strict";
      var FromObservable_1 = require_FromObservable();
      exports.from = FromObservable_1.FromObservable.create;
    }
  });

  // node_modules/rxjs/operators/mergeMap.js
  var require_mergeMap = __commonJS({
    "node_modules/rxjs/operators/mergeMap.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var subscribeToResult_1 = require_subscribeToResult();
      var OuterSubscriber_1 = require_OuterSubscriber();
      function mergeMap7(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }
        return function mergeMapOperatorFunction(source) {
          if (typeof resultSelector === "number") {
            concurrent = resultSelector;
            resultSelector = null;
          }
          return source.lift(new MergeMapOperator(project, resultSelector, concurrent));
        };
      }
      exports.mergeMap = mergeMap7;
      var MergeMapOperator = function() {
        function MergeMapOperator2(project, resultSelector, concurrent) {
          if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
          }
          this.project = project;
          this.resultSelector = resultSelector;
          this.concurrent = concurrent;
        }
        MergeMapOperator2.prototype.call = function(observer, source) {
          return source.subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
        };
        return MergeMapOperator2;
      }();
      exports.MergeMapOperator = MergeMapOperator;
      var MergeMapSubscriber = function(_super) {
        __extends2(MergeMapSubscriber2, _super);
        function MergeMapSubscriber2(destination, project, resultSelector, concurrent) {
          if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
          }
          _super.call(this, destination);
          this.project = project;
          this.resultSelector = resultSelector;
          this.concurrent = concurrent;
          this.hasCompleted = false;
          this.buffer = [];
          this.active = 0;
          this.index = 0;
        }
        MergeMapSubscriber2.prototype._next = function(value2) {
          if (this.active < this.concurrent) {
            this._tryNext(value2);
          } else {
            this.buffer.push(value2);
          }
        };
        MergeMapSubscriber2.prototype._tryNext = function(value2) {
          var result;
          var index = this.index++;
          try {
            result = this.project(value2, index);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          this.active++;
          this._innerSub(result, value2, index);
        };
        MergeMapSubscriber2.prototype._innerSub = function(ish, value2, index) {
          this.add(subscribeToResult_1.subscribeToResult(this, ish, value2, index));
        };
        MergeMapSubscriber2.prototype._complete = function() {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
          }
        };
        MergeMapSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          if (this.resultSelector) {
            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
          } else {
            this.destination.next(innerValue);
          }
        };
        MergeMapSubscriber2.prototype._notifyResultSelector = function(outerValue, innerValue, outerIndex, innerIndex) {
          var result;
          try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
          } catch (err) {
            this.destination.error(err);
            return;
          }
          this.destination.next(result);
        };
        MergeMapSubscriber2.prototype.notifyComplete = function(innerSub) {
          var buffer = this.buffer;
          this.remove(innerSub);
          this.active--;
          if (buffer.length > 0) {
            this._next(buffer.shift());
          } else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
          }
        };
        return MergeMapSubscriber2;
      }(OuterSubscriber_1.OuterSubscriber);
      exports.MergeMapSubscriber = MergeMapSubscriber;
    }
  });

  // node_modules/rxjs/util/identity.js
  var require_identity = __commonJS({
    "node_modules/rxjs/util/identity.js"(exports) {
      "use strict";
      function identity(x) {
        return x;
      }
      exports.identity = identity;
    }
  });

  // node_modules/rxjs/operators/mergeAll.js
  var require_mergeAll = __commonJS({
    "node_modules/rxjs/operators/mergeAll.js"(exports) {
      "use strict";
      var mergeMap_1 = require_mergeMap();
      var identity_1 = require_identity();
      function mergeAll2(concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }
        return mergeMap_1.mergeMap(identity_1.identity, null, concurrent);
      }
      exports.mergeAll = mergeAll2;
    }
  });

  // node_modules/rxjs/operators/concatAll.js
  var require_concatAll = __commonJS({
    "node_modules/rxjs/operators/concatAll.js"(exports) {
      "use strict";
      var mergeAll_1 = require_mergeAll();
      function concatAll() {
        return mergeAll_1.mergeAll(1);
      }
      exports.concatAll = concatAll;
    }
  });

  // node_modules/rxjs/observable/concat.js
  var require_concat = __commonJS({
    "node_modules/rxjs/observable/concat.js"(exports) {
      "use strict";
      var isScheduler_1 = require_isScheduler();
      var of_1 = require_of();
      var from_1 = require_from();
      var concatAll_1 = require_concatAll();
      function concat3() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
        }
        if (observables.length === 1 || observables.length === 2 && isScheduler_1.isScheduler(observables[1])) {
          return from_1.from(observables[0]);
        }
        return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
      }
      exports.concat = concat3;
    }
  });

  // node_modules/rxjs/operators/startWith.js
  var require_startWith = __commonJS({
    "node_modules/rxjs/operators/startWith.js"(exports) {
      "use strict";
      var ArrayObservable_1 = require_ArrayObservable();
      var ScalarObservable_1 = require_ScalarObservable();
      var EmptyObservable_1 = require_EmptyObservable();
      var concat_1 = require_concat();
      var isScheduler_1 = require_isScheduler();
      function startWith2() {
        var array2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          array2[_i - 0] = arguments[_i];
        }
        return function(source) {
          var scheduler = array2[array2.length - 1];
          if (isScheduler_1.isScheduler(scheduler)) {
            array2.pop();
          } else {
            scheduler = null;
          }
          var len = array2.length;
          if (len === 1) {
            return concat_1.concat(new ScalarObservable_1.ScalarObservable(array2[0], scheduler), source);
          } else if (len > 1) {
            return concat_1.concat(new ArrayObservable_1.ArrayObservable(array2, scheduler), source);
          } else {
            return concat_1.concat(new EmptyObservable_1.EmptyObservable(scheduler), source);
          }
        };
      }
      exports.startWith = startWith2;
    }
  });

  // node_modules/rxjs/operators/mapTo.js
  var require_mapTo = __commonJS({
    "node_modules/rxjs/operators/mapTo.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      function mapTo3(value2) {
        return function(source) {
          return source.lift(new MapToOperator(value2));
        };
      }
      exports.mapTo = mapTo3;
      var MapToOperator = function() {
        function MapToOperator2(value2) {
          this.value = value2;
        }
        MapToOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new MapToSubscriber(subscriber, this.value));
        };
        return MapToOperator2;
      }();
      var MapToSubscriber = function(_super) {
        __extends2(MapToSubscriber2, _super);
        function MapToSubscriber2(destination, value2) {
          _super.call(this, destination);
          this.value = value2;
        }
        MapToSubscriber2.prototype._next = function(x) {
          this.destination.next(this.value);
        };
        return MapToSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/observable/empty.js
  var require_empty = __commonJS({
    "node_modules/rxjs/observable/empty.js"(exports) {
      "use strict";
      var EmptyObservable_1 = require_EmptyObservable();
      exports.empty = EmptyObservable_1.EmptyObservable.create;
    }
  });

  // node_modules/rxjs/observable/merge.js
  var require_merge = __commonJS({
    "node_modules/rxjs/observable/merge.js"(exports) {
      "use strict";
      var Observable_1 = require_Observable();
      var ArrayObservable_1 = require_ArrayObservable();
      var isScheduler_1 = require_isScheduler();
      var mergeAll_1 = require_mergeAll();
      function merge5() {
        var observables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
        }
        var concurrent = Number.POSITIVE_INFINITY;
        var scheduler = null;
        var last = observables[observables.length - 1];
        if (isScheduler_1.isScheduler(last)) {
          scheduler = observables.pop();
          if (observables.length > 1 && typeof observables[observables.length - 1] === "number") {
            concurrent = observables.pop();
          }
        } else if (typeof last === "number") {
          concurrent = observables.pop();
        }
        if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
          return observables[0];
        }
        return mergeAll_1.mergeAll(concurrent)(new ArrayObservable_1.ArrayObservable(observables, scheduler));
      }
      exports.merge = merge5;
    }
  });

  // node_modules/rxjs/util/not.js
  var require_not = __commonJS({
    "node_modules/rxjs/util/not.js"(exports) {
      "use strict";
      function not(pred, thisArg) {
        function notPred() {
          return !notPred.pred.apply(notPred.thisArg, arguments);
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
      }
      exports.not = not;
    }
  });

  // node_modules/rxjs/operators/partition.js
  var require_partition = __commonJS({
    "node_modules/rxjs/operators/partition.js"(exports) {
      "use strict";
      var not_1 = require_not();
      var filter_1 = require_filter();
      function partition2(predicate, thisArg) {
        return function(source) {
          return [
            filter_1.filter(predicate, thisArg)(source),
            filter_1.filter(not_1.not(predicate, thisArg))(source)
          ];
        };
      }
      exports.partition = partition2;
    }
  });

  // node_modules/rxjs/util/Immediate.js
  var require_Immediate = __commonJS({
    "node_modules/rxjs/util/Immediate.js"(exports) {
      "use strict";
      var root_1 = require_root();
      var ImmediateDefinition = function() {
        function ImmediateDefinition2(root) {
          this.root = root;
          if (root.setImmediate && typeof root.setImmediate === "function") {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
          } else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            if (this.canUseProcessNextTick()) {
              this.setImmediate = this.createProcessNextTickSetImmediate();
            } else if (this.canUsePostMessage()) {
              this.setImmediate = this.createPostMessageSetImmediate();
            } else if (this.canUseMessageChannel()) {
              this.setImmediate = this.createMessageChannelSetImmediate();
            } else if (this.canUseReadyStateChange()) {
              this.setImmediate = this.createReadyStateChangeSetImmediate();
            } else {
              this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
              delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
          }
        }
        ImmediateDefinition2.prototype.identify = function(o) {
          return this.root.Object.prototype.toString.call(o);
        };
        ImmediateDefinition2.prototype.canUseProcessNextTick = function() {
          return this.identify(this.root.process) === "[object process]";
        };
        ImmediateDefinition2.prototype.canUseMessageChannel = function() {
          return Boolean(this.root.MessageChannel);
        };
        ImmediateDefinition2.prototype.canUseReadyStateChange = function() {
          var document2 = this.root.document;
          return Boolean(document2 && "onreadystatechange" in document2.createElement("script"));
        };
        ImmediateDefinition2.prototype.canUsePostMessage = function() {
          var root = this.root;
          if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function() {
              postMessageIsAsynchronous_1 = false;
            };
            root.postMessage("", "*");
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
          }
          return false;
        };
        ImmediateDefinition2.prototype.partiallyApplied = function(handler) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }
          var fn = function result() {
            var _a7 = result, handler2 = _a7.handler, args2 = _a7.args;
            if (typeof handler2 === "function") {
              handler2.apply(void 0, args2);
            } else {
              new Function("" + handler2)();
            }
          };
          fn.handler = handler;
          fn.args = args;
          return fn;
        };
        ImmediateDefinition2.prototype.addFromSetImmediateArguments = function(args) {
          this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(void 0, args);
          return this.nextHandle++;
        };
        ImmediateDefinition2.prototype.createProcessNextTickSetImmediate = function() {
          var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
          };
          fn.instance = this;
          return fn;
        };
        ImmediateDefinition2.prototype.createPostMessageSetImmediate = function() {
          var root = this.root;
          var messagePrefix = "setImmediate$" + root.Math.random() + "$";
          var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
              instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
          };
          onGlobalMessage.instance = this;
          root.addEventListener("message", onGlobalMessage, false);
          var fn = function setImmediate() {
            var _a7 = setImmediate, messagePrefix2 = _a7.messagePrefix, instance = _a7.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix2 + handle, "*");
            return handle;
          };
          fn.instance = this;
          fn.messagePrefix = messagePrefix;
          return fn;
        };
        ImmediateDefinition2.prototype.runIfPresent = function(handle) {
          if (this.currentlyRunningATask) {
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
          } else {
            var task = this.tasksByHandle[handle];
            if (task) {
              this.currentlyRunningATask = true;
              try {
                task();
              } finally {
                this.clearImmediate(handle);
                this.currentlyRunningATask = false;
              }
            }
          }
        };
        ImmediateDefinition2.prototype.createMessageChannelSetImmediate = function() {
          var _this = this;
          var channel = new this.root.MessageChannel();
          channel.port1.onmessage = function(event) {
            var handle = event.data;
            _this.runIfPresent(handle);
          };
          var fn = function setImmediate() {
            var _a7 = setImmediate, channel2 = _a7.channel, instance = _a7.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel2.port2.postMessage(handle);
            return handle;
          };
          fn.channel = channel;
          fn.instance = this;
          return fn;
        };
        ImmediateDefinition2.prototype.createReadyStateChangeSetImmediate = function() {
          var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            var script = doc.createElement("script");
            script.onreadystatechange = function() {
              instance.runIfPresent(handle);
              script.onreadystatechange = null;
              html.removeChild(script);
              script = null;
            };
            html.appendChild(script);
            return handle;
          };
          fn.instance = this;
          return fn;
        };
        ImmediateDefinition2.prototype.createSetTimeoutSetImmediate = function() {
          var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
          };
          fn.instance = this;
          return fn;
        };
        return ImmediateDefinition2;
      }();
      exports.ImmediateDefinition = ImmediateDefinition;
      exports.Immediate = new ImmediateDefinition(root_1.root);
    }
  });

  // node_modules/rxjs/scheduler/AsapAction.js
  var require_AsapAction = __commonJS({
    "node_modules/rxjs/scheduler/AsapAction.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Immediate_1 = require_Immediate();
      var AsyncAction_1 = require_AsyncAction();
      var AsapAction = function(_super) {
        __extends2(AsapAction2, _super);
        function AsapAction2(scheduler, work) {
          _super.call(this, scheduler, work);
          this.scheduler = scheduler;
          this.work = work;
        }
        AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
          }
          scheduler.actions.push(this);
          return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
        };
        AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
          }
          if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = void 0;
          }
          return void 0;
        };
        return AsapAction2;
      }(AsyncAction_1.AsyncAction);
      exports.AsapAction = AsapAction;
    }
  });

  // node_modules/rxjs/scheduler/AsapScheduler.js
  var require_AsapScheduler = __commonJS({
    "node_modules/rxjs/scheduler/AsapScheduler.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var AsyncScheduler_1 = require_AsyncScheduler();
      var AsapScheduler = function(_super) {
        __extends2(AsapScheduler2, _super);
        function AsapScheduler2() {
          _super.apply(this, arguments);
        }
        AsapScheduler2.prototype.flush = function(action) {
          this.active = true;
          this.scheduled = void 0;
          var actions = this.actions;
          var error;
          var index = -1;
          var count = actions.length;
          action = action || actions.shift();
          do {
            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          } while (++index < count && (action = actions.shift()));
          this.active = false;
          if (error) {
            while (++index < count && (action = actions.shift())) {
              action.unsubscribe();
            }
            throw error;
          }
        };
        return AsapScheduler2;
      }(AsyncScheduler_1.AsyncScheduler);
      exports.AsapScheduler = AsapScheduler;
    }
  });

  // node_modules/rxjs/scheduler/asap.js
  var require_asap = __commonJS({
    "node_modules/rxjs/scheduler/asap.js"(exports) {
      "use strict";
      var AsapAction_1 = require_AsapAction();
      var AsapScheduler_1 = require_AsapScheduler();
      exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
    }
  });

  // node_modules/rxjs/observable/SubscribeOnObservable.js
  var require_SubscribeOnObservable = __commonJS({
    "node_modules/rxjs/observable/SubscribeOnObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Observable_1 = require_Observable();
      var asap_1 = require_asap();
      var isNumeric_1 = require_isNumeric();
      var SubscribeOnObservable = function(_super) {
        __extends2(SubscribeOnObservable2, _super);
        function SubscribeOnObservable2(source, delayTime, scheduler) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          if (scheduler === void 0) {
            scheduler = asap_1.asap;
          }
          _super.call(this);
          this.source = source;
          this.delayTime = delayTime;
          this.scheduler = scheduler;
          if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
            this.delayTime = 0;
          }
          if (!scheduler || typeof scheduler.schedule !== "function") {
            this.scheduler = asap_1.asap;
          }
        }
        SubscribeOnObservable2.create = function(source, delay, scheduler) {
          if (delay === void 0) {
            delay = 0;
          }
          if (scheduler === void 0) {
            scheduler = asap_1.asap;
          }
          return new SubscribeOnObservable2(source, delay, scheduler);
        };
        SubscribeOnObservable2.dispatch = function(arg) {
          var source = arg.source, subscriber = arg.subscriber;
          return this.add(source.subscribe(subscriber));
        };
        SubscribeOnObservable2.prototype._subscribe = function(subscriber) {
          var delay = this.delayTime;
          var source = this.source;
          var scheduler = this.scheduler;
          return scheduler.schedule(SubscribeOnObservable2.dispatch, delay, {
            source,
            subscriber
          });
        };
        return SubscribeOnObservable2;
      }(Observable_1.Observable);
      exports.SubscribeOnObservable = SubscribeOnObservable;
    }
  });

  // node_modules/rxjs/operators/subscribeOn.js
  var require_subscribeOn = __commonJS({
    "node_modules/rxjs/operators/subscribeOn.js"(exports) {
      "use strict";
      var SubscribeOnObservable_1 = require_SubscribeOnObservable();
      function subscribeOn2(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return function subscribeOnOperatorFunction(source) {
          return source.lift(new SubscribeOnOperator(scheduler, delay));
        };
      }
      exports.subscribeOn = subscribeOn2;
      var SubscribeOnOperator = function() {
        function SubscribeOnOperator2(scheduler, delay) {
          this.scheduler = scheduler;
          this.delay = delay;
        }
        SubscribeOnOperator2.prototype.call = function(subscriber, source) {
          return new SubscribeOnObservable_1.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
        };
        return SubscribeOnOperator2;
      }();
    }
  });

  // node_modules/rxjs/operators/skip.js
  var require_skip = __commonJS({
    "node_modules/rxjs/operators/skip.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      function skip5(count) {
        return function(source) {
          return source.lift(new SkipOperator(count));
        };
      }
      exports.skip = skip5;
      var SkipOperator = function() {
        function SkipOperator2(total) {
          this.total = total;
        }
        SkipOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new SkipSubscriber(subscriber, this.total));
        };
        return SkipOperator2;
      }();
      var SkipSubscriber = function(_super) {
        __extends2(SkipSubscriber2, _super);
        function SkipSubscriber2(destination, total) {
          _super.call(this, destination);
          this.total = total;
          this.count = 0;
        }
        SkipSubscriber2.prototype._next = function(x) {
          if (++this.count > this.total) {
            this.destination.next(x);
          }
        };
        return SkipSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/operators/distinctUntilChanged.js
  var require_distinctUntilChanged = __commonJS({
    "node_modules/rxjs/operators/distinctUntilChanged.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      var tryCatch_1 = require_tryCatch();
      var errorObject_1 = require_errorObject();
      function distinctUntilChanged5(compare, keySelector) {
        return function(source) {
          return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
        };
      }
      exports.distinctUntilChanged = distinctUntilChanged5;
      var DistinctUntilChangedOperator = function() {
        function DistinctUntilChangedOperator2(compare, keySelector) {
          this.compare = compare;
          this.keySelector = keySelector;
        }
        DistinctUntilChangedOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
        };
        return DistinctUntilChangedOperator2;
      }();
      var DistinctUntilChangedSubscriber = function(_super) {
        __extends2(DistinctUntilChangedSubscriber2, _super);
        function DistinctUntilChangedSubscriber2(destination, compare, keySelector) {
          _super.call(this, destination);
          this.keySelector = keySelector;
          this.hasKey = false;
          if (typeof compare === "function") {
            this.compare = compare;
          }
        }
        DistinctUntilChangedSubscriber2.prototype.compare = function(x, y) {
          return x === y;
        };
        DistinctUntilChangedSubscriber2.prototype._next = function(value2) {
          var keySelector = this.keySelector;
          var key = value2;
          if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value2);
            if (key === errorObject_1.errorObject) {
              return this.destination.error(errorObject_1.errorObject.e);
            }
          }
          var result = false;
          if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
              return this.destination.error(errorObject_1.errorObject.e);
            }
          } else {
            this.hasKey = true;
          }
          if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value2);
          }
        };
        return DistinctUntilChangedSubscriber2;
      }(Subscriber_1.Subscriber);
    }
  });

  // node_modules/rxjs/observable/FromEventObservable.js
  var require_FromEventObservable = __commonJS({
    "node_modules/rxjs/observable/FromEventObservable.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Observable_1 = require_Observable();
      var tryCatch_1 = require_tryCatch();
      var isFunction_1 = require_isFunction();
      var errorObject_1 = require_errorObject();
      var Subscription_1 = require_Subscription();
      var toString2 = Object.prototype.toString;
      function isNodeStyleEventEmitter(sourceObj) {
        return !!sourceObj && typeof sourceObj.addListener === "function" && typeof sourceObj.removeListener === "function";
      }
      function isJQueryStyleEventEmitter(sourceObj) {
        return !!sourceObj && typeof sourceObj.on === "function" && typeof sourceObj.off === "function";
      }
      function isNodeList(sourceObj) {
        return !!sourceObj && toString2.call(sourceObj) === "[object NodeList]";
      }
      function isHTMLCollection(sourceObj) {
        return !!sourceObj && toString2.call(sourceObj) === "[object HTMLCollection]";
      }
      function isEventTarget(sourceObj) {
        return !!sourceObj && typeof sourceObj.addEventListener === "function" && typeof sourceObj.removeEventListener === "function";
      }
      var FromEventObservable = function(_super) {
        __extends2(FromEventObservable2, _super);
        function FromEventObservable2(sourceObj, eventName, selector, options) {
          _super.call(this);
          this.sourceObj = sourceObj;
          this.eventName = eventName;
          this.selector = selector;
          this.options = options;
        }
        FromEventObservable2.create = function(target, eventName, options, selector) {
          if (isFunction_1.isFunction(options)) {
            selector = options;
            options = void 0;
          }
          return new FromEventObservable2(target, eventName, selector, options);
        };
        FromEventObservable2.setupSubscription = function(sourceObj, eventName, handler, subscriber, options) {
          var unsubscribe;
          if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i2 = 0, len = sourceObj.length; i2 < len; i2++) {
              FromEventObservable2.setupSubscription(sourceObj[i2], eventName, handler, subscriber, options);
            }
          } else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function() {
              return source_1.removeEventListener(eventName, handler, options);
            };
          } else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function() {
              return source_2.off(eventName, handler);
            };
          } else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function() {
              return source_3.removeListener(eventName, handler);
            };
          } else {
            throw new TypeError("Invalid event target");
          }
          subscriber.add(new Subscription_1.Subscription(unsubscribe));
        };
        FromEventObservable2.prototype._subscribe = function(subscriber) {
          var sourceObj = this.sourceObj;
          var eventName = this.eventName;
          var options = this.options;
          var selector = this.selector;
          var handler = selector ? function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i - 0] = arguments[_i];
            }
            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
            if (result === errorObject_1.errorObject) {
              subscriber.error(errorObject_1.errorObject.e);
            } else {
              subscriber.next(result);
            }
          } : function(e) {
            return subscriber.next(e);
          };
          FromEventObservable2.setupSubscription(sourceObj, eventName, handler, subscriber, options);
        };
        return FromEventObservable2;
      }(Observable_1.Observable);
      exports.FromEventObservable = FromEventObservable;
    }
  });

  // node_modules/rxjs/observable/fromEvent.js
  var require_fromEvent = __commonJS({
    "node_modules/rxjs/observable/fromEvent.js"(exports) {
      "use strict";
      var FromEventObservable_1 = require_FromEventObservable();
      exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
    }
  });

  // node_modules/rxjs/util/MapPolyfill.js
  var require_MapPolyfill = __commonJS({
    "node_modules/rxjs/util/MapPolyfill.js"(exports) {
      "use strict";
      var MapPolyfill = function() {
        function MapPolyfill2() {
          this.size = 0;
          this._values = [];
          this._keys = [];
        }
        MapPolyfill2.prototype.get = function(key) {
          var i2 = this._keys.indexOf(key);
          return i2 === -1 ? void 0 : this._values[i2];
        };
        MapPolyfill2.prototype.set = function(key, value2) {
          var i2 = this._keys.indexOf(key);
          if (i2 === -1) {
            this._keys.push(key);
            this._values.push(value2);
            this.size++;
          } else {
            this._values[i2] = value2;
          }
          return this;
        };
        MapPolyfill2.prototype.delete = function(key) {
          var i2 = this._keys.indexOf(key);
          if (i2 === -1) {
            return false;
          }
          this._values.splice(i2, 1);
          this._keys.splice(i2, 1);
          this.size--;
          return true;
        };
        MapPolyfill2.prototype.clear = function() {
          this._keys.length = 0;
          this._values.length = 0;
          this.size = 0;
        };
        MapPolyfill2.prototype.forEach = function(cb, thisArg) {
          for (var i2 = 0; i2 < this.size; i2++) {
            cb.call(thisArg, this._values[i2], this._keys[i2]);
          }
        };
        return MapPolyfill2;
      }();
      exports.MapPolyfill = MapPolyfill;
    }
  });

  // node_modules/rxjs/util/Map.js
  var require_Map = __commonJS({
    "node_modules/rxjs/util/Map.js"(exports) {
      "use strict";
      var root_1 = require_root();
      var MapPolyfill_1 = require_MapPolyfill();
      exports.Map = root_1.root.Map || function() {
        return MapPolyfill_1.MapPolyfill;
      }();
    }
  });

  // node_modules/rxjs/util/FastMap.js
  var require_FastMap = __commonJS({
    "node_modules/rxjs/util/FastMap.js"(exports) {
      "use strict";
      var FastMap = function() {
        function FastMap2() {
          this.values = {};
        }
        FastMap2.prototype.delete = function(key) {
          this.values[key] = null;
          return true;
        };
        FastMap2.prototype.set = function(key, value2) {
          this.values[key] = value2;
          return this;
        };
        FastMap2.prototype.get = function(key) {
          return this.values[key];
        };
        FastMap2.prototype.forEach = function(cb, thisArg) {
          var values = this.values;
          for (var key in values) {
            if (values.hasOwnProperty(key) && values[key] !== null) {
              cb.call(thisArg, values[key], key);
            }
          }
        };
        FastMap2.prototype.clear = function() {
          this.values = {};
        };
        return FastMap2;
      }();
      exports.FastMap = FastMap;
    }
  });

  // node_modules/rxjs/operators/groupBy.js
  var require_groupBy = __commonJS({
    "node_modules/rxjs/operators/groupBy.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      var Subscriber_1 = require_Subscriber();
      var Subscription_1 = require_Subscription();
      var Observable_1 = require_Observable();
      var Subject_1 = require_Subject();
      var Map_1 = require_Map();
      var FastMap_1 = require_FastMap();
      function groupBy2(keySelector, elementSelector, durationSelector, subjectSelector) {
        return function(source) {
          return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
        };
      }
      exports.groupBy = groupBy2;
      var GroupByOperator = function() {
        function GroupByOperator2(keySelector, elementSelector, durationSelector, subjectSelector) {
          this.keySelector = keySelector;
          this.elementSelector = elementSelector;
          this.durationSelector = durationSelector;
          this.subjectSelector = subjectSelector;
        }
        GroupByOperator2.prototype.call = function(subscriber, source) {
          return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
        };
        return GroupByOperator2;
      }();
      var GroupBySubscriber = function(_super) {
        __extends2(GroupBySubscriber2, _super);
        function GroupBySubscriber2(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
          _super.call(this, destination);
          this.keySelector = keySelector;
          this.elementSelector = elementSelector;
          this.durationSelector = durationSelector;
          this.subjectSelector = subjectSelector;
          this.groups = null;
          this.attemptedToUnsubscribe = false;
          this.count = 0;
        }
        GroupBySubscriber2.prototype._next = function(value2) {
          var key;
          try {
            key = this.keySelector(value2);
          } catch (err) {
            this.error(err);
            return;
          }
          this._group(value2, key);
        };
        GroupBySubscriber2.prototype._group = function(value2, key) {
          var groups = this.groups;
          if (!groups) {
            groups = this.groups = typeof key === "string" ? new FastMap_1.FastMap() : new Map_1.Map();
          }
          var group = groups.get(key);
          var element;
          if (this.elementSelector) {
            try {
              element = this.elementSelector(value2);
            } catch (err) {
              this.error(err);
            }
          } else {
            element = value2;
          }
          if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
              var duration = void 0;
              try {
                duration = this.durationSelector(new GroupedObservable(key, group));
              } catch (err) {
                this.error(err);
                return;
              }
              this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
          }
          if (!group.closed) {
            group.next(element);
          }
        };
        GroupBySubscriber2.prototype._error = function(err) {
          var groups = this.groups;
          if (groups) {
            groups.forEach(function(group, key) {
              group.error(err);
            });
            groups.clear();
          }
          this.destination.error(err);
        };
        GroupBySubscriber2.prototype._complete = function() {
          var groups = this.groups;
          if (groups) {
            groups.forEach(function(group, key) {
              group.complete();
            });
            groups.clear();
          }
          this.destination.complete();
        };
        GroupBySubscriber2.prototype.removeGroup = function(key) {
          this.groups.delete(key);
        };
        GroupBySubscriber2.prototype.unsubscribe = function() {
          if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
              _super.prototype.unsubscribe.call(this);
            }
          }
        };
        return GroupBySubscriber2;
      }(Subscriber_1.Subscriber);
      var GroupDurationSubscriber = function(_super) {
        __extends2(GroupDurationSubscriber2, _super);
        function GroupDurationSubscriber2(key, group, parent) {
          _super.call(this, group);
          this.key = key;
          this.group = group;
          this.parent = parent;
        }
        GroupDurationSubscriber2.prototype._next = function(value2) {
          this.complete();
        };
        GroupDurationSubscriber2.prototype._unsubscribe = function() {
          var _a7 = this, parent = _a7.parent, key = _a7.key;
          this.key = this.parent = null;
          if (parent) {
            parent.removeGroup(key);
          }
        };
        return GroupDurationSubscriber2;
      }(Subscriber_1.Subscriber);
      var GroupedObservable = function(_super) {
        __extends2(GroupedObservable2, _super);
        function GroupedObservable2(key, groupSubject, refCountSubscription) {
          _super.call(this);
          this.key = key;
          this.groupSubject = groupSubject;
          this.refCountSubscription = refCountSubscription;
        }
        GroupedObservable2.prototype._subscribe = function(subscriber) {
          var subscription = new Subscription_1.Subscription();
          var _a7 = this, refCountSubscription = _a7.refCountSubscription, groupSubject = _a7.groupSubject;
          if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
          }
          subscription.add(groupSubject.subscribe(subscriber));
          return subscription;
        };
        return GroupedObservable2;
      }(Observable_1.Observable);
      exports.GroupedObservable = GroupedObservable;
      var InnerRefCountSubscription = function(_super) {
        __extends2(InnerRefCountSubscription2, _super);
        function InnerRefCountSubscription2(parent) {
          _super.call(this);
          this.parent = parent;
          parent.count++;
        }
        InnerRefCountSubscription2.prototype.unsubscribe = function() {
          var parent = this.parent;
          if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
              parent.unsubscribe();
            }
          }
        };
        return InnerRefCountSubscription2;
      }(Subscription_1.Subscription);
    }
  });

  // ../../node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // _dist/index.js
  var import_zip = __toESM(require_zip2());

  // node_modules/engine.io-parser/build/esm/commons.js
  var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
  Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  var ERROR_PACKET = { type: "error", data: "parser error" };

  // node_modules/engine.io-parser/build/esm/encodePacket.browser.js
  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  var isView = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };
  var encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    }
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  var encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function() {
      const content = fileReader.result.split(",")[1];
      callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
  };
  var encodePacket_browser_default = encodePacket;

  // node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  for (let i2 = 0; i2 < chars.length; i2++) {
    lookup[chars.charCodeAt(i2)] = i2;
  }
  var decode = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i2 = 0; i2 < len; i2 += 4) {
      encoded1 = lookup[base64.charCodeAt(i2)];
      encoded2 = lookup[base64.charCodeAt(i2 + 1)];
      encoded3 = lookup[base64.charCodeAt(i2 + 2)];
      encoded4 = lookup[base64.charCodeAt(i2 + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  };

  // node_modules/engine.io-parser/build/esm/decodePacket.browser.js
  var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
  var decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  var decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer2) {
      const decoded = decode(data);
      return mapBinary(decoded, binaryType);
    } else {
      return { base64: true, data };
    }
  };
  var mapBinary = (data, binaryType) => {
    switch (binaryType) {
      case "blob":
        return data instanceof ArrayBuffer ? new Blob([data]) : data;
      case "arraybuffer":
      default:
        return data;
    }
  };
  var decodePacket_browser_default = decodePacket;

  // node_modules/engine.io-parser/build/esm/index.js
  var SEPARATOR = String.fromCharCode(30);
  var encodePayload = (packets, callback) => {
    const length2 = packets.length;
    const encodedPackets = new Array(length2);
    let count = 0;
    packets.forEach((packet, i2) => {
      encodePacket_browser_default(packet, false, (encodedPacket) => {
        encodedPackets[i2] = encodedPacket;
        if (++count === length2) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  var decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      const decodedPacket = decodePacket_browser_default(encodedPackets[i2], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  var protocol = 4;

  // node_modules/@socket.io/component-emitter/index.mjs
  function Emitter(obj) {
    if (obj)
      return mixin(obj);
  }
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
    return this;
  };
  Emitter.prototype.once = function(event, fn) {
    function on2() {
      this.off(event, on2);
      fn.apply(this, arguments);
    }
    on2.fn = fn;
    this.on(event, on2);
    return this;
  };
  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    if (arguments.length == 0) {
      this._callbacks = {};
      return this;
    }
    var callbacks = this._callbacks["$" + event];
    if (!callbacks)
      return this;
    if (arguments.length == 1) {
      delete this._callbacks["$" + event];
      return this;
    }
    var cb;
    for (var i2 = 0; i2 < callbacks.length; i2++) {
      cb = callbacks[i2];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i2, 1);
        break;
      }
    }
    if (callbacks.length === 0) {
      delete this._callbacks["$" + event];
    }
    return this;
  };
  Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
    for (var i2 = 1; i2 < arguments.length; i2++) {
      args[i2 - 1] = arguments[i2];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
        callbacks[i2].apply(this, args);
      }
    }
    return this;
  };
  Emitter.prototype.emitReserved = Emitter.prototype.emit;
  Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks["$" + event] || [];
  };
  Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
  };

  // node_modules/engine.io-client/build/esm/globalThis.browser.js
  var globalThisShim = (() => {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  })();

  // node_modules/engine.io-client/build/esm/util.js
  function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
      if (obj.hasOwnProperty(k)) {
        acc[k] = obj[k];
      }
      return acc;
    }, {});
  }
  var NATIVE_SET_TIMEOUT = setTimeout;
  var NATIVE_CLEAR_TIMEOUT = clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
    }
  }
  var BASE64_OVERHEAD = 1.33;
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    let c = 0, length2 = 0;
    for (let i2 = 0, l = str.length; i2 < l; i2++) {
      c = str.charCodeAt(i2);
      if (c < 128) {
        length2 += 1;
      } else if (c < 2048) {
        length2 += 2;
      } else if (c < 55296 || c >= 57344) {
        length2 += 3;
      } else {
        i2++;
        length2 += 4;
      }
    }
    return length2;
  }

  // node_modules/engine.io-client/build/esm/transport.js
  var TransportError = class extends Error {
    constructor(reason, description, context) {
      super(reason);
      this.description = description;
      this.context = context;
      this.type = "TransportError";
    }
  };
  var Transport = class extends Emitter {
    constructor(opts) {
      super();
      this.writable = false;
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.query = opts.query;
      this.readyState = "";
      this.socket = opts.socket;
    }
    onError(reason, description, context) {
      super.emitReserved("error", new TransportError(reason, description, context));
      return this;
    }
    open() {
      if (this.readyState === "closed" || this.readyState === "") {
        this.readyState = "opening";
        this.doOpen();
      }
      return this;
    }
    close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      } else {
      }
    }
    onOpen() {
      this.readyState = "open";
      this.writable = true;
      super.emitReserved("open");
    }
    onData(data) {
      const packet = decodePacket_browser_default(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    onPacket(packet) {
      super.emitReserved("packet", packet);
    }
    onClose(details) {
      this.readyState = "closed";
      super.emitReserved("close", details);
    }
  };

  // node_modules/engine.io-client/build/esm/contrib/yeast.js
  var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
  var length = 64;
  var map = {};
  var seed = 0;
  var i = 0;
  var prev;
  function encode(num) {
    let encoded = "";
    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
  }
  function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
      return seed = 0, prev = now;
    return now + "." + encode(seed++);
  }
  for (; i < length; i++)
    map[alphabet[i]] = i;

  // node_modules/engine.io-client/build/esm/contrib/parseqs.js
  function encode2(obj) {
    let str = "";
    for (let i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        if (str.length)
          str += "&";
        str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
      }
    }
    return str;
  }
  function decode2(qs) {
    let qry = {};
    let pairs = qs.split("&");
    for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
      let pair = pairs[i2].split("=");
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }

  // node_modules/engine.io-client/build/esm/contrib/has-cors.js
  var value = false;
  try {
    value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
  } catch (err) {
  }
  var hasCORS = value;

  // node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
  function XHR(opts) {
    const xdomain = opts.xdomain;
    try {
      if (typeof XMLHttpRequest !== "undefined" && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {
    }
    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {
      }
    }
  }

  // node_modules/engine.io-client/build/esm/transports/polling.js
  function empty() {
  }
  var hasXHR2 = function() {
    const xhr = new XHR({
      xdomain: false
    });
    return xhr.responseType != null;
  }();
  var Polling = class extends Transport {
    constructor(opts) {
      super(opts);
      this.polling = false;
      if (typeof location !== "undefined") {
        const isSSL = location.protocol === "https:";
        let port = location.port;
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        this.xs = opts.secure !== isSSL;
      }
      const forceBase64 = opts && opts.forceBase64;
      this.supportsBinary = hasXHR2 && !forceBase64;
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this.poll();
    }
    pause(onPause) {
      this.readyState = "pausing";
      const pause = () => {
        this.readyState = "paused";
        onPause();
      };
      if (this.polling || !this.writable) {
        let total = 0;
        if (this.polling) {
          total++;
          this.once("pollComplete", function() {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function() {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    poll() {
      this.polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    onData(data) {
      const callback = (packet) => {
        if (this.readyState === "opening" && packet.type === "open") {
          this.onOpen();
        }
        if (packet.type === "close") {
          this.onClose({ description: "transport closed by the server" });
          return false;
        }
        this.onPacket(packet);
      };
      decodePayload(data, this.socket.binaryType).forEach(callback);
      if (this.readyState !== "closed") {
        this.polling = false;
        this.emitReserved("pollComplete");
        if (this.readyState === "open") {
          this.poll();
        } else {
        }
      }
    }
    doClose() {
      const close = () => {
        this.write([{ type: "close" }]);
      };
      if (this.readyState === "open") {
        close();
      } else {
        this.once("open", close);
      }
    }
    write(packets) {
      this.writable = false;
      encodePayload(packets, (data) => {
        this.doWrite(data, () => {
          this.writable = true;
          this.emitReserved("drain");
        });
      });
    }
    uri() {
      let query = this.query || {};
      const schema = this.opts.secure ? "https" : "http";
      let port = "";
      if (this.opts.timestampRequests !== false) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      if (this.opts.port && (schema === "https" && Number(this.opts.port) !== 443 || schema === "http" && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      }
      const encodedQuery = encode2(query);
      const ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    request(opts = {}) {
      Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
      return new Request(this.uri(), opts);
    }
    doWrite(data, fn) {
      const req = this.request({
        method: "POST",
        data
      });
      req.on("success", fn);
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr post error", xhrStatus, context);
      });
    }
    doPoll() {
      const req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    }
  };
  var Request = class extends Emitter {
    constructor(uri, opts) {
      super();
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.method = opts.method || "GET";
      this.uri = uri;
      this.async = opts.async !== false;
      this.data = opts.data !== void 0 ? opts.data : null;
      this.create();
    }
    create() {
      const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this.opts.xd;
      opts.xscheme = !!this.opts.xs;
      const xhr = this.xhr = new XHR(opts);
      try {
        xhr.open(this.method, this.uri, this.async);
        try {
          if (this.opts.extraHeaders) {
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (let i2 in this.opts.extraHeaders) {
              if (this.opts.extraHeaders.hasOwnProperty(i2)) {
                xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
              }
            }
          }
        } catch (e) {
        }
        if (this.method === "POST") {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {
          }
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {
        }
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.opts.withCredentials;
        }
        if (this.opts.requestTimeout) {
          xhr.timeout = this.opts.requestTimeout;
        }
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4)
            return;
          if (xhr.status === 200 || xhr.status === 1223) {
            this.onLoad();
          } else {
            this.setTimeoutFn(() => {
              this.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this.data);
      } catch (e) {
        this.setTimeoutFn(() => {
          this.onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this.index = Request.requestsCount++;
        Request.requests[this.index] = this;
      }
    }
    onError(err) {
      this.emitReserved("error", err, this.xhr);
      this.cleanup(true);
    }
    cleanup(fromError) {
      if (typeof this.xhr === "undefined" || this.xhr === null) {
        return;
      }
      this.xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this.xhr.abort();
        } catch (e) {
        }
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this.index];
      }
      this.xhr = null;
    }
    onLoad() {
      const data = this.xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this.cleanup();
      }
    }
    abort() {
      this.cleanup();
    }
  };
  Request.requestsCount = 0;
  Request.requests = {};
  if (typeof document !== "undefined") {
    if (typeof attachEvent === "function") {
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (let i2 in Request.requests) {
      if (Request.requests.hasOwnProperty(i2)) {
        Request.requests[i2].abort();
      }
    }
  }

  // node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
  var nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return (cb) => Promise.resolve().then(cb);
    } else {
      return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
  })();
  var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  var usingBrowserWebSocket = true;
  var defaultBinaryType = "arraybuffer";

  // node_modules/engine.io-client/build/esm/transports/websocket.js
  var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  var WS = class extends Transport {
    constructor(opts) {
      super(opts);
      this.supportsBinary = !opts.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check()) {
        return;
      }
      const uri = this.uri();
      const protocols = this.opts.protocols;
      const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
      this.addEventListeners();
    }
    addEventListeners() {
      this.ws.onopen = () => {
        if (this.opts.autoUnref) {
          this.ws._socket.unref();
        }
        this.onOpen();
      };
      this.ws.onclose = (closeEvent) => this.onClose({
        description: "websocket connection closed",
        context: closeEvent
      });
      this.ws.onmessage = (ev) => this.onData(ev.data);
      this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
      this.writable = false;
      for (let i2 = 0; i2 < packets.length; i2++) {
        const packet = packets[i2];
        const lastPacket = i2 === packets.length - 1;
        encodePacket_browser_default(packet, this.supportsBinary, (data) => {
          const opts = {};
          if (!usingBrowserWebSocket) {
            if (packet.options) {
              opts.compress = packet.options.compress;
            }
            if (this.opts.perMessageDeflate) {
              const len = typeof data === "string" ? Buffer.byteLength(data) : data.length;
              if (len < this.opts.perMessageDeflate.threshold) {
                opts.compress = false;
              }
            }
          }
          try {
            if (usingBrowserWebSocket) {
              this.ws.send(data);
            } else {
              this.ws.send(data, opts);
            }
          } catch (e) {
          }
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
        this.ws = null;
      }
    }
    uri() {
      let query = this.query || {};
      const schema = this.opts.secure ? "wss" : "ws";
      let port = "";
      if (this.opts.port && (schema === "wss" && Number(this.opts.port) !== 443 || schema === "ws" && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      }
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      const encodedQuery = encode2(query);
      const ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    check() {
      return !!WebSocket;
    }
  };

  // node_modules/engine.io-client/build/esm/transports/index.js
  var transports = {
    websocket: WS,
    polling: Polling
  };

  // node_modules/engine.io-client/build/esm/contrib/parseuri.js
  var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
  ];
  function parse(str) {
    const src = str, b = str.indexOf("["), e = str.indexOf("]");
    if (b != -1 && e != -1) {
      str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
    }
    let m = re.exec(str || ""), uri = {}, i2 = 14;
    while (i2--) {
      uri[parts[i2]] = m[i2] || "";
    }
    if (b != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
      uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri["path"]);
    uri.queryKey = queryKey(uri, uri["query"]);
    return uri;
  }
  function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == "/" || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == "/") {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  // node_modules/engine.io-client/build/esm/socket.js
  var Socket = class extends Emitter {
    constructor(uri, opts = {}) {
      super();
      if (uri && typeof uri === "object") {
        opts = uri;
        uri = null;
      }
      if (uri) {
        uri = parse(uri);
        opts.hostname = uri.host;
        opts.secure = uri.protocol === "https" || uri.protocol === "wss";
        opts.port = uri.port;
        if (uri.query)
          opts.query = uri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(this, opts);
      this.secure = opts.secure != null ? opts.secure : typeof location !== "undefined" && location.protocol === "https:";
      if (opts.hostname && !opts.port) {
        opts.port = this.secure ? "443" : "80";
      }
      this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
      this.transports = opts.transports || ["polling", "websocket"];
      this.readyState = "";
      this.writeBuffer = [];
      this.prevBufferLen = 0;
      this.opts = Object.assign({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: true
      }, opts);
      this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
      if (typeof this.opts.query === "string") {
        this.opts.query = decode2(this.opts.query);
      }
      this.id = null;
      this.upgrades = null;
      this.pingInterval = null;
      this.pingTimeout = null;
      this.pingTimeoutTimer = null;
      if (typeof addEventListener === "function") {
        if (this.opts.closeOnBeforeunload) {
          this.beforeunloadEventListener = () => {
            if (this.transport) {
              this.transport.removeAllListeners();
              this.transport.close();
            }
          };
          addEventListener("beforeunload", this.beforeunloadEventListener, false);
        }
        if (this.hostname !== "localhost") {
          this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost"
            });
          };
          addEventListener("offline", this.offlineEventListener, false);
        }
      }
      this.open();
    }
    createTransport(name) {
      const query = Object.assign({}, this.opts.query);
      query.EIO = protocol;
      query.transport = name;
      if (this.id)
        query.sid = this.id;
      const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      });
      return new transports[name](opts);
    }
    open() {
      let transport;
      if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }
      this.readyState = "opening";
      try {
        transport = this.createTransport(transport);
      } catch (e) {
        this.transports.shift();
        this.open();
        return;
      }
      transport.open();
      this.setTransport(transport);
    }
    setTransport(transport) {
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      this.transport = transport;
      transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
    }
    probe(name) {
      let transport = this.createTransport(name);
      let failed = false;
      Socket.priorWebsocketSuccess = false;
      const onTransportOpen = () => {
        if (failed)
          return;
        transport.send([{ type: "ping", data: "probe" }]);
        transport.once("packet", (msg) => {
          if (failed)
            return;
          if (msg.type === "pong" && msg.data === "probe") {
            this.upgrading = true;
            this.emitReserved("upgrading", transport);
            if (!transport)
              return;
            Socket.priorWebsocketSuccess = transport.name === "websocket";
            this.transport.pause(() => {
              if (failed)
                return;
              if (this.readyState === "closed")
                return;
              cleanup();
              this.setTransport(transport);
              transport.send([{ type: "upgrade" }]);
              this.emitReserved("upgrade", transport);
              transport = null;
              this.upgrading = false;
              this.flush();
            });
          } else {
            const err = new Error("probe error");
            err.transport = transport.name;
            this.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed)
          return;
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      const onerror = (err) => {
        const error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        this.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      function onclose() {
        onerror("socket closed");
      }
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      const cleanup = () => {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        this.off("close", onclose);
        this.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      transport.open();
    }
    onOpen() {
      this.readyState = "open";
      Socket.priorWebsocketSuccess = this.transport.name === "websocket";
      this.emitReserved("open");
      this.flush();
      if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
        let i2 = 0;
        const l = this.upgrades.length;
        for (; i2 < l; i2++) {
          this.probe(this.upgrades[i2]);
        }
      }
    }
    onPacket(packet) {
      if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        this.emitReserved("packet", packet);
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this.resetPingTimeout();
            this.sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            break;
          case "error":
            const err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      } else {
      }
    }
    onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.maxPayload = data.maxPayload;
      this.onOpen();
      if (this.readyState === "closed")
        return;
      this.resetPingTimeout();
    }
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);
      if (this.opts.autoUnref) {
        this.pingTimeoutTimer.unref();
      }
    }
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen);
      this.prevBufferLen = 0;
      if (this.writeBuffer.length === 0) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    flush() {
      if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const packets = this.getWritablePackets();
        this.transport.send(packets);
        this.prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    getWritablePackets() {
      const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      let payloadSize = 1;
      for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
        const data = this.writeBuffer[i2].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i2 > 0 && payloadSize > this.maxPayload) {
          return this.writeBuffer.slice(0, i2);
        }
        payloadSize += 2;
      }
      return this.writeBuffer;
    }
    write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    sendPacket(type, data, options, fn) {
      if (typeof data === "function") {
        fn = data;
        data = void 0;
      }
      if (typeof options === "function") {
        fn = options;
        options = null;
      }
      if (this.readyState === "closing" || this.readyState === "closed") {
        return;
      }
      options = options || {};
      options.compress = options.compress !== false;
      const packet = {
        type,
        data,
        options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn)
        this.once("flush", fn);
      this.flush();
    }
    close() {
      const close = () => {
        this.onClose("forced close");
        this.transport.close();
      };
      const cleanupAndClose = () => {
        this.off("upgrade", cleanupAndClose);
        this.off("upgradeError", cleanupAndClose);
        close();
      };
      const waitForUpgrade = () => {
        this.once("upgrade", cleanupAndClose);
        this.once("upgradeError", cleanupAndClose);
      };
      if (this.readyState === "opening" || this.readyState === "open") {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", () => {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    onError(err) {
      Socket.priorWebsocketSuccess = false;
      this.emitReserved("error", err);
      this.onClose("transport error", err);
    }
    onClose(reason, description) {
      if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.transport.removeAllListeners("close");
        this.transport.close();
        this.transport.removeAllListeners();
        if (typeof removeEventListener === "function") {
          removeEventListener("beforeunload", this.beforeunloadEventListener, false);
          removeEventListener("offline", this.offlineEventListener, false);
        }
        this.readyState = "closed";
        this.id = null;
        this.emitReserved("close", reason, description);
        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    }
    filterUpgrades(upgrades) {
      const filteredUpgrades = [];
      let i2 = 0;
      const j = upgrades.length;
      for (; i2 < j; i2++) {
        if (~this.transports.indexOf(upgrades[i2]))
          filteredUpgrades.push(upgrades[i2]);
      }
      return filteredUpgrades;
    }
  };
  Socket.protocol = protocol;

  // node_modules/engine.io-client/build/esm/index.js
  var protocol2 = Socket.protocol;

  // node_modules/socket.io-client/build/esm/url.js
  function url(uri, path = "", loc) {
    let obj = uri;
    loc = loc || typeof location !== "undefined" && location;
    if (uri == null)
      uri = loc.protocol + "//" + loc.host;
    if (typeof uri === "string") {
      if (uri.charAt(0) === "/") {
        if (uri.charAt(1) === "/") {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        if (typeof loc !== "undefined") {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      obj = parse(uri);
    }
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  // node_modules/socket.io-parser/build/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    Decoder: () => Decoder,
    Encoder: () => Encoder,
    PacketType: () => PacketType,
    protocol: () => protocol3
  });

  // node_modules/socket.io-parser/build/esm/is-binary.js
  var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
  var isView2 = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  var toString = Object.prototype.toString;
  var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  function isBinary(obj) {
    return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (let i2 = 0, l = obj.length; i2 < l; i2++) {
        if (hasBinary(obj[i2])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }

  // node_modules/socket.io-parser/build/esm/binary.js
  function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length;
    return { packet: pack, buffers };
  }
  function _deconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (isBinary(data)) {
      const placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      const newData = new Array(data.length);
      for (let i2 = 0; i2 < data.length; i2++) {
        newData[i2] = _deconstructPacket(data[i2], buffers);
      }
      return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
      const newData = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return newData;
    }
    return data;
  }
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = void 0;
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (data && data._placeholder === true) {
      const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num];
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (let i2 = 0; i2 < data.length; i2++) {
        data[i2] = _reconstructPacket(data[i2], buffers);
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }

  // node_modules/socket.io-parser/build/esm/index.js
  var protocol3 = 5;
  var PacketType;
  (function(PacketType2) {
    PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
    PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
    PacketType2[PacketType2["ACK"] = 3] = "ACK";
    PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  var Encoder = class {
    constructor(replacer) {
      this.replacer = replacer;
    }
    encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
          return this.encodeAsBinary(obj);
        }
      }
      return [this.encodeAsString(obj)];
    }
    encodeAsString(obj) {
      let str = "" + obj.type;
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      if (obj.nsp && obj.nsp !== "/") {
        str += obj.nsp + ",";
      }
      if (obj.id != null) {
        str += obj.id;
      }
      if (obj.data != null) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    encodeAsBinary(obj) {
      const deconstruction = deconstructPacket(obj);
      const pack = this.encodeAsString(deconstruction.packet);
      const buffers = deconstruction.buffers;
      buffers.unshift(pack);
      return buffers;
    }
  };
  var Decoder = class extends Emitter {
    constructor(reviver) {
      super();
      this.reviver = reviver;
    }
    add(obj) {
      let packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
          this.reconstructor = new BinaryReconstructor(packet);
          if (packet.attachments === 0) {
            super.emitReserved("decoded", packet);
          }
        } else {
          super.emitReserved("decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            this.reconstructor = null;
            super.emitReserved("decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    decodeString(str) {
      let i2 = 0;
      const p = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p.type] === void 0) {
        throw new Error("unknown packet type " + p.type);
      }
      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        const start = i2 + 1;
        while (str.charAt(++i2) !== "-" && i2 != str.length) {
        }
        const buf = str.substring(start, i2);
        if (buf != Number(buf) || str.charAt(i2) !== "-") {
          throw new Error("Illegal attachments");
        }
        p.attachments = Number(buf);
      }
      if (str.charAt(i2 + 1) === "/") {
        const start = i2 + 1;
        while (++i2) {
          const c = str.charAt(i2);
          if (c === ",")
            break;
          if (i2 === str.length)
            break;
        }
        p.nsp = str.substring(start, i2);
      } else {
        p.nsp = "/";
      }
      const next = str.charAt(i2 + 1);
      if (next !== "" && Number(next) == next) {
        const start = i2 + 1;
        while (++i2) {
          const c = str.charAt(i2);
          if (c == null || Number(c) != c) {
            --i2;
            break;
          }
          if (i2 === str.length)
            break;
        }
        p.id = Number(str.substring(start, i2 + 1));
      }
      if (str.charAt(++i2)) {
        const payload = this.tryParse(str.substr(i2));
        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p;
    }
    tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    }
    static isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return typeof payload === "object";
        case PacketType.DISCONNECT:
          return payload === void 0;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || typeof payload === "object";
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && payload.length > 0;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    }
  };
  var BinaryReconstructor = class {
    constructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        const packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  };

  // node_modules/socket.io-client/build/esm/on.js
  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  // node_modules/socket.io-client/build/esm/socket.js
  var RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
  });
  var Socket2 = class extends Emitter {
    constructor(io, nsp, opts) {
      super();
      this.connected = false;
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this.ids = 0;
      this.acks = {};
      this.flags = {};
      this.io = io;
      this.nsp = nsp;
      if (opts && opts.auth) {
        this.auth = opts.auth;
      }
      if (this.io._autoConnect)
        this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs)
        return;
      const io = this.io;
      this.subs = [
        on(io, "open", this.onopen.bind(this)),
        on(io, "packet", this.onpacket.bind(this)),
        on(io, "error", this.onerror.bind(this)),
        on(io, "close", this.onclose.bind(this))
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      if (this.connected)
        return this;
      this.subEvents();
      if (!this.io["_reconnecting"])
        this.io.open();
      if (this.io._readyState === "open")
        this.onopen();
      return this;
    }
    open() {
      return this.connect();
    }
    send(...args) {
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    emit(ev, ...args) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      args.unshift(ev);
      const packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      if (typeof args[args.length - 1] === "function") {
        const id = this.ids++;
        const ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
      if (discardPacket) {
      } else if (this.connected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    _registerAckCallback(id, ack) {
      const timeout = this.flags.timeout;
      if (timeout === void 0) {
        this.acks[id] = ack;
        return;
      }
      const timer4 = this.io.setTimeoutFn(() => {
        delete this.acks[id];
        for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
          if (this.sendBuffer[i2].id === id) {
            this.sendBuffer.splice(i2, 1);
          }
        }
        ack.call(this, new Error("operation has timed out"));
      }, timeout);
      this.acks[id] = (...args) => {
        this.io.clearTimeoutFn(timer4);
        ack.apply(this, [null, ...args]);
      };
    }
    packet(packet) {
      packet.nsp = this.nsp;
      this.io._packet(packet);
    }
    onopen() {
      if (typeof this.auth == "function") {
        this.auth((data) => {
          this.packet({ type: PacketType.CONNECT, data });
        });
      } else {
        this.packet({ type: PacketType.CONNECT, data: this.auth });
      }
    }
    onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    onclose(reason, description) {
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
    }
    onpacket(packet) {
      const sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace)
        return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            const id = packet.data.sid;
            this.onconnect(id);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          const err = new Error(packet.data.message);
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    onevent(packet) {
      const args = packet.data || [];
      if (packet.id != null) {
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
    emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        const listeners = this._anyListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, args);
        }
      }
      super.emit.apply(this, args);
    }
    ack(id) {
      const self2 = this;
      let sent = false;
      return function(...args) {
        if (sent)
          return;
        sent = true;
        self2.packet({
          type: PacketType.ACK,
          id,
          data: args
        });
      };
    }
    onack(packet) {
      const ack = this.acks[packet.id];
      if (typeof ack === "function") {
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      } else {
      }
    }
    onconnect(id) {
      this.id = id;
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
    }
    emitBuffered() {
      this.receiveBuffer.forEach((args) => this.emitEvent(args));
      this.receiveBuffer = [];
      this.sendBuffer.forEach((packet) => {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      });
      this.sendBuffer = [];
    }
    ondisconnect() {
      this.destroy();
      this.onclose("io server disconnect");
    }
    destroy() {
      if (this.subs) {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs = void 0;
      }
      this.io["_destroy"](this);
    }
    disconnect() {
      if (this.connected) {
        this.packet({ type: PacketType.DISCONNECT });
      }
      this.destroy();
      if (this.connected) {
        this.onclose("io client disconnect");
      }
      return this;
    }
    close() {
      return this.disconnect();
    }
    compress(compress) {
      this.flags.compress = compress;
      return this;
    }
    get volatile() {
      this.flags.volatile = true;
      return this;
    }
    timeout(timeout) {
      this.flags.timeout = timeout;
      return this;
    }
    onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyOutgoingListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const listeners = this._anyOutgoingListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, packet.data);
        }
      }
    }
  };

  // node_modules/socket.io-client/build/esm/contrib/backo2.js
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 1e4;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };
  Backoff.prototype.reset = function() {
    this.attempts = 0;
  };
  Backoff.prototype.setMin = function(min) {
    this.ms = min;
  };
  Backoff.prototype.setMax = function(max) {
    this.max = max;
  };
  Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
  };

  // node_modules/socket.io-client/build/esm/manager.js
  var Manager = class extends Emitter {
    constructor(uri, opts) {
      var _a7;
      super();
      this.nsps = {};
      this.subs = [];
      if (uri && typeof uri === "object") {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      this.opts = opts;
      installTimerFunctions(this, opts);
      this.reconnection(opts.reconnection !== false);
      this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      this.reconnectionDelay(opts.reconnectionDelay || 1e3);
      this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
      this.randomizationFactor((_a7 = opts.randomizationFactor) !== null && _a7 !== void 0 ? _a7 : 0.5);
      this.backoff = new Backoff({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      });
      this.timeout(opts.timeout == null ? 2e4 : opts.timeout);
      this._readyState = "closed";
      this.uri = uri;
      const _parser = opts.parser || esm_exports;
      this.encoder = new _parser.Encoder();
      this.decoder = new _parser.Decoder();
      this._autoConnect = opts.autoConnect !== false;
      if (this._autoConnect)
        this.open();
    }
    reconnection(v) {
      if (!arguments.length)
        return this._reconnection;
      this._reconnection = !!v;
      return this;
    }
    reconnectionAttempts(v) {
      if (v === void 0)
        return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }
    reconnectionDelay(v) {
      var _a7;
      if (v === void 0)
        return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a7 = this.backoff) === null || _a7 === void 0 ? void 0 : _a7.setMin(v);
      return this;
    }
    randomizationFactor(v) {
      var _a7;
      if (v === void 0)
        return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a7 = this.backoff) === null || _a7 === void 0 ? void 0 : _a7.setJitter(v);
      return this;
    }
    reconnectionDelayMax(v) {
      var _a7;
      if (v === void 0)
        return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a7 = this.backoff) === null || _a7 === void 0 ? void 0 : _a7.setMax(v);
      return this;
    }
    timeout(v) {
      if (!arguments.length)
        return this._timeout;
      this._timeout = v;
      return this;
    }
    maybeReconnectOnOpen() {
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        this.reconnect();
      }
    }
    open(fn) {
      if (~this._readyState.indexOf("open"))
        return this;
      this.engine = new Socket(this.uri, this.opts);
      const socket = this.engine;
      const self2 = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      const openSubDestroy = on(socket, "open", function() {
        self2.onopen();
        fn && fn();
      });
      const errorSub = on(socket, "error", (err) => {
        self2.cleanup();
        self2._readyState = "closed";
        this.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          self2.maybeReconnectOnOpen();
        }
      });
      if (this._timeout !== false) {
        const timeout = this._timeout;
        if (timeout === 0) {
          openSubDestroy();
        }
        const timer4 = this.setTimeoutFn(() => {
          openSubDestroy();
          socket.close();
          socket.emit("error", new Error("timeout"));
        }, timeout);
        if (this.opts.autoUnref) {
          timer4.unref();
        }
        this.subs.push(function subDestroy() {
          clearTimeout(timer4);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    connect(fn) {
      return this.open(fn);
    }
    onopen() {
      this.cleanup();
      this._readyState = "open";
      this.emitReserved("open");
      const socket = this.engine;
      this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    ondecoded(packet) {
      nextTick(() => {
        this.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    onerror(err) {
      this.emitReserved("error", err);
    }
    socket(nsp, opts) {
      let socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket2(this, nsp, opts);
        this.nsps[nsp] = socket;
      }
      return socket;
    }
    _destroy(socket) {
      const nsps = Object.keys(this.nsps);
      for (const nsp of nsps) {
        const socket2 = this.nsps[nsp];
        if (socket2.active) {
          return;
        }
      }
      this._close();
    }
    _packet(packet) {
      const encodedPackets = this.encoder.encode(packet);
      for (let i2 = 0; i2 < encodedPackets.length; i2++) {
        this.engine.write(encodedPackets[i2], packet.options);
      }
    }
    cleanup() {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs.length = 0;
      this.decoder.destroy();
    }
    _close() {
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
      if (this.engine)
        this.engine.close();
    }
    disconnect() {
      return this._close();
    }
    onclose(reason, description) {
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect)
        return this;
      const self2 = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        const delay = this.backoff.duration();
        this._reconnecting = true;
        const timer4 = this.setTimeoutFn(() => {
          if (self2.skipReconnect)
            return;
          this.emitReserved("reconnect_attempt", self2.backoff.attempts);
          if (self2.skipReconnect)
            return;
          self2.open((err) => {
            if (err) {
              self2._reconnecting = false;
              self2.reconnect();
              this.emitReserved("reconnect_error", err);
            } else {
              self2.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer4.unref();
        }
        this.subs.push(function subDestroy() {
          clearTimeout(timer4);
        });
      }
    }
    onreconnect() {
      const attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  };

  // node_modules/socket.io-client/build/esm/index.js
  var cache = {};
  function lookup2(uri, opts) {
    if (typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
    let io;
    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  Object.assign(lookup2, {
    Manager,
    Socket: Socket2,
    io: lookup2,
    connect: lookup2
  });

  // _dist/socket.js
  var import_Observable = __toESM(require_Observable());
  var import_BehaviorSubject = __toESM(require_BehaviorSubject());
  var import_of = __toESM(require_of());
  var import_share = __toESM(require_share());
  function initWindow() {
    return (0, import_of.of)(window);
  }
  function initDocument() {
    return (0, import_of.of)(document);
  }
  function initOptions() {
    return new import_BehaviorSubject.BehaviorSubject(window.___browserSync___.options);
  }
  function initSocket() {
    var socketConfig = window.___browserSync___.socketConfig;
    var socketUrl = window.___browserSync___.socketUrl;
    var socket = lookup2(socketUrl, socketConfig);
    var socket$2 = import_Observable.Observable.create(function(obs) {
      socket.onAny(function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        obs.next(args);
      });
    }).pipe((0, import_share.share)());
    var io$2 = new import_BehaviorSubject.BehaviorSubject(socket);
    window.___browserSync___.socket = socket;
    return { socket$: socket$2, io$: io$2 };
  }

  // _dist/notify.js
  var import_BehaviorSubject2 = __toESM(require_BehaviorSubject());
  var styles = {
    display: "none",
    padding: "15px",
    fontFamily: "sans-serif",
    position: "fixed",
    fontSize: "0.9em",
    zIndex: 9999,
    right: 0,
    top: 0,
    borderBottomLeftRadius: "5px",
    backgroundColor: "#1B2032",
    margin: 0,
    color: "white",
    textAlign: "center",
    pointerEvents: "none"
  };
  function initNotify(options) {
    var cssStyles = styles;
    var elem;
    if (options.notify.styles) {
      if (Object.prototype.toString.call(options.notify.styles) === "[object Array]") {
        cssStyles = options.notify.styles.join(";");
      } else {
        for (var key in options.notify.styles) {
          if (options.notify.styles.hasOwnProperty(key)) {
            cssStyles[key] = options.notify.styles[key];
          }
        }
      }
    }
    elem = document.createElement("DIV");
    elem.id = "__bs_notify__";
    if (typeof cssStyles === "string") {
      elem.style.cssText = cssStyles;
    } else {
      for (var rule in cssStyles) {
        elem.style[rule] = cssStyles[rule];
      }
    }
    return new import_BehaviorSubject2.BehaviorSubject(elem);
  }

  // _dist/dom-effects.js
  var import_BehaviorSubject4 = __toESM(require_BehaviorSubject());

  // _dist/dom-effects/prop-set.dom-effect.js
  var import_map = __toESM(require_map());
  var import_tap2 = __toESM(require_tap());

  // _dist/log.js
  var import_BehaviorSubject3 = __toESM(require_BehaviorSubject());
  var import_timer = __toESM(require_timer());
  var import_of2 = __toESM(require_of());

  // _dist/vendor/logger.js
  var emojis = {
    trace: "\u{1F50D}",
    debug: "\u{1F41B}",
    info: "\u2728",
    warn: "\u26A0\uFE0F",
    error: "\u{1F6A8}",
    fatal: "\u{1F480}"
  };
  var levels = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
  };
  var defaultColors = {
    foreground: "#d3c0c8",
    background: "#2d2d2d",
    black: "#2d2d2d",
    red: "#f2777a",
    green: "#99cc99",
    yellow: "#ffcc66",
    blue: "#6699cc",
    magenta: "#cc99cc",
    cyan: "#66cccc",
    white: "#d3d0c8",
    brightBlack: "#747369"
  };
  var Nanologger = function() {
    function Nanologger2(name, opts) {
      this.name = name;
      this.opts = opts;
      this._name = name || "";
      this._colors = __assign(__assign({}, defaultColors), opts.colors || {});
      try {
        this.logLevel = window.localStorage.getItem("logLevel") || "info";
      } catch (e) {
        this.logLevel = "info";
      }
      this._logLevel = levels[this.logLevel];
    }
    Nanologger2.prototype.trace = function() {
      var args = ["trace"];
      for (var i2 = 0, len = arguments.length; i2 < len; i2++)
        args.push(arguments[i2]);
      this._print.apply(this, args);
    };
    Nanologger2.prototype.debug = function() {
      var args = ["debug"];
      for (var i2 = 0, len = arguments.length; i2 < len; i2++)
        args.push(arguments[i2]);
      this._print.apply(this, args);
    };
    Nanologger2.prototype.info = function() {
      var args = ["info"];
      for (var i2 = 0, len = arguments.length; i2 < len; i2++)
        args.push(arguments[i2]);
      this._print.apply(this, args);
    };
    Nanologger2.prototype.warn = function() {
      var args = ["warn"];
      for (var i2 = 0, len = arguments.length; i2 < len; i2++)
        args.push(arguments[i2]);
      this._print.apply(this, args);
    };
    Nanologger2.prototype.error = function() {
      var args = ["error"];
      for (var i2 = 0, len = arguments.length; i2 < len; i2++)
        args.push(arguments[i2]);
      this._print.apply(this, args);
    };
    Nanologger2.prototype.fatal = function() {
      var args = ["fatal"];
      for (var i2 = 0, len = arguments.length; i2 < len; i2++)
        args.push(arguments[i2]);
      this._print.apply(this, args);
    };
    Nanologger2.prototype._print = function(level) {
      if (levels[level] < this._logLevel)
        return;
      var emoji = emojis[level];
      var name = this._name || "unknown";
      var msgColor = level === "error" || level.fatal ? this._colors.red : level === "warn" ? this._colors.yellow : this._colors.green;
      var objs = [];
      var args = [null];
      var msg = emoji + " %c%s";
      args.push(color(this._colors.magenta), name);
      for (var i2 = 1, len = arguments.length; i2 < len; i2++) {
        var arg = arguments[i2];
        if (typeof arg === "string") {
          if (i2 === 1) {
            msg += " %c%s";
            args.push(color(msgColor));
            args.push(arg);
          } else if (/ms$/.test(arg)) {
            msg += " %c%s";
            args.push(color(this._colors.brightBlack));
            args.push(arg);
          } else {
            msg += " %c%s";
            args.push(color(this._colors.white));
            args.push(arg);
          }
        } else if (typeof arg === "number") {
          msg += " %c%d";
          args.push(color(this._colors.magenta));
          args.push(arg);
        } else {
          objs.push(arg);
        }
      }
      args[0] = msg;
      objs.forEach(function(obj) {
        args.push(obj);
      });
      Function.prototype.apply.apply(console.log, [console, args]);
    };
    return Nanologger2;
  }();
  function color(color2) {
    return "color: " + color2 + ";";
  }

  // _dist/log.js
  var import_filter = __toESM(require_filter());
  var import_tap = __toESM(require_tap());
  var import_withLatestFrom = __toESM(require_withLatestFrom());
  var import_switchMap = __toESM(require_switchMap());
  var import_pluck = __toESM(require_pluck());
  var _a;
  function initLogger(options) {
    var log = new Nanologger(options.logPrefix || "", {
      colors: { magenta: "#0F2634" }
    });
    return (0, import_of2.of)(log);
  }
  var LogNames;
  (function(LogNames2) {
    LogNames2["Log"] = "@@Log";
    LogNames2["Info"] = "@@Log.info";
    LogNames2["Debug"] = "@@Log.debug";
  })(LogNames || (LogNames = {}));
  var Overlay;
  (function(Overlay2) {
    Overlay2["Info"] = "@@Overlay.info";
  })(Overlay || (Overlay = {}));
  function consoleInfo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return [LogNames.Log, [LogNames.Info, args]];
  }
  function consoleDebug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return [LogNames.Log, [LogNames.Debug, args]];
  }
  function overlayInfo(message, timeout) {
    if (timeout === void 0) {
      timeout = 2e3;
    }
    return [Overlay.Info, [message, timeout]];
  }
  var logHandler$ = new import_BehaviorSubject3.BehaviorSubject((_a = {}, _a[LogNames.Log] = function(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom.withLatestFrom)(inputs2.logInstance$, inputs2.option$.pipe((0, import_pluck.pluck)("injectNotification"))), (0, import_filter.filter)(function(_a7) {
      var injectNotification = _a7[2];
      return injectNotification === "console";
    }), (0, import_tap.tap)(function(_a7) {
      var event = _a7[0], log = _a7[1];
      switch (event[0]) {
        case LogNames.Info: {
          return log.info.apply(log, event[1]);
        }
        case LogNames.Debug: {
          return log.debug.apply(log, event[1]);
        }
      }
    }));
  }, _a[Overlay.Info] = function(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom.withLatestFrom)(inputs2.option$, inputs2.notifyElement$, inputs2.document$), (0, import_filter.filter)(function(_a7) {
      var options = _a7[1];
      return Boolean(options.notify);
    }), (0, import_tap.tap)(function(_a7) {
      var event = _a7[0], options = _a7[1], element = _a7[2], document2 = _a7[3];
      element.innerHTML = event[0];
      element.style.display = "block";
      document2.body.appendChild(element);
    }), (0, import_switchMap.switchMap)(function(_a7) {
      var event = _a7[0], options = _a7[1], element = _a7[2], document2 = _a7[3];
      return (0, import_timer.timer)(event[1] || 2e3).pipe((0, import_tap.tap)(function() {
        element.style.display = "none";
        if (element.parentNode) {
          document2.body.removeChild(element);
        }
      }));
    }));
  }, _a));

  // _dist/dom-effects/prop-set.dom-effect.js
  function propSetDomEffect(xs) {
    return xs.pipe((0, import_tap2.tap)(function(event) {
      var target = event.target, prop = event.prop, value2 = event.value;
      target[prop] = value2;
    }), (0, import_map.map)(function(e) {
      return consoleInfo("[PropSet]", e.target, "".concat(e.prop, " = ").concat(e.pathname));
    }));
  }
  function propSet(incoming) {
    return [Events.PropSet, incoming];
  }

  // _dist/dom-effects/style-set.dom-effect.js
  var import_map2 = __toESM(require_map());
  var import_tap3 = __toESM(require_tap());
  function styleSetDomEffect(xs) {
    return xs.pipe((0, import_tap3.tap)(function(event) {
      var style = event.style, styleName = event.styleName, newValue = event.newValue;
      style[styleName] = newValue;
    }), (0, import_map2.map)(function(e) {
      return consoleInfo("[StyleSet] ".concat(e.styleName, " = ").concat(e.pathName));
    }));
  }
  function styleSet(incoming) {
    return [Events.StyleSet, incoming];
  }

  // _dist/dom-effects/link-replace.dom-effect.js
  var import_map3 = __toESM(require_map());
  var import_filter2 = __toESM(require_filter());
  var import_withLatestFrom2 = __toESM(require_withLatestFrom());
  var import_pluck2 = __toESM(require_pluck());
  function linkReplaceDomEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom2.withLatestFrom)(inputs2.option$.pipe((0, import_pluck2.pluck)("injectNotification"))), (0, import_filter2.filter)(function(_a7) {
      var inject = _a7[1];
      return inject;
    }), (0, import_map3.map)(function(_a7) {
      var incoming = _a7[0], inject = _a7[1];
      var message = "[LinkReplace] ".concat(incoming.basename);
      if (inject === "overlay") {
        return overlayInfo(message);
      }
      return consoleInfo(message);
    }));
  }
  function linkReplace(incoming) {
    return [Events.LinkReplace, incoming];
  }

  // _dist/dom-effects/set-scroll.dom-effect.js
  var import_ignoreElements = __toESM(require_ignoreElements());
  var import_withLatestFrom3 = __toESM(require_withLatestFrom());
  var import_tap4 = __toESM(require_tap());
  function setScroll(x, y) {
    return [Events.SetScroll, { x, y }];
  }
  function setScrollDomEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom3.withLatestFrom)(inputs2.window$), (0, import_tap4.tap)(function(_a7) {
      var event = _a7[0], window2 = _a7[1];
      return window2.scrollTo(event.x, event.y);
    }), (0, import_ignoreElements.ignoreElements)());
  }

  // _dist/dom-effects/set-window-name.dom-effect.js
  var import_ignoreElements2 = __toESM(require_ignoreElements());
  var import_withLatestFrom4 = __toESM(require_withLatestFrom());
  var import_tap5 = __toESM(require_tap());
  function setWindowNameDomEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom4.withLatestFrom)(inputs2.window$), (0, import_tap5.tap)(function(_a7) {
      var value2 = _a7[0], window2 = _a7[1];
      return window2.name = value2;
    }), (0, import_ignoreElements2.ignoreElements)());
  }
  function setWindowName(incoming) {
    return [Events.SetWindowName, incoming];
  }

  // _dist/dom-effects.js
  var _a2;
  var Events;
  (function(Events2) {
    Events2["PropSet"] = "@@BSDOM.Events.PropSet";
    Events2["StyleSet"] = "@@BSDOM.Events.StyleSet";
    Events2["LinkReplace"] = "@@BSDOM.Events.LinkReplace";
    Events2["SetScroll"] = "@@BSDOM.Events.SetScroll";
    Events2["SetWindowName"] = "@@BSDOM.Events.SetWindowName";
  })(Events || (Events = {}));
  var domHandlers$ = new import_BehaviorSubject4.BehaviorSubject((_a2 = {}, _a2[Events.PropSet] = propSetDomEffect, _a2[Events.StyleSet] = styleSetDomEffect, _a2[Events.LinkReplace] = linkReplaceDomEffect, _a2[Events.SetScroll] = setScrollDomEffect, _a2[Events.SetWindowName] = setWindowNameDomEffect, _a2));

  // _dist/socket-messages.js
  var import_BehaviorSubject6 = __toESM(require_BehaviorSubject());
  var import_withLatestFrom20 = __toESM(require_withLatestFrom());
  var import_ignoreElements8 = __toESM(require_ignoreElements());
  var import_tap15 = __toESM(require_tap());
  var import_pluck10 = __toESM(require_pluck());

  // _dist/messages/ScrollEvent.js
  var import_pluck4 = __toESM(require_pluck());
  var import_filter4 = __toESM(require_filter());
  var import_map6 = __toESM(require_map());
  var import_withLatestFrom12 = __toESM(require_withLatestFrom());

  // _dist/effects.js
  var import_BehaviorSubject5 = __toESM(require_BehaviorSubject());

  // _dist/effects/set-options.effect.js
  var import_ignoreElements3 = __toESM(require_ignoreElements());
  var import_tap6 = __toESM(require_tap());
  function setOptionsEffect(xs, inputs2) {
    return xs.pipe((0, import_tap6.tap)(function(options) {
      return inputs2.option$.next(options);
    }), (0, import_ignoreElements3.ignoreElements)());
  }
  function setOptions(options) {
    return [EffectNames.SetOptions, options];
  }

  // _dist/utils.js
  var import_concat = __toESM(require_concat());
  var import_timer2 = __toESM(require_timer());
  var import_of3 = __toESM(require_of());
  var import_switchMap2 = __toESM(require_switchMap());
  var import_startWith = __toESM(require_startWith());
  var import_mapTo = __toESM(require_mapTo());
  var splitUrl = function(url2) {
    var hash, index, params;
    if ((index = url2.indexOf("#")) >= 0) {
      hash = url2.slice(index);
      url2 = url2.slice(0, index);
    } else {
      hash = "";
    }
    if ((index = url2.indexOf("?")) >= 0) {
      params = url2.slice(index);
      url2 = url2.slice(0, index);
    } else {
      params = "";
    }
    return { url: url2, params, hash };
  };
  var pathFromUrl = function(url2) {
    var path;
    url2 = splitUrl(url2).url;
    if (url2.indexOf("file://") === 0) {
      path = url2.replace(new RegExp("^file://(localhost)?"), "");
    } else {
      path = url2.replace(new RegExp("^([^:]+:)?//([^:/]+)(:\\d*)?/"), "/");
    }
    return decodeURIComponent(path);
  };
  var pickBestMatch = function(path, objects, pathFunc) {
    var score;
    var bestMatch = { score: 0, object: null };
    objects.forEach(function(object) {
      score = numberOfMatchingSegments(path, pathFunc(object));
      if (score > bestMatch.score) {
        bestMatch = { object, score };
      }
    });
    if (bestMatch.score > 0) {
      return bestMatch;
    } else {
      return null;
    }
  };
  var numberOfMatchingSegments = function(path1, path2) {
    path1 = normalisePath(path1);
    path2 = normalisePath(path2);
    if (path1 === path2) {
      return 1e4;
    }
    var comps1 = path1.split("/").reverse();
    var comps2 = path2.split("/").reverse();
    var len = Math.min(comps1.length, comps2.length);
    var eqCount = 0;
    while (eqCount < len && comps1[eqCount] === comps2[eqCount]) {
      ++eqCount;
    }
    return eqCount;
  };
  var pathsMatch = function(path1, path2) {
    return numberOfMatchingSegments(path1, path2) > 0;
  };
  function getLocation(url2) {
    var location2 = document.createElement("a");
    location2.href = url2;
    if (location2.host === "") {
      location2.href = location2.href;
    }
    return location2;
  }
  function updateSearch(search, key, suffix) {
    if (search === "") {
      return "?" + suffix;
    }
    return "?" + search.slice(1).split("&").map(function(item) {
      return item.split("=");
    }).filter(function(tuple) {
      return tuple[0] !== key;
    }).map(function(item) {
      return [item[0], item[1]].join("=");
    }).concat(suffix).join("&");
  }
  var blacklist = [
    function(incoming) {
      return incoming.ext === "map";
    }
  ];
  function isBlacklisted(incoming) {
    return blacklist.some(function(fn) {
      return fn(incoming);
    });
  }
  function createTimedBooleanSwitch(source$, timeout) {
    if (timeout === void 0) {
      timeout = 1e3;
    }
    return source$.pipe((0, import_switchMap2.switchMap)(function() {
      return (0, import_concat.concat)((0, import_of3.of)(false), (0, import_timer2.timer)(timeout).pipe((0, import_mapTo.mapTo)(true)));
    }), (0, import_startWith.startWith)(true));
  }
  function array(incoming) {
    return [].slice.call(incoming);
  }
  function normalisePath(path) {
    return path.replace(/^\/+/, "").replace(/\\/g, "/").toLowerCase();
  }

  // _dist/vendor/Reloader.js
  var import_empty = __toESM(require_empty());
  var import_Observable2 = __toESM(require_Observable());
  var import_merge = __toESM(require_merge());
  var import_timer3 = __toESM(require_timer());
  var import_from = __toESM(require_from());
  var import_filter3 = __toESM(require_filter());
  var import_map4 = __toESM(require_map());
  var import_mergeMap = __toESM(require_mergeMap());
  var import_tap7 = __toESM(require_tap());
  var import_mapTo2 = __toESM(require_mapTo());
  var import_mergeAll = __toESM(require_mergeAll());
  var hiddenElem;
  var IMAGE_STYLES = [
    { selector: "background", styleNames: ["backgroundImage"] },
    { selector: "border", styleNames: ["borderImage", "webkitBorderImage", "MozBorderImage"] }
  ];
  var attrs = {
    link: "href",
    img: "src",
    script: "src"
  };
  function reload(document2, navigator2) {
    return function(data, options) {
      console.log("reload inner");
      var path = data.path;
      console.log(options);
      console.log("Path: ", path);
      if (options.liveCSS) {
        if (path.match(/\.s?css$/i)) {
          console.log("match, before reloadStylesheet");
          return reloadStylesheet(path, document2, navigator2);
        }
      }
      if (options.liveImg) {
        if (path.match(/\.(jpe?g|png|gif)$/i)) {
          return reloadImages(path, document2);
        }
      }
      var domData = getElems(data.ext, options, document2);
      var elems = getMatches(domData.elems, data.basename, domData.attr);
      for (var i2 = 0, n = elems.length; i2 < n; i2 += 1) {
        swapFile(elems[i2], domData, options, document2, navigator2);
      }
      return (0, import_empty.empty)();
    };
    function getMatches(elems, url2, attr) {
      if (url2[0] === "*") {
        return elems;
      }
      var matches = [];
      var urlMatcher = new RegExp("(^|/)" + url2);
      for (var i2 = 0, len = elems.length; i2 < len; i2 += 1) {
        if (urlMatcher.test(elems[i2][attr])) {
          matches.push(elems[i2]);
        }
      }
      return matches;
    }
    function getElems(fileExtension, options, document3) {
      var tagName = options.tagNames[fileExtension];
      var attr = attrs[tagName];
      return {
        attr,
        tagName,
        elems: document3.getElementsByTagName(tagName)
      };
    }
    function reloadImages(path, document3) {
      var expando = generateUniqueString(Date.now());
      return (0, import_merge.merge)((0, import_from.from)([].slice.call(document3.images)).pipe((0, import_filter3.filter)(function(img) {
        return pathsMatch(path, pathFromUrl(img.src));
      }), (0, import_map4.map)(function(img) {
        var payload = {
          target: img,
          prop: "src",
          value: generateCacheBustUrl(img.src, expando),
          pathname: getLocation(img.src).pathname
        };
        return propSet(payload);
      })), (0, import_from.from)(IMAGE_STYLES).pipe((0, import_mergeMap.mergeMap)(function(_a7) {
        var selector = _a7.selector, styleNames = _a7.styleNames;
        return (0, import_from.from)(document3.querySelectorAll("[style*=".concat(selector, "]"))).pipe((0, import_mergeMap.mergeMap)(function(img) {
          return reloadStyleImages(img.style, styleNames, path, expando);
        }));
      })));
    }
    function reloadStylesheetImages(styleSheet, path, expando) {
      var rules;
      try {
        rules = styleSheet != null ? styleSheet.cssRules : void 0;
      } catch (e) {
      }
      if (!rules) {
        return;
      }
      [].slice.call(rules).forEach(function(rule) {
        switch (rule.type) {
          case CSSRule.IMPORT_RULE:
            reloadStylesheetImages(rule.styleSheet, path, expando);
            break;
          case CSSRule.STYLE_RULE:
            [].slice.call(IMAGE_STYLES).forEach(function(_a7) {
              var styleNames = _a7.styleNames;
              reloadStyleImages(rule.style, styleNames, path, expando);
            });
            break;
          case CSSRule.MEDIA_RULE:
            reloadStylesheetImages(rule, path, expando);
            break;
        }
      });
    }
    function reloadStyleImages(style, styleNames, path, expando) {
      return (0, import_from.from)(styleNames).pipe((0, import_filter3.filter)(function(styleName) {
        return typeof style[styleName] === "string";
      }), (0, import_map4.map)(function(styleName) {
        var pathName;
        var value2 = style[styleName];
        var newValue = value2.replace(new RegExp("\\burl\\s*\\(([^)]*)\\)"), function(match, src) {
          var _src = src;
          if (src[0] === '"' && src[src.length - 1] === '"') {
            _src = src.slice(1, -1);
          }
          pathName = getLocation(_src).pathname;
          if (pathsMatch(path, pathFromUrl(_src))) {
            return "url(".concat(generateCacheBustUrl(_src, expando), ")");
          } else {
            return match;
          }
        });
        return [
          style,
          styleName,
          value2,
          newValue,
          pathName
        ];
      }), (0, import_filter3.filter)(function(_a7) {
        var style2 = _a7[0], styleName = _a7[1], value2 = _a7[2], newValue = _a7[3];
        return newValue !== value2;
      }), (0, import_map4.map)(function(_a7) {
        var style2 = _a7[0], styleName = _a7[1], value2 = _a7[2], newValue = _a7[3], pathName = _a7[4];
        return styleSet({ style: style2, styleName, value: value2, newValue, pathName });
      }));
    }
    function swapFile(elem, domData, options, document3, navigator3) {
      var attr = domData.attr;
      var currentValue = elem[attr];
      var timeStamp = new Date().getTime();
      var key = "browsersync-legacy";
      var suffix = key + "=" + timeStamp;
      var anchor = getLocation(currentValue);
      var search = updateSearch(anchor.search, key, suffix);
      switch (domData.tagName) {
        case "link": {
          reloadStylesheet(currentValue, document3, navigator3);
          break;
        }
        case "img": {
          reloadImages(currentValue, document3);
          break;
        }
        default: {
          if (options.timestamps === false) {
            elem[attr] = anchor.href;
          } else {
            elem[attr] = anchor.href.split("?")[0] + search;
          }
          setTimeout(function() {
            if (!hiddenElem) {
              hiddenElem = document3.createElement("DIV");
              document3.body.appendChild(hiddenElem);
            } else {
              hiddenElem.style.display = "none";
              hiddenElem.style.display = "block";
            }
          }, 200);
        }
      }
      return {
        elem,
        timeStamp
      };
    }
    function reattachStylesheetLink(link, document3, navigator3) {
      var clone;
      if (link.__LiveReload_pendingRemoval) {
        return (0, import_empty.empty)();
      }
      link.__LiveReload_pendingRemoval = true;
      if (link.tagName === "STYLE") {
        clone = document3.createElement("link");
        clone.rel = "stylesheet";
        clone.media = link.media;
        clone.disabled = link.disabled;
      } else {
        clone = link.cloneNode(false);
      }
      var prevHref = link.href;
      var nextHref = generateCacheBustUrl(linkHref(link));
      clone.href = nextHref;
      var pathname = getLocation(nextHref).pathname;
      var basename = pathname.split("/").slice(-1)[0];
      var parent = link.parentNode;
      if (parent.lastChild === link) {
        parent.appendChild(clone);
      } else {
        parent.insertBefore(clone, link.nextSibling);
      }
      var additionalWaitingTime;
      if (/AppleWebKit/.test(navigator3.userAgent)) {
        additionalWaitingTime = 5;
      } else {
        additionalWaitingTime = 200;
      }
      return import_Observable2.Observable.create(function(obs) {
        clone.onload = function() {
          obs.next(true);
          obs.complete();
        };
      }).pipe((0, import_mergeMap.mergeMap)(function() {
        return (0, import_timer3.timer)(additionalWaitingTime).pipe((0, import_tap7.tap)(function() {
          if (link && !link.parentNode) {
            return;
          }
          link.parentNode.removeChild(link);
          clone.onreadystatechange = null;
        }), (0, import_mapTo2.mapTo)(linkReplace({ target: clone, nextHref, prevHref, pathname, basename })));
      }));
    }
    function reattachImportedRule(_a7, document3) {
      var rule = _a7.rule, index = _a7.index, link = _a7.link;
      var parent = rule.parentStyleSheet;
      var href = generateCacheBustUrl(rule.href);
      var media = rule.media.length ? [].join.call(rule.media, ", ") : "";
      var newRule = '@import url("'.concat(href, '") ').concat(media, ";");
      rule.__LiveReload_newHref = href;
      var tempLink = document3.createElement("link");
      tempLink.rel = "stylesheet";
      tempLink.href = href;
      tempLink.__LiveReload_pendingRemoval = true;
      if (link.parentNode) {
        link.parentNode.insertBefore(tempLink, link);
      }
      return (0, import_timer3.timer)(200).pipe((0, import_tap7.tap)(function() {
        if (tempLink.parentNode) {
          tempLink.parentNode.removeChild(tempLink);
        }
        if (rule.__LiveReload_newHref !== href) {
          return;
        }
        parent.insertRule(newRule, index);
        parent.deleteRule(index + 1);
        rule = parent.cssRules[index];
        rule.__LiveReload_newHref = href;
      }), (0, import_mergeMap.mergeMap)(function() {
        return (0, import_timer3.timer)(200).pipe((0, import_tap7.tap)(function() {
          if (rule.__LiveReload_newHref !== href) {
            return;
          }
          parent.insertRule(newRule, index);
          return parent.deleteRule(index + 1);
        }));
      }));
    }
    function generateCacheBustUrl(url2, expando) {
      var _a7;
      if (expando === void 0) {
        expando = generateUniqueString(Date.now());
      }
      var hash, oldParams;
      _a7 = splitUrl(url2), url2 = _a7.url, hash = _a7.hash, oldParams = _a7.params;
      var params = oldParams.replace(/(\?|&)browsersync=(\d+)/, function(match, sep) {
        return "".concat(sep).concat(expando);
      });
      if (params === oldParams) {
        if (oldParams.length === 0) {
          params = "?".concat(expando);
        } else {
          params = "".concat(oldParams, "&").concat(expando);
        }
      }
      return url2 + params + hash;
    }
    function reloadStylesheet(path, document3, navigator3) {
      console.log("reloadStylesheet", path, document3, navigator3);
      var links = array(document3.getElementsByTagName("link")).filter(function(link) {
        return link.rel.match(/^stylesheet$/i) && !link.__LiveReload_pendingRemoval;
      });
      var styleImported = array(document3.getElementsByTagName("style")).filter(function(style) {
        return Boolean(style.sheet);
      }).reduce(function(acc, style) {
        return acc.concat(collectImportedStylesheets(style, style.sheet));
      }, []);
      var linksImported = links.reduce(function(acc, link) {
        return acc.concat(collectImportedStylesheets(link, link.sheet));
      }, []);
      var allRules = links.concat(styleImported, linksImported);
      console.log(allRules);
      // so when btn.scss is changed it reloads smth like application-ltr.css
      // won't work for multiple CSS on the page
      let fakePath = allRules[0].getAttribute('href').substring(1);
      var match = pickBestMatch(fakePath, allRules, function(l) {
        return pathFromUrl(linkHref(l));
      });
      console.log(match);
      if (match) {
        if (match.object && match.object.rule) {
          return reattachImportedRule(match.object, document3);
        }
        return reattachStylesheetLink(match.object, document3, navigator3);
      } else {
        if (links.length) {
          var _a7 = path.split("."), first = _a7[0], rest = _a7.slice(1);
          if (first === "*") {
            return (0, import_from.from)(links.map(function(link) {
              return reattachStylesheetLink(link, document3, navigator3);
            })).pipe((0, import_mergeAll.mergeAll)());
          }
        }
      }
      return (0, import_empty.empty)();
    }
    function collectImportedStylesheets(link, styleSheet) {
      var output = [];
      collect(link, makeRules(styleSheet));
      return output;
      function makeRules(styleSheet2) {
        var rules;
        try {
          rules = styleSheet2 != null ? styleSheet2.cssRules : void 0;
        } catch (e) {
        }
        return rules;
      }
      function collect(link2, rules) {
        if (rules && rules.length) {
          for (var index = 0; index < rules.length; index++) {
            var rule = rules[index];
            switch (rule.type) {
              case CSSRule.CHARSET_RULE:
                break;
              case CSSRule.IMPORT_RULE:
                output.push({ link: link2, rule, index, href: rule.href });
                collect(link2, makeRules(rule.styleSheet));
                break;
              default:
                break;
            }
          }
        }
      }
    }
    function linkHref(link) {
      return link.href || link.getAttribute("data-href");
    }
    function generateUniqueString(value2) {
      return "browsersync=".concat(value2);
    }
  }

  // _dist/effects/file-reload.effect.js
  var import_withLatestFrom5 = __toESM(require_withLatestFrom());
  var import_mergeMap2 = __toESM(require_mergeMap());
  function fileReload(event) {
    return [EffectNames.FileReload, event];
  }
  function fileReloadEffect(xs, inputs2) {
    console.log("fileReloadEffect");
    return xs.pipe((0, import_withLatestFrom5.withLatestFrom)(inputs2.option$, inputs2.document$, inputs2.navigator$), (0, import_mergeMap2.mergeMap)(function(_a7) {
      var event = _a7[0], options = _a7[1], document2 = _a7[2], navigator2 = _a7[3];
      return reload(document2, navigator2)(event, {
        tagNames: options.tagNames,
        liveCSS: true,
        liveImg: true
      });
    }));
  }

  // _dist/effects/browser-set-location.effect.js
  var import_ignoreElements4 = __toESM(require_ignoreElements());
  var import_tap8 = __toESM(require_tap());
  var import_withLatestFrom6 = __toESM(require_withLatestFrom());
  function browserSetLocationEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom6.withLatestFrom)(inputs2.window$), (0, import_tap8.tap)(function(_a7) {
      var event = _a7[0], window2 = _a7[1];
      if (event.path) {
        return window2.location = window2.location.protocol + "//" + window2.location.host + event.path;
      }
      if (event.url) {
        return window2.location = event.url;
      }
    }), (0, import_ignoreElements4.ignoreElements)());
  }
  function browserSetLocation(input) {
    return [EffectNames.BrowserSetLocation, input];
  }

  // _dist/effects/simulate-click.effect.js
  var import_ignoreElements5 = __toESM(require_ignoreElements());
  var import_tap9 = __toESM(require_tap());
  var import_withLatestFrom7 = __toESM(require_withLatestFrom());
  function simulateClickEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom7.withLatestFrom)(inputs2.window$, inputs2.document$), (0, import_tap9.tap)(function(_a7) {
      var event = _a7[0], window2 = _a7[1], document2 = _a7[2];
      var elems = document2.getElementsByTagName(event.tagName);
      var match = elems[event.index];
      if (match) {
        if (document2.createEvent) {
          window2.setTimeout(function() {
            var evObj = document2.createEvent("MouseEvents");
            evObj.initEvent("click", true, true);
            match.dispatchEvent(evObj);
          }, 0);
        } else {
          window2.setTimeout(function() {
            if (document2.createEventObject) {
              var evObj = document2.createEventObject();
              evObj.cancelBubble = true;
              match.fireEvent("onclick", evObj);
            }
          }, 0);
        }
      }
    }), (0, import_ignoreElements5.ignoreElements)());
  }
  function simulateClick(event) {
    return [EffectNames.SimulateClick, event];
  }

  // _dist/effects/set-element-value.effect.js
  var import_tap10 = __toESM(require_tap());
  var import_withLatestFrom8 = __toESM(require_withLatestFrom());
  function setElementValueEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom8.withLatestFrom)(inputs2.document$), (0, import_tap10.tap)(function(_a7) {
      var event = _a7[0], document2 = _a7[1];
      var elems = document2.getElementsByTagName(event.tagName);
      var match = elems[event.index];
      if (match) {
        match.value = event.value;
      }
    }));
  }
  function setElementValue(event) {
    return [EffectNames.SetElementValue, event];
  }

  // _dist/effects/set-element-toggle-value.effect.js
  var import_tap11 = __toESM(require_tap());
  var import_withLatestFrom9 = __toESM(require_withLatestFrom());
  function setElementToggleValueEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom9.withLatestFrom)(inputs2.document$), (0, import_tap11.tap)(function(_a7) {
      var event = _a7[0], document2 = _a7[1];
      var elems = document2.getElementsByTagName(event.tagName);
      var match = elems[event.index];
      if (match) {
        if (event.type === "radio") {
          match.checked = true;
        }
        if (event.type === "checkbox") {
          match.checked = event.checked;
        }
        if (event.tagName === "SELECT") {
          match.value = event.value;
        }
      }
    }));
  }
  function setElementToggleValue(event) {
    return [EffectNames.SetElementToggleValue, event];
  }

  // _dist/effects/set-scroll.js
  var import_pluck3 = __toESM(require_pluck());
  var import_ignoreElements6 = __toESM(require_ignoreElements());
  var import_partition = __toESM(require_partition());
  var import_merge2 = __toESM(require_merge());

  // _dist/browser.utils.js
  function getDocument() {
    return document;
  }
  function getBrowserScrollPosition(window2, document2) {
    var scrollX;
    var scrollY;
    var dElement = document2.documentElement;
    var dBody = document2.body;
    if (window2.pageYOffset !== void 0) {
      scrollX = window2.pageXOffset;
      scrollY = window2.pageYOffset;
    } else {
      scrollX = dElement.scrollLeft || dBody.scrollLeft || 0;
      scrollY = dElement.scrollTop || dBody.scrollTop || 0;
    }
    return {
      x: scrollX,
      y: scrollY
    };
  }
  function getDocumentScrollSpace(document2) {
    var dElement = document2.documentElement;
    var dBody = document2.body;
    return {
      x: dBody.scrollHeight - dElement.clientWidth,
      y: dBody.scrollHeight - dElement.clientHeight
    };
  }
  function getElementIndex(tagName, elem) {
    var allElems = getDocument().getElementsByTagName(tagName);
    return Array.prototype.indexOf.call(allElems, elem);
  }
  function getElementData(elem) {
    var tagName = elem.tagName;
    var index = getElementIndex(tagName, elem);
    return {
      tagName,
      index
    };
  }
  function getScrollPosition(window2, document2) {
    var pos = getBrowserScrollPosition(window2, document2);
    return {
      raw: pos,
      proportional: getScrollTopPercentage(pos, document2)
    };
  }
  function getScrollPositionForElement(element) {
    var raw = {
      x: element.scrollLeft,
      y: element.scrollTop
    };
    var scrollSpace = {
      x: element.scrollWidth,
      y: element.scrollHeight
    };
    return {
      raw,
      proportional: getScrollPercentage(scrollSpace, raw).y
    };
  }
  function getScrollTopPercentage(pos, document2) {
    var scrollSpace = getDocumentScrollSpace(document2);
    var percentage = getScrollPercentage(scrollSpace, pos);
    return percentage.y;
  }
  function getScrollPercentage(scrollSpace, scrollPosition) {
    var x = scrollPosition.x / scrollSpace.x;
    var y = scrollPosition.y / scrollSpace.y;
    return {
      x: x || 0,
      y
    };
  }

  // _dist/effects/set-scroll.js
  var import_tap12 = __toESM(require_tap());
  var import_withLatestFrom10 = __toESM(require_withLatestFrom());
  var import_map5 = __toESM(require_map());
  function setScrollEffect(xs, inputs2) {
    {
      var tupleStream$ = xs.pipe((0, import_withLatestFrom10.withLatestFrom)(inputs2.window$, inputs2.document$, inputs2.option$.pipe((0, import_pluck3.pluck)("scrollProportionally"))));
      var _a7 = (0, import_partition.partition)(function(_a8) {
        var event = _a8[0];
        return event.tagName === "document";
      })(tupleStream$), document$2 = _a7[0], element$ = _a7[1];
      var _b = (0, import_partition.partition)(function(_a8) {
        var event = _a8[0];
        return event.mappingIndex > -1;
      })(element$), mapped$ = _b[0], nonMapped$ = _b[1];
      return (0, import_merge2.merge)(document$2.pipe((0, import_tap12.tap)(function(incoming) {
        var event = incoming[0], window2 = incoming[1], document2 = incoming[2], scrollProportionally = incoming[3];
        var scrollSpace = getDocumentScrollSpace(document2);
        if (scrollProportionally) {
          return window2.scrollTo(0, scrollSpace.y * event.position.proportional);
        }
        return window2.scrollTo(0, event.position.raw.y);
      })), nonMapped$.pipe((0, import_tap12.tap)(function(incoming) {
        var event = incoming[0], window2 = incoming[1], document2 = incoming[2], scrollProportionally = incoming[3];
        var matchingElements = document2.getElementsByTagName(event.tagName);
        if (matchingElements && matchingElements.length) {
          var match = matchingElements[event.index];
          if (match) {
            return scrollElement(match, scrollProportionally, event);
          }
        }
      })), mapped$.pipe((0, import_withLatestFrom10.withLatestFrom)(inputs2.option$.pipe((0, import_pluck3.pluck)("scrollElementMapping"))), (0, import_map5.map)(function(_a8) {
        var incoming = _a8[0], scrollElementMapping = _a8[1];
        var event = incoming[0];
        return [
          incoming,
          scrollElementMapping.filter(function(item, index) {
            return index !== event.mappingIndex;
          })
        ];
      }), (0, import_tap12.tap)(function(_a8) {
        var incoming = _a8[0], scrollElementMapping = _a8[1];
        var event = incoming[0], window2 = incoming[1], document2 = incoming[2], scrollProportionally = incoming[3];
        scrollElementMapping.map(function(selector) {
          return document2.querySelector(selector);
        }).forEach(function(element) {
          scrollElement(element, scrollProportionally, event);
        });
      }))).pipe((0, import_ignoreElements6.ignoreElements)());
    }
  }
  function scrollElement(element, scrollProportionally, event) {
    if (scrollProportionally && element.scrollTo) {
      return element.scrollTo(0, element.scrollHeight * event.position.proportional);
    }
    return element.scrollTo(0, event.position.raw.y);
  }

  // _dist/effects/browser-reload.effect.js
  var import_tap13 = __toESM(require_tap());
  var import_withLatestFrom11 = __toESM(require_withLatestFrom());
  function browserReload() {
    return [EffectNames.BrowserReload];
  }
  function preBrowserReload() {
    return [EffectNames.PreBrowserReload];
  }
  function browserReloadEffect(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom11.withLatestFrom)(inputs2.window$), (0, import_tap13.tap)(function(_a7) {
      var window2 = _a7[1];
      return window2.location.reload();
    }));
  }

  // _dist/effects.js
  var _a3;
  var EffectNames;
  (function(EffectNames2) {
    EffectNames2["FileReload"] = "@@FileReload";
    EffectNames2["PreBrowserReload"] = "@@PreBrowserReload";
    EffectNames2["BrowserReload"] = "@@BrowserReload";
    EffectNames2["BrowserSetLocation"] = "@@BrowserSetLocation";
    EffectNames2["BrowserSetScroll"] = "@@BrowserSetScroll";
    EffectNames2["SetOptions"] = "@@SetOptions";
    EffectNames2["SimulateClick"] = "@@SimulateClick";
    EffectNames2["SetElementValue"] = "@@SetElementValue";
    EffectNames2["SetElementToggleValue"] = "@@SetElementToggleValue";
  })(EffectNames || (EffectNames = {}));
  var effectOutputHandlers$ = new import_BehaviorSubject5.BehaviorSubject((_a3 = {}, _a3[EffectNames.SetOptions] = setOptionsEffect, _a3[EffectNames.FileReload] = fileReloadEffect, _a3[EffectNames.BrowserReload] = browserReloadEffect, _a3[EffectNames.BrowserSetLocation] = browserSetLocationEffect, _a3[EffectNames.SimulateClick] = simulateClickEffect, _a3[EffectNames.SetElementValue] = setElementValueEffect, _a3[EffectNames.SetElementToggleValue] = setElementToggleValueEffect, _a3[EffectNames.BrowserSetScroll] = setScrollEffect, _a3));

  // _dist/messages/ScrollEvent.js
  function outgoing(data, tagName, index, mappingIndex) {
    if (mappingIndex === void 0) {
      mappingIndex = -1;
    }
    return [
      OutgoingSocketEvents.Scroll,
      { position: data, tagName, index, mappingIndex }
    ];
  }
  function incomingScrollHandler(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom12.withLatestFrom)(inputs2.option$.pipe((0, import_pluck4.pluck)("ghostMode", "scroll")), inputs2.window$.pipe((0, import_pluck4.pluck)("location", "pathname"))), (0, import_filter4.filter)(function(_a7) {
      var event = _a7[0], canScroll = _a7[1], pathname = _a7[2];
      return canScroll && event.pathname === pathname;
    }), (0, import_map6.map)(function(_a7) {
      var event = _a7[0];
      return [EffectNames.BrowserSetScroll, event];
    }));
  }

  // _dist/messages/ClickEvent.js
  var import_pluck5 = __toESM(require_pluck());
  var import_filter5 = __toESM(require_filter());
  var import_map7 = __toESM(require_map());
  var import_withLatestFrom13 = __toESM(require_withLatestFrom());
  function outgoing2(data) {
    return [OutgoingSocketEvents.Click, data];
  }
  function incomingHandler$(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom13.withLatestFrom)(inputs2.option$.pipe((0, import_pluck5.pluck)("ghostMode", "clicks")), inputs2.window$.pipe((0, import_pluck5.pluck)("location", "pathname"))), (0, import_filter5.filter)(function(_a7) {
      var event = _a7[0], canClick = _a7[1], pathname = _a7[2];
      return canClick && event.pathname === pathname;
    }), (0, import_map7.map)(function(_a7) {
      var event = _a7[0];
      return simulateClick(event);
    }));
  }

  // _dist/messages/KeyupEvent.js
  var import_pluck6 = __toESM(require_pluck());
  var import_filter6 = __toESM(require_filter());
  var import_map8 = __toESM(require_map());
  var import_withLatestFrom14 = __toESM(require_withLatestFrom());
  function outgoing3(element, value2) {
    return [
      OutgoingSocketEvents.Keyup,
      __assign(__assign({}, element), { value: value2 })
    ];
  }
  function incomingKeyupHandler(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom14.withLatestFrom)(inputs2.option$.pipe((0, import_pluck6.pluck)("ghostMode", "forms", "inputs")), inputs2.window$.pipe((0, import_pluck6.pluck)("location", "pathname"))), (0, import_filter6.filter)(function(_a7) {
      var event = _a7[0], canKeyup = _a7[1], pathname = _a7[2];
      return canKeyup && event.pathname === pathname;
    }), (0, import_map8.map)(function(_a7) {
      var event = _a7[0];
      return setElementValue(event);
    }));
  }

  // _dist/messages/BrowserNotify.js
  var import_map9 = __toESM(require_map());
  function incomingBrowserNotify(xs) {
    return xs.pipe((0, import_map9.map)(function(event) {
      return overlayInfo(event.message, event.timeout);
    }));
  }

  // _dist/messages/BrowserLocation.js
  var import_pluck7 = __toESM(require_pluck());
  var import_filter7 = __toESM(require_filter());
  var import_map10 = __toESM(require_map());
  var import_withLatestFrom15 = __toESM(require_withLatestFrom());
  function incomingBrowserLocation(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom15.withLatestFrom)(inputs2.option$.pipe((0, import_pluck7.pluck)("ghostMode", "location"))), (0, import_filter7.filter)(function(_a7) {
      var canSyncLocation = _a7[1];
      return canSyncLocation === true;
    }), (0, import_map10.map)(function(_a7) {
      var event = _a7[0];
      return browserSetLocation(event);
    }));
  }

  // _dist/messages/BrowserReload.js
  var import_filter8 = __toESM(require_filter());
  var import_withLatestFrom16 = __toESM(require_withLatestFrom());
  var import_mergeMap3 = __toESM(require_mergeMap());
  var import_concat2 = __toESM(require_concat());
  var import_of4 = __toESM(require_of());
  var import_subscribeOn = __toESM(require_subscribeOn());
  var import_async = __toESM(require_async());
  function incomingBrowserReload(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom16.withLatestFrom)(inputs2.option$), (0, import_filter8.filter)(function(_a7) {
      var event = _a7[0], options = _a7[1];
      return options.codeSync;
    }), (0, import_mergeMap3.mergeMap)(reloadBrowserSafe));
  }
  function reloadBrowserSafe() {
    return (0, import_concat2.concat)((0, import_of4.of)(preBrowserReload()), (0, import_of4.of)(browserReload()).pipe((0, import_subscribeOn.subscribeOn)(import_async.async)));
  }

  // _dist/messages/FileReload.js
  var import_filter9 = __toESM(require_filter());
  var import_empty2 = __toESM(require_empty());
  var import_of5 = __toESM(require_of());
  var import_withLatestFrom17 = __toESM(require_withLatestFrom());
  var import_mergeMap4 = __toESM(require_mergeMap());
  function incomingFileReload(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom17.withLatestFrom)(inputs2.option$), (0, import_filter9.filter)(function(_a7) {
      var event = _a7[0], options = _a7[1];
      return options.codeSync;
    }), (0, import_mergeMap4.mergeMap)(function(_a7) {
      var event = _a7[0], options = _a7[1];
      if (event.url || !options.injectChanges) {
        return reloadBrowserSafe();
      }
      if (event.basename && event.ext && isBlacklisted(event)) {
        return (0, import_empty2.empty)();
      }
      return (0, import_of5.of)(fileReload(event));
    }));
  }

  // _dist/messages/Connection.js
  var import_pluck8 = __toESM(require_pluck());
  var import_of6 = __toESM(require_of());
  var import_withLatestFrom18 = __toESM(require_withLatestFrom());
  var import_mergeMap5 = __toESM(require_mergeMap());
  function incomingConnection(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom18.withLatestFrom)(inputs2.option$.pipe((0, import_pluck8.pluck)("logPrefix"))), (0, import_mergeMap5.mergeMap)(function(_a7) {
      var x = _a7[0], logPrefix = _a7[1];
      var prefix = logPrefix ? "".concat(logPrefix, ": ") : "";
      return (0, import_of6.of)(setOptions(x), overlayInfo("".concat(prefix, "connected")));
    }));
  }

  // _dist/messages/Disconnect.js
  var import_ignoreElements7 = __toESM(require_ignoreElements());
  var import_tap14 = __toESM(require_tap());
  function incomingDisconnect(xs) {
    return xs.pipe((0, import_tap14.tap)(function(x) {
      return console.log(x);
    }), (0, import_ignoreElements7.ignoreElements)());
  }

  // _dist/messages/FormToggleEvent.js
  var import_pluck9 = __toESM(require_pluck());
  var import_filter10 = __toESM(require_filter());
  var import_map11 = __toESM(require_map());
  var import_withLatestFrom19 = __toESM(require_withLatestFrom());
  function outgoing4(element, props) {
    return [
      OutgoingSocketEvents.InputToggle,
      __assign(__assign({}, element), props)
    ];
  }
  function incomingInputsToggles(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom19.withLatestFrom)(inputs2.option$.pipe((0, import_pluck9.pluck)("ghostMode", "forms", "toggles")), inputs2.window$.pipe((0, import_pluck9.pluck)("location", "pathname"))), (0, import_filter10.filter)(function(_a7) {
      var toggles = _a7[1];
      return toggles === true;
    }), (0, import_map11.map)(function(_a7) {
      var event = _a7[0];
      return setElementToggleValue(event);
    }));
  }

  // _dist/messages/OptionsSet.js
  var import_map12 = __toESM(require_map());
  function incomingOptionsSet(xs) {
    return xs.pipe((0, import_map12.map)(function(event) {
      return setOptions(event.options);
    }));
  }

  // _dist/socket-messages.js
  var _a4;
  var IncomingSocketNames;
  (function(IncomingSocketNames2) {
    IncomingSocketNames2["Connection"] = "connection";
    IncomingSocketNames2["Disconnect"] = "disconnect";
    IncomingSocketNames2["FileReload"] = "file:reload";
    IncomingSocketNames2["BrowserReload"] = "browser:reload";
    IncomingSocketNames2["BrowserLocation"] = "browser:location";
    IncomingSocketNames2["BrowserNotify"] = "browser:notify";
    IncomingSocketNames2["Scroll"] = "scroll";
    IncomingSocketNames2["Click"] = "click";
    IncomingSocketNames2["Keyup"] = "input:text";
    IncomingSocketNames2["InputToggle"] = "input:toggles";
    IncomingSocketNames2["OptionsSet"] = "options:set";
  })(IncomingSocketNames || (IncomingSocketNames = {}));
  var OutgoingSocketEvents;
  (function(OutgoingSocketEvents2) {
    OutgoingSocketEvents2["Scroll"] = "@@outgoing/scroll";
    OutgoingSocketEvents2["Click"] = "@@outgoing/click";
    OutgoingSocketEvents2["Keyup"] = "@@outgoing/keyup";
    OutgoingSocketEvents2["InputToggle"] = "@@outgoing/Toggle";
  })(OutgoingSocketEvents || (OutgoingSocketEvents = {}));
  var socketHandlers$ = new import_BehaviorSubject6.BehaviorSubject((_a4 = {}, _a4[IncomingSocketNames.Connection] = incomingConnection, _a4[IncomingSocketNames.Disconnect] = incomingDisconnect, _a4[IncomingSocketNames.FileReload] = incomingFileReload, _a4[IncomingSocketNames.BrowserReload] = incomingBrowserReload, _a4[IncomingSocketNames.BrowserLocation] = incomingBrowserLocation, _a4[IncomingSocketNames.BrowserNotify] = incomingBrowserNotify, _a4[IncomingSocketNames.Scroll] = incomingScrollHandler, _a4[IncomingSocketNames.Click] = incomingHandler$, _a4[IncomingSocketNames.Keyup] = incomingKeyupHandler, _a4[IncomingSocketNames.InputToggle] = incomingInputsToggles, _a4[IncomingSocketNames.OptionsSet] = incomingOptionsSet, _a4[OutgoingSocketEvents.Scroll] = emitWithPathname(IncomingSocketNames.Scroll), _a4[OutgoingSocketEvents.Click] = emitWithPathname(IncomingSocketNames.Click), _a4[OutgoingSocketEvents.Keyup] = emitWithPathname(IncomingSocketNames.Keyup), _a4[OutgoingSocketEvents.InputToggle] = emitWithPathname(IncomingSocketNames.InputToggle), _a4));
  function emitWithPathname(name) {
    return function(xs, inputs2) {
      return xs.pipe((0, import_withLatestFrom20.withLatestFrom)(inputs2.io$, inputs2.window$.pipe((0, import_pluck10.pluck)("location", "pathname"))), (0, import_tap15.tap)(function(_a7) {
        var event = _a7[0], io = _a7[1], pathname = _a7[2];
        return io.emit(name, __assign(__assign({}, event), { pathname }));
      }), (0, import_ignoreElements8.ignoreElements)());
    };
  }

  // _dist/index.js
  var import_merge4 = __toESM(require_merge());

  // _dist/scroll-restore.js
  var import_BehaviorSubject7 = __toESM(require_BehaviorSubject());
  var import_empty3 = __toESM(require_empty());
  var import_of7 = __toESM(require_of());
  var import_withLatestFrom21 = __toESM(require_withLatestFrom());
  var import_map13 = __toESM(require_map());
  var _a5;
  var PREFIX = "<<BS_START>>";
  var SUFFIX = "<<BS_START>>";
  var regex = new RegExp(PREFIX + "(.+?)" + SUFFIX, "g");
  function parseFromString(input) {
    var match;
    var last;
    while (match = regex.exec(input)) {
      last = match[1];
    }
    if (last) {
      return JSON.parse(last);
    }
  }
  function initWindowName(window2) {
    var saved = function() {
      try {
        return parseFromString(window2.name);
      } catch (e) {
        return {};
      }
    }();
    window2.name = window2.name.replace(regex, "");
    if (saved && saved.bs && saved.bs.hardReload && saved.bs.scroll) {
      var _a7 = saved.bs.scroll, x = _a7.x, y = _a7.y;
      return (0, import_of7.of)(setScroll(x, y), consoleDebug("[ScrollRestore] x = ".concat(x, " y = ").concat(y)));
    }
    return (0, import_empty3.empty)();
  }
  var scrollRestoreHandlers$ = new import_BehaviorSubject7.BehaviorSubject((_a5 = {}, _a5[EffectNames.PreBrowserReload] = function(xs, inputs2) {
    return xs.pipe((0, import_withLatestFrom21.withLatestFrom)(inputs2.window$, inputs2.document$), (0, import_map13.map)(function(_a7) {
      var window2 = _a7[1], document2 = _a7[2];
      return [
        window2.name,
        PREFIX,
        JSON.stringify({
          bs: {
            hardReload: true,
            scroll: getBrowserScrollPosition(window2, document2)
          }
        }),
        SUFFIX
      ].join("");
    }), (0, import_map13.map)(function(value2) {
      return setWindowName(value2);
    }));
  }, _a5));

  // _dist/listeners.js
  var import_merge3 = __toESM(require_merge());

  // _dist/listeners/form-inputs.listener.js
  var import_filter11 = __toESM(require_filter());
  var import_withLatestFrom22 = __toESM(require_withLatestFrom());
  var import_map14 = __toESM(require_map());
  var import_pluck11 = __toESM(require_pluck());
  var import_skip = __toESM(require_skip());
  var import_distinctUntilChanged = __toESM(require_distinctUntilChanged());
  var import_switchMap3 = __toESM(require_switchMap());
  var import_empty4 = __toESM(require_empty());
  var import_fromEvent = __toESM(require_fromEvent());
  function getFormInputStream(document2, socket$2, option$2) {
    var canSync$ = createTimedBooleanSwitch(socket$2.pipe((0, import_filter11.filter)(function(_a7) {
      var name = _a7[0];
      return name === IncomingSocketNames.Keyup;
    })));
    return option$2.pipe((0, import_skip.skip)(1), (0, import_pluck11.pluck)("ghostMode", "forms", "inputs"), (0, import_distinctUntilChanged.distinctUntilChanged)(), (0, import_switchMap3.switchMap)(function(formInputs) {
      if (!formInputs) {
        return (0, import_empty4.empty)();
      }
      return (0, import_fromEvent.fromEvent)(document2.body, "keyup", true).pipe((0, import_map14.map)(function(e) {
        return e.target || e.srcElement;
      }), (0, import_filter11.filter)(function(target) {
        return target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      }), (0, import_withLatestFrom22.withLatestFrom)(canSync$), (0, import_filter11.filter)(function(_a7) {
        var canSync = _a7[1];
        return canSync;
      }), (0, import_map14.map)(function(_a7) {
        var eventTarget = _a7[0];
        var target = getElementData(eventTarget);
        var value2 = eventTarget.value;
        return outgoing3(target, value2);
      }));
    }));
  }

  // _dist/listeners/clicks.listener.js
  var import_withLatestFrom23 = __toESM(require_withLatestFrom());
  var import_filter12 = __toESM(require_filter());
  var import_map15 = __toESM(require_map());
  var import_pluck12 = __toESM(require_pluck());
  var import_skip2 = __toESM(require_skip());
  var import_distinctUntilChanged2 = __toESM(require_distinctUntilChanged());
  var import_switchMap4 = __toESM(require_switchMap());
  var import_fromEvent2 = __toESM(require_fromEvent());
  var import_empty5 = __toESM(require_empty());
  function getClickStream(document2, socket$2, option$2) {
    var canSync$ = createTimedBooleanSwitch(socket$2.pipe((0, import_filter12.filter)(function(_a7) {
      var name = _a7[0];
      return name === IncomingSocketNames.Click;
    })));
    return option$2.pipe((0, import_skip2.skip)(1), (0, import_pluck12.pluck)("ghostMode", "clicks"), (0, import_distinctUntilChanged2.distinctUntilChanged)(), (0, import_switchMap4.switchMap)(function(canClick) {
      if (!canClick) {
        return (0, import_empty5.empty)();
      }
      return (0, import_fromEvent2.fromEvent)(document2, "click", true).pipe((0, import_map15.map)(function(e) {
        return e.target;
      }), (0, import_filter12.filter)(function(target) {
        if (target.tagName === "LABEL") {
          var id = target.getAttribute("for");
          if (id && document2.getElementById(id)) {
            return false;
          }
        }
        return true;
      }), (0, import_withLatestFrom23.withLatestFrom)(canSync$), (0, import_filter12.filter)(function(_a7) {
        var canSync = _a7[1];
        return canSync;
      }), (0, import_map15.map)(function(_a7) {
        var target = _a7[0];
        return outgoing2(getElementData(target));
      }));
    }));
  }

  // _dist/listeners/scroll.listener.js
  var import_filter13 = __toESM(require_filter());
  var import_map16 = __toESM(require_map());
  var import_withLatestFrom24 = __toESM(require_withLatestFrom());
  var import_pluck13 = __toESM(require_pluck());
  var import_distinctUntilChanged3 = __toESM(require_distinctUntilChanged());
  var import_switchMap5 = __toESM(require_switchMap());
  var import_empty6 = __toESM(require_empty());
  var import_skip3 = __toESM(require_skip());
  var import_fromEvent3 = __toESM(require_fromEvent());
  function getScrollStream(window2, document2, socket$2, option$2) {
    var canSync$ = createTimedBooleanSwitch(socket$2.pipe((0, import_filter13.filter)(function(_a7) {
      var name = _a7[0];
      return name === IncomingSocketNames.Scroll;
    })));
    var elemMap$ = option$2.pipe((0, import_pluck13.pluck)("scrollElementMapping"), (0, import_map16.map)(function(selectors) {
      return selectors.map(function(selector) {
        return document2.querySelector(selector);
      });
    }));
    return option$2.pipe((0, import_skip3.skip)(1), (0, import_pluck13.pluck)("ghostMode", "scroll"), (0, import_distinctUntilChanged3.distinctUntilChanged)(), (0, import_switchMap5.switchMap)(function(scroll) {
      if (!scroll)
        return (0, import_empty6.empty)();
      return (0, import_fromEvent3.fromEvent)(document2, "scroll", true).pipe((0, import_map16.map)(function(e) {
        return e.target;
      }), (0, import_withLatestFrom24.withLatestFrom)(canSync$, elemMap$), (0, import_filter13.filter)(function(_a7) {
        var canSync = _a7[1];
        return Boolean(canSync);
      }), (0, import_map16.map)(function(_a7) {
        var target = _a7[0], canSync = _a7[1], elemMap = _a7[2];
        if (target === document2) {
          return outgoing(getScrollPosition(window2, document2), "document", 0);
        }
        var elems = document2.getElementsByTagName(target.tagName);
        var index = Array.prototype.indexOf.call(elems || [], target);
        return outgoing(getScrollPositionForElement(target), target.tagName, index, elemMap.indexOf(target));
      }));
    }));
  }

  // _dist/listeners/form-toggles.listener.js
  var import_filter14 = __toESM(require_filter());
  var import_skip4 = __toESM(require_skip());
  var import_pluck14 = __toESM(require_pluck());
  var import_distinctUntilChanged4 = __toESM(require_distinctUntilChanged());
  var import_withLatestFrom25 = __toESM(require_withLatestFrom());
  var import_map17 = __toESM(require_map());
  var import_switchMap6 = __toESM(require_switchMap());
  var import_empty7 = __toESM(require_empty());
  var import_fromEvent4 = __toESM(require_fromEvent());
  function getFormTogglesStream(document2, socket$2, option$2) {
    var canSync$ = createTimedBooleanSwitch(socket$2.pipe((0, import_filter14.filter)(function(_a7) {
      var name = _a7[0];
      return name === IncomingSocketNames.InputToggle;
    })));
    return option$2.pipe((0, import_skip4.skip)(1), (0, import_pluck14.pluck)("ghostMode", "forms", "toggles"), (0, import_distinctUntilChanged4.distinctUntilChanged)(), (0, import_switchMap6.switchMap)(function(canToggle) {
      if (!canToggle) {
        return (0, import_empty7.empty)();
      }
      return (0, import_fromEvent4.fromEvent)(document2, "change", true).pipe((0, import_map17.map)(function(e) {
        return e.target || e.srcElement;
      }), (0, import_filter14.filter)(function(elem) {
        return elem.tagName === "SELECT";
      }), (0, import_withLatestFrom25.withLatestFrom)(canSync$), (0, import_filter14.filter)(function(_a7) {
        var canSync = _a7[1];
        return canSync;
      }), (0, import_map17.map)(function(_a7) {
        var elem = _a7[0], canSync = _a7[1];
        var data = getElementData(elem);
        return outgoing4(data, {
          type: elem.type,
          checked: elem.checked,
          value: elem.value
        });
      }));
    }));
  }

  // _dist/listeners.js
  function initListeners(window2, document2, socket$2, option$2) {
    var merged$2 = (0, import_merge3.merge)(getScrollStream(window2, document2, socket$2, option$2), getClickStream(document2, socket$2, option$2), getFormInputStream(document2, socket$2, option$2), getFormTogglesStream(document2, socket$2, option$2));
    return merged$2;
  }

  // _dist/index.js
  var import_groupBy = __toESM(require_groupBy());
  var import_withLatestFrom26 = __toESM(require_withLatestFrom());
  var import_mergeMap6 = __toESM(require_mergeMap());
  var import_share2 = __toESM(require_share());
  var import_filter15 = __toESM(require_filter());
  var import_pluck15 = __toESM(require_pluck());
  var import_of8 = __toESM(require_of());
  var window$ = initWindow();
  var document$ = initDocument();
  var names$ = initWindowName(window);
  var _a6 = initSocket();
  var socket$ = _a6.socket$;
  var io$ = _a6.io$;
  var option$ = initOptions();
  var navigator$ = (0, import_of8.of)(navigator);
  var notifyElement$ = initNotify(option$.getValue());
  var logInstance$ = initLogger(option$.getValue());
  var outgoing$ = initListeners(window, document, socket$, option$);
  var inputs = {
    window$,
    document$,
    socket$,
    option$,
    navigator$,
    notifyElement$,
    logInstance$,
    io$,
    outgoing$
  };
  function getStream(name, inputs2) {
    return function(handlers$, inputStream$) {
      return inputStream$.pipe((0, import_groupBy.groupBy)(function(_a7) {
        var keyName = _a7[0];
        return keyName;
      }), (0, import_withLatestFrom26.withLatestFrom)(handlers$), (0, import_filter15.filter)(function(_a7) {
        var x = _a7[0], handlers = _a7[1];
        return typeof handlers[x.key] === "function";
      }), (0, import_mergeMap6.mergeMap)(function(_a7) {
        var x = _a7[0], handlers = _a7[1];
        return handlers[x.key](x.pipe((0, import_pluck15.pluck)(String(1))), inputs2);
      }), (0, import_share2.share)());
    };
  }
  var combinedEffectHandler$ = (0, import_zip.zip)(effectOutputHandlers$, scrollRestoreHandlers$, function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return args.reduce(function(acc, item) {
      return __assign(__assign({}, acc), item);
    }, {});
  });
  var output$ = getStream("[socket]", inputs)(socketHandlers$, (0, import_merge4.merge)(inputs.socket$, outgoing$));
  var effect$ = getStream("[effect]", inputs)(combinedEffectHandler$, output$);
  var dom$ = getStream("[dom-effect]", inputs)(domHandlers$, (0, import_merge4.merge)(effect$, names$));
  var merged$ = (0, import_merge4.merge)(output$, effect$, dom$);
  var log$ = getStream("[log]", inputs)(logHandler$, merged$);
  log$.subscribe();
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
console.log('--- alive ---');
