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
  pillStyle?: 'default' | 'alt';
};

export default function Pill( { children, icon, pillStyle = 'default' }: PillProps ) {
	return (
		<div className={`${styles.container} ${pillStyle === 'alt' ? styles.altStyle : ''}`} >
			{icon && <span className={styles.icon} aria-hidden="true">
				{icon}
			</span>}
			{children}
		</div>
	);
}
