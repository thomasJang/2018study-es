"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box = function () {
    function Box() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        _classCallCheck(this, Box);

        this._width = width;
        this._height = height;
    }

    _createClass(Box, [{
        key: "area",
        get: function get() {
            return this._width * this._height;
        }
    }, {
        key: "width",
        set: function set(width) {
            this._width = width;
        },
        get: function get() {
            return this._width;
        }
    }, {
        key: "height",
        set: function set(height) {
            this._height = height;
        }
    }]);

    return Box;
}();