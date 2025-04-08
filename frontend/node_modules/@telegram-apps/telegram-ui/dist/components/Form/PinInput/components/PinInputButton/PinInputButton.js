import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Tappable } from "../../../../Service/Tappable/Tappable";
import { LargeTitle } from "../../../../Typography/LargeTitle/LargeTitle";
import { Title } from "../../../../Typography/Title/Title";
export const ButtonTypography = (props)=>{
    const platform = usePlatform();
    if (platform === 'ios') {
        return /*#__PURE__*/ _jsx(LargeTitle, _object_spread({}, props));
    }
    return /*#__PURE__*/ _jsx(Title, _object_spread({}, props));
};
export const PinInputButton = (_param)=>{
    var { children } = _param, restProps = _object_without_properties(_param, [
        "children"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsx(Tappable, _object_spread_props(_object_spread({
        Component: "button",
        className: classNames("tgui-6eaa561b38208c72", platform === 'ios' && "tgui-3bea52c968cee224")
    }, restProps), {
        children: /*#__PURE__*/ _jsx(ButtonTypography, {
            children: children
        })
    }));
};

//# sourceMappingURL=PinInputButton.js.map