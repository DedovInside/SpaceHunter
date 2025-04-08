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
    extractSliderAriaAttributes: function() {
        return extractSliderAriaAttributes;
    },
    getDraggingTypeByTargetDataset: function() {
        return getDraggingTypeByTargetDataset;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const extractSliderAriaAttributes = (restProps)=>{
    const { 'aria-label': ariaLabel, 'aria-valuetext': ariaValueText, 'aria-labelledby': ariaLabelledBy } = restProps, restPropsWithoutAria = _object_without_properties._(restProps, [
        'aria-label',
        'aria-valuetext',
        'aria-labelledby'
    ]);
    return _object_spread._({
        aria: {
            ariaLabel,
            ariaValueText,
            ariaLabelledBy
        }
    }, restPropsWithoutAria);
};
const getDraggingTypeByTargetDataset = (target)=>{
    if (!target) {
        return null;
    }
    if ([
        'start',
        'end'
    ].includes(target.dataset.type || '')) {
        return target.dataset.type;
    }
    return null;
};

//# sourceMappingURL=html.js.map