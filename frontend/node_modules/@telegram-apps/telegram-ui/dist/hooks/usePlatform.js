'use client';
import { useAppRootContext } from "./useAppRootContext";
export const usePlatform = ()=>{
    const context = useAppRootContext();
    return context.platform || 'base';
};

//# sourceMappingURL=usePlatform.js.map