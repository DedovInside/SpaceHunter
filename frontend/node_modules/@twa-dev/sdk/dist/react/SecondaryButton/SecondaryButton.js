"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondaryButton = void 0;
var react_1 = require("react");
var bottomButton_1 = require("../bottomButton");
var sdk_1 = require("../../sdk");
var secondaryButton = sdk_1.WebApp.SecondaryButton;
var SecondaryButton = function (_a) {
    var disabled = _a.disabled, color = _a.color, textColor = _a.textColor, text = _a.text, onClick = _a.onClick, progress = _a.progress, hasShineEffect = _a.hasShineEffect, _b = _a.position, position = _b === void 0 ? "bottom" : _b;
    (0, bottomButton_1.useBottomButton)({
        type: "secondary",
        disabled: disabled,
        progress: progress,
        textColor: textColor,
        text: text,
        onClick: onClick,
        color: color,
        hasShineEffect: hasShineEffect,
    });
    (0, react_1.useEffect)(function () {
        secondaryButton.setParams({
            position: position,
        });
    }, [position]);
    return null;
};
exports.SecondaryButton = SecondaryButton;
//# sourceMappingURL=SecondaryButton.js.map