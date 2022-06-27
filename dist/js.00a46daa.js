// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var API_KEY = '244f51358beb91f3';
var AREA_GOTANDA = 'small_area=X086';
var FORMAT = 'format=json';
var IS_LUNCH = 'lunch=1';
var COUNT = 100;
var proxyserver = 'https://cors-suzuki-app.herokuapp.com/';
var URL = "".concat(proxyserver, "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=").concat(API_KEY, "&").concat(FORMAT, "&").concat(AREA_GOTANDA, "&").concat(IS_LUNCH, "&count=").concat(COUNT);
/**
 * ランダムの整数を返す
 * @param {int} num
 * @returns
 */

var randomNumber = function randomNumber(num) {
  return Math.floor(Math.random() * num + 1);
};

var app = document.querySelector('.app');
/**
 * 飲食店情報を返す
 */

var fetchShopInfo = function fetchShopInfo() {
  console.log("read fetchShopInfo"); // // 距離パラメータ
  // const selectRange = document.form.range;
  // const rangeNum = selectRange.selectIndex;
  // const RANGE = `range=${rangeNum}`;
  // // 禁煙席パラメータ
  // const selectSmoking = document.form.non_smoking;
  // const smokingNum = selectRange.selectIndex;
  // const NON_SMOKING = `non_smoking=${smokingNum}`;
  // fetch(`${URL}&${RANGE}&${NON_SMOKING}`).then(async function (response) {

  fetch(URL).then(function (response) {
    if (!response.ok) {
      console.error("エラーレスポンス", response);
    } else {
      console.log("read fetchShopInfo");
      var dataJson = response.json();
      var shop = dataJson.results.shop[randomNumber(COUNT)];
      var detailLink = "https://www.hotpepper.jp/str".concat(shop.id, "/");
      var view = escapeHTML(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <header class=\"header\">\n        <div class=\"header__text\">\n          <p>\u3053\u3053\u306B\u884C\u304D\u307E\u305B\u3093\u304B\uFF1F</p>\n        </div>\n      </header>\n      <main class=\"main\">\n        <div class=\"shopInfoWrapper\">\n          <div class=\"shopInfo\">\n            <div class=\"shopInfo__heading\">\n              <p class=\"shopGenreCatch\">", "</p>\n              <p class=\"shopName\">", "</p>\n              <p class=\"shopGenreName\">", "</p>\n              <p class=\"shopInfo__shopImage\">\n                <img src=\"", "\" alt=\"", "\" width=\"200\" height=\"200\">\n              </p>\n              <p class=\"creditImage\">\u3010\u753B\u50CF\u63D0\u4F9B:\u30DB\u30C3\u30C8\u30DA\u30C3\u30D1\u30FC \u30B0\u30EB\u30E1\u3011</p>\n            </div>\n            <div class=\"shopInfo__detail\">\n              <table class=\"table\">\n                <tr>\n                  <th class=\"table__head\">\u3010\u55B6\u696D\u6642\u9593\u3011</th>\n                </tr>\n                <tr>\n                  <td class=\"table__data\">", "</td>\n                </tr>\n                <tr>\n                  <th class=\"table__head\">\u3010\u5E73\u5747\u4E88\u7B97\u3011</th>\n                </tr>\n                <tr>\n                  <td class=\"table__data\">", "</td>\n                </tr>\n              </table>\n              <a href=", " class=\"link detailLink\">\u8A73\u7D30\u3092\u898B\u308B</a>\n              <div class=\"googleMap\">\n                <p>", "</p>\n                <p>", "</p>\n              </div>\n              <table class=\"table\">\n                <tr>\n                  <th class=\"table__head\">\u3010\u4F4F\u6240\u3011</th>\n                </tr>\n                <tr>\n                  <td class=\"table__data\">", "</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n          <p class=\"searchButtonParent\">\n            <button class=\"searchButton\">\n              \u5225\u306E\u5E97\u3092\u63A2\u3059\n            </button>\n          </p>\n          <a href=\"/\" class=\"link\">\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u306B\u623B\u308B</a>\n        </div>\n      </main>\n      <footer class=\"footer\">\n        <p class=\"footer__hotpepper\">Powered by <a class=\"creditLink\" href=\"http://webservice.recruit.co.jp/\">\u30DB\u30C3\u30C8\u30DA\u30C3\u30D1\u30FC Web\u30B5\u30FC\u30D3\u30B9</a></p>\n        <p class=\"footer__credit\">\xA9bitA Inc. 2022</p>\n      </footer>\n      "])), shop.genre.catch, shop.name, shop.genre.name, shop.logo_image, shop.name, shop.open, shop.budget.average, detailLink, shop.lat, shop.lng, shop.address); // HTMLの挿入

      app.insertAdjacentHTML('afterbegin', view); // app.innerHTML = view;

      var searchButton = document.querySelector('.searchButton');
      searchButton.addEventListener('click', fetchShopInfo);
    }
  });
};
/**
 * トップページを表示する
 */


var renderTop = function renderTop() {
  var view = escapeHTML(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  <form name=\"form\" method=\"get\">\n  <select name=\"range\">\n    <option value=\"1\">5\u5206</option>\n    <option value=\"2\">10\u5206</option>\n  </select>\n  <select name=\"non_smoking\">\n    <option value=\"0\">\u55AB\u7159\u5E2D\u542B\u3080</option>\n    <option value=\"1\">\u7981\u7159\u5E2D\u306E\u307F</option>\n  </select>\n  <button class=\"searchButton\">\u691C\u7D22\u3059\u308B</button>\n</form>\n  "])));
  app.innerHTML = view;
  var searchButton = document.querySelector('.searchButton');
  searchButton.addEventListener('click', fetchShopInfo);
};

{
  /* <form name="form" method="get" action="">
   <select name="range">
     <option value="1">5分</option>
     <option value="2">10分</option>
   </select>
   <select name="non_smoking">
     <option value="0">喫煙席含む</option>
     <option value="1">禁煙席のみ</option>
   </select>
   <button class="searchButton">検索する</button>
  </form> */
}
/**
 * HTML文字列をエスケープする
 * @param {string} str
 * @returns 変換された特定の記号
 */

function escapeSpecialChars(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
/**
 * escapeSpecialChars関数をHTML文字列の中で呼び出す タグ関数
 * @param {Array} strings
 * @param  {...any} values
 * @returns
 */


function escapeHTML(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return strings.reduce(function (result, str, i) {
    var value = values[i - 1];

    if (typeof value === 'string') {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}

renderTop(); // fetchShopInfo();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50169" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map