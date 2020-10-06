import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmojiList.scss';

const getBulletStyle = ( bullet, listId, i ) => {
	if ( ! bullet ) {
		return null;
	}

	return `.${listId} li:nth-of-type(${i + 1})::before { content: '${bullet}'; }`;
};

const ListStyles = ( { bullets, listId, renderStyles } ) => {
	const css = bullets
		.map( ( bullet, index ) => getBulletStyle( bullet, listId, index ) )
		.join( '' );

	if ( renderStyles ) {
		return renderStyles( css );
	}

	return (
		<style dangerouslySetInnerHTML={{ __html: css }} />
	);
};

ListStyles.propTypes = {
	bullets: PropTypes.array.isRequired,
	listId: PropTypes.string.isRequired,
	renderStyles: PropTypes.func,
};

const ListItems = ( {
	children,
	innerHtml = '',
	listId,
	tagName,
} ) => {
	// If a children are provided, render them.
	if ( children ) {
		return React.createElement(
			tagName,
			{ className: `${styles.container} ${listId}` },
			children
		);
	}

	// If html is passed in, dangerously set it.
	return React.createElement(
		tagName,
		{
			className: `${styles.container} ${listId}`,
			dangerouslySetInnerHTML: { __html: innerHtml },
		}
	);
};

ListItems.propTypes = {
	children: PropTypes.node,
	innerHtml: PropTypes.string,
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

const EmojiList = ( {
	bullets,
	children,
	innerHtml,
	renderStyles,
	tagName,
} ) => {
	const emojiId = 'testymctest';
	// bullets.join( '-' );

	return (
		<>
			<ListStyles
				bullets={bullets}
				listId={emojiId}
				renderStyles={renderStyles}
			/>
			<ListItems
				children={children}
				listId={emojiId}
				innerHtml={stripHtmlEmojis( innerHtml, bullets )}
				tagName={tagName}
			/>
		</>
	);
};

EmojiList.propTypes = {
	/**
	 * An array of emojis, one for each list item, in order.
	 */
	bullets: PropTypes.arrayOf( PropTypes.string ).isRequired,

	/**
	 * If you have JSX representing the list items, pass it as a children prop
	 * without an enclosing `<ul>` or `<ol>` (use tagName).
	 */
	children: PropTypes.node,

	/**
	 * If you do not have JSX and instead have raw HTML, pass it as an innerHtml
	 * prop.
	 */
	innerHtml: PropTypes.string,

	/**
	 * An optional render prop to customize the rendering of the CSS. If omitted,
	 * an inline style tag will be rendered just before the list.
	 */
	renderStyles: PropTypes.func,

	/**
	 * The type of list to render.
	 */
	tagName: PropTypes.oneOf( [ 'ol', 'ul' ] ).isRequired,
};

EmojiList.defaultProps = {
	bullets: [],
	tagName: 'ul',
};

export default EmojiList;
