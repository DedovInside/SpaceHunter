export type ValuesOfObject<T> = T[keyof T];
export declare const Keys: {
    readonly ENTER: "Enter";
    readonly SPACE: "Space";
    readonly TAB: "Tab";
    readonly ESCAPE: "Escape";
    readonly HOME: "Home";
    readonly END: "End";
    readonly BACKSPACE: "Backspace";
    readonly ARROW_LEFT: "ArrowLeft";
    readonly ARROW_RIGHT: "ArrowRight";
    readonly ARROW_UP: "ArrowUp";
    readonly ARROW_DOWN: "ArrowDown";
    readonly PAGE_UP: "PageUp";
    readonly PAGE_DOWN: "PageDown";
};
export type KeysValues = ValuesOfObject<typeof Keys>;
export declare const getHorizontalSideByKey: (keys: Extract<KeysValues, 'ArrowUp' | 'ArrowLeft' | 'ArrowDown' | 'ArrowRight'>) => "left" | "right" | undefined;
//# sourceMappingURL=accessibility.d.ts.map