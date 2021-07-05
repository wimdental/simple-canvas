"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           React Simple Canvas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Source From : https://github.com/wimdental/simple-canvas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   MIT License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Copyright (c) 2021 Wim Software LTDA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Canvas = exports.Canvas = function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas(props, ctx) {
    _classCallCheck(this, Canvas);

    return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props, ctx));
  }

  _createClass(Canvas, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.canvas && this.props.draw !== nextProps.draw) {
        if (this.props.context !== nextProps.context) {
          this.ctx = this.canvas.getContext(nextProps.context || "2d", nextProps.ctxOptions || {});
          if (typeof this.props.onInit === "function") {
            this.props.onInit(this.ctx, this.canvas);
          }
        }
        if (nextProps.draw && typeof nextProps.onUpdate === "function") {
          requestAnimationFrame(this.onUpdate.bind(this, nextProps));
        }
      }
    }
  }, {
    key: "getRef",
    value: function getRef(ref) {
      if (!ref) return;
      this.ctx = ref.getContext(this.props.context || "2d", this.props.ctxOptions || {});
      this.canvas = ref;
      if (typeof this.props.onInit === "function") {
        this.props.onInit(this.ctx, this.canvas);
      }
      if (this.props.draw && typeof this.props.onUpdate === "function") {
        requestAnimationFrame(this.onUpdate.bind(this, this.props));
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(props) {
      props = !props ? this.props : props;
      if (!this.canvas || !this.ctx) return;
      props.onUpdate(this.ctx, this.canvas);
      if (props.draw && typeof props.onUpdate === "function") {
        requestAnimationFrame(this.onUpdate.bind(this, props));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // eslint-disable-next-line
      var _props = this.props,
          context = _props.context,
          ctxOptions = _props.ctxOptions,
          draw = _props.draw,
          onUpdate = _props.onUpdate,
          onInit = _props.onInit,
          rest = _objectWithoutProperties(_props, ["context", "ctxOptions", "draw", "onUpdate", "onInit"]);

      return _react2.default.createElement("canvas", _extends({ ref: function ref(_ref) {
          return _this2.getRef(_ref);
        } }, rest));
    }
  }]);

  return Canvas;
}(_react2.default.Component);

Canvas.propTypes = {
  context: _propTypes2.default.string,
  ctxOptions: _propTypes2.default.object,
  draw: _propTypes2.default.bool,
  onUpdate: _propTypes2.default.func,
  onInit: _propTypes2.default.func
};
Canvas.defaultProps = {
  context: "2d",
  ctxOptions: {},
  draw: true,
  onUpdate: function onUpdate() {},
  onInit: function onInit() {}
};