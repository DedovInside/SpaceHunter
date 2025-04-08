"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Title", {
    enumerable: true,
    get: function() {
        return Title;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _Typography = require("../Typography");
const titleLevelTags = {
    '1': 'h2',
    '2': 'h3',
    '3': 'h4'
};
const titleLevelStyles = {
    '1': "tgui-2fc52ee93e8068a6",
    '2': "tgui-72c2a480384c4fb1",
    '3': "tgui-45c5f45d3e9105f4"
};
const Title = (_param)=>{
    var { level = '2', className, Component } = _param, restProps = _object_without_properties._(_param, [
        "level",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Typography.Typography, _object_spread_props._(_object_spread._({}, restProps), {
        className: (0, _classNames.classNames)("tgui-da537051a4a87aec", titleLevelStyles[level], className),
        Component: Component || titleLevelTags[level]
    }));
};

//# sourceMappingURL=Title.js.map