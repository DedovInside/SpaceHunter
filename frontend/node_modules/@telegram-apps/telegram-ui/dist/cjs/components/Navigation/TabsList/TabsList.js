"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TabsList", {
    enumerable: true,
    get: function() {
        return TabsList;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _TabsItem = require("./components/TabsItem/TabsItem");
const TabsList = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "children"
    ]);
    const childrenAsArray = _react.Children.toArray(children);
    const checkedIndex = childrenAsArray.findIndex((option)=>{
        return /*#__PURE__*/ (0, _react.isValidElement)(option) && option.props.selected;
    });
    const translateX = `translateX(${100 * checkedIndex}%)`;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", _object_spread_props._(_object_spread._({
        role: "tablist",
        className: (0, _classNames.classNames)("tgui-89d3925598b8fd68", className)
    }, restProps), {
        children: [
            checkedIndex > -1 && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": true,
                className: "tgui-8e986e14448c29e6",
                style: {
                    width: `${100 / childrenAsArray.length}%`,
                    transform: translateX
                }
            }),
            children
        ]
    }));
};
TabsList.Item = _TabsItem.TabsItem;

//# sourceMappingURL=TabsList.js.map