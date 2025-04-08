export const isNotAutoPlacement = (placement)=>{
    return !placement.startsWith('auto');
};
export const getAutoPlacementAlignment = (placement)=>{
    const align = placement.replace(/auto-|auto/, '');
    return align === 'start' || align === 'end' ? align : null;
};

//# sourceMappingURL=alignment.js.map