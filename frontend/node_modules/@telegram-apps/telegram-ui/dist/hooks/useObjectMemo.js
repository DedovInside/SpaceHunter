'use client';
import { useRef } from "react";
import { isEqual } from "../helpers/equal";
export const useObjectMemo = (object)=>{
    const cache = useRef(object);
    if (!isEqual(cache.current, object)) {
        cache.current = object;
    }
    return cache.current;
};

//# sourceMappingURL=useObjectMemo.js.map