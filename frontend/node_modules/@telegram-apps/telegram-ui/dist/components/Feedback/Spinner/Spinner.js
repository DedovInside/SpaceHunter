'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { BaseSpinner } from "./components/BaseSpinner/BaseSpinner";
import { IOSSpinner } from "./components/IOSSpinner/IOSSpinner";
const sizeStyles = {
    s: "tgui-421d6dab8d2c78c1",
    m: "tgui-a636342f03bb5c08",
    l: "tgui-a53583a4b6d8fde0"
};
/**
 * Provides a visual indicator for loading states across different platforms. It automatically selects
 * an appropriate spinner style based on the current platform, allowing for a consistent user experience.
 */ export const Spinner = ({ size = 'm', className })=>{
    const platform = usePlatform();
    const Component = platform === 'ios' ? IOSSpinner : BaseSpinner;
    return /*#__PURE__*/ _jsx("div", {
        role: "status",
        className: classNames("tgui-0ac8c3540e603b63", platform === 'ios' && "tgui-562a3eae646b486d", sizeStyles[size], className),
        children: /*#__PURE__*/ _jsx(Component, {
            size: size
        })
    });
};

//# sourceMappingURL=Spinner.js.map