import { InputHTMLAttributes, RefObject } from 'react';
import { ChipProps } from '../../../../../components/Form/Chip/Chip';
import { MultiselectOption } from '../../../../../components/Form/Multiselect/types';
export interface MultiselectBaseProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Custom function to render Chip component. */
    renderChip?: (props: ChipProps) => JSX.Element;
    /** Ref to the input element within the multiselect base. */
    inputRef: RefObject<HTMLInputElement>;
    /** Array of selected options (chips). */
    chipsValue: MultiselectOption[];
    /** Callback function to add an option based on text input. */
    onAddChipOption: (optionText: string) => void;
    /** Callback function to remove a selected chip. */
    onRemoveChipOption: (option: MultiselectOption) => void;
}
/**
 * Renders the base layout of the multiselect including the chips (selected options) and the input field.
 */
export declare const MultiselectBase: import("react").ForwardRefExoticComponent<MultiselectBaseProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MultiselectBase.d.ts.map