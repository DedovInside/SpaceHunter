'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Section", {
    enumerable: true,
    get: function() {
        return Section;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _Divider = require("../../Misc/Divider/Divider");
const _SectionFooter = require("./components/SectionFooter/SectionFooter");
const _SectionHeader = require("./components/SectionHeader/SectionHeader");
const Section = (_param)=>{
    var { header, footer, className, children } = _param, restProps = _object_without_properties._(_param, [
        "header",
        "footer",
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const headerWithWrapper = (0, _node.isPrimitiveReactNode)(header) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_SectionHeader.SectionHeader, {
        children: header
    }) : header;
    const footerWithWrapper = (0, _node.isPrimitiveReactNode)(footer) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_SectionFooter.SectionFooter, {
        children: footer
    }) : footer;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("section", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-3dfa44f9f78f9a22", platform === 'base' && "tgui-8e15431b81f6601e", platform === 'ios' && "tgui-97eca24324122dbc", className)
    }, restProps), {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "tgui-db9be63c4fecf79b",
                children: [
                    headerWithWrapper,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-4b78bed6e925088e",
                        children: _react.Children.map(children, (child, index)=>/*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                children: [
                                    child,
                                    index < _react.Children.count(children) - 1 && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Divider.Divider, {
                                        className: "tgui-a6d406c4dc060899"
                                    })
                                ]
                            }))
                    })
                ]
            }),
            footerWithWrapper
        ]
    }));
};
Section.Header = _SectionHeader.SectionHeader;
Section.Footer = _SectionFooter.SectionFooter;

//# sourceMappingURL=Section.js.map