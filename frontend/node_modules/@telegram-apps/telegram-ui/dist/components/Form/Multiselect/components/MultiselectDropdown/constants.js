import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { jsx as _jsx } from "react/jsx-runtime";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Icon20Select } from "../../../../../icons/20/select";
import { Icon20SelectIOS } from "../../../../../icons/20/select_ios";
import { Cell } from "../../../../Blocks/Cell/Cell";
export const renderOptionDefault = (props)=>{
    const platform = usePlatform();
    const SelectedIcon = platform === 'ios' ? Icon20SelectIOS : Icon20Select;
    return /*#__PURE__*/ _jsx(Cell, _object_spread_props(_object_spread({}, props), {
        after: props.selected ? /*#__PURE__*/ _jsx(SelectedIcon, {
            className: "tgui-e3f4e376df0c272c"
        }) : undefined
    }));
};

//# sourceMappingURL=constants.js.map