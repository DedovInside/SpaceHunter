'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { jsx as _jsx } from "react/jsx-runtime";
import { usePlatform } from "../../../../hooks/usePlatform";
import { Caption } from "../../../Typography/Caption/Caption";
import { Subheadline } from "../../../Typography/Subheadline/Subheadline";
import { Text } from "../../../Typography/Text/Text";
export const useTypographyCellComponents = ()=>{
    const platform = usePlatform();
    const isIOS = platform === 'ios';
    const Title = (props)=>{
        if (isIOS) {
            return /*#__PURE__*/ _jsx(Text, _object_spread({}, props));
        }
        return /*#__PURE__*/ _jsx(Subheadline, _object_spread({
            level: "1"
        }, props));
    };
    const Description = (props)=>{
        if (isIOS) {
            return /*#__PURE__*/ _jsx(Caption, _object_spread({}, props));
        }
        return /*#__PURE__*/ _jsx(Subheadline, _object_spread({
            level: "2"
        }, props));
    };
    return {
        Title,
        Description
    };
};

//# sourceMappingURL=useTypographyCellComponents.js.map