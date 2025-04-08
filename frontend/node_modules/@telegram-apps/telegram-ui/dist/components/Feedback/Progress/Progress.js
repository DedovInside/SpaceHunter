'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { clamp } from "../../../helpers/math";
import { usePlatform } from "../../../hooks/usePlatform";
const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;
/**
 * Renders a linear progress bar that visually represents completion percentage towards a goal.
 * The component respects accessibility standards by including appropriate ARIA attributes.
 */ export const Progress = (_param)=>{
    var { value = 0, className } = _param, restProps = _object_without_properties(_param, [
        "value",
        "className"
    ]);
    const platform = usePlatform();
    const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
    const title = `${progress} / ${PROGRESS_MAX_VALUE}`;
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        title: title,
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": PROGRESS_MIN_VALUE,
        "aria-valuemax": PROGRESS_MAX_VALUE,
        className: classNames("tgui-ced47fd163a53511", platform === 'base' && "tgui-44060f289fdbdb84", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx("div", {
            "aria-hidden": true,
            className: "tgui-027278a6d6708965",
            style: {
                width: `${progress}%`
            }
        })
    }));
};

//# sourceMappingURL=Progress.js.map