interface ClassNamesDictionary {
    [index: string]: boolean | undefined | null;
}
export type ClassName = string | number | ClassNamesDictionary | boolean | undefined | null;
export declare function classNames(...args: ClassName[]): string;
export {};
//# sourceMappingURL=classNames.d.ts.map