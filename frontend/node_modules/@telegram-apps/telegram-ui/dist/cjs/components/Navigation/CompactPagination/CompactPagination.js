"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CompactPagination", {
    enumerable: true,
    get: function() {
        return CompactPagination;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _CompactPaginationItem = require("./components/CompactPaginationItem/CompactPaginationItem");
const modeStyles = {
    default: undefined,
    ambient: "tgui-15adbef8fe5efed9",
    white: "tgui-cdc228e9d92dac5b"
};
const CompactPagination = (_param)=>{
    var { mode = 'default', children, className } = _param, restProps = _object_without_properties._(_param, [
        "mode",
        "children",
        "className"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        role: "tablist",
        className: (0, _classNames.classNames)("tgui-442a9579d6c19dc4", modeStyles[mode], className)
    }, restProps), {
        children: children
    }));
};
CompactPagination.Item = _CompactPaginationItem.CompactPaginationItem;

//# sourceMappingURL=CompactPagination.js.map