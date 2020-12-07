import React from 'react';
export default function Hed(props: {
    /**
     * The text of the headline.
     */
    children: React.ReactNode;
    /**
     * The size of the headline.
     */
    size: 'small' | 'medium' | 'large' | 'extra-large';
}): JSX.Element;
