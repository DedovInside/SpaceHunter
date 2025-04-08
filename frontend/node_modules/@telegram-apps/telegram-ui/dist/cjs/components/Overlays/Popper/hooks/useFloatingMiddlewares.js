"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useFloatingMiddlewares", {
    enumerable: true,
    get: function() {
        return useFloatingMiddlewares;
    }
});
const _react = require("react");
const _reactdom = require("@floating-ui/react-dom");
const _alignment = require("./helpers/alignment");
const useFloatingMiddlewares = ({ placement = 'bottom-start', arrowRef = null, withArrow, arrowHeight, arrowPadding, sameWidth, offsetByMainAxis = 0, offsetByCrossAxis = 0, customMiddlewares })=>{
    return (0, _react.useMemo)(()=>{
        const isNotAutoPlaced = (0, _alignment.isNotAutoPlacement)(placement);
        const middlewares = [
            (0, _reactdom.offset)({
                crossAxis: offsetByCrossAxis,
                mainAxis: withArrow && arrowHeight ? offsetByMainAxis + arrowHeight : offsetByMainAxis
            })
        ];
        if (isNotAutoPlaced) {
            middlewares.push((0, _reactdom.flip)({
                fallbackAxisSideDirection: 'start'
            }));
        } else {
            middlewares.push((0, _reactdom.autoPlacement)({
                alignment: (0, _alignment.getAutoPlacementAlignment)(placement)
            }));
        }
        middlewares.push((0, _reactdom.shift)());
        if (sameWidth) {
            middlewares.push((0, _reactdom.size)({
                apply ({ rects, elements }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`
                    });
                }
            }));
        }
        if (customMiddlewares) {
            middlewares.push(...customMiddlewares);
        }
        if (withArrow) {
            middlewares.push((0, _reactdom.arrow)({
                element: arrowRef,
                padding: arrowPadding
            }));
        }
        return {
            middlewares,
            strictPlacement: isNotAutoPlaced ? placement : undefined
        };
    }, [
        offsetByCrossAxis,
        arrowRef,
        withArrow,
        arrowHeight,
        arrowPadding,
        offsetByMainAxis,
        sameWidth,
        customMiddlewares,
        placement
    ]);
};

//# sourceMappingURL=useFloatingMiddlewares.js.map