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
    multipleRef: function() {
        return multipleRef;
    },
    setRef: function() {
        return setRef;
    }
});
const setRef = (element1, ref)=>{
    if (ref) {
        if (typeof ref === 'function') {
            ref(element1);
        } else {
            // eslint-disable-next-line no-param-reassign
            ref.current = element1;
        }
    }
};
const multipleRef = (...refs)=>{
    let current = null;
    return {
        get current () {
            return current;
        },
        set current (element){
            current = element;
            refs.forEach((ref)=>ref && setRef(element, ref));
        }
    };
};

//# sourceMappingURL=refs.js.map