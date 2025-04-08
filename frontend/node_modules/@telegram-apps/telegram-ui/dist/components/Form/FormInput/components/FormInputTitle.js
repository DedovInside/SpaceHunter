'use client';
import { _ as _extends } from "@swc/helpers/_/_extends";
import { _ as _object_destructuring_empty } from "@swc/helpers/_/_object_destructuring_empty";
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { jsx as _jsx } from "react/jsx-runtime";
import { usePlatform } from "../../../../hooks/usePlatform";
import { Caption } from "../../../Typography/Caption/Caption";
import { Subheadline } from "../../../Typography/Subheadline/Subheadline";
export const FormInputTitle = (_param)=>{
    var restProps = _extends({}, _object_destructuring_empty(_param));
    const platform = usePlatform();
    if (platform === 'ios') {
        return /*#__PURE__*/ _jsx(Caption, _object_spread({
            caps: true
        }, restProps));
    }
    return /*#__PURE__*/ _jsx(Subheadline, _object_spread({
        level: "2",
        weight: "2"
    }, restProps));
};

//# sourceMappingURL=FormInputTitle.js.map