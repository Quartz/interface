import React from 'react';
import styles from './Pill.scss';

type PillProps = {
  /**
   * String or node to be rendered inside the pill.
   */
  children: React.ReactNode;
  /**
   * Icon to display before the children.
   */
  icon?: string;
  type?: 'default' | 'alt';
};

export default function Pill( { children, icon, type = 'default' }: PillProps ) {
	return (
		<div className={`${styles.container} ${type === 'alt' ? styles['alt-type'] : ''}`} >
			{icon && <span className={styles.icon} aria-hidden="true">
				{icon}
			</span>}
			{children}
		</div>
	);
}
