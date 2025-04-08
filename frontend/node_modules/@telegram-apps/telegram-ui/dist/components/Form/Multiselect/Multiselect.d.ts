import { InputHTMLAttributes } from 'react';
import { FormPublicProps } from '../../../components/Form/FormInput/FormInput';
import { MultiselectBaseProps } from './components/MultiselectBase/MultiselectBase';
import { MultiselectDropdownProps } from './components/MultiselectDropdown/MultiselectDropdown';
import { UseMultiselectProps } from './hooks/useMultiselect';
import { MultiselectOption } from './types';
export interface MultiselectProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'>, Omit<FormPublicProps, 'after'>, Pick<MultiselectDropdownProps, 'closeDropdownAfterSelect' | 'renderOption'>, Pick<UseMultiselectProps, 'value' | 'defaultValue' | 'onChange' | 'filterFn' | 'onInputChange' | 'inputValue' | 'selectedBehavior' | 'emptyText' | 'creatable'>, Pick<MultiselectBaseProps, 'renderChip'> {
    /**
     * The `options` property defines the available options within the multiselect dropdown.
     * Each option is represented as an object conforming to the `MultiselectOption` structure,
     * which typically includes properties like `value` (the option's value) and `label` (the human-readable text associated with the option).
     */
    options: MultiselectOption[];
}
/**
 * A comprehensive component for rendering a multiselect input field with customizable options, dropdown behaviors, and chip display.
 * It integrates functionality for selecting multiple options, searching, and even creating new options based on user input.
 */
export declare const Multiselect: import("react").ForwardRefExoticComponent<MultiselectProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Multiselect.d.ts.map