import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Popper } from "../Popper/Popper";
import { Caption } from "../../Typography/Caption/Caption";
/**
 * The Tooltip component provides text labels that appear when the user hovers over, focuses on,
 * or touches an element. It's built on top of the Popper component for automatic positioning
 * relative to the target element. The tooltip supports light and dark modes for different visual
 * contexts and uses the Caption component for its content to ensure consistent typography.
 */ export const Tooltip = (_param)=>{
    var { mode = 'light', children, className, arrowProps } = _param, restProps = _object_without_properties(_param, [
        "mode",
        "children",
        "className",
        "arrowProps"
    ]);
    return /*#__PURE__*/ _jsx(Popper, _object_spread_props(_object_spread({
        withArrow: true,
        arrowProps: _object_spread_props(_object_spread({}, arrowProps), {
            className: classNames("tgui-e0107e1e5ea5b9f3", arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.className)
        }),
        className: classNames("tgui-5638a4ef4e806d8c", mode === 'dark' && "tgui-bc60ca772e3ae3c6", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(Caption, {
            level: "1",
            children: children
        })
    }));
};

//# sourceMappingURL=Tooltip.js.map