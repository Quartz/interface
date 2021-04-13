import React from 'react';

const svgIcons = {
	apple: ( props ) => (
		<svg viewBox="0 0 20 20" {...props}>
			<path d="M13.5805661,4.77558069 L13.8493455,4.79151818 C15.3003564,4.83691668 16.6450115,5.56385706 17.4776727,6.75304545 C16.1637481,7.56083283 15.3552155,8.9853992 15.3353455,10.5276455 C15.3372211,12.272513 16.3821605,13.8471921 17.9892,14.5268909 C17.6801306,15.5309145 17.214251,16.4797543 16.6088182,17.3382636 C15.7957455,18.5545364 14.9432455,19.7427909 13.5901727,19.7647545 C12.2754364,19.7951 11.8335909,18.9910273 10.3256273,18.9910273 C8.80353636,18.9910273 8.33259091,19.7428 7.07162727,19.7951 C5.78303636,19.8428273 4.79823636,18.4969636 3.9556,17.2921 C2.27140909,14.8315455 0.959963636,10.3578636 2.71814545,7.31384545 C3.54376107,5.83023225 5.08745569,4.88878947 6.78443636,4.83396364 C8.07419091,4.80742727 9.27191818,5.705 10.0648909,5.705 C10.8428091,5.705 12.3227636,4.63128182 13.8493455,4.79151818 Z M13.8652455,-5.86197757e-14 C13.9532591,1.14930223 13.5897969,2.28764719 12.8520455,3.17329091 C12.1362874,4.0635302 11.0517608,4.57630615 9.90952727,4.56454545 C9.83688603,3.44832971 10.2109261,2.3490173 10.9492636,1.50873636 C11.696982,0.657072432 12.7381253,0.118382261 13.8652455,-5.86197757e-14 Z" />
		</svg>
	),
	'arrow-right': ( props ) => (
		<svg viewBox="0 0 16 14" {...props}>
			<path d="M0,7.1C0,6.5,0.5,6,1,6h11.5l-4-4.2c-0.4-0.4-0.4-1.1,0-1.5s1-0.4,1.4,0l5.8,5.9l0,0c0.4,0.4,0.4,1.1,0,1.5l-5.8,5.9	c-0.4,0.4-1,0.4-1.4,0s-0.4-1.1,0-1.5l4-4.2L1,8.2C0.5,8.2,0,7.7,0,7.1z" />
		</svg>
	),
	check: ( props ) => (
		<svg viewBox="183 18 12 11" {...props}>
			<path d="M193.294 18l-6.35 6.968-2.335-2.48L183 24.201l3.86 4.113L195 19.58z" />
		</svg>
	),
	compass: ( props ) => (
		<svg viewBox="0 0 16 16" {...props}>
			<path d="M16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 C10.1259794,16.0139554 12.1689291,15.1755828 13.6722559,13.6722559 C15.1755828,12.1689291 16.0139554,10.1259794 16,8 Z M8,14.0000272 C4.6862915,14.0000272 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 C11.3137085,2 14.0000272,4.6862915 14.0000272,8 C14.0047999,9.59276557 13.3742004,11.1216795 12.2479399,12.2479399 C11.1216795,13.3742004 9.59276557,14.0047999 8,14.0000272 L8,14.0000272 Z M5.879,5.878 L4.464,11.535 L10.121,10.121 L11.535,4.464 L5.879,5.878 Z M8.707,8.707 C8.42102576,8.99306061 7.99088424,9.07867172 7.61717278,8.92390842 C7.24346131,8.76914512 6.99978645,8.40448973 6.99978645,8 C6.99978645,7.59551027 7.24346131,7.23085488 7.61717278,7.07609158 C7.99088424,6.92132828 8.42102576,7.00693939 8.707,7.293 C9.09738194,7.68349985 9.09738194,8.31650015 8.707,8.707 Z" />
		</svg>
	),
	envelope: ( props ) => (
		<svg viewBox="0 0 20 20" {...props}>
			<path d="M18.75 0C19.44 0 20 .56 20 1.25v1.194l-10 10-10-10V1.25C0 .56.559 0 1.25 0h17.5zM20 15.125l-5.015-5.015L20 5.096v10.029zm-9.338-.693l2.998-2.996 6.34 6.34v.974c0 .691-.56 1.25-1.25 1.25H1.25A1.25 1.25 0 0 1 0 18.75v-.974l6.34-6.341 2.996 2.997v.002a.94.94 0 0 0 1.326-.002zM0 5.096l5.015 5.014L0 15.125V5.096z" />
		</svg>
	),
	facebook: ( props ) => (
		<svg viewBox="0 0 25 25" {...props}>
			<path d="M1.379 0A1.38 1.38 0 0 0 0 1.38v22.241C0 24.384.62 25 1.379 25h11.779v-9.21h-3.29v-3.948h3.29V8.763c.195-3.227 2.166-4.987 5.047-4.987 1.38 0 2.566.103 2.848.15V7.3h-1.936c-1.566 0-1.868.743-1.868 1.838l.021 2.752 3.783-.048-.658 3.947h-3.29L17.25 25h6.371A1.38 1.38 0 0 0 25 23.621V1.381A1.383 1.383 0 0 0 23.62 0H1.379z" />
		</svg>
	),
	linkedin: ( props ) => (
		<svg viewBox="0 0 20 20" {...props}>
			<path d="M18.537 0H1.477C.663 0 0 .646 0 1.442v17.133c0 .799.662 1.445 1.478 1.445h17.06c.816 0 1.482-.648 1.482-1.445V1.442C20.019.646 19.354 0 18.537 0zM5.35 17.061H2.38V7.506h2.971v9.555H5.35zM3.865 6.2a1.72 1.72 0 1 1-.001-3.441A1.72 1.72 0 0 1 3.865 6.2zM16.47 17.061h-2.965v-4.646c0-1.11-.022-2.534-1.544-2.534-1.545 0-1.78 1.207-1.78 2.454v4.726H7.213V7.506h2.848v1.305h.04c.398-.752 1.367-1.543 2.81-1.543 3.004 0 3.56 1.978 3.56 4.552v5.241h-.001z" />
		</svg>
	),
	search: ( props ) => (
		<svg viewBox="0 0 15 15" {...props}>
			<path d="M12.08961,10.9365218 C12.9965273,9.78634204 13.5418567,8.33880348 13.5418567,6.76172249 C13.5418567,3.0275637 10.510611,1.77635684e-15 6.77092835,1.77635684e-15 C3.03124568,1.77635684e-15 0,3.02658232 0,6.76074111 C0,10.4948999 3.03124568,13.523445 6.77092835,13.523445 C8.22219249,13.523445 9.56242559,13.0631768 10.6648754,12.2869036 L13.2994395,14.7269268 C13.7026499,15.1003634 14.345379,15.0878379 14.7264985,14.7074505 L14.7264985,14.7074505 L14.7264985,14.7074505 C15.1088894,14.3257943 15.0874838,13.7098303 14.6800058,13.3328758 L12.08961,10.9365218 Z M6.77092835,11.4654868 C4.17398108,11.4654868 2.06144358,9.35453393 2.06144358,6.76172249 C2.06144358,4.16694829 4.17398108,2.05795821 6.77092835,2.05795821 C9.36787562,2.05795821 11.4804131,4.16694829 11.4804131,6.76172249 C11.4804131,9.35453393 9.36689304,11.4654868 6.77092835,11.4654868 L6.77092835,11.4654868 Z"></path>
		</svg>
	),
	twitter: ( props ) => (
		<svg viewBox="0 0 25 20" {...props}>
			<path d="M22.053 3.122A5.006 5.006 0 0 0 24.308.364c-.992.573-2.094.987-3.255 1.211A5.212 5.212 0 0 0 17.305 0c-2.835 0-5.129 2.232-5.129 4.986 0 .388.045.77.13 1.134A14.71 14.71 0 0 1 1.737.913a4.884 4.884 0 0 0-.693 2.507c0 1.727.91 3.252 2.286 4.146a5.207 5.207 0 0 1-2.324-.623l-.001.064c0 2.413 1.767 4.427 4.114 4.888-.43.112-.884.172-1.352.172-.33 0-.653-.033-.965-.092.653 1.983 2.548 3.421 4.792 3.462a10.484 10.484 0 0 1-6.37 2.131c-.414 0-.822-.025-1.223-.07a14.8 14.8 0 0 0 7.86 2.239c9.435 0 14.594-7.59 14.594-14.176 0-.219-.004-.435-.013-.647A10.154 10.154 0 0 0 25 2.338c-.92.396-1.908.665-2.947.784z" />
		</svg>
	),
	youtube: ( props ) => (
		<svg viewBox="0 0 36 26" {...props}>
			<path d="M14.002 17L14 7l10 5.017L14.002 17zM35.64 5.609s-.352-2.547-1.432-3.67C32.84.468 31.306.46 30.602.375 25.565 0 18.008 0 18.008 0h-.016S10.436 0 5.398.374C4.694.46 3.16.467 1.79 1.94.71 3.062.36 5.609.36 5.609S0 8.6 0 11.592v2.804c0 2.992.36 5.983.36 5.983s.351 2.548 1.43 3.67c1.37 1.472 3.169 1.425 3.97 1.58C8.64 25.912 18 26 18 26s7.565-.012 12.602-.386c.704-.086 2.238-.093 3.607-1.565 1.08-1.122 1.432-3.67 1.432-3.67S36 17.388 36 14.396v-2.804c0-2.992-.36-5.983-.36-5.983z" />
		</svg>
	),
} as const;

export default function Icon ( props: {
	/**
	 * Fill color of the icon to be rendered. Can be any HTML-valid
	 * color string, e.g. hexadecimal, RGBA, CSS color names, etc.
	 * If supplied, this value takes precedence over `props.themeColor`.
	 */
	color?: string,

	/**
	 * Name of the icon to be rendered.
	 */
	name: keyof typeof svgIcons,

	/**
	 * Size of the icon to be rendered in pixels. Defaults to 20.
	 */
	size?: number,

	/**
	 * Theme color of the icon to be rendered. This will be mapped to a
	 * CSS variable name declared by the ColorScheme component.
	 * Defaults to 'typography'.
	 */
	themeColor?: (
		'accent' |
		'typography' |
		'typography-faint'
	),
} ) {
	const {
		color,
		size = 20,
		themeColor = 'typography',
	} = props;
	const fill = color || `var(--color-${themeColor}, black)`;
	const commonProps = {
		'aria-hidden': true,
		fill,
		height: size,
		version: '1.1',
		xmnls: 'http://www.w3.org/2000/svg',
	};

	const Icon = svgIcons[props.name];
	return <Icon {...commonProps}/>;
}
