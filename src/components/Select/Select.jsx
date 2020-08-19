import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Select.scss';
import ExpandArrowDown from './expand-arrow-down.svg';

const cx = classnames.bind( styles );

const Select = ( {
	subtext,
	disabled,
	onChange,
	invalid,
	label,
	options,
	placeholder,
	required,
	value,
} ) => (
	<div className={cx( 'container' )}>
		<label>
			{
				label &&
				<span className={cx( 'label' )}>{label}</span>
			}
			<div className={cx( 'select-container' )}>
				{/* eslint-disable-next-line jsx-a11y/no-onchange */}
				<select
					aria-invalid={invalid}
					className={cx( 'select', { isPlaceholder: '' === value } )}
					disabled={disabled}
					onChange={onChange}
					required={required}
					value={value}
				>
					{
						placeholder &&
						<option disabled value="">
							{placeholder}
						</option>
					}
					{options.map( item => (
						<option
							key={item.value}
							value={item.value}
						>
							{item.label}
						</option>
					) )}
				</select>
				<ExpandArrowDown className={cx( 'down-arrow', { invalid } )} aria-hidden="true" />
			</div>
		</label>
		{
			subtext &&
			<span className={cx( 'subtext', { invalid } )}>{subtext}</span>
		}
	</div>
);

Select.propTypes = {
	disabled: PropTypes.bool.isRequired,
	invalid: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf( PropTypes.shape( {
		label: PropTypes.string.isRequired,
		value: PropTypes.oneOfType( [
			PropTypes.number,
			PropTypes.string,
		] ).isRequired,
	} ) ).isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool.isRequired,
	subtext: PropTypes.string,
	value: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),
};

Select.defaultProps = {
	disabled: false,
	hasError: false,
	required: false,
	value: '',
};

export default Select;
