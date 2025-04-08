import { ReactElement } from 'react';
export type MultiselectOptionValue = string | number;
export type MultiselectOptionLabel = ReactElement | string | number;
export type MultiselectOption = {
    value: MultiselectOptionValue;
    label: MultiselectOptionLabel;
    [index: string]: any;
};
//# sourceMappingURL=types.d.ts.map