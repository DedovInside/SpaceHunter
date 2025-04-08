type ControlTypes = 'text' | null;
export declare const setControlsTypes: (controls: string[], type: ControlTypes) => Record<string, {
    control: {
        type: ControlTypes;
    };
}>;
export declare const hideControls: (...controls: string[]) => Record<string, {
    control: {
        type: ControlTypes;
    };
}>;
export declare const textControl: {
    type: string;
};
export declare const hiddenControl: {
    type: null;
};
export {};
//# sourceMappingURL=controls.d.ts.map