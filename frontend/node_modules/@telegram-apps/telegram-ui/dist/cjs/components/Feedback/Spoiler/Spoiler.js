'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Spoiler", {
    enumerable: true,
    get: function() {
        return Spoiler;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _function = require("../../../helpers/function");
const Spoiler = (_param)=>{
    var { visible = false, className, children } = _param, restProps = _object_without_properties._(_param, [
        "visible",
        "className",
        "children"
    ]);
    const [isVisible, setIsVisible] = (0, _react.useState)(visible);
    (0, _react.useEffect)(()=>{
        setIsVisible(visible);
    }, [
        visible
    ]);
    const toggle = ()=>setIsVisible(!isVisible);
    return(// It's a spoiler component, content inside is available for screen readers
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({}, restProps), {
        className: (0, _classNames.classNames)("tgui-86f452d8e92a2075", isVisible && "tgui-aff2a6268e887037", className),
        onClick: (0, _function.callMultiple)(toggle, restProps.onClick),
        onKeyDown: (0, _function.callMultiple)(toggle, restProps.onKeyDown),
        children: children
    })));
};

//# sourceMappingURL=Spoiler.js.map