import { CSSProperties } from 'react';
import { Placement } from '@floating-ui/react-dom';
export type Coords = {
    x?: number;
    y?: number;
};
export declare const getArrowPositionData: (placement: Placement, coords?: Coords, offset?: number, isStaticOffset?: boolean) => [undefined | 'right' | 'bottom' | 'left', CSSProperties];
//# sourceMappingURL=getArrowPositionData.d.ts.map