import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Children } from "react";
import { classNames } from "../../../helpers/classNames";
import { Icon16Chevron } from "../../../icons/16/chevron";
import { BreadCrumbsItem } from "./components/BreadCrumbsItem/BreadCrumbsItem";
import { IconDot } from "./icons/dot";
import { IconSlash } from "./icons/slash";
/**
 * The Breadcrumbs component displays a navigation trail for users to follow back to the starting or entry point.
 * It supports customizable dividers to fit different design needs.
 */ export const Breadcrumbs = ({ divider = 'dot', className, children })=>/*#__PURE__*/ _jsx("div", {
        className: classNames("tgui-68fc52f1068b8e16", className),
        children: Children.map(children, (child, index)=>/*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    child,
                    index !== Children.count(children) - 1 && /*#__PURE__*/ _jsxs("div", {
                        className: "tgui-0eddcd83377979c2",
                        children: [
                            divider === 'dot' && /*#__PURE__*/ _jsx(IconDot, {}),
                            divider === 'slash' && /*#__PURE__*/ _jsx(IconSlash, {}),
                            divider === 'chevron' && /*#__PURE__*/ _jsx(Icon16Chevron, {
                                className: "tgui-a9c3d618b6e43d64"
                            })
                        ]
                    })
                ]
            }))
    });
Breadcrumbs.Item = BreadCrumbsItem;

//# sourceMappingURL=Breadcrumbs.js.map