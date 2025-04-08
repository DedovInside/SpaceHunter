import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clamp } from "../../../helpers/math";
import { useCustomEnsuredControl } from "../../../hooks/useEnsureControl";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
import { IconStar } from "./icons/star";
const MINIMUM_PRECISION = 0.1;
/**
 * Renders a customizable rating component, allowing users to provide a rating by selecting a value using icons (e.g., stars).
 * Supports fractional ratings through precision control and allows for custom rating icon components.
 */ export const Rating = ({ precision = 1, max = 5, onChange, value: valueProp = 0, IconContainer = IconStar })=>{
    const [value, setValue] = useCustomEnsuredControl({
        defaultValue: valueProp,
        onChange
    });
    const normalizedPrecision = clamp(precision, MINIMUM_PRECISION, 1);
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
    return /*#__PURE__*/ _jsxs("label", {
        className: "tgui-0487bdb4329cd879",
        onChange: onChangeLabel,
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, {
                Component: "input",
                name: "rating",
                type: "radio",
                value: 0
            }),
            keys.map((key)=>{
                const elementsWithPrecision = Math.floor(1 / normalizedPrecision);
                const elements = Array.from(Array(elementsWithPrecision).keys());
                const pickedElementWidth = getPickedElementWidth(key + 1);
                return /*#__PURE__*/ _jsxs("label", {
                    className: "tgui-6169bc2e9d6fdeb8",
                    children: [
                        pickedElementWidth !== undefined && /*#__PURE__*/ _jsx(IconContainer, {
                            className: "tgui-f0faaa15f44569ba",
                            style: {
                                width: `${pickedElementWidth * 100}%`
                            }
                        }, "star-picked"),
                        /*#__PURE__*/ _jsx(IconContainer, {}, "star"),
                        elements.map((element)=>/*#__PURE__*/ _jsx("input", {
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