// Generated by IcedCoffeeScript 1.3.3a
(function() {
  var Pipeliner, iced, iced_internals, __iced_k, __iced_k_noop, _iand, _ior, _timeout,
    __slice = [].slice;

  __iced_k = __iced_k_noop = function() {};

  iced_internals = require('./iced');

  exports.iced = iced = iced_internals.runtime;

  _timeout = function(cb, t, res, tmp) {
    var arr, rv, which, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    rv = new iced.Rendezvous;
    tmp[0] = rv.id(true).__iced_deferrals.defer({
      assign_fn: (function() {
        return function() {
          return arr = __slice.call(arguments, 0);
        };
      })(),
      lineno: 17
    });
    setTimeout(rv.id(false).__iced_deferrals.defer({
      lineno: 18
    }), t);
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/icedlib.coffee",
        funcname: "_timeout"
      });
      rv.wait(__iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return which = arguments[0];
          };
        })(),
        lineno: 20
      }));
      __iced_deferrals._fulfill();
    })(function() {
      if (res) res[0] = which;
      return cb.apply(null, arr);
    });
  };

  exports.timeout = function(cb, t, res) {
    var tmp;
    tmp = [];
    _timeout(cb, t, res, tmp);
    return tmp[0];
  };

  _iand = function(cb, res, tmp) {
    var ok, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/icedlib.coffee",
        funcname: "_iand"
      });
      tmp[0] = __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return ok = arguments[0];
          };
        })(),
        lineno: 35
      });
      __iced_deferrals._fulfill();
    })(function() {
      if (!ok) res[0] = false;
      return cb();
    });
  };

  exports.iand = function(cb, res) {
    var tmp;
    tmp = [];
    _iand(cb, res, tmp);
    return tmp[0];
  };

  _ior = function(cb, res, tmp) {
    var ok, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/icedlib.coffee",
        funcname: "_ior"
      });
      tmp[0] = __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return ok = arguments[0];
          };
        })(),
        lineno: 50
      });
      __iced_deferrals._fulfill();
    })(function() {
      if (ok) res[0] = true;
      return cb();
    });
  };

  exports.ior = function(cb, res) {
    var tmp;
    tmp = [];
    _ior(cb, res, tmp);
    return tmp[0];
  };

  exports.Pipeliner = Pipeliner = (function() {

    function Pipeliner(window, delay) {
      this.window = window || 1;
      this.delay = delay || 0;
      this.queue = [];
      this.n_out = 0;
      this.cb = null;
      this[iced_internals["const"].deferrals] = this;
      this["defer"] = this._defer;
    }

    Pipeliner.prototype.waitInQueue = function(cb) {
      var ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(__iced_k) {
        var _results, _while;
        _results = [];
        _while = function(__iced_k) {
          var _break, _continue, _next;
          _break = function() {
            return __iced_k(_results);
          };
          _continue = function() {
            return _while(__iced_k);
          };
          _next = function(__iced_next_arg) {
            _results.push(__iced_next_arg);
            return _continue();
          };
          if (!(_this.n_out > _this.window)) {
            return _break();
          } else {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/icedlib.coffee",
                funcname: "Pipeliner.waitInQueue"
              });
              _this.cb = __iced_deferrals.defer({
                lineno: 86
              });
              __iced_deferrals._fulfill();
            })(_next);
          }
        };
        _while(__iced_k);
      })(function() {
        _this.n_out++;
        (function(__iced_k) {
          if (_this.delay) {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/icedlib.coffee",
                funcname: "Pipeliner.waitInQueue"
              });
              setTimeout(__iced_deferrals.defer({
                lineno: 94
              }), _this.delay);
              __iced_deferrals._fulfill();
            })(__iced_k);
          } else {
            return __iced_k();
          }
        })(function() {
          return cb();
        });
      });
    };

    Pipeliner.prototype.__defer = function(out, deferArgs) {
      var tmp, voidCb, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/icedlib.coffee",
          funcname: "Pipeliner.__defer"
        });
        voidCb = __iced_deferrals.defer({
          lineno: 107
        });
        out[0] = function() {
          var args, _ref;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          if ((_ref = deferArgs.assign_fn) != null) _ref.apply(null, args);
          return voidCb();
        };
        __iced_deferrals._fulfill();
      })(function() {
        _this.n_out--;
        if (_this.cb) {
          tmp = _this.cb;
          _this.cb = null;
          return tmp();
        }
      });
    };

    Pipeliner.prototype._defer = function(deferArgs) {
      var tmp;
      tmp = [];
      this.__defer(tmp, deferArgs);
      return tmp[0];
    };

    Pipeliner.prototype.flush = function(autocb) {
      var ___iced_passed_deferral, __iced_deferrals, __iced_k, _results, _while,
        _this = this;
      __iced_k = autocb;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      _results = [];
      _while = function(__iced_k) {
        var _break, _continue, _next;
        _break = function() {
          return __iced_k(_results);
        };
        _continue = function() {
          return _while(__iced_k);
        };
        _next = function(__iced_next_arg) {
          _results.push(__iced_next_arg);
          return _continue();
        };
        if (!_this.n_out) {
          return _break();
        } else {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/icedlib.coffee",
              funcname: "Pipeliner.flush"
            });
            _this.cb = __iced_deferrals.defer({
              lineno: 134
            });
            __iced_deferrals._fulfill();
          })(_next);
        }
      };
      _while(__iced_k);
    };

    return Pipeliner;

  })();

}).call(this);
