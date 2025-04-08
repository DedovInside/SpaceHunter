"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Timeline", {
    enumerable: true,
    get: function() {
        return Timeline;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _HorizontalScroll = require("../../Service/HorizontalScroll/HorizontalScroll");
const _TimelineItem = require("./components/TimelineItem/TimelineItem");
const Timeline = (_param)=>{
    var { active, horizontal, className, children } = _param, restProps = _object_without_properties._(_param, [
        "active",
        "horizontal",
        "className",
        "children"
    ]);
    const getChildMode = (childNumber)=>{
        if (!active) {
            return undefined;
        }
        if (childNumber <= active) {
            return 'active';
        }
        if (childNumber === active + 1) {
            return 'pre-active';
        }
        return undefined;
    };
    const Component = horizontal ? _HorizontalScroll.HorizontalScroll : 'ul';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-b53f1370d519b689", horizontal && "tgui-732e8859c58ffb77", className)
    }, restProps), {
        children: _react.Children.map(children, (child, index)=>{
            if (/*#__PURE__*/ (0, _react.isValidElement)(child)) {
                return /*#__PURE__*/ (0, _react.cloneElement)(child, _object_spread._({
                    mode: getChildMode(index + 1),
                    horizontal
                }, child.props));
            }
            return child;
        })
    }));
};
Timeline.Item = _TimelineItem.TimelineItem;

//# sourceMappingURL=Timeline.js.map