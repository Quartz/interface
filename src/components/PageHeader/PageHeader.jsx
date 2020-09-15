import React from 'react';
import PropTypes from 'prop-types';
import Tagline from '../Tagline/Tagline';
import styles from './PageHeader.scss';

const PageHeader = ( { border, children, intro, tagline, title } ) => (
	<div className={`${styles.container} ${border ? styles.border : ''}`}>
		<div className={styles.contents}>
			<h1 className={styles.title}>{title}</h1>
			{
				tagline &&
					<div className={styles.tagline}>
						<Tagline>{tagline}</Tagline>
					</div>
			}
			{
				intro &&
					<p className={styles.intro}>{intro}</p>
			}
		</div>
		{children}
	</div>
);

PageHeader.propTypes = {
	/**
	 * Boolean to determine whether or not the component renders with a bottom border.
	 */
	border: PropTypes.bool.isRequired,

	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children: PropTypes.node,

	/**
	 * Smaller-print text used for the page subheader (renders in `<p>` tag).
	 */
	intro: PropTypes.node,

	/**
	 * Very small-print text used directly below the title (e.g., as a dateline).
	 */
	tagline: PropTypes.node,

	/**
	 * Required text for the h1 tag.
	 */
	title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
	border: true,
};

export default PageHeader;
