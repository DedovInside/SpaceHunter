import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
/**
 * Renders a container for displaying avatars in a stacked layout. This component
 * allows for the creation of visually grouped avatar representations, often used
 * to indicate multiple users or participants.
 */ export const AvatarStack = (_param)=>{
    var { children } = _param, restProps = _object_without_properties(_param, [
        "children"
    ]);
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({}, restProps), {
        className: classNames("tgui-28e0a2576155be01"),
        children: children
    }));
};

//# sourceMappingURL=AvatarStack.js.map