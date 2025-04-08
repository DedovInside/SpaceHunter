"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PinInputCell", {
    enumerable: true,
    get: function() {
        return PinInputCell;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _VisuallyHidden = require("../../../../Service/VisuallyHidden/VisuallyHidden");
const PinInputCell = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { isTyped } = _param, restProps = _object_without_properties._(_param, [
        "isTyped"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const isIOS = platform === 'ios';
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
        ref: ref,
        className: (0, _classNames.classNames)("tgui-bad1e0d3a612c110", isIOS && "tgui-b9a1527d00258387", isTyped && "tgui-1d6fb1351888c5e0"),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread._({
                Component: "input",
                type: "number",
                maxLength: 1,
                className: "tgui-0bd147a2a35a8dd1"
            }, restProps)),
            isTyped && !isIOS && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-9fa4f4531187df59"
            })
        ]
    });
});

//# sourceMappingURL=PinInputCell.js.map