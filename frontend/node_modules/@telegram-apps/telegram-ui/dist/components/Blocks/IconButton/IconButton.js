import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Tappable } from "../../Service/Tappable/Tappable";
const modeStyles = {
    bezeled: "tgui-93cba8aff2e72079",
    plain: "tgui-08ef1486bc111162",
    gray: "tgui-2250ff52f0b5cf71",
    outline: "tgui-53781f3cf83e8be1"
};
const sizeStyles = {
    s: "tgui-b92d762e02762017",
    m: "tgui-024dfe77a8f2cfb0",
    l: "tgui-8ca1879e1128c105"
};
/**
 * Renders an icon button with customizable size and mode. It utilizes the `Tappable` component for enhanced
 * touch interaction, allowing it to serve various UI actions efficiently.
 */ export const IconButton = (_param)=>{
    var { size = 'm', mode = 'bezeled', className, children } = _param, restProps = _object_without_properties(_param, [
        "size",
        "mode",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsx(Tappable, _object_spread_props(_object_spread({
        Component: "button",
        className: classNames("tgui-dda0e80fdf796ba5", modeStyles[mode], sizeStyles[size], className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=IconButton.js.map