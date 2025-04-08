import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { VisuallyHidden } from "../../../../Service/VisuallyHidden/VisuallyHidden";
export const PinInputCell = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { isTyped } = _param, restProps = _object_without_properties(_param, [
        "isTyped"
    ]);
    const platform = usePlatform();
    const isIOS = platform === 'ios';
    return /*#__PURE__*/ _jsxs("label", {
        ref: ref,
        className: classNames("tgui-bad1e0d3a612c110", isIOS && "tgui-b9a1527d00258387", isTyped && "tgui-1d6fb1351888c5e0"),
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread({
                Component: "input",
                type: "number",
                maxLength: 1,
                className: "tgui-0bd147a2a35a8dd1"
            }, restProps)),
            isTyped && !isIOS && /*#__PURE__*/ _jsx("div", {
                className: "tgui-9fa4f4531187df59"
            })
        ]
    });
});

//# sourceMappingURL=PinInputCell.js.map