"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Card", {
    enumerable: true,
    get: function() {
        return Card;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _useObjectMemo = require("../../../hooks/useObjectMemo");
const _CardCell = require("./components/CardCell/CardCell");
const _CardChip = require("./components/CardChip/CardChip");
const _CardContext = require("./CardContext");
const Card = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { type = 'plain', className, children } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "className",
        "children"
    ]);
    const contextValue = (0, _useObjectMemo.useObjectMemo)({
        type
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_CardContext.CardContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("article", _object_spread_props._(_object_spread._({
            ref: ref,
            className: (0, _classNames.classNames)("tgui-dbf261f4b3046bb3", type === 'ambient' && "tgui-c6ad96fdf8ce4b28", className)
        }, restProps), {
            children: children
        }))
    });
});
Card.Cell = _CardCell.CardCell;
Card.Chip = _CardChip.CardChip;

//# sourceMappingURL=Card.js.map