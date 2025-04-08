"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBottomButton = void 0;
var react_1 = require("react");
var sdk_1 = require("../sdk");
var _a = sdk_1.WebApp.themeParams, bottom_bar_bg_color = _a.bottom_bar_bg_color, button_color = _a.button_color, button_text_color = _a.button_text_color;
var defaultButtonColors = {
    main: {
        color: button_color,
        text_color: button_text_color,
    },
    secondary: {
        color: bottom_bar_bg_color,
        text_color: button_color,
    },
};
var isButtonShown = {
    main: false,
    secondary: false,
};
var useBottomButton = function (_a) {
    var type = _a.type, _b = _a.progress, progress = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, color = _a.color, textColor = _a.textColor, text = _a.text, onClick = _a.onClick, _d = _a.hasShineEffect, hasShineEffect = _d === void 0 ? false : _d;
    var button = type === "main" ? sdk_1.WebApp.MainButton : sdk_1.WebApp.SecondaryButton;
    (0, react_1.useEffect)(function () {
        button.show();
        isButtonShown[type] = true;
        return function () {
            isButtonShown[type] = false;
            setTimeout(function () {
                if (!isButtonShown[type]) {
                    button.hide();
                }
            }, 10);
        };
    }, [type]);
    (0, react_1.useEffect)(function () {
        if (progress) {
            button.showProgress();
            button.disable();
        }
        else {
            button.hideProgress();
        }
        if (disabled || progress) {
            button.disable();
        }
        else {
            button.enable();
        }
        return function () {
            button.hideProgress();
            button.enable();
        };
    }, [disabled, progress]);
    (0, react_1.useEffect)(function () {
        button.setParams({
            color: color !== null && color !== void 0 ? color : defaultButtonColors[type].color,
            text_color: textColor !== null && textColor !== void 0 ? textColor : defaultButtonColors[type].text_color,
            has_shine_effect: hasShineEffect,
        });
    }, [color, textColor, hasShineEffect]);
    (0, react_1.useEffect)(function () {
        button.setText(text);
    }, [text]);
    (0, react_1.useEffect)(function () {
        if (onClick) {
            button.onClick(onClick);
            return function () {
                button.offClick(onClick);
            };
        }
    }, [onClick]);
};
exports.useBottomButton = useBottomButton;
//# sourceMappingURL=bottomButton.js.map