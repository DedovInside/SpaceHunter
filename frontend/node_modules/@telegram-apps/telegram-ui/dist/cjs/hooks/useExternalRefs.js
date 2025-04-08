'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useExternRef", {
    enumerable: true,
    get: function() {
        return useExternRef;
    }
});
const _react = require("react");
const _refs = require("../helpers/react/refs");
function useExternRef(...externRefs) {
    const stableRef = (0, _react.useRef)(null);
    return (0, _react.useMemo)(()=>({
            get current () {
                return stableRef.current;
            },
            set current (el){
                stableRef.current = el;
                externRefs.forEach((ref)=>{
                    if (ref) {
                        (0, _refs.setRef)(el, ref);
                    }
                });
            }
        }), externRefs);
}

//# sourceMappingURL=useExternalRefs.js.map