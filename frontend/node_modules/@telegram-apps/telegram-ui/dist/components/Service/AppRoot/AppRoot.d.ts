import { HTMLAttributes } from 'react';
import { AppRootContextInterface } from '../../../components/Service/AppRoot/AppRootContext';
export interface AppRootProps extends HTMLAttributes<HTMLDivElement> {
    /** Application platform, determined automatically if nothing passed */
    platform?: AppRootContextInterface['platform'];
    /** Application appearance, determined automatically if nothing passed */
    appearance?: AppRootContextInterface['appearance'];
    /** Rewriting portal container for rendering, AppRoot container as default */
    portalContainer?: AppRootContextInterface['portalContainer'];
}
export declare const AppRoot: import("react").ForwardRefExoticComponent<AppRootProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AppRoot.d.ts.map