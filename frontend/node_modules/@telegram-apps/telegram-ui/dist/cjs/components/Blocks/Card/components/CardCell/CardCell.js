"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CardCell", {
    enumerable: true,
    get: function() {
        return CardCell;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _node = require("../../../../../helpers/react/node");
const _Cell = require("../../../Cell/Cell");
const _CardContext = require("../../CardContext");
const CardCell = (_param)=>{
    var { children, subtitle, className } = _param, restProps = _object_without_properties._(_param, [
        "children",
        "subtitle",
        "className"
    ]);
    const cardContext = (0, _react.useContext)(_CardContext.CardContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Cell.Cell, _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-80c6a0ba7b3c11fd", cardContext.type === 'ambient' && "tgui-814d1971a92687e3", className),
        subtitle: (0, _node.hasReactNode)(subtitle) && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
            className: "tgui-422c21c917cc0873",
            children: subtitle
        })
    }, restProps), {
        children: (0, _node.hasReactNode)(children) && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
            className: "tgui-27c5a061c5f35c04",
            children: children
        })
    }));
};

//# sourceMappingURL=CardCell.js.map