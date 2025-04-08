import { Telegram } from '@twa-dev/types';
declare global {
    interface Window {
        Telegram?: Telegram;
    }
}
export declare const getTelegramData: () => import("@twa-dev/types").WebApp | undefined;
//# sourceMappingURL=telegram.d.ts.map