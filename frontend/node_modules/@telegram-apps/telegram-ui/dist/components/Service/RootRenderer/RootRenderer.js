import { isValidElement } from "react";
import { createPortal } from "react-dom";
import { useAppRootContext } from "../../../hooks/useAppRootContext";
export const RootRenderer = ({ children })=>{
    const { portalContainer } = useAppRootContext();
    if (!(portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.current)) {
        return /*#__PURE__*/ isValidElement(children) ? children : null;
    }
    return /*#__PURE__*/ createPortal(children, portalContainer.current);
};

//# sourceMappingURL=RootRenderer.js.map