import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement } from "react";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { SegmentedControlItem } from "./components/SegmentedControlItem/SegmentedControlItem";
/**
 * The SegmentedControl component renders a set of options as a segmented control, commonly used for toggling between views or filtering content.
 * It is designed to adapt its appearance based on the platform, offering a native look and feel.
 * This component supports interactivity through selection, visually indicating the currently active option.
 */ export const SegmentedControl = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    const platform = usePlatform();
    const childrenAsArray = Children.toArray(children);
    const checkedIndex = childrenAsArray.findIndex((option)=>{
        return /*#__PURE__*/ isValidElement(option) && option.props.selected;
    });
    const translateX = `translateX(${100 * checkedIndex}%)`;
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        role: "tablist",
        className: classNames("tgui-71259e3311d7116e", platform === 'ios' && "tgui-16c6b1986a48e2b5", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "tgui-b0a9057ab5d33005",
            children: [
                checkedIndex > -1 && /*#__PURE__*/ _jsx("div", {
                    "aria-hidden": true,
                    className: "tgui-31f461ccfea23ec3",
                    style: {
                        width: `${100 / childrenAsArray.length}%`,
                        transform: translateX
                    }
                }),
                children
            ]
        })
    }));
};
SegmentedControl.Item = SegmentedControlItem;

//# sourceMappingURL=SegmentedControl.js.map