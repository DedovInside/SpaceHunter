import type { InternalDraggingType, InternalValueState } from '../types';
export declare const updateInternalStateValue: (currentState: InternalValueState, newValue: number, minValue: number, maxValue: number, draggingType: InternalDraggingType | null) => InternalValueState;
export declare const updateInternalStateByNativeChange: (currentState: InternalValueState, newValue: number, draggingType: InternalDraggingType | null) => InternalValueState;
export declare const isMultipleValues: (value: InternalValueState) => value is [number, number];
export declare const determineSnapDirection: (currentValues: InternalValueState, newValue: number, draggingType: InternalDraggingType | null) => InternalDraggingType | null;
//# sourceMappingURL=state.d.ts.map