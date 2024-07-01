import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

interface AnimatedCursorOptions {
    children?: ReactNode;
    color?: string;
    innerScale?: number;
    innerSize?: number;
    innerStyle?: CSSProperties;
    outerAlpha?: number;
    outerScale?: number;
    outerSize?: number;
    outerStyle?: CSSProperties;
}
type Clickable = string | ({
    target: string;
} & AnimatedCursorOptions);
interface AnimatedCursorProps extends AnimatedCursorOptions {
    clickables?: Clickable[];
    showSystemCursor?: boolean;
    trailingSpeed?: number;
}

/**
 * AnimatedCursor
 * Calls and passes props to CursorCore if not a touch/mobile device.
 */
declare function AnimatedCursor({ children, clickables, color, innerScale, innerSize, innerStyle, outerAlpha, outerScale, outerSize, outerStyle, showSystemCursor, trailingSpeed }: AnimatedCursorProps): react_jsx_runtime.JSX.Element;

export { AnimatedCursor as default };
