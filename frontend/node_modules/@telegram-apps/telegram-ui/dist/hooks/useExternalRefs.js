'use client';
import { useMemo, useRef } from "react";
import { setRef } from "../helpers/react/refs";
export function useExternRef(...externRefs) {
    const stableRef = useRef(null);
    return useMemo(()=>({
            get current () {
                return stableRef.current;
            },
            set current (el){
                stableRef.current = el;
                externRefs.forEach((ref)=>{
                    if (ref) {
                        setRef(el, ref);
                    }
                });
            }
        }), externRefs);
}

//# sourceMappingURL=useExternalRefs.js.map