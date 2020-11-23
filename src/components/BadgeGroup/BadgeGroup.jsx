import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge';
import TextGroup from '../TextGroup/TextGroup';
import styles from './BadgeGroup.scss';

function BadgeGroup ( {
	imageUrl,
	kicker,
	size,
	tagline,
	title,
} ) {
	return (
		<div className={styles.container}>
			{
				imageUrl &&
					<div className={styles.badge}>
						<Badge
							alt=""
							imageUrl={imageUrl}
							size="medium"
						/>
					</div>
			}
			<div className={styles.text}>
				<TextGroup
					kicker={kicker}
					size={size}
					tagline={tagline}
					title={title}
				/>
			</div>
			<svg className={styles.arrow} width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.777 12L8 6.022l-.023-.023L8 5.977 1.779 0 0 1.708l4.466 4.29L0 10.292z" />
			</svg>
		</div>
	);
}

BadgeGroup.propTypes = {
	/**
	 * The image URL. Any existing query parameters are stripped and it will be
	 * resized and cropped automatically. Note that an image URL is not required,
	 * mainly because some content represented may not have an associated image.
	 */
	imageUrl: PropTypes.string,

	/**
	 * Kicker text. This accepts a string or a node—most notably to accommodate
	 * bulletins, which have multicolor kickers and sometimes incorporate images.
	 */
	kicker: PropTypes.node,

	/**
	 * Size preset. Adjusts the size of the TextGroup (see
	 * `TextGroup.propTypes.size`).
	 */
	size: PropTypes.oneOf( [ 'small', 'medium', 'large' ] ),

	/**
	 * Tagline to appear beneath the title.
	 */
	tagline: PropTypes.string,

	/**
	 * Title.
	 */
	title: PropTypes.string.isRequired,
};

BadgeGroup.defaultProps = {
	size: 'small',
};

export default BadgeGroup;
