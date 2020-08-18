import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './EmojiList.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind( styles );

const getBulletStyle = ( bullet, id, i ) => {
	if ( ! bullet ) {
		return null;
	}

	return `.${id} li:nth-of-type(${i + 1})::before { content: '${bullet}'; }`;
};

const ListStyles = ( { bullets, id } ) => (
	<style
		dangerouslySetInnerHTML={{
			__html: bullets
				.map( ( bullet, index ) => getBulletStyle( bullet, id, index ) )
				.join( '' ),
		}}
	/>
);

ListStyles.propTypes = {
	bullets: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
};

const ListItems = ( {
	id,
	innerHtml = '',
	items,
	tagName,
} ) => {
	// If a list of nodes is passed in, render it as a child
	if ( items ) {
		const listItems = items.map( ( item, i ) => <li key={i}>{item}</li> );

		return React.createElement(
			tagName,
			{ className: `${styles.container} ${id}` },
			listItems
		);
	}

	// If html is passed in, set it as a prop
	return React.createElement(
		tagName,
		{
			className: `${styles.container} ${id}`,
			dangerouslySetInnerHTML: { __html: innerHtml },
		}
	);
};

ListItems.propTypes = {
	id: PropTypes.string.isRequired,
	innerHtml: PropTypes.string,
	items: PropTypes.arrayOf( PropTypes.node ),
	tagName: PropTypes.oneOf( [ 'ul', 'ol' ] ),
};

// If the emojis array contains emojis, strip those emojis from the supplied HTML
const stripHtmlEmojis = ( html, emojis ) => {
	if ( ! emojis.length ) {
		return html;
	}

	const pattern = new RegExp( `[${emojis.join( '' )}]`, 'g' );
	return html.replace( pattern, '' );
};

/**
 * Displays a WP content block.
 */
const EmojiList = ( {
	bullets,
	id,
	innerHtml,
	tagName,
} ) => (
	<Fragment>
		<ListStyles bullets={bullets} id={id} />
		<ListItems
			id={id}
			innerHtml={stripHtmlEmojis( innerHtml, bullets )}
			tagName={tagName}
		/>
	</Fragment>
);

EmojiList.propTypes = {
	bullets: PropTypes.arrayOf( PropTypes.string ).isRequired,
	id: PropTypes.string.isRequired,
	innerHtml: PropTypes.string.isRequired,
	tagName: PropTypes.oneOf( [ 'ol', 'ul' ] ).isRequired,
};

EmojiList.defaultProps = {
	bullets: [],
	tagName: 'ul',
};

/**
 * An emoji list of arbitrary content.
 */
export const StructuredEmojiList = ( {
	items,
	id,
} ) => {
	const listStyle = items
		.map( ( item, i ) => getBulletStyle( item.bullet, id, i ) )
		.join( '' );

	return (
		<ul className={cx( 'container', id )}>
			<style dangerouslySetInnerHTML={{ __html: listStyle }}/>
			<ListItems id={id} items={items.map( ( { item } ) => item )} tagName="ul" />
		</ul>
	);
};

StructuredEmojiList.defaultProps = {
	items: [],
};

StructuredEmojiList.propTypes = {
	id: PropTypes.string.isRequired,
	items: PropTypes.arrayOf( PropTypes.shape( {
		bullet: PropTypes.string,
		item: PropTypes.node,
	} ) ).isRequired,
};

export default EmojiList;
