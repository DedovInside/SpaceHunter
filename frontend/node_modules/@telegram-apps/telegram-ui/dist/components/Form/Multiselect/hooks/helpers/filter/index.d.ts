import { MultiselectOption } from '../../../../../../components/Form/Multiselect/types';
export type FilterFn = (inputValue: string, option: MultiselectOption) => boolean;
export declare function defaultFilterFn(...args: Parameters<FilterFn>): ReturnType<FilterFn>;
//# sourceMappingURL=index.d.ts.map