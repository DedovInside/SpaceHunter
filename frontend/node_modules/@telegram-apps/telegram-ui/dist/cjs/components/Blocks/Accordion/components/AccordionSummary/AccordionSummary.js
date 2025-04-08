"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AccordionSummary", {
    enumerable: true,
    get: function() {
        return AccordionSummary;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _function = require("../../../../../helpers/function");
const _chevron_down = require("../../../../../icons/24/chevron_down");
const _AccordionContext = require("../../AccordionContext");
const _Cell = require("../../../Cell/Cell");
const AccordionSummary = (_param)=>{
    var { after, onClick, children } = _param, restProps = _object_without_properties._(_param, [
        "after",
        "onClick",
        "children"
    ]);
    const { expanded, labelId, contentId, onChange } = (0, _react.useContext)(_AccordionContext.AccordionContext);
    const toggle = ()=>onChange(!expanded);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Cell.Cell, _object_spread_props._(_object_spread._({
        id: labelId,
        "aria-expanded": expanded,
        "aria-controls": contentId,
        onClick: (0, _function.callMultiple)(toggle, onClick),
        after: after || /*#__PURE__*/ (0, _jsxruntime.jsx)(_chevron_down.Icon24ChevronDown, {
            className: (0, _classNames.classNames)("tgui-60e7968097edfa6f", expanded && "tgui-c900ecbd6d8d6d5e")
        })
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=AccordionSummary.js.map