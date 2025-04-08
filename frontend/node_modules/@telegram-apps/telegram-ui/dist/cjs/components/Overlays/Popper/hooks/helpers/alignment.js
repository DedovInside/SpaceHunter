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
    getAutoPlacementAlignment: function() {
        return getAutoPlacementAlignment;
    },
    isNotAutoPlacement: function() {
        return isNotAutoPlacement;
    }
});
const isNotAutoPlacement = (placement)=>{
    return !placement.startsWith('auto');
};
const getAutoPlacementAlignment = (placement)=>{
    const align = placement.replace(/auto-|auto/, '');
    return align === 'start' || align === 'end' ? align : null;
};

//# sourceMappingURL=alignment.js.map