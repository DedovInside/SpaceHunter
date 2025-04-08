"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Rating", {
    enumerable: true,
    get: function() {
        return Rating;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _math = require("../../../helpers/math");
const _useEnsureControl = require("../../../hooks/useEnsureControl");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const _star = require("./icons/star");
const MINIMUM_PRECISION = 0.1;
const Rating = ({ precision = 1, max = 5, onChange, value: valueProp = 0, IconContainer = _star.IconStar })=>{
    const [value, setValue] = (0, _useEnsureControl.useCustomEnsuredControl)({
        defaultValue: valueProp,
        onChange
    });
    const normalizedPrecision = (0, _math.clamp)(precision, MINIMUM_PRECISION, 1);
    const onChangeLabel = (event)=>{
        const { target } = event;
        if (target instanceof HTMLInputElement) {
            setValue(parseFloat(target.value));
        }
    };
    const getPickedElementWidth = (elementNumber)=>{
        if (elementNumber <= value) {
            return 1;
        }
        const valueRange = elementNumber - value;
        if (valueRange > 0 && valueRange < 1) {
            return 1 - valueRange;
        }
        return undefined;
    };
    const keys = Array.from(Array(max).keys());
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
        className: "tgui-0487bdb4329cd879",
        onChange: onChangeLabel,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, {
                Component: "input",
                name: "rating",
                type: "radio",
                value: 0
            }),
            keys.map((key)=>{
                const elementsWithPrecision = Math.floor(1 / normalizedPrecision);
                const elements = Array.from(Array(elementsWithPrecision).keys());
                const pickedElementWidth = getPickedElementWidth(key + 1);
                return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
                    className: "tgui-6169bc2e9d6fdeb8",
                    children: [
                        pickedElementWidth !== undefined && /*#__PURE__*/ (0, _jsxruntime.jsx)(IconContainer, {
                            className: "tgui-f0faaa15f44569ba",
                            style: {
                                width: `${pickedElementWidth * 100}%`
                            }
                        }, "star-picked"),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(IconContainer, {}, "star"),
                        elements.map((element)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("input", {
                                type: "radio",
                                value: (key + (element + 1) * normalizedPrecision).toFixed(1),
                                name: "rating",
                                style: {
                                    width: `${normalizedPrecision * 100}%`,
                                    left: `${element * normalizedPrecision * 100}%`
                                },
                                className: "tgui-52ba7059852e9950"
                            }, element))
                    ]
                }, key);
            })
        ]
    });
};

//# sourceMappingURL=Rating.js.map