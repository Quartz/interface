# 🌈 Prism UI

Prism UI is a React-based component library. It is part of the Prism design system for [Quartz](https://qz.com/). The goal of this library is to centralize and document the building blocks of our web front-end. By doing this we hope to:

1. Make front-end web development easier by improving reusability.
2. Provide a more consistent, performant and accessible experience for Quartz readers.

You can browse Prism UI components in Storybook at [prism.qz.com](https://prism.qz.com). Each Storybook component has a Canvas view, for previewing the component, and a Docs view for reading the full documentation.

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

### File Structure
Each component should have a few files associated with it:
- The component itself (`.jsx`)
- Any necessary styling (`.scss`)
- Component documentation (`.docs.mdx`)
- Component examples (`.story.jsx`)

The component and styles work together as you would expect in any React application. The documentation file comes from the Storybook Docs addon [(docs)](https://github.com/storybookjs/storybook/tree/master/addons/docs) and works directly with your Storybook examples [(docs)](https://github.com/storybookjs/storybook/tree/master)

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

Before opening a pull request with a new or updated library entry, please review the following checklist:

#### Required

* All lint and unit tests pass (`npm test`)
* Component is are documented with a `[COMPONENT_NAME].story.jsx` and `[COMPONENT_NAME].docs.mdx` file
* Component passes a11y smoke tests in the Storybook 'Accessibility' panel
* Any propTypes in the component file are documented using JSDoc format, e.g.
```js
	/**
	 * Whether the button is interactive. Forwarded to the button element.
	 */
	disabled: PropTypes.bool.isRequired,
```
* Props are named semantically, e.g. `props.description` instead of `props.text`
* Props that modify the appearance or functionality of the component are limited to a list of potential values using `PropTypes.arrayOf`
* The component is exported from `src/components/index.js`
* The name of the component helps other developers understand when it should be used and makes sense outside the context of qz.com. E.g., `InfoPanel` instead of `HomepageDescription`, `CallToAction` instead of `SubscribeButton`, `WarningText` instead of `PaymentWarning`, etc.

#### Suggested

* Component uses `props.children` when appropriate, for example when the component will render a single element with an open and closing HTML tag
* Any prop whose sole purpose is to forward a value to an HTML attribute or React event handler uses the camel-cased name of that attribute. E.g., a prop that populates an `aria-label` attribute and nothing else should be named `ariaLabel` and not, for example, `label` or `a11yLabel`
* If the component has some degree of interactivity it includes a suite of unit tests in a `[COMPONENT_NAME].test.js` file. Tests that check for idempotent render output, such as snapshot tests, are discouraged
* The component does not include any external spacing, i.e. margin, which is considered the responsibility of the component consumer
* Wherever possible, component SCSS extends helper mixins and token variables

### TK: Component story template
