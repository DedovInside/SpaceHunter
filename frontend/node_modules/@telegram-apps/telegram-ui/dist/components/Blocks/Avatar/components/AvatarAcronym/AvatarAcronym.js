import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { Caption } from "../../../../Typography/Caption/Caption";
import { Headline } from "../../../../Typography/Headline/Headline";
import { LargeTitle } from "../../../../Typography/LargeTitle/LargeTitle";
import { Title } from "../../../../Typography/Title/Title";
export const AvatarAcronym = (_param)=>{
    var { size } = _param, restProps = _object_without_properties(_param, [
        "size"
    ]);
    if (!size) {
        return null;
    }
    if (size <= 28) {
        return /*#__PURE__*/ _jsx(Caption, _object_spread({
            level: size <= 24 ? '2' : '1',
            weight: "1",
            caps: true
        }, restProps));
    }
    if (size === 40) {
        return /*#__PURE__*/ _jsx(Headline, _object_spread({
            weight: "2",
            caps: true
        }, restProps));
    }
    if (size === 48) {
        return /*#__PURE__*/ _jsx(Title, _object_spread({
            weight: "1",
            level: "3",
            caps: true
        }, restProps));
    }
    return /*#__PURE__*/ _jsx(LargeTitle, _object_spread({
        weight: "1",
        caps: true
    }, restProps));
};

//# sourceMappingURL=AvatarAcronym.js.map