'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { hasReactNode } from "../../../helpers/react/node";
import { usePlatform } from "../../../hooks/usePlatform";
import { Touch } from "../../Service/Touch/Touch";
import { SliderSteps } from "./components/SliderSteps/SliderSteps";
import { SliderThumb } from "./components/SliderThumb/SliderThumb";
import { useSlider } from "./hooks/useSlider";
/**
 * Renders a slider input for selecting a value or range from a predefined interval. Supports single or multiple thumbs for range selection.
 * It leverages custom hooks for logic and state management and provides customization options for appearance and functionality.
 */ export const Slider = (_param)=>{
    var { className, disabled, before, after } = _param, restProps = _object_without_properties(_param, [
        "className",
        "disabled",
        "before",
        "after"
    ]);
    const platform = usePlatform();
    const { steps, multiple, containerProps, startValueInPercent, endReversedValueInPercent, thumbsContainerRef, thumbStartInputRef, thumbEndInputRef, handlePointerStart, handlePointerMove, handlePointerEnd, getInputProps } = useSlider(restProps);
    return /*#__PURE__*/ _jsxs("div", {
        className: classNames("tgui-717c3649db8d5af2", platform === 'ios' && "tgui-d2e2a2e28ef0f746", disabled && "tgui-c591a831de13ba23", className),
        children: [
            hasReactNode(before) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-6598607160233201",
                children: before
            }),
            /*#__PURE__*/ _jsxs(Touch, _object_spread_props(_object_spread({}, containerProps), {
                className: "tgui-35faba867393ce37",
                onStart: disabled ? undefined : handlePointerStart,
                onMove: disabled ? undefined : handlePointerMove,
                onEnd: disabled ? undefined : handlePointerEnd,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "tgui-e11a455378c63b15",
                        children: steps !== undefined && /*#__PURE__*/ _jsx(SliderSteps, {
                            steps: steps
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "tgui-4de4feff2dcc975c",
                        style: multiple ? {
                            left: `${startValueInPercent}%`,
                            right: `${100 - endReversedValueInPercent}%`
                        } : {
                            width: `${startValueInPercent}%`
                        }
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        ref: thumbsContainerRef,
                        className: "tgui-7fe9f0fbc9771947",
                        children: [
                            /*#__PURE__*/ _jsx(SliderThumb, {
                                "data-type": "start",
                                ref: thumbStartInputRef,
                                style: {
                                    left: `${startValueInPercent}%`,
                                    zIndex: multiple && startValueInPercent >= 50 ? 3 : undefined
                                },
                                inputProps: getInputProps(false)
                            }),
                            multiple && /*#__PURE__*/ _jsx(SliderThumb, {
                                "data-type": "end",
                                ref: thumbEndInputRef,
                                style: {
                                    left: `${endReversedValueInPercent}%`
                                },
                                inputProps: getInputProps(true)
                            })
                        ]
                    })
                ]
            })),
            hasReactNode(after) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-a56564bcfd4b56e5",
                children: after
            })
        ]
    });
};

//# sourceMappingURL=Slider.js.map