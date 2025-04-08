/// <reference types="react" />
import { TypographyProps } from '../../../../../../components/Typography/Typography';
export interface ButtonTypographyProps extends Omit<TypographyProps, 'size'> {
    size: 's' | 'm' | 'l';
}
export declare const ButtonTypography: ({ size, ...restProps }: ButtonTypographyProps) => JSX.Element;
//# sourceMappingURL=ButtonTypography.d.ts.map