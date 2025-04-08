export const setControlsTypes = (controls, type)=>{
    return controls.reduce((acc, control)=>{
        acc[control] = {
            control: {
                type
            }
        };
        return acc;
    }, {});
};
export const hideControls = (...controls)=>{
    return setControlsTypes(controls, null);
};
export const textControl = {
    type: 'text'
};
export const hiddenControl = {
    type: null
};

//# sourceMappingURL=controls.js.map