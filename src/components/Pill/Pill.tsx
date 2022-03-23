import React from 'react';
import styles from './Pill.scss';

type PillProps = {
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

export default function Pill( { pillStyle, children, icon }: PillProps ) {
	return (
		<div className={`${styles.container} ${styles[pillStyle]}`} >
			{icon && <span className={styles.icon} aria-hidden="true">
				{icon}
			</span>}
			{children}
		</div>
	);
}
