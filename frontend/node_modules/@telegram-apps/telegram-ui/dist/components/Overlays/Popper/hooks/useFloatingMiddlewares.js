import { useMemo } from "react";
import { arrow, autoPlacement, flip, offset, shift, size } from "@floating-ui/react-dom";
import { getAutoPlacementAlignment, isNotAutoPlacement } from "./helpers/alignment";
export const useFloatingMiddlewares = ({ placement = 'bottom-start', arrowRef = null, withArrow, arrowHeight, arrowPadding, sameWidth, offsetByMainAxis = 0, offsetByCrossAxis = 0, customMiddlewares })=>{
    return useMemo(()=>{
        const isNotAutoPlaced = isNotAutoPlacement(placement);
        const middlewares = [
            offset({
                crossAxis: offsetByCrossAxis,
                mainAxis: withArrow && arrowHeight ? offsetByMainAxis + arrowHeight : offsetByMainAxis
            })
        ];
        if (isNotAutoPlaced) {
            middlewares.push(flip({
                fallbackAxisSideDirection: 'start'
            }));
        } else {
            middlewares.push(autoPlacement({
                alignment: getAutoPlacementAlignment(placement)
            }));
        }
        middlewares.push(shift());
        if (sameWidth) {
            middlewares.push(size({
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
            middlewares.push(arrow({
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