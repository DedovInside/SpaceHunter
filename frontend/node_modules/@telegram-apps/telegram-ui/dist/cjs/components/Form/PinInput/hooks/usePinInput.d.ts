interface UsePinInputProps {
    pinCount: number;
    value?: number[];
    onChange?(value: number[]): void;
}
export declare const AVAILABLE_PINS: (number | "Backspace")[];
export declare const usePinInput: ({ pinCount, value: valueProp, onChange, }: UsePinInputProps) => {
    value: number[];
    setInputRefByIndex: (index: number, ref: HTMLLabelElement | null) => void;
    handleClickValue: (enteredValue: number) => void;
    handleClickBackspace: () => void;
    handleButton: (index: number, button: string) => void;
};
export {};
//# sourceMappingURL=usePinInput.d.ts.map