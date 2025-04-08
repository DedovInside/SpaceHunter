import { ElementType, HTMLAttributes } from 'react';
import { Icon } from '../../../types/Icon';
export interface RatingProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> {
    /** The precision of the rating, determining the fraction of the star that can be selected. */
    precision?: 0.1 | 0.2 | 0.25 | 0.5 | 1;
    /** The maximum rating value, representing the number of icons displayed. */
    max?: number;
    /** The current value of the rating. */
    value?: number;
    /** Callback function invoked when the rating value changes. */
    onChange?: (value: number) => void;
    /** The component used to render the rating icons. Defaults to a star icon. */
    IconContainer?: ElementType<Icon>;
}
/**
 * Renders a customizable rating component, allowing users to provide a rating by selecting a value using icons (e.g., stars).
 * Supports fractional ratings through precision control and allows for custom rating icon components.
 */
export declare const Rating: ({ precision, max, onChange, value: valueProp, IconContainer, }: RatingProps) => JSX.Element;
//# sourceMappingURL=Rating.d.ts.map