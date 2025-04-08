'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Slider", {
    enumerable: true,
    get: function() {
        return Slider;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _Touch = require("../../Service/Touch/Touch");
const _SliderSteps = require("./components/SliderSteps/SliderSteps");
const _SliderThumb = require("./components/SliderThumb/SliderThumb");
const _useSlider = require("./hooks/useSlider");
const Slider = (_param)=>{
    var { className, disabled, before, after } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "disabled",
        "before",
        "after"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const { steps, multiple, containerProps, startValueInPercent, endReversedValueInPercent, thumbsContainerRef, thumbStartInputRef, thumbEndInputRef, handlePointerStart, handlePointerMove, handlePointerEnd, getInputProps } = (0, _useSlider.useSlider)(restProps);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: (0, _classNames.classNames)("tgui-717c3649db8d5af2", platform === 'ios' && "tgui-d2e2a2e28ef0f746", disabled && "tgui-c591a831de13ba23", className),
        children: [
            (0, _node.hasReactNode)(before) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-6598607160233201",
                children: before
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Touch.Touch, _object_spread_props._(_object_spread._({}, containerProps), {
                className: "tgui-35faba867393ce37",
                onStart: disabled ? undefined : handlePointerStart,
                onMove: disabled ? undefined : handlePointerMove,
                onEnd: disabled ? undefined : handlePointerEnd,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-e11a455378c63b15",
                        children: steps !== undefined && /*#__PURE__*/ (0, _jsxruntime.jsx)(_SliderSteps.SliderSteps, {
                            steps: steps
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-4de4feff2dcc975c",
                        style: multiple ? {
                            left: `${startValueInPercent}%`,
                            right: `${100 - endReversedValueInPercent}%`
                        } : {
                            width: `${startValueInPercent}%`
                        }
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        ref: thumbsContainerRef,
                        className: "tgui-7fe9f0fbc9771947",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_SliderThumb.SliderThumb, {
                                "data-type": "start",
                                ref: thumbStartInputRef,
                                style: {
                                    left: `${startValueInPercent}%`,
                                    zIndex: multiple && startValueInPercent >= 50 ? 3 : undefined
                                },
                                inputProps: getInputProps(false)
                            }),
                            multiple && /*#__PURE__*/ (0, _jsxruntime.jsx)(_SliderThumb.SliderThumb, {
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
            (0, _node.hasReactNode)(after) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-a56564bcfd4b56e5",
                children: after
            })
        ]
    });
};

//# sourceMappingURL=Slider.js.map