"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TimelineItem", {
    enumerable: true,
    get: function() {
        return TimelineItem;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const _Text = require("../../../../Typography/Text/Text");
const modeStyles = {
    active: "tgui-dcd66bc07faad440",
    'pre-active': "tgui-581d134185fd28b4"
};
const TimelineItem = (_param)=>{
    var { header, horizontal, mode, className, children } = _param, restProps = _object_without_properties._(_param, [
        "header",
        "horizontal",
        "mode",
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("li", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-caaaa27ccfa566b7", mode && modeStyles[mode], platform === 'ios' && "tgui-566b727e7a35e935", horizontal && "tgui-f461f2eeb28c21d0", className)
    }, restProps), {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "tgui-0f46575488c31b93",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-3fc2f0d7045d23d8"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-d7ba9c56743387af"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "tgui-bf9f87dd32ecad81",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, {
                        className: "tgui-2b850faa8f3a520a",
                        weight: "2",
                        children: header
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                        level: platform === 'ios' ? '1' : '2',
                        className: "tgui-b9a4d9afcd70e355",
                        children: children
                    })
                ]
            })
        ]
    }));
};

//# sourceMappingURL=TimelineItem.js.map