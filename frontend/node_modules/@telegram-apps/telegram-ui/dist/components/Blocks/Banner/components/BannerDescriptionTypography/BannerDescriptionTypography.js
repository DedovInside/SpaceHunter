import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { jsx as _jsx } from "react/jsx-runtime";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Caption } from "../../../../Typography/Caption/Caption";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
export const BannerDescriptionTypography = (props)=>{
    const platform = usePlatform();
    if (platform === 'ios') {
        return /*#__PURE__*/ _jsx(Caption, _object_spread({
            level: "1"
        }, props));
    }
    return /*#__PURE__*/ _jsx(Subheadline, _object_spread({
        level: "2"
    }, props));
};

//# sourceMappingURL=BannerDescriptionTypography.js.map