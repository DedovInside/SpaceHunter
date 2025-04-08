import { HTMLAttributes } from 'react';
export interface PinInputProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    /** Text label displayed above the pin input cells. */
    label?: string;
    /** The number of pin input fields to display, with a minimum of 2. */
    pinCount?: number;
    /** The initial pin values to populate the input fields with. */
    value?: number[];
    /** Callback function triggered when the pin values change. */
    onChange?: (value: number[]) => void;
}
/**
 * Renders a set of input fields for entering pin codes with a virtual keypad for value entry and deletion.
 */
export declare const PinInput: import("react").ForwardRefExoticComponent<PinInputProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=PinInput.d.ts.map