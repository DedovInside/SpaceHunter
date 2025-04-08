"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Skeleton", {
    enumerable: true,
    get: function() {
        return Skeleton;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const Skeleton = (_param)=>{
    var { withoutAnimation, visible, className, children } = _param, restProps = _object_without_properties._(_param, [
        "withoutAnimation",
        "visible",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-97f2df57786b02dc", visible && "tgui-3eb6091f664c15d6", withoutAnimation && "tgui-ecf101b3117a96c8", className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=Skeleton.js.map