"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AvatarBadge", {
    enumerable: true,
    get: function() {
        return AvatarBadge;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _Badge = require("../../../Badge/Badge");
const AvatarBadge = (_param)=>{
    var { type, className } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "className"
    ]);
    if (type !== 'number') {
        throw new Error('[ImageBadge]: Component supports only type="number"');
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Badge.Badge, _object_spread._({
        type: "number",
        className: (0, _classNames.classNames)("tgui-54214e0db34f53c3", className)
    }, restProps));
};

//# sourceMappingURL=AvatarBadge.js.map