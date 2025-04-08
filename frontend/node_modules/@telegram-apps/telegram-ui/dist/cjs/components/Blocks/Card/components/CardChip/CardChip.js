"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CardChip", {
    enumerable: true,
    get: function() {
        return CardChip;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _Chip = require("../../../../Form/Chip/Chip");
const CardChip = (_param)=>{
    var { className } = _param, restProps = _object_without_properties._(_param, [
        "className"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Chip.Chip, _object_spread._({
        className: (0, _classNames.classNames)("tgui-79efb12936705a6f", className)
    }, restProps));
};

//# sourceMappingURL=CardChip.js.map