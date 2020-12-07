import withGlobalStyles, { backgrounds } from './decorators/withGlobalStyles';
import theme from './themes/qz';

export const decorators = [
	withGlobalStyles,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds,
	docs: {
		theme,
	},
};
