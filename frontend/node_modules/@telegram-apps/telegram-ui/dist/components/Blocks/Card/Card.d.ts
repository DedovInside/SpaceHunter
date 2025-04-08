import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import { CardCell } from './components/CardCell/CardCell';
import { CardChip } from './components/CardChip/CardChip';
import { CardContextInterface } from './CardContext';
export interface CardProps extends HTMLAttributes<HTMLElement> {
    /** Defines the visual style of the card, influencing background, shadow, and border. */
    type?: CardContextInterface['type'];
}
type CardWithComponents = ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>> & {
    Cell: typeof CardCell;
    Chip: typeof CardChip;
};
/**
 * Serves as a container for card-styled UI elements, providing context for its child components.
 * It supports different visual styles and can encapsulate various content types.
 */
export declare const Card: CardWithComponents;
export {};
//# sourceMappingURL=Card.d.ts.map