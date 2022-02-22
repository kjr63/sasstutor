'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.handleStarted = _this.handleStarted.bind();
        return _this;
    }

    _createClass(Navbar, [{
        key: 'handleStarted',
        value: function handleStarted() {
            document.getElementById('modal').style.display = 'block';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'navbar', id: 'nav' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar__logos' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar__logos__img' },
                        _react2.default.createElement(
                            'i',
                            { className: 'material-icons navbar__logos__img__icon' },
                            'fitness_center'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar__logos__text' },
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar__logos__text__top' },
                            'ELITE GYM'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar__logos__text__bottom' },
                            'FITZ',
                            _react2.default.createElement(
                                'span',
                                { className: 'navbar__logos__text__bottom--o' },
                                'O'
                            ),
                            'NE'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'navbar__menu' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#sonheader', className: 'navbar__menu--link' },
                            'HOME'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#sonabout', className: 'navbar__menu--link' },
                            'ABOUT'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#gallery', className: 'navbar__menu--link' },
                            'GALLERY'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar__menu__dropdown' },
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar__menu__dropdown__title' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'CATALOG'
                            ),
                            _react2.default.createElement('i', { className: 'fa fa-angle-down' })
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'navbar__menu__dropdown__content list' },
                            _react2.default.createElement(
                                'li',
                                { className: 'list--item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '#catalog1', className: 'list--link' },
                                    'CATALOG1'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'list--item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '#catalog2', className: 'list--link' },
                                    'CATALOG2'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'list--item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '#catalog3', className: 'list--link' },
                                    'CATALOG3'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#blog', className: 'navbar__menu--link' },
                            'BLOG'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#contact', className: 'navbar__menu--link' },
                            'CONTACT'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'navbar__action' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'btn btn--animated',
                            onClick: this.handleStarted },
                        'GET STARTED'
                    )
                )
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

//export { Navbar };


exports.default = Navbar;