import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
/**
 * Renders a visual indicator of steps or progress in a process, such as a tutorial or a multi-step form.
 * It visually represents total steps and current progress.
 */ export const Steps = ({ className, count, progress })=>/*#__PURE__*/ _jsx("div", {
        className: classNames("tgui-f492b616576c67fb", className),
        children: Array.from({
            length: count
        }, (_, i)=>/*#__PURE__*/ _jsx("div", {
                className: classNames("tgui-d45985ba4cb27e5f", {
                    ["tgui-352b8d247f473986"]: i < progress
                })
            }, i))
    });

//# sourceMappingURL=Steps.js.map