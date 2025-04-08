import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon28Attach } from "../../../icons/28/attach";
import { ButtonCell } from "../../Blocks/Cell/components/ButtonCell/ButtonCell";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
/**
 * Renders a file input disguised as a button, enhancing the user interface and improving usability.
 * It leverages the `ButtonCell` component for consistent styling across the application.
 */ export const FileInput = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { label = 'Attach file', className, children } = _param, restProps = _object_without_properties(_param, [
        "label",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsxs("div", {
        ref: ref,
        className: className,
        children: [
            children,
            /*#__PURE__*/ _jsxs(ButtonCell, {
                Component: "label",
                before: /*#__PURE__*/ _jsx(Icon28Attach, {}),
                children: [
                    /*#__PURE__*/ _jsx(VisuallyHidden, {
                        children: /*#__PURE__*/ _jsx("input", _object_spread({
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