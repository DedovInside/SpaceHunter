"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackButton = void 0;
var react_1 = require("react");
var sdk_1 = require("../../sdk");
var backButton = sdk_1.WebApp.BackButton;
var isButtonShown = false;
var BackButton = function (_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? function () {
        window.history.back();
    } : _b;
    (0, react_1.useEffect)(function () {
        backButton.show();
        isButtonShown = true;
        return function () {
            isButtonShown = false;
            // Мы ждем 10мс на случай, если на следующем экране тоже нужен BackButton.
            // Если через это время isButtonShown не стал true, значит следующему экрану кнопка не нужна и мы её прячем
            setTimeout(function () {
                if (!isButtonShown) {
                    backButton.hide();
                }
            }, 10);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        sdk_1.WebApp.onEvent("backButtonClicked", onClick);
        return function () {
            sdk_1.WebApp.offEvent("backButtonClicked", onClick);
        };
    }, [onClick]);
    return null;
};
exports.BackButton = BackButton;
//# sourceMappingURL=BackButton.js.map