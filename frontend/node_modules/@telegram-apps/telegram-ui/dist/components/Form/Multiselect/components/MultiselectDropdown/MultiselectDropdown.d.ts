import { ForwardRefExoticComponent, MouseEvent, RefAttributes, RefObject } from 'react';
import { CellProps } from '../../../../../components/Blocks/Cell/Cell';
import { MultiselectOption } from '../../../../../components/Form/Multiselect/types';
import { UseMultiselectProps } from '../../hooks/useMultiselect';
export interface MultiselectDropdownProps extends Required<Pick<UseMultiselectProps, 'options' | 'value'>> {
    /** Array of selected options. */
    value: MultiselectOption[];
    /** Reference to the target element the dropdown is associated with. */
    targetRef: RefObject<HTMLElement>;
    /** Accessibility ID for the dropdown. */
    dropdownAriaId: string;
    /** Currently focused option within the dropdown. */
    focusedOption: MultiselectOption | null;
    /** Function to register a DOM node with an option index. */
    setOptionNode: (index: number, node: HTMLElement) => void;
    /** Function to control the open state of the dropdown. */
    setOpened: (opened: boolean) => void;
    /** Index of the currently focused option. */
    focusedOptionIndex: number | null;
    /** Function to update the index of the focused option. */
    setFocusedOptionIndex: (index: number) => void;
    /** Function to add an option derived from the input value. */
    addOptionFromInput: () => void;
    /** Mouse leave event handler for the dropdown. */
    onMouseLeave: (event: MouseEvent<HTMLDivElement>) => void;
    /** Function to add a selected option. */
    addOption: (option: MultiselectOption) => void;
    /** Function to clear the input value. */
    clearInput: () => void;
    /** Custom render function for each option. Defaults to a basic implementation. */
    renderOption?: ForwardRefExoticComponent<CellProps & RefAttributes<unknown>>;
    /** Whether to close the dropdown after selecting an option. */
    closeDropdownAfterSelect?: boolean;
}
/**
 * Renders the dropdown menu for the multiselect input, including all options and managing interactions such as selection, focus, and mouse events.
 * Utilizes the `Popper` component for positioning relative to the input field.
 */
export declare const MultiselectDropdown: ForwardRefExoticComponent<MultiselectDropdownProps & RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=MultiselectDropdown.d.ts.map