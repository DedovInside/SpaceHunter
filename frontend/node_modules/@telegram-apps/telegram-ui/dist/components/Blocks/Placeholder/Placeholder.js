import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { hasReactNode } from "../../../helpers/react/node";
import { Text } from "../../Typography/Text/Text";
import { Title } from "../../Typography/Title/Title";
/** A versatile component designed to display a placeholder with optional text, images, and actions. */ export const Placeholder = (_param)=>{
    var { children, header, description, className, action } = _param, restProps = _object_without_properties(_param, [
        "children",
        "header",
        "description",
        "className",
        "action"
    ]);
    const hasHeader = hasReactNode(header);
    const hasDescription = hasReactNode(description);
    return /*#__PURE__*/ _jsxs("section", _object_spread_props(_object_spread({
        className: classNames("tgui-e5c3a5b87f8b1f46", className)
    }, restProps), {
        children: [
            hasReactNode(children) && children,
            (hasHeader || hasDescription) && /*#__PURE__*/ _jsxs("dl", {
                className: "tgui-9c3dbc0ef84585d4",
                children: [
                    hasHeader && /*#__PURE__*/ _jsx(Title, {
                        Component: "dt",
                        level: "3",
                        weight: "2",
                        children: header
                    }),
                    hasDescription && /*#__PURE__*/ _jsx(Text, {
                        className: "tgui-87cd6af55f73428d",
                        Component: "dd",
                        children: description
                    })
                ]
            }),
            hasReactNode(action) && action
        ]
    }));
};

//# sourceMappingURL=Placeholder.js.map