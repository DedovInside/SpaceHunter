"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainButton = void 0;
var bottomButton_1 = require("../bottomButton");
var MainButton = function (_a) {
    var disabled = _a.disabled, color = _a.color, textColor = _a.textColor, text = _a.text, onClick = _a.onClick, progress = _a.progress, hasShineEffect = _a.hasShineEffect;
    (0, bottomButton_1.useBottomButton)({
        type: "main",
        disabled: disabled,
        progress: progress,
        textColor: textColor,
        text: text,
        onClick: onClick,
        color: color,
        hasShineEffect: hasShineEffect,
    });
    return null;
};
exports.MainButton = MainButton;
//# sourceMappingURL=MainButton.js.map