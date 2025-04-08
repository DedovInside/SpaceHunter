import { canUseDOM } from "../../../../../helpers/dom";
export const getBrowserAppearanceSubscriber = (setAppearance)=>{
    if (!canUseDOM || !window.matchMedia) {
        return ()=>{};
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = ()=>{
        setAppearance(mediaQuery.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', listener);
    return ()=>mediaQuery.removeEventListener('change', listener);
};

//# sourceMappingURL=getBrowserAppearanceSubscriber.js.map