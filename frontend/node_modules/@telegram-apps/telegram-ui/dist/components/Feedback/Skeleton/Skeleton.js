import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
/**
 * Used as a placeholder during the loading state of a component or page. It can visually mimic
 * the layout that will be replaced by the actual content once loaded, improving user experience by reducing perceived loading times.
 */ export const Skeleton = (_param)=>{
    var { withoutAnimation, visible, className, children } = _param, restProps = _object_without_properties(_param, [
        "withoutAnimation",
        "visible",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        className: classNames("tgui-97f2df57786b02dc", visible && "tgui-3eb6091f664c15d6", withoutAnimation && "tgui-ecf101b3117a96c8", className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=Skeleton.js.map