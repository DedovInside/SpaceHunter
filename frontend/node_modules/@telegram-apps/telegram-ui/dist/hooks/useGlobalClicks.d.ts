import { RefObject } from 'react';
/**
 * Function helps to handle global clicks outside the given refs
 * If the click is outside the given refs, the callback will be called
 */
export declare const useGlobalClicks: <T extends RefObject<ElementType> | null | undefined, ElementType extends Element = Element>(callback: (event: MouseEvent) => void, ...refs: T[]) => void;
//# sourceMappingURL=useGlobalClicks.d.ts.map