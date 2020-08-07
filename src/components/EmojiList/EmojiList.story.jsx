import React, { Fragment } from 'react';
import EmojiList, { StructuredEmojiList } from './EmojiList';
import docs from './EmojiList.docs.mdx';
import Link from '../Link/Link';

export default {
	title: 'Emoji List',
	component: EmojiList,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => ( <EmojiList
	bullets={[ '😊', '😜', '😻' ]}
	id="emoji-list"
	innerHtml="<li>hola</li><li>hiya</li><li>bonjour</li>"
/> );


const headerStyle = {
	marginBottom: '4px',
};

const descriptionStyle = {
	margin: '0',
};

export const Structured = () => ( <StructuredEmojiList
	id="structured-emoji-list"
	items={[
		{
			item: (
				<Fragment>
					<h2 style={headerStyle}>All of Quartz journalism, unlocked</h2>
					<p style={descriptionStyle}>Goodbye paywall, hello access across platforms, including on our iOS app to global business news that offers a fresh perspective on the financial forces changing the world.</p>
				</Fragment>
			),
			bullet: '🔐',
		},
		{
			item: (
				<Fragment>
					<h2 style={headerStyle}>Weekly Field Guides</h2>
					<p style={descriptionStyle}>Deep dives on the companies, people, and phenomena defining the global economy. Topics include <Link to="/guide/antiracist-company/">how to build an anti-racist company</Link>, <Link to="/guide/world-vs-coronavirus/">world vs. coronavirus</Link>, <Link to="/guide/startups-fail/">why startups fail</Link>, and <Link to="/guide/gen-z/">what gen z wants</Link>.</p>
				</Fragment>
			),
			bullet: '📚',
		},
		{
			item: (
				<Fragment>
					<h2 style={headerStyle}>Member-only newsletters</h2>
					<p style={descriptionStyle}>Every Monday, we’ll send you a TLDR of our latest field guide, and on Thursday, an exclusive essay with a wrap up of the best of Quartz for weekend reading.</p>
				</Fragment>
			),
			bullet: '📬',
		},
		{
			item: (
				<Fragment>
					<h2 style={headerStyle}>Digital events from Quartz at Work</h2>
					<p style={descriptionStyle}>Get early invites—and access to playbacks and recaps—for bi-monthly virtual events that explore the challenges of a modern-day worker.</p>
				</Fragment>
			),
			bullet: '👨‍💻',
		},
	]}
/> );
