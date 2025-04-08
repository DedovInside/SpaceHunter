"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "renderOptionDefault", {
    enumerable: true,
    get: function() {
        return renderOptionDefault;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _jsxruntime = require("react/jsx-runtime");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _select = require("../../../../../icons/20/select");
const _select_ios = require("../../../../../icons/20/select_ios");
const _Cell = require("../../../../Blocks/Cell/Cell");
const renderOptionDefault = (props)=>{
    const platform = (0, _usePlatform.usePlatform)();
    const SelectedIcon = platform === 'ios' ? _select_ios.Icon20SelectIOS : _select.Icon20Select;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Cell.Cell, _object_spread_props._(_object_spread._({}, props), {
        after: props.selected ? /*#__PURE__*/ (0, _jsxruntime.jsx)(SelectedIcon, {
            className: "tgui-e3f4e376df0c272c"
        }) : undefined
    }));
};

//# sourceMappingURL=constants.js.map