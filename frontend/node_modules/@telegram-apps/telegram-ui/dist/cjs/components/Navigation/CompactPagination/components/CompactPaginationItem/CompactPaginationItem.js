"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CompactPaginationItem", {
    enumerable: true,
    get: function() {
        return CompactPaginationItem;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _node = require("../../../../../helpers/react/node");
const _VisuallyHidden = require("../../../../Service/VisuallyHidden/VisuallyHidden");
const CompactPaginationItem = (_param)=>{
    var { selected, className, children } = _param, restProps = _object_without_properties._(_param, [
        "selected",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("button", _object_spread_props._(_object_spread._({
        type: "button",
        role: "tab",
        "aria-selected": selected,
        className: (0, _classNames.classNames)("tgui-747563e660315b07", selected && "tgui-6d14364fac453a65", className)
    }, restProps), {
        children: (0, _node.hasReactNode)(children) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, {
            children: children
        }) : undefined
    }));
};

//# sourceMappingURL=CompactPaginationItem.js.map