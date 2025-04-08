'use client';
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
export const SliderSteps = ({ steps })=>{
    const platform = usePlatform();
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: steps.map(({ isPassed, XCoordinate })=>/*#__PURE__*/ _jsx("div", {
                className: classNames("tgui-b632646f586ff14d", {
                    ["tgui-7951a89b824476b3"]: platform === 'ios',
                    ["tgui-2b0a006b5a9ffd68"]: isPassed
                }),
                style: {
                    left: `${XCoordinate}%`
                }
            }, XCoordinate))
    });
};

//# sourceMappingURL=SliderSteps.js.map