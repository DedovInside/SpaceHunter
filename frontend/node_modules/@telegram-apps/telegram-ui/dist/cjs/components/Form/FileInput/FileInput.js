"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileInput", {
    enumerable: true,
    get: function() {
        return FileInput;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _attach = require("../../../icons/28/attach");
const _ButtonCell = require("../../Blocks/Cell/components/ButtonCell/ButtonCell");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const FileInput = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { label = 'Attach file', className, children } = _param, restProps = _object_without_properties._(_param, [
        "label",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        ref: ref,
        className: className,
        children: [
            children,
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_ButtonCell.ButtonCell, {
                Component: "label",
                before: /*#__PURE__*/ (0, _jsxruntime.jsx)(_attach.Icon28Attach, {}),
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, {
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("input", _object_spread._({
                            type: "file",
                            placeholder: label
                        }, restProps))
                    }),
                    label
                ]
            })
        ]
    });
});

//# sourceMappingURL=FileInput.js.map