import React from 'react';
declare type PillProps = {
    /**
     * String or node to be rendered inside the pill.
     */
    children: React.ReactNode;
    /**
     * Icon to display before the children.
     */
    icon?: string;
    pillStyle?: 'default' | 'alt';
};
export default function Pill({ children, icon, pillStyle }: PillProps): JSX.Element;
export {};
//# sourceMappingURL=Pill.d.ts.map