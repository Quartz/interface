# 🌈 Prism UI

Prism UI is a React-based component library. It is part of the Prism design system for Quartz. The goal of this library is to centralize and document the building blocks of our web front-end. By doing this we hope to:

1) Make front-end web development easier by improving reusability.
2) Provide a more consistent, performant and accessible experience for Quartz readers.

You can browse Prism UI components in Storybook at prism.qz.com. Each Storybook component has a Canvas view, for previewing the component, and a Docs view for reading the full documentation.

### THIS REPOSITORY IS PUBLIC

Prism UI is intended as a resource for the product team at Quartz, but it is publicly viewable by anyone inside or outside of Quartz. As such, please be mindful of including sensitive information in _any_ branch of this repository.

## Support

We welcome feedback, bug reports and proposals using the [Github issues page](https://github.com/Quartz/interface/issues).

Within Quartz, you may also use the `#product-prism-support` Slack channel for questions, feedback, and bug reports.

## Usage

### Adding Prism UI to your project

Prism UI can be installed as a dependency using npm:

`npm install --save github:Quartz/interface`

Until we are ready to publish this package on npm and use semantic versioning, we recommend specifying a commit hash in your dependency, e.g.

`npm install --save github:Quartz/interface#90297da`

### Importing React components

React components can be imported from `@quartz/interface/src/components`, like so:

`import { Button } from '@quartz/interface/src/components;'`

### BYO dependencies

The Prism UI package is bundled without any dependencies, and JSX and SCSS are supplied un-transpiled. You are therefore responsible for providing any dependencies, such as React, and transpiling code, e.g. using Babel and Webpack.

## Contributing
Before you make a contribution to Prism UI, it’s worth asking yourself a few questions about the changes you want to make.

If you want to **update a component**:

	* Are the changes you want to make potentially applicable to a broad range of usage scenarios, including potential usage outside of qz.com?
	* Is it the responsibility of this component to do the thing you want it to do?
	* If you are adding some logic to this component, is this the right place in the tree to do so?
	* If you are making changes based on a design, have you confirmed with the designer that these changes should be reflected in Prism UI?

If you want to **add a new component**:

	* Is this component functionally or visually distinct from other components in the library? Could the same effect be achieved by tweaking an existing component?
	* Do you anticipate this component being long-lived and/or being used in more than one location?
	* If you are adding a component from a design, have you confirmed with the designer that this component should be part of Prism UI?

If the answer to any of these questions is no, chat with your teammates about how best to achieve what you want. Don’t be afraid to ask questions in the `#product-prism-support` Slack channel.

### Running Storybook locally

To run a local instance of Storybook, use `npm start`. Hot-reloading is supported.

### Testing components in qz-react

You may want to test your changes in a consuming repository, e.g. `qz-react`, before opening a pull request. The easiest way to do this is to publish a branch of this repository with your changes, e.g.

* `git checkout -b my-new-component`
* `git commit -am "My new component WIP"`
* `git push -u origin/my-new-component`

In your consuming repository, you can then install this branch as a dependency and import your component:

* `npm i github:Quartz/interface#my-new-component`
* `import { MyNewComponent } from '@quartz/interface/src/components' `

### Updating qz-react with changes from Prism UI

Once your pull request to `Quartz/interface` has been merged, take the commit hash containing your changes and in `qz-react` run:

`npm i --save github:Quartz/interface#[YOUR_COMMIT_HASH]`

Then open a second pull request in qz-react with the updated `package.json` and `package-lock.json` files.

### Component checklist

Before opening a pull request, please review the following checklist:

#### Required

* All code must pass linting and unit tests (`npm test`)
* Components must be documented with a `[COMPONENT_NAME].story.jsx` and `[COMPONENT_NAME].docs.mdx` file
* All tests must pass in the Storybook accessibility panel
* propTypes must be documented using JSDoc format, e.g.
```js
/**
	 * Whether the button is interactive. Forwarded to the button element.
	 */
	disabled: PropTypes.bool.isRequired,
```
* Props must be named semantically, e.g. `props.description` instead of `props.text`
* Props that modify the appearance or functionality of the component should be limited to a list of potential values using `PropTypes.arrayOf`
* Wherever possible, use helper mixins and token variables in SCSS
* The component is exported from `src/components/index.js`

#### Suggested

* Use `props.children` when appropriate, for example when a component will render a single element with an open and closing HTML tag
* If a prop’s sole purpose is to forward a value to an HTML attribute or React event handler, use the camel-cased name of that attribute, e.g. a prop that populates an `aria-label` attribute and nothing else should be named `ariaLabel` and not, for example, `label` or `a11yLabel`
* Components that have some degree of interactivity should include a suite of unit tests in a `[COMPONENT_NAME].test.js` file. Tests that check for idempotent render output, such as snapshot tests, are discouraged
* A component’s spacing, i.e. margin, is typically the responsibility of the component consumer and should not be included in the component files.

### TK: Component story template
