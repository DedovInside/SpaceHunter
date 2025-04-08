import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Icon24ChevronLeft } from "../../../icons/24/chevron_left";
import { Icon24ChevronRight } from "../../../icons/24/chevron_right";
import { Headline } from "../../Typography/Headline/Headline";
import { PaginationType } from "./hooks/enum";
import { usePagination } from "./hooks/usePagination";
/**
 * The Pagination component displays a set of navigation controls allowing users to navigate through pages of content.
 * It is built on top of a custom hook that manages pagination logic and state.
 * This component can be customized to hide next/previous buttons, specify boundary and sibling count for pagination items, and handle page changes through an `onChange` callback.
 */ export const Pagination = (_param)=>{
    var { boundaryCount, count, defaultPage, hideNextButton, hidePrevButton, onChange, page, disabled, siblingCount, className } = _param, restProps = _object_without_properties(_param, [
        "boundaryCount",
        "count",
        "defaultPage",
        "hideNextButton",
        "hidePrevButton",
        "onChange",
        "page",
        "disabled",
        "siblingCount",
        "className"
    ]);
    const paginationItems = usePagination({
        boundaryCount,
        count,
        defaultPage,
        hideNextButton,
        hidePrevButton,
        onChange,
        page,
        siblingCount
    });
    const getPaginationChild = (item)=>{
        switch(item.type){
            case PaginationType.Previous:
                return /*#__PURE__*/ _jsx(Icon24ChevronLeft, {
                    className: "tgui-2636b28cb21c42cc"
                });
            case PaginationType.Next:
                return /*#__PURE__*/ _jsx(Icon24ChevronRight, {
                    className: "tgui-2636b28cb21c42cc"
                });
            case PaginationType.StartEllipsis:
            case PaginationType.EndEllipsis:
                return '...';
            default:
                return item.page;
        }
    };
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        role: "tablist",
        className: classNames("tgui-38580a5c868cecc4", disabled && "tgui-645f8efe8c9c3cc5", className),
        "aria-disabled": disabled
    }, restProps), {
        children: paginationItems.map((item)=>{
            const isEllipsis = [
                PaginationType.StartEllipsis,
                PaginationType.EndEllipsis
            ].includes(item.type);
            return /*#__PURE__*/ _jsx(Headline, {
                Component: isEllipsis ? 'div' : 'button',
                weight: "2",
                className: classNames("tgui-8dab5cf704c88e82", {
                    ["tgui-670c6b2f3c8df445"]: isEllipsis,
                    ["tgui-64016be270020f33"]: item.selected,
                    ["tgui-a43e090d3501d4ca"]: item.disabled
                }),
                "aria-disabled": item.disabled || undefined,
                "aria-current": item['aria-current'],
                onClick: item.disabled || isEllipsis ? undefined : item.onClick,
                children: getPaginationChild(item)
            }, `${item.type}${item.page}`);
        })
    }));
};

//# sourceMappingURL=Pagination.js.map