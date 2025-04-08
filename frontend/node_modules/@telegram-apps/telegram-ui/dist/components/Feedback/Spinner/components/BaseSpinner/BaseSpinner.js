import { jsx as _jsx } from "react/jsx-runtime";
import { IconLarge } from "./icons/large";
import { IconMedium } from "./icons/medium";
import { IconSmall } from "./icons/small";
const componentBySize = {
    s: IconSmall,
    m: IconMedium,
    l: IconLarge
};
const rotateCenterBySize = {
    s: 12,
    m: 18,
    l: 22
};
export const BaseSpinner = ({ size })=>{
    const Component = componentBySize[size];
    const rotateCenter = rotateCenterBySize[size];
    return /*#__PURE__*/ _jsx(Component, {
        children: /*#__PURE__*/ _jsx("animateTransform", {
            attributeName: "transform",
            attributeType: "XML",
            type: "rotate",
            from: `0 ${rotateCenter} ${rotateCenter}`,
            to: `360 ${rotateCenter} ${rotateCenter}`,
            dur: "0.7s",
            repeatCount: "indefinite"
        })
    });
};

//# sourceMappingURL=BaseSpinner.js.map