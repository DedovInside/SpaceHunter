import { RefObject } from 'react';
export interface AppRootContextInterface {
    platform?: 'base' | 'ios';
    appearance?: 'light' | 'dark';
    portalContainer?: RefObject<HTMLDivElement>;
    isRendered: boolean;
}
export declare const AppRootContext: import("react").Context<AppRootContextInterface>;
//# sourceMappingURL=AppRootContext.d.ts.map