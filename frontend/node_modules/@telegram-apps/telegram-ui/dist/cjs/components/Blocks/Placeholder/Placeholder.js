"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Placeholder", {
    enumerable: true,
    get: function() {
        return Placeholder;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _Text = require("../../Typography/Text/Text");
const _Title = require("../../Typography/Title/Title");
const Placeholder = (_param)=>{
    var { children, header, description, className, action } = _param, restProps = _object_without_properties._(_param, [
        "children",
        "header",
        "description",
        "className",
        "action"
    ]);
    const hasHeader = (0, _node.hasReactNode)(header);
    const hasDescription = (0, _node.hasReactNode)(description);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("section", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-e5c3a5b87f8b1f46", className)
    }, restProps), {
        children: [
            (0, _node.hasReactNode)(children) && children,
            (hasHeader || hasDescription) && /*#__PURE__*/ (0, _jsxruntime.jsxs)("dl", {
                className: "tgui-9c3dbc0ef84585d4",
                children: [
                    hasHeader && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Title.Title, {
                        Component: "dt",
                        level: "3",
                        weight: "2",
                        children: header
                    }),
                    hasDescription && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, {
                        className: "tgui-87cd6af55f73428d",
                        Component: "dd",
                        children: description
                    })
                ]
            }),
            (0, _node.hasReactNode)(action) && action
        ]
    }));
};

//# sourceMappingURL=Placeholder.js.map