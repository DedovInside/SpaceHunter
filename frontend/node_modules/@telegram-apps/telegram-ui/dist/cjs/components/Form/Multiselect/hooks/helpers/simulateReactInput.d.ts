interface SimulateReactInputTargetState {
    _valueTracker?: {
        getValue(): string;
        setValue(value: string): void;
        stopTracking(): void;
    };
}
/** @see https://github.com/facebook/react/issues/11488#issuecomment-347775628 */
export declare const simulateReactInput: (target: HTMLInputElement & SimulateReactInputTargetState, nextValue?: string) => void;
export {};
//# sourceMappingURL=simulateReactInput.d.ts.map