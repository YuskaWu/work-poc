"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SingleElementIntersectionObserver = /*#__PURE__*/function () {
  function SingleElementIntersectionObserver(intersectionHandler) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SingleElementIntersectionObserver);

    var defOptions = {
      threshold: 1,
      // handler only will trigger onece when observed element was intersected.
      once: true,
      // trigger handler only when all entries is visible.
      visibleOnly: true
    };
    options = Object.assign({}, defOptions, options);
    this._observer = new IntersectionObserver(function (entries, observer) {
      var entry = entries[0];

      if (options.visibleOnly) {
        if (!entry.isIntersecting) {
          return;
        }
      }

      if (options.once) {
        _this.unobserve();
      }

      intersectionHandler(entry, observer);
    }, options);
  }

  _createClass(SingleElementIntersectionObserver, [{
    key: "observe",
    value: function observe(elm) {
      if (!elm) {
        return;
      }

      this.unobserve();
      this._observedElm = elm;

      this._observer.observe(elm);
    }
  }, {
    key: "unobserve",
    value: function unobserve() {
      if (this._observedElm) {
        this._observer.unobserve(this._observedElm);
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this._observer.disconnect();
    }
  }]);

  return SingleElementIntersectionObserver;
}();

function lazyLoadScript(observerElm) {
  var scriptAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var opt = arguments.length > 2 ? arguments[2] : undefined;
  var defOptions = {
    threshold: 0.1,
    waiting: 5000
  };
  opt = Object.assign({}, defOptions, opt);

  if (_instanceof(!observerElm, HTMLElement)) {
    console.error('[LazyLoadScript] invalid observer element.');
    return;
  }

  var scriptElm = document.createElement('script');

  for (var attr in scriptAttr) {
    scriptElm.setAttribute(attr, scriptAttr[attr]);
  }

  scriptElm.setAttribute('type', 'text/javascript');

  if (scriptAttr.dataset && _typeof(scriptAttr.dataset) === 'object') {
    for (var _attr in scriptAttr.dataset) {
      scriptElm.dataset[_attr] = scriptAttr.dataset[_attr];
    }
  }

  var observer = new SingleElementIntersectionObserver(function () {
    clearTimeout(waitingTimeout);
    console.log('[LazyloadScript] trigger append: ', scriptAttr);
    observerElm.appendChild(scriptElm);
  }, opt);
  var waitingTimeout = setTimeout(function () {
    observer.unobserve();
    console.log('[LazyloadScript] trigger append: ', scriptAttr);
    observerElm.appendChild(scriptElm);
  }, opt.waiting);
  observer.observe(observerElm);
}