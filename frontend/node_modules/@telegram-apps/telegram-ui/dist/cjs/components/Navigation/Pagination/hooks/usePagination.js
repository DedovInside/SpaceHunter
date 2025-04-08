'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "usePagination", {
    enumerable: true,
    get: function() {
        return usePagination;
    }
});
const _array = require("../../../../helpers/array");
const _useEnsureControl = require("../../../../hooks/useEnsureControl");
const _enum = require("./enum");
const usePagination = ({ boundaryCount = 1, count = 1, defaultPage = 1, hideNextButton = false, hidePrevButton = false, onChange, page: pageProp, siblingCount = 1 })=>{
    const [page, setPageState] = (0, _useEnsureControl.useCustomEnsuredControl)({
        value: pageProp,
        defaultValue: defaultPage
    });
    const handleClick = (event, value)=>{
        if (!pageProp) {
            setPageState(value);
        }
        if (onChange) {
            onChange(event, value);
        }
    };
    const startPages = (0, _array.range)(1, Math.min(boundaryCount, count));
    const endPages = (0, _array.range)(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
    const siblingsStart = Math.max(Math.min(// Natural start
    page - siblingCount, // Lower boundary when page is high
    count - boundaryCount - siblingCount * 2 - 1), // Greater than startPages
    boundaryCount + 2);
    const siblingsEnd = Math.min(Math.max(// Natural end
    page + siblingCount, // Upper boundary when page is low
    boundaryCount + siblingCount * 2 + 2), // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1);
    // Basic list of items to render
    // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
    const itemList = [
        ...hidePrevButton ? [] : [
            _enum.PaginationType.Previous
        ],
        ...startPages,
        // Start ellipsis
        // eslint-disable-next-line no-nested-ternary
        ...siblingsStart > boundaryCount + 2 ? [
            _enum.PaginationType.StartEllipsis
        ] : boundaryCount + 1 < count - boundaryCount ? [
            boundaryCount + 1
        ] : [],
        // Sibling pages
        ...(0, _array.range)(siblingsStart, siblingsEnd),
        // End ellipsis
        // eslint-disable-next-line no-nested-ternary
        ...siblingsEnd < count - boundaryCount - 1 ? [
            _enum.PaginationType.EndEllipsis
        ] : count - boundaryCount > boundaryCount ? [
            count - boundaryCount
        ] : [],
        ...endPages,
        ...hideNextButton ? [] : [
            _enum.PaginationType.Next
        ]
    ];
    // Map the button type to its page number
    const buttonPage = (type)=>{
        switch(type){
            case 'previous':
                return page - 1;
            case 'next':
                return page + 1;
            default:
                return null;
        }
    };
    return itemList.map((typeOrPageNumber)=>{
        if (typeof typeOrPageNumber === 'number') {
            return {
                onClick: (event)=>handleClick(event, typeOrPageNumber),
                type: _enum.PaginationType.Page,
                page: typeOrPageNumber,
                selected: typeOrPageNumber === page,
                disabled: false,
                'aria-current': typeOrPageNumber === page ? 'true' : undefined
            };
        }
        return {
            onClick: (event)=>handleClick(event, buttonPage(typeOrPageNumber) || 0),
            type: typeOrPageNumber,
            page: buttonPage(typeOrPageNumber),
            selected: false,
            disabled: ![
                _enum.PaginationType.StartEllipsis,
                _enum.PaginationType.EndEllipsis
            ].includes(typeOrPageNumber) && (typeOrPageNumber === _enum.PaginationType.Next ? page >= count : page <= 1)
        };
    });
};

//# sourceMappingURL=usePagination.js.map