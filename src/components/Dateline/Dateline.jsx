import React, { useEffect, useState } from 'react';
import { formatDate, parseDateGmt } from 'helpers/dates';
import PropTypes from 'prop-types';

function Dateline( { dateGmt } ) {
	const [ showRelativeDate, updateShowRelativeDate ] = useState( false );

	useEffect( () => {
		updateShowRelativeDate( true );
	}, [] );

	return (
		<time dateTime={parseDateGmt( dateGmt ).toISOString()}>{formatDate( dateGmt, { human: showRelativeDate } )}</time>
	);
}

Dateline.propTypes = {
	dateGmt: PropTypes.string.isRequired,
};

export default Dateline;
