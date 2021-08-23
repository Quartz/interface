import 'react';

// Allow <button on="[amp code]"> attribute in TypeScript
// https://www.credera.com/insights/typescript-adding-custom-type-definitions-for-existing-libraries
declare module 'react' {
	interface ButtonHTMLAttributes<T> {
		on?: string;
	}
}
