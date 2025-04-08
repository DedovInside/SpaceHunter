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
    Keys: function() {
        return Keys;
    },
    getHorizontalSideByKey: function() {
        return getHorizontalSideByKey;
    }
});
const Keys = {
    ENTER: 'Enter',
    SPACE: 'Space',
    TAB: 'Tab',
    ESCAPE: 'Escape',
    HOME: 'Home',
    END: 'End',
    BACKSPACE: 'Backspace',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown'
};
const getHorizontalSideByKey = (keys)=>{
    switch(keys){
        case Keys.ARROW_UP:
        case Keys.ARROW_LEFT:
            return 'left';
        case Keys.ARROW_DOWN:
        case Keys.ARROW_RIGHT:
            return 'right';
        default:
            return undefined;
    }
};

//# sourceMappingURL=accessibility.js.map