import { ChangeEvent } from 'react';
import { MultiselectOption, MultiselectOptionValue } from '../types';
export interface UseMultiselectInputProps {
    /** If true, the multiselect is considered disabled and cannot be interacted with. */
    disabled?: boolean;
    /** The currently selected options. */
    value: MultiselectOption[];
    /** The default value(s) for the multiselect if `value` is uncontrolled. */
    defaultValue?: MultiselectOption[];
    /** Callback fired when the selected options change. */
    onChange?: (options: MultiselectOption[]) => void;
    /** The current value of the input field, for controlling component behavior. */
    inputValue?: string;
    /** Callback fired when the input value changes. */
    onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Hook for managing the state and interactions of a multiselect input component.
 * It handles adding and removing options, input changes, and input clearing functionalities.
 */
export declare const useMultiselectInput: ({ disabled, value: valueProp, onChange, defaultValue, inputValue: inputValueProp, onInputChange, }: UseMultiselectInputProps) => {
    value: MultiselectOption[];
    addOption: (newValue: MultiselectOption | MultiselectOptionValue) => void;
    addOptionFromInput: (inputValueToAdd: string) => void;
    removeOption: (newValue: MultiselectOption | MultiselectOptionValue) => void;
    inputRef: import("react").RefObject<HTMLInputElement>;
    inputValue: string;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    clearInput: () => void;
};
//# sourceMappingURL=useMultiselectInput.d.ts.map