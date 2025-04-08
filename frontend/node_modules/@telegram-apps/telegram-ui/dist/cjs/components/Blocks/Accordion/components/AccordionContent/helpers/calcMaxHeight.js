"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "calcMaxHeight", {
    enumerable: true,
    get: function() {
        return calcMaxHeight;
    }
});
const calcMaxHeight = (expanded, bodyElement)=>{
    if (!expanded) {
        return '0px';
    }
    // We don't know the height of the element in the first render
    if (bodyElement === null) {
        return 'inherit';
    }
    return `${bodyElement.scrollHeight}px`;
};

//# sourceMappingURL=calcMaxHeight.js.map