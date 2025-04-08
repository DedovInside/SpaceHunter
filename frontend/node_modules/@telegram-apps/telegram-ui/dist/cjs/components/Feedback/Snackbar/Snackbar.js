'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Snackbar", {
    enumerable: true,
    get: function() {
        return Snackbar;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _useTimeout = require("../../../hooks/useTimeout");
const _RootRenderer = require("../../Service/RootRenderer/RootRenderer");
const _Caption = require("../../Typography/Caption/Caption");
const _SnackbarButton = require("./components/SnackbarButton/SnackbarButton");
const TRANSITION_FINISH_DURATION = 320;
const Snackbar = (_param)=>{
    var { before, after, description, link, children, className, duration = 4000, onClose } = _param, restProps = _object_without_properties._(_param, [
        "before",
        "after",
        "description",
        "link",
        "children",
        "className",
        "duration",
        "onClose"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const [closing, setClosing] = (0, _react.useState)(false);
    const close = ()=>{
        setClosing(true);
        setTimeout(onClose, TRANSITION_FINISH_DURATION);
    };
    const closeTimeout = (0, _useTimeout.useTimeout)(close, duration);
    (0, _react.useEffect)(()=>closeTimeout.set(), [
        closeTimeout
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_RootRenderer.RootRenderer, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
            className: (0, _classNames.classNames)("tgui-bed09b0692380ce7", platform === 'ios' && "tgui-c2ca59c94a46245e", closing && "tgui-a1e25a2488982fc5", className)
        }, restProps), {
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "tgui-a869502f11f22b6c",
                children: [
                    (0, _node.hasReactNode)(before) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-229bfa1a0a8ac43f",
                        children: before
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "tgui-7d8f183ba67229e9",
                        children: [
                            (0, _node.hasReactNode)(children) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
                                weight: "2",
                                children: children
                            }),
                            (0, _node.hasReactNode)(description) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
                                children: description
                            }),
                            (0, _node.hasReactNode)(link) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
                                children: link
                            })
                        ]
                    }),
                    (0, _node.hasReactNode)(after) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-093aea87229643ac",
                        children: after
                    })
                ]
            })
        }))
    });
};
Snackbar.Button = _SnackbarButton.SnackbarButton;

//# sourceMappingURL=Snackbar.js.map