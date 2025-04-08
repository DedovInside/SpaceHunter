export const DEFAULT_SELECTED_BEHAVIOR = 'highlight';
export const DEFAULT_EMPTY_TEXT = 'Nothing found';
export const FOCUS_ACTION_NEXT = 'next';
export const FOCUS_ACTION_PREV = 'prev';
export const isCreateNewOptionPreset = (option)=>{
    return option && 'actionText' in option;
};
export const isEmptyOptionPreset = (option)=>{
    return option && 'placeholder' in option;
};
export const isServicePreset = (option)=>isCreateNewOptionPreset(option) || isEmptyOptionPreset(option);

//# sourceMappingURL=constants.js.map