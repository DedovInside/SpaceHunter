'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Children } from "react";
import { classNames } from "../../../helpers/classNames";
import { isPrimitiveReactNode } from "../../../helpers/react/node";
import { usePlatform } from "../../../hooks/usePlatform";
import { Divider } from "../../Misc/Divider/Divider";
import { SectionFooter } from "./components/SectionFooter/SectionFooter";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
/**
 * Organizes content into distinct sections with optional headers and footers. It automatically wraps
 * primitive header and footer content in the appropriate sub-components, and inserts dividers between
 * children when rendering multiple elements.
 */ export const Section = (_param)=>{
    var { header, footer, className, children } = _param, restProps = _object_without_properties(_param, [
        "header",
        "footer",
        "className",
        "children"
    ]);
    const platform = usePlatform();
    const headerWithWrapper = isPrimitiveReactNode(header) ? /*#__PURE__*/ _jsx(SectionHeader, {
        children: header
    }) : header;
    const footerWithWrapper = isPrimitiveReactNode(footer) ? /*#__PURE__*/ _jsx(SectionFooter, {
        children: footer
    }) : footer;
    return /*#__PURE__*/ _jsxs("section", _object_spread_props(_object_spread({
        className: classNames("tgui-3dfa44f9f78f9a22", platform === 'base' && "tgui-8e15431b81f6601e", platform === 'ios' && "tgui-97eca24324122dbc", className)
    }, restProps), {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "tgui-db9be63c4fecf79b",
                children: [
                    headerWithWrapper,
                    /*#__PURE__*/ _jsx("div", {
                        className: "tgui-4b78bed6e925088e",
                        children: Children.map(children, (child, index)=>/*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    child,
                                    index < Children.count(children) - 1 && /*#__PURE__*/ _jsx(Divider, {
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
Section.Header = SectionHeader;
Section.Footer = SectionFooter;

//# sourceMappingURL=Section.js.map