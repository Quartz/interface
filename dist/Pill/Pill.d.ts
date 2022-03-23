import React from 'react';
declare type PillProps = {
    /**
     * Determines what styles are applied to the pill.
     */
    pillStyle: 'faint' | 'inverted';
    /**
     * String or node to be rendered inside the pill.
     */
    children: React.ReactNode;
    /**
     * Icon to display before the children.
     */
    icon?: string;
};
export default function Pill({ pillStyle, children, icon }: PillProps): JSX.Element;
export {};
//# sourceMappingURL=Pill.d.ts.map