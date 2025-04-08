"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getValueOptionByHTMLElement", {
    enumerable: true,
    get: function() {
        return getValueOptionByHTMLElement;
    }
});
const getValueOptionByHTMLElement = (options, el)=>{
    const value = el.getAttribute('value');
    return options.find((v)=>v.value === value);
};

//# sourceMappingURL=getValueOptionByHTMLElement.js.map