import { ChangeEvent, Dispatch, SetStateAction } from 'react';
export interface UseCustomEnsuredControlProps<V> {
    value?: V;
    defaultValue: V;
    disabled?: boolean | undefined;
    onChange?(this: void, v: V): any;
}
export declare function useCustomEnsuredControl<V = any>({ value, defaultValue, disabled, onChange: onChangeProp, }: UseCustomEnsuredControlProps<V>): [V, Dispatch<SetStateAction<V>>];
export interface UseEnsuredControlProps<V, E extends ChangeEvent<any>> {
    value?: V;
    defaultValue: V;
    disabled?: boolean | undefined;
    onChange?(this: void, e: E): any;
}
export declare function useEnsuredControl<V, E extends ChangeEvent<any>>({ onChange: onChangeProp, disabled, ...props }: UseEnsuredControlProps<V, E>): [V, (e: E) => any];
//# sourceMappingURL=useEnsureControl.d.ts.map