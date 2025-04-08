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
    hiddenControl: function() {
        return hiddenControl;
    },
    hideControls: function() {
        return hideControls;
    },
    setControlsTypes: function() {
        return setControlsTypes;
    },
    textControl: function() {
        return textControl;
    }
});
const setControlsTypes = (controls, type)=>{
    return controls.reduce((acc, control)=>{
        acc[control] = {
            control: {
                type
            }
        };
        return acc;
    }, {});
};
const hideControls = (...controls)=>{
    return setControlsTypes(controls, null);
};
const textControl = {
    type: 'text'
};
const hiddenControl = {
    type: null
};

//# sourceMappingURL=controls.js.map