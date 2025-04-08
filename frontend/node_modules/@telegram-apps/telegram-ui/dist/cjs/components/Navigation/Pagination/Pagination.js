"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Pagination", {
    enumerable: true,
    get: function() {
        return Pagination;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _chevron_left = require("../../../icons/24/chevron_left");
const _chevron_right = require("../../../icons/24/chevron_right");
const _Headline = require("../../Typography/Headline/Headline");
const _enum = require("./hooks/enum");
const _usePagination = require("./hooks/usePagination");
const Pagination = (_param)=>{
    var { boundaryCount, count, defaultPage, hideNextButton, hidePrevButton, onChange, page, disabled, siblingCount, className } = _param, restProps = _object_without_properties._(_param, [
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
    const paginationItems = (0, _usePagination.usePagination)({
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
            case _enum.PaginationType.Previous:
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_chevron_left.Icon24ChevronLeft, {
                    className: "tgui-2636b28cb21c42cc"
                });
            case _enum.PaginationType.Next:
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_chevron_right.Icon24ChevronRight, {
                    className: "tgui-2636b28cb21c42cc"
                });
            case _enum.PaginationType.StartEllipsis:
            case _enum.PaginationType.EndEllipsis:
                return '...';
            default:
                return item.page;
        }
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        role: "tablist",
        className: (0, _classNames.classNames)("tgui-38580a5c868cecc4", disabled && "tgui-645f8efe8c9c3cc5", className),
        "aria-disabled": disabled
    }, restProps), {
        children: paginationItems.map((item)=>{
            const isEllipsis = [
                _enum.PaginationType.StartEllipsis,
                _enum.PaginationType.EndEllipsis
            ].includes(item.type);
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Headline.Headline, {
                Component: isEllipsis ? 'div' : 'button',
                weight: "2",
                className: (0, _classNames.classNames)("tgui-8dab5cf704c88e82", {
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