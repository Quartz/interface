import React from 'react';
import Tagline from '../Tagline/Tagline';
import styles from './PageHeader.scss';

type PageHeaderProps = {
	/**
	 * Boolean to determine whether or not the component renders with a bottom border.
	 */
	border: boolean,

	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children?: React.ReactNode,

	/**
	 * Smaller-print text used for the page subheader (renders in `<p>` tag).
	 */
	intro?: React.ReactNode,

	/**
	 * Boolean to determine whether to add padding to the header before the bottom border.
	 */
	showPadding: boolean,

	/**
	 * Boolean to determine whether to add a top margin to the header.
	 */
	showTopMargin?: boolean,

	/**
	 * Very small-print text used directly below the title (e.g., as a dateline).
	 */
	tagline?: React.ReactNode,

	/**
	 * Required text for the h1 tag.
	 */
	title: string,
};

const PageHeader = ( {
	border = true,
	children,
	intro,
	showPadding = true,
	showTopMargin = true,
	tagline,
	title,
}: PageHeaderProps ) => (
	<div className={`${styles.container} ${border ? styles.border : ''} ${showPadding ? styles.showPadding : ''} ${showTopMargin ? styles.showTopMargin : ''}`}>
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
		{
			children &&
				<div className={styles.children}>{children}</div>
		}
	</div>
);

export default PageHeader;
