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
    DEFAULT_EMPTY_TEXT: function() {
        return DEFAULT_EMPTY_TEXT;
    },
    DEFAULT_SELECTED_BEHAVIOR: function() {
        return DEFAULT_SELECTED_BEHAVIOR;
    },
    FOCUS_ACTION_NEXT: function() {
        return FOCUS_ACTION_NEXT;
    },
    FOCUS_ACTION_PREV: function() {
        return FOCUS_ACTION_PREV;
    },
    isCreateNewOptionPreset: function() {
        return isCreateNewOptionPreset;
    },
    isEmptyOptionPreset: function() {
        return isEmptyOptionPreset;
    },
    isServicePreset: function() {
        return isServicePreset;
    }
});
const DEFAULT_SELECTED_BEHAVIOR = 'highlight';
const DEFAULT_EMPTY_TEXT = 'Nothing found';
const FOCUS_ACTION_NEXT = 'next';
const FOCUS_ACTION_PREV = 'prev';
const isCreateNewOptionPreset = (option)=>{
    return option && 'actionText' in option;
};
const isEmptyOptionPreset = (option)=>{
    return option && 'placeholder' in option;
};
const isServicePreset = (option)=>isCreateNewOptionPreset(option) || isEmptyOptionPreset(option);

//# sourceMappingURL=constants.js.map