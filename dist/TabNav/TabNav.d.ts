import React from 'react';
declare function TabNav(props: {
    /**
     * Child node to be rendered as the inner HTML of the component.
     */
    children: React.ReactNode;
}): JSX.Element;
declare function TabNavItem(props: {
    /**
     * Child node to be rendered as the inner HTML of the component.
     */
    children: React.ReactNode;
    /**
     * Whether this is the currently active tab. Applies
     * `aria-current="true"`. Only one tab may be active at a time.
     */
    isActive: boolean;
}): JSX.Element;
export { TabNav, TabNavItem };
