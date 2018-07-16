'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _throttle = require('coffeekraken-sugar/js/utils/functions/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _scrollTop = require('coffeekraken-sugar/js/dom/scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _insertAfter = require('coffeekraken-sugar/js/dom/insertAfter');

var _insertAfter2 = _interopRequireDefault(_insertAfter);

var _getStyleProperty = require('coffeekraken-sugar/js/dom/getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_SWebComponent) {
  _inherits(Component, _SWebComponent);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'componentMount',


    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'componentMount', this).call(this);

      // some internal variables
      this._currentTop = 0;

      // get margin top and bottom of the topbar
      // to apply them to the placeholder
      var marginBottom = (0, _getStyleProperty2.default)(this, 'margin-bottom');
      var marginTop = (0, _getStyleProperty2.default)(this, 'margin-top');

      // create the placeholder and place it at the place of the
      // topbar
      this._placeholderElm = document.createElement('div');
      this._placeholderElm.classList.add(this.componentNameDash + '__placeholder');
      this._placeholderElm.style.height = this.offsetHeight + 'px';
      this._placeholderElm.style.marginTop = marginTop;
      this._placeholderElm.style.marginBottom = marginBottom;
      (0, _insertAfter2.default)(this._placeholderElm, this);

      // prepare some functions to be listened
      this._onScrollFn = (0, _throttle2.default)(this._onScroll.bind(this), 100);
      this._onResizeWindowFn = (0, _throttle2.default)(this._onResizeWindow.bind(this), 100);

      // listen for scroll and resize
      document.addEventListener('scroll', this._onScrollFn);
      window.addEventListener('resize', this._onResizeWindowFn);
    }

    /**
     * Component unmount
     * @definition    SWebComponent.componentUnmount
     */

  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      _get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'componentUnmount', this).call(this);

      // remove the placeholder
      this._placeholderElm.parentNode.removeChild(this._placeholderElm);

      // remove event listeners
      document.removeEventListener('scroll', this._onScrollFn);
      window.removeEventListener('resize', this._onResizeWindowFn);
    }

    /**
     * On scroll
     * @param    {Event}    e    The scroll event
     */

  }, {
    key: '_onScroll',
    value: function _onScroll(e) {
      var newTop = (0, _scrollTop2.default)();
      if (this._currentTop < newTop && newTop > this.offsetHeight) {
        this.style.transform = 'translateY(-100%)';
      } else if (newTop < this._currentTop - this.props.scrollUp) {
        this.style.transform = 'translateY(0)';
      }
      this._currentTop = newTop;
    }

    /**
     * On resize
     * We resize the placeholder to fit to the topbar size
     * @param    {Event}    e    The resize event
     */

  }, {
    key: '_onResizeWindow',
    value: function _onResizeWindow(e) {
      this._placeholderElm.style.height = this.offsetHeight + 'px';
    }
  }], [{
    key: 'defaultCss',


    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return '\n      ' + componentNameDash + ' {\n        display : block;\n        position: fixed;\n        top: 0; left: 0;\n        width: 100%;\n        transition: transform .2s ease-in-out 0s;\n      }\n    ';
    }
  }, {
    key: 'defaultProps',

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
      return {

        /**
         * Specify the scroll up value needed to display the topbar
         * @prop
         * @type    {Integer}
         */
        scrollUp: 10

      };
    }
  }]);

  return Component;
}(_SWebComponent3.default);

exports.default = Component;