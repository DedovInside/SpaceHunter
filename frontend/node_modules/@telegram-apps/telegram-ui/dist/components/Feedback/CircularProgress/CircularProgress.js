import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getCircleAttributes } from "./helpers/getCircleAttributes";
/**
 * Renders a circular progress indicator, useful for displaying loading states or progress metrics.
 * The component dynamically adjusts its size and stroke based on the provided `size` prop and visually represents
 * the `progress` prop as a percentage of the circle's circumference.
 */ export const CircularProgress = ({ size = 'medium', progress = 0 })=>{
    const circleAttributes = getCircleAttributes(size);
    if (!circleAttributes) {
        return null;
    }
    const circumference = 2 * Math.PI * circleAttributes.radius;
    const circleSize = circleAttributes.size / 2;
    return /*#__PURE__*/ _jsxs("svg", {
        className: "tgui-81a5164cd16c05d5",
        width: circleAttributes.size,
        height: circleAttributes.size,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: circleSize,
                cy: circleSize,
                r: circleAttributes.radius,
                strokeOpacity: ".1",
                strokeWidth: circleAttributes.strokeWidth,
                fill: "none"
            }),
            /*#__PURE__*/ _jsx("circle", {
                fill: "none",
                cx: circleSize,
                cy: circleSize,
                r: circleAttributes.radius,
                strokeWidth: circleAttributes.strokeWidth,
                strokeLinecap: "round",
                strokeDasharray: circumference,
                strokeDashoffset: circumference * ((100 - progress) / 100)
            })
        ]
    });
};

//# sourceMappingURL=CircularProgress.js.map