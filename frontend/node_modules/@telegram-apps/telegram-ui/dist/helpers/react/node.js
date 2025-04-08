export const hasReactNode = (value)=>{
    return value !== undefined && value !== false && value !== null && value !== '';
};
export function isPrimitiveReactNode(node) {
    return typeof node === 'string' || typeof node === 'number';
}

//# sourceMappingURL=node.js.map