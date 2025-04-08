import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { CompactPaginationItem } from "./components/CompactPaginationItem/CompactPaginationItem";
const modeStyles = {
    default: undefined,
    ambient: "tgui-15adbef8fe5efed9",
    white: "tgui-cdc228e9d92dac5b"
};
/**
 * Displays a compact set of pagination controls. This component allows users to navigate
 * between pages of content. It supports several themes for customization and can fit within various UI designs.
 */ export const CompactPagination = (_param)=>{
    var { mode = 'default', children, className } = _param, restProps = _object_without_properties(_param, [
        "mode",
        "children",
        "className"
    ]);
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        role: "tablist",
        className: classNames("tgui-442a9579d6c19dc4", modeStyles[mode], className)
    }, restProps), {
        children: children
    }));
};
CompactPagination.Item = CompactPaginationItem;

//# sourceMappingURL=CompactPagination.js.map