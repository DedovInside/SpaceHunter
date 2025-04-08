"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    canUseDOM: function() {
        return canUseDOM;
    },
    getHTMLElementByChildren: function() {
        return getHTMLElementByChildren;
    },
    getHTMLElementSiblingByDirection: function() {
        return getHTMLElementSiblingByDirection;
    }
});
const _dom = require("@floating-ui/utils/dom");
const canUseDOM = (()=>!!(typeof window !== 'undefined' && window.document && window.document.createElement))();
const getHTMLElementByChildren = (children, index)=>{
    const foundEl = children[index];
    return (0, _dom.isHTMLElement)(foundEl) ? foundEl : null;
};
const getHTMLElementSiblingByDirection = (el, direction)=>{
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
    return (0, _dom.isHTMLElement)(siblingEl) ? siblingEl : null;
};

//# sourceMappingURL=dom.js.map