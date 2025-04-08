import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { Tappable } from "../../../../Service/Tappable/Tappable";
export const SnackbarButton = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsx(Tappable, _object_spread_props(_object_spread({
        Component: "button",
        className: classNames("tgui-4d26fba7185ffa9f", className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=SnackbarButton.js.map