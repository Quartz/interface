import React from 'react';
import classnames from 'classnames/bind';
import Kicker from '../Kicker/Kicker';
import styles from './FormLabel.scss';

const cx = classnames.bind( styles );

export default function FormLabel ( props: {
	/**
	 * The text of the label
	 */
	children: React.ReactNode,

	/**
	 * Whether the associated input field is required.
	 */
	required: boolean,
} ) {
	return (
		<div className={cx( 'container', { required: props.required } )}>
			<Kicker>{props.children}</Kicker>
		</div>
	);
}
