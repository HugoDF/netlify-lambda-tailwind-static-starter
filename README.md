# Netlify Lambda Tailwind Static Starter demo

> A starter project with Netlify Lambda, Tailwind CSS and static pages.

There's a lambda generating random emoji 👍 at [./src/lambda/emoji.js](./src/lambda/emoji.js)

The index page is just HTML with inline scripts.

A JavaScript function intercepts form submits and sends them using `fetch` instead. There's also a helper to get field values using their name, [see `getFieldValue(form, fieldName)` on GitHub](https://github.com/HugoDF/netlify-lambda-tailwind-static-starter/blob/fc936bd76f201c90ade459a9ab73bf19fdab6aec/public/index.html#L65).

This is a good starting point for quick Lambda demos.

## Development setup

You should run `yarn` before starting.

The following scripts are available:

* `yarn start`: start the Lambda(s) and serving the static directory using [Netlify Dev](https://www.netlify.com/products/dev/) . **Important:** before `start`, `yarn build:tw` runs.
* `yarn build:tw`: build the full set of Tailwind CSS utilities (useful for development), make sure to check what your site looks will look like live using `yarn build:css`
* `yarn build`: run netlify-lambda build + Tailwind CSS production build (removes unused classes using PurgeCSS)
* `yarn build:css`: Tailwind CSS production build (removes unused classes using PurgeCSS)
* `yarn lint` and `yarn format`: runs XO, the "JavaScript linter with great defaults" (see [github.com/xojs/xo](https://github.com/xojs/xo#readme)) with or without the `--fix` flag respectively
