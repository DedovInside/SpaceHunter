import { isHTMLElement } from "@floating-ui/utils/dom";
export const canUseDOM = (()=>!!(typeof window !== 'undefined' && window.document && window.document.createElement))();
export const getHTMLElementByChildren = (children, index)=>{
    const foundEl = children[index];
    return isHTMLElement(foundEl) ? foundEl : null;
};
export const getHTMLElementSiblingByDirection = (el, direction)=>{
    let siblingEl = null;
    switch(direction){
        case 'left':
            siblingEl = el.previousElementSibling;
            break;
        case 'right':
            siblingEl = el.nextElementSibling;
            break;
        default:
            return null;
    }
    return isHTMLElement(siblingEl) ? siblingEl : null;
};

//# sourceMappingURL=dom.js.map