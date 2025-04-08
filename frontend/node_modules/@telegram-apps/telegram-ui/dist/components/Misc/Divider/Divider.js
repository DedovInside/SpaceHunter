import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
/**
 * Represents a horizontal line used to separate content within a layout or component.
 * The component allows for customization through additional HTML attributes and custom CSS classes.
 */ export const Divider = (_param)=>{
    var { className } = _param, restProps = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ _jsx("hr", _object_spread({
        className: classNames("tgui-8af0d10d5540c6cc", className)
    }, restProps));
};

//# sourceMappingURL=Divider.js.map