'use client';
import { useContext, useRef } from "react";
import { AppRootContext } from "../AppRootContext";
export const usePortalContainer = (portalContainer)=>{
    if (portalContainer !== undefined) {
        return portalContainer;
    }
    const appContext = useContext(AppRootContext);
    if (appContext.isRendered && appContext.portalContainer !== undefined) {
        return appContext.portalContainer;
    }
    return useRef(null);
};

//# sourceMappingURL=usePortalContainer.js.map