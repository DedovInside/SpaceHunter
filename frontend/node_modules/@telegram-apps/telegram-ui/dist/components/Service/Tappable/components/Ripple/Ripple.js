import { jsx as _jsx } from "react/jsx-runtime";
export const Ripple = ({ clicks })=>/*#__PURE__*/ _jsx("span", {
        "aria-hidden": true,
        className: "tgui-8071f6e38c77bc0b",
        children: clicks.map((wave)=>/*#__PURE__*/ _jsx("span", {
                className: "tgui-e156954daf886976",
                style: {
                    top: wave.y,
                    left: wave.x
                }
            }, wave.date))
    });

//# sourceMappingURL=Ripple.js.map