import { jsx as _jsx } from "react/jsx-runtime";
import { IconLarge } from "./icons/large";
import { IconMedium } from "./icons/medium";
import { IconSmall } from "./icons/small";
export const IOSSpinner = ({ size })=>{
    switch(size){
        case 'l':
            return /*#__PURE__*/ _jsx(IconLarge, {});
        case 'm':
            return /*#__PURE__*/ _jsx(IconMedium, {});
        default:
            return /*#__PURE__*/ _jsx(IconSmall, {});
    }
};

//# sourceMappingURL=IOSSpinner.js.map