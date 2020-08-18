import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './EmojiList.scss';

const getBulletStyle = ( bullet, listId, i ) => {
	if ( ! bullet ) {
		return null;
	}

	return `.${listId} li:nth-of-type(${i + 1})::before { content: '${bullet}'; }`;
};

const ListStyles = ( { bullets, listId } ) => (
	<style
		dangerouslySetInnerHTML={{
			__html: bullets
				.map( ( bullet, index ) => getBulletStyle( bullet, listId, index ) )
				.join( '' ),
		}}
	/>
);

ListStyles.propTypes = {
	bullets: PropTypes.array.isRequired,
	listId: PropTypes.string.isRequired,
};

const ListItems = ( {
	listId,
	innerHtml = '',
	items,
	tagName,
} ) => {
	// If a list of nodes is passed in, render it as a child of <li> tags
	if ( items ) {
		const listItems = items.map( ( item, i ) => <li key={i}>{item}</li> );

		return React.createElement(
			tagName,
			{ className: `${styles.container} ${listId}` },
			listItems
		);
	}

	// If html is passed in, set it as a prop
	return React.createElement(
		tagName,
		{
			className: `${styles.container} ${listId}`,
			dangerouslySetInnerHTML: { __html: innerHtml },
		}
	);
};

ListItems.propTypes = {
	innerHtml: PropTypes.string,
	items: PropTypes.arrayOf( PropTypes.node ),
	listId: PropTypes.string.isRequired,
	tagName: PropTypes.oneOf( [ 'ul', 'ol' ] ),
};

// If the emojis array contains emojis, strip those emojis from the supplied HTML
const stripHtmlEmojis = ( html = '', emojis ) => {
	if ( ! emojis.length ) {
		return html;
	}

	const pattern = new RegExp( `[${emojis.join( '' )}]`, 'g' );
	return html.replace( pattern, '' );
};

/**
 * Displays a WP content block or a list of nodes.
 */
export const EmojiList = ( {
	bullets,
	innerHtml,
	items,
	tagName,
} ) => {
	const emojiId = bullets.join( '-' );

	return (
		<Fragment>
			<ListStyles bullets={bullets} listId={emojiId} />
			<ListItems
				listId={emojiId}
				innerHtml={stripHtmlEmojis( innerHtml, bullets )}
				items={items}
				tagName={tagName}
			/>
		</Fragment>
	);
};

EmojiList.propTypes = {
	bullets: PropTypes.arrayOf( PropTypes.string ).isRequired,
	innerHtml: PropTypes.string,
	items: PropTypes.arrayOf( PropTypes.node ),
	tagName: PropTypes.oneOf( [ 'ol', 'ul' ] ).isRequired,
};

EmojiList.defaultProps = {
	bullets: [],
	tagName: 'ul',
};

/**
 * An emoji list of arbitrary content.
 */
export const StructuredEmojiList = ( { items } ) => (
	<EmojiList
		bullets={items.map( ( { bullet } ) => bullet )}
		items={items.map( ( { item } ) => item )}
	/>
);

StructuredEmojiList.defaultProps = {
	items: [],
};

StructuredEmojiList.propTypes = {
	items: PropTypes.arrayOf( PropTypes.shape( {
		bullet: PropTypes.string,
		item: PropTypes.node,
	} ) ).isRequired,
};
