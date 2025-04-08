import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
export const extractSliderAriaAttributes = (restProps)=>{
    const { 'aria-label': ariaLabel, 'aria-valuetext': ariaValueText, 'aria-labelledby': ariaLabelledBy } = restProps, restPropsWithoutAria = _object_without_properties(restProps, [
        'aria-label',
        'aria-valuetext',
        'aria-labelledby'
    ]);
    return _object_spread({
        aria: {
            ariaLabel,
            ariaValueText,
            ariaLabelledBy
        }
    }, restPropsWithoutAria);
};
export const getDraggingTypeByTargetDataset = (target)=>{
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