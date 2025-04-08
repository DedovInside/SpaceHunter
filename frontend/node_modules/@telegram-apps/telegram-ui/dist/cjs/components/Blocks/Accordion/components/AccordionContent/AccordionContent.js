'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AccordionContent", {
    enumerable: true,
    get: function() {
        return AccordionContent;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _AccordionContext = require("../../AccordionContext");
const _calcMaxHeight = require("./helpers/calcMaxHeight");
const AccordionContent = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "children"
    ]);
    const bodyRef = (0, _react.useRef)(null);
    const { expanded, labelId, contentId } = (0, _react.useContext)(_AccordionContext.AccordionContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        id: contentId,
        role: "region",
        "aria-labelledby": labelId,
        "aria-hidden": !expanded,
        className: (0, _classNames.classNames)("tgui-f23c0e195677169c", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            ref: bodyRef,
            className: "tgui-947b927060015de8",
            style: {
                maxHeight: (0, _calcMaxHeight.calcMaxHeight)(expanded, bodyRef.current)
            },
            children: children
        })
    }));
};

//# sourceMappingURL=AccordionContent.js.map