import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { Chip } from "../../../../Form/Chip/Chip";
export const CardChip = (_param)=>{
    var { className } = _param, restProps = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ _jsx(Chip, _object_spread({
        className: classNames("tgui-79efb12936705a6f", className)
    }, restProps));
};

//# sourceMappingURL=CardChip.js.map