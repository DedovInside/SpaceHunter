import { getTextFromChildren } from "../../../../../../helpers/react/children";
export function defaultFilterFn(...args) {
    const [rawSearchQuery = '', option] = args;
    if ((option === null || option === void 0 ? void 0 : option.label) === undefined) {
        return false;
    }
    const searchQuery = rawSearchQuery.trim().toLocaleLowerCase();
    const label = getTextFromChildren(option.label).toLocaleLowerCase();
    if (label.startsWith(searchQuery)) {
        return true;
    }
    const findAllIncludes = (target = '', search = '')=>{
        const includes = [];
        let i = target.indexOf(search);
        while(i !== -1){
            includes.push(i);
            i = target.indexOf(search, i + 1);
        }
        return includes;
    };
    const includes = findAllIncludes(label, searchQuery);
    if (includes.length === 0) {
        return false;
    }
    return includes.some((index)=>index === 0 || !RegExp("\\p{L}", "u").test(label[index - 1]));
}

//# sourceMappingURL=index.js.map