import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';

/**
 * Determines whether a URL "belongs" to this app or to something else and
 * returns either a false (external URL) or a relative path.
 *
 * @param  {string} link
 * @return {false|string}
 */
export const getRelativeLink = link => {
	if ( !link ) {
		return false;
	}
	// These tests validate whether a permalink is governed by this app.
	const appDomainTests = [
		/^(qz\.com|quartzy\.qz\.com|work\.qz\.com)$/, // whitelisted subdomains of qz.*
		/(go-vip\.co|quartz\.work|qz\.dev|qz\.vip)$/, // dev domains
	];

	const urlIsAbsolute = link.match( /^[A-z]\w+\:/ );
	const httpUrlMatches = link.match( /^https?\:\/\/(([^:\/?#]*))(?:\:([0-9]+))?/ );

	// SecureDrop link is special (cannot be served by React).
	if ( '/tips' === link || 'https://qz.com/tips' === link ) {
		return false;
	}

	// /app/ link is special (should not be served using ReactRouter
	// to allow the app deep link to work correctly).
	if ( link.includes( '/app/' ) && !link.match( /\/([0-9]+)\/([^\/]+)\/app\/?$/ ) ) {
		return false;
	}

	if ( httpUrlMatches ) {
		const [ site, domain ] = httpUrlMatches;

		if ( appDomainTests.some( regex => regex.test( domain ) ) ) {
			// URL is absolute and links to one of our domains
			return link
				// Make the URL relative by replacing the root part of the URL with a slash
				.replace( site, '/' )
				// Remove the /app URL part if it exists at the end of an article URL. These URLs are just for the Quartz app.
				.replace( /\/([0-9]+)\/([^\/]+)\/app\/?$/, ( match, articleId, articleSlug ) => `/${articleId}/${articleSlug}/` )
				// Replace any instances of multiple slashes
				.replace( /\/+/g, '/' );
		}

		// URL points to another domain
		return false;
	}

	// URL is absolute but not associated with this app
	if ( urlIsAbsolute ) {
		return false;
	}

	return link;
};

export const normalizeTo = ( to = {}, from ) => {
	if ( typeof to === 'string' ) {
		const [ pathname, hash ] = to.split( '#' );

		return {
			hash,
			pathname,
			state: {
				from,
			},
		};
	}

	return {
		...to,
		state: {
			from,
			...to.state,
		},
	};
};

/**
 * Because ref props have magic behavior in React, a ref prop can "stick" to the
 * HOC and React will not pass it down to the wrapped component (e.g., Link)
 * where we want it:
 *
 * https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
 *
 * Forwarding refs is one method of navigating this issue, but it introduces
 * complexity since each HOC must forward the ref so that it doesn't break the
 * chain of forwarded refs. Over time, this will likely lead to every HOC
 * implementing forwardRef just in case the wrapped component needs a ref.
 *
 * If, however, we simply rename the ref prop to something else (e.g.,
 * "innerRef"), it loses its magic behavior and React will continue to pass it
 * down the tree. When we are in control of both the HOC and the wrapped
 * component, this is a much simpler solution.
 *
 * NOTE: React Router 5.1 handles forwarding our refs automatically, so we no
 * longer need to pass our refs to links as innerRef. However, we still
 * *receive* the prop as innerRef for the reasons outlined above.
 */
export const Link = ( {
	checked,
	children,
	className,
	current,
	innerRef,
	label,
	onClick,
	rel,
	role,
	style,
	target,
	title,
	to,
} ) => {
	// If no destination was provided, omit the link but preserve formatting.
	if ( ! to ) {
		return (
			<div className={className} ref={innerRef} style={style}>
				{children}
			</div>
		);
	}

	const location = useLocation();
	const normalizedTo = normalizeTo( to, location.pathname );
	const relativeLink = getRelativeLink( normalizedTo.pathname );

	if ( !!relativeLink ) {
		return (
			<ReactRouterLink
				aria-checked={checked}
				aria-current={current}
				aria-label={label}
				className={className}
				onClick={onClick}
				ref={innerRef}
				rel={rel}
				role={role}
				style={style}
				target={target}
				title={title}
				to={{
					...normalizedTo,
					pathname: relativeLink,
				}}
			>
				{children}
			</ReactRouterLink>
		);
	}

	return (
		<a
			href={normalizedTo.pathname}
			className={className}
			onClick={onClick}
			target={target}
			ref={innerRef}
			rel={rel}
			style={style}
			title={title}
			aria-label={label}
			aria-current={current}
		>
			{children}
		</a>
	);
};

Link.propTypes = {
	checked: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	current: PropTypes.oneOfType( [
		PropTypes.bool,
		PropTypes.string,
	] ),
	innerRef: PropTypes.oneOfType( [
		PropTypes.object,
		PropTypes.func,
	] ),
	label: PropTypes.string,
	onClick: PropTypes.func,
	rel: PropTypes.string,
	role: PropTypes.string,
	style: PropTypes.object,
	target: PropTypes.string,
	title: PropTypes.string,
	to: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.object,
	] ).isRequired,
};

Link.defaultProps = {
	className: '',
	onClick: () => {},
};

export const LinkWhen = ( { when, ...props } ) => {
	if ( when ) {
		return <Link {...props} />;
	}

	return props.children;
};

LinkWhen.propTypes = {
	children: PropTypes.node,
};

export default Link;
