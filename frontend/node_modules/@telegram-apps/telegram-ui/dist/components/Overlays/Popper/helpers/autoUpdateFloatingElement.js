import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { autoUpdate } from "@floating-ui/react-dom";
import { isHTMLElement } from "@floating-ui/utils/dom";
const defaultOptions = {
    ancestorScroll: true,
    ancestorResize: true,
    elementResize: false,
    animationFrame: false
};
export const autoUpdateFloatingElement = (reference, floating, update, options = defaultOptions)=>{
    const { elementResize = false } = options, restOptions = _object_without_properties(options, [
        "elementResize"
    ]);
    const autoUpdateLibDisposer = autoUpdate(reference, floating, update, _object_spread_props(_object_spread({}, restOptions), {
        elementResize: false
    }));
    let observer = null;
    if (elementResize) {
        let initialUpdate = true;
        observer = new MutationObserver(()=>{
            if (!initialUpdate) {
                update();
            }
            initialUpdate = false;
        });
        if (isHTMLElement(reference)) {
            observer.observe(reference, {
                childList: true,
                subtree: true
            });
        }
        observer.observe(floating, {
            childList: true,
            subtree: true
        });
    }
    return ()=>{
        if (observer !== null) {
            observer.disconnect();
            observer = null;
        }
        autoUpdateLibDisposer();
    };
};

//# sourceMappingURL=autoUpdateFloatingElement.js.map