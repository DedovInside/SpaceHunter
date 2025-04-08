export const getValueOptionByHTMLElement = (options, el)=>{
    const value = el.getAttribute('value');
    return options.find((v)=>v.value === value);
};

//# sourceMappingURL=getValueOptionByHTMLElement.js.map