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
    hasReactNode: function() {
        return hasReactNode;
    },
    isPrimitiveReactNode: function() {
        return isPrimitiveReactNode;
    }
});
const hasReactNode = (value)=>{
    return value !== undefined && value !== false && value !== null && value !== '';
};
function isPrimitiveReactNode(node) {
    return typeof node === 'string' || typeof node === 'number';
}

//# sourceMappingURL=node.js.map