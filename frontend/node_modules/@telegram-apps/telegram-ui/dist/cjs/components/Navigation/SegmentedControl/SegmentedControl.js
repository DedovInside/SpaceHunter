"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SegmentedControl", {
    enumerable: true,
    get: function() {
        return SegmentedControl;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _SegmentedControlItem = require("./components/SegmentedControlItem/SegmentedControlItem");
const SegmentedControl = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const childrenAsArray = _react.Children.toArray(children);
    const checkedIndex = childrenAsArray.findIndex((option)=>{
        return /*#__PURE__*/ (0, _react.isValidElement)(option) && option.props.selected;
    });
    const translateX = `translateX(${100 * checkedIndex}%)`;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        role: "tablist",
        className: (0, _classNames.classNames)("tgui-71259e3311d7116e", platform === 'ios' && "tgui-16c6b1986a48e2b5", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "tgui-b0a9057ab5d33005",
            children: [
                checkedIndex > -1 && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    "aria-hidden": true,
                    className: "tgui-31f461ccfea23ec3",
                    style: {
                        width: `${100 / childrenAsArray.length}%`,
                        transform: translateX
                    }
                }),
                children
            ]
        })
    }));
};
SegmentedControl.Item = _SegmentedControlItem.SegmentedControlItem;

//# sourceMappingURL=SegmentedControl.js.map