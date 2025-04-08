import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
import { Text } from "../../../../Typography/Text/Text";
const modeStyles = {
    active: "tgui-dcd66bc07faad440",
    'pre-active': "tgui-581d134185fd28b4"
};
export const TimelineItem = (_param)=>{
    var { header, horizontal, mode, className, children } = _param, restProps = _object_without_properties(_param, [
        "header",
        "horizontal",
        "mode",
        "className",
        "children"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsxs("li", _object_spread_props(_object_spread({
        className: classNames("tgui-caaaa27ccfa566b7", mode && modeStyles[mode], platform === 'ios' && "tgui-566b727e7a35e935", horizontal && "tgui-f461f2eeb28c21d0", className)
    }, restProps), {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "tgui-0f46575488c31b93",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "tgui-3fc2f0d7045d23d8"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "tgui-d7ba9c56743387af"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tgui-bf9f87dd32ecad81",
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        className: "tgui-2b850faa8f3a520a",
                        weight: "2",
                        children: header
                    }),
                    /*#__PURE__*/ _jsx(Subheadline, {
                        level: platform === 'ios' ? '1' : '2',
                        className: "tgui-b9a4d9afcd70e355",
                        children: children
                    })
                ]
            })
        ]
    }));
};

//# sourceMappingURL=TimelineItem.js.map