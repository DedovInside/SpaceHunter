export const range = (startPosition, endPosition)=>{
    const length = endPosition - startPosition + 1;
    return Array.from({
        length
    }, (_, i)=>startPosition + i);
};

//# sourceMappingURL=array.js.map