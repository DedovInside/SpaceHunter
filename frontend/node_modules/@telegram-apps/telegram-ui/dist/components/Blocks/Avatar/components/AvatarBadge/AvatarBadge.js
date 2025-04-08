import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { Badge } from "../../../Badge/Badge";
export const AvatarBadge = (_param)=>{
    var { type, className } = _param, restProps = _object_without_properties(_param, [
        "type",
        "className"
    ]);
    if (type !== 'number') {
        throw new Error('[ImageBadge]: Component supports only type="number"');
    }
    return /*#__PURE__*/ _jsx(Badge, _object_spread({
        type: "number",
        className: classNames("tgui-54214e0db34f53c3", className)
    }, restProps));
};

//# sourceMappingURL=AvatarBadge.js.map