import React from 'react';
import EmojiList, { StructuredEmojiList } from './EmojiList';
import docs from './EmojiList.docs.mdx';

export default {
	title: 'Emoji List',
	component: EmojiList,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => <EmojiList>Click me!</EmojiList>;
export const Structured = () => <StructuredEmojiList>Click me!</StructuredEmojiList>;
