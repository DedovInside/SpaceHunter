"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Breadcrumbs", {
    enumerable: true,
    get: function() {
        return Breadcrumbs;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _chevron = require("../../../icons/16/chevron");
const _BreadCrumbsItem = require("./components/BreadCrumbsItem/BreadCrumbsItem");
const _dot = require("./icons/dot");
const _slash = require("./icons/slash");
const Breadcrumbs = ({ divider = 'dot', className, children })=>/*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: (0, _classNames.classNames)("tgui-68fc52f1068b8e16", className),
        children: _react.Children.map(children, (child, index)=>/*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    child,
                    index !== _react.Children.count(children) - 1 && /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "tgui-0eddcd83377979c2",
                        children: [
                            divider === 'dot' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_dot.IconDot, {}),
                            divider === 'slash' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_slash.IconSlash, {}),
                            divider === 'chevron' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_chevron.Icon16Chevron, {
                                className: "tgui-a9c3d618b6e43d64"
                            })
                        ]
                    })
                ]
            }))
    });
Breadcrumbs.Item = _BreadCrumbsItem.BreadCrumbsItem;

//# sourceMappingURL=Breadcrumbs.js.map