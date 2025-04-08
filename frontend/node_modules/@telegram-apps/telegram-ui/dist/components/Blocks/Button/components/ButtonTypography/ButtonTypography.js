import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
import { Text } from "../../../../Typography/Text/Text";
export const ButtonTypography = (_param)=>{
    var { size } = _param, restProps = _object_without_properties(_param, [
        "size"
    ]);
    if (size === 'l') {
        return /*#__PURE__*/ _jsx(Text, _object_spread({
            weight: "2"
        }, restProps));
    }
    return /*#__PURE__*/ _jsx(Subheadline, _object_spread({
        level: "2",
        weight: "2"
    }, restProps));
};

//# sourceMappingURL=ButtonTypography.js.map