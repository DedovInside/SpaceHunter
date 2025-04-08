"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getArrowPositionData", {
    enumerable: true,
    get: function() {
        return getArrowPositionData;
    }
});
const getArrowPositionData = (placement, coords = {
    x: 0,
    y: 0
}, offset = 0, isStaticOffset = false)=>{
    const withOffset = (isVerticalPlacement)=>{
        const parsedCoords = {
            x: coords.x || 0,
            y: coords.y || 0
        };
        return isStaticOffset ? offset : parsedCoords[isVerticalPlacement ? 'y' : 'x'] + offset;
    };
    if (placement.startsWith('top')) {
        return [
            'bottom',
            {
                top: '100%',
                left: withOffset(false)
            }
        ];
    }
    if (placement.startsWith('right')) {
        return [
            'left',
            {
                top: withOffset(true),
                left: 0
            }
        ];
    }
    if (placement.startsWith('bottom')) {
        return [
            undefined,
            {
                bottom: '100%',
                left: withOffset(false)
            }
        ];
    }
    return [
        'right',
        {
            top: withOffset(true),
            right: 0
        }
    ];
};

//# sourceMappingURL=getArrowPositionData.js.map