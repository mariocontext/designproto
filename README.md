# Designer Prototyping Tool

> Nuxt.js project

## Purpose

We want to help designers to design directly in the medium (html,css, js) that their designs will live in thus leveraging the full visual and interactive power of the medium. Stop creating and maintaining tons of visual design files and trying to fake interactivity and animations that may or may not be executed well by developers anyway. Foster a collaborative partnership with dev teams and utilize each other's strengths when needed.

**Note this system is in flux and still evolving**

## Goals

* Create a starting point that is not "throwaway work"
* Support the process from story writing, to wireframe, basic templates and layouts, to full interactive and high fidelity visual design and prototpying
* Provide a clear structure to start any app or website project
* Use the "component" approach to align with modern development and design system requirements
* Use a workflow that allows for design and development experimentation
* Self document feature and UI decisions
* Oriented towards fast, hi fidelity prototyping over a final finished product
* A solid basis for the final product

## Tech Stack and reasons for using

* [Vue JS](https://vuejs.org/): Kind of a mashup of Angular and React with its own approach. Single component model clearly seperates html, css and js but still is standalone. Has directives in html for quick jQuery-like interactivity and built in animation hooks.
* [NUXT](https://nuxtjs.org/): Opininated structure automatically create pages for easy page routing, built in layout and theming ability, generates static html pages for easier evaluation and sharing on something like [Netlify](https://netlify.com)
* [Bulma](https://bulma.io/): Semantic CSS only visual framework that also has SASS/SCSS variables making for quick global theming. Not as heavy as Bootstrap, Foundation, Semantic UI, etc.
* [Buefy](https://buefy.github.io/): Bulma based Vue ready components make it easier to quickly create common design patterns
* [Hypothes.is](https://hypothes.is) : Not built in but a [Chrome extension](https://chrome.google.com/webstore/detail/hypothesis-web-pdf-annota/bjfhmglciegochdpefhhlphglcehbmek?hl=en) that can be useful for quick annotations for evalution on static pages loaded somewhere like [Netlify](https://netlify.com)
* [Git](https://git-scm.com/) for version control: Git allows you to easily try, share and rollback changes.
* [VS Code](https://code.visualstudio.com/) / Live Preview Extension: The Live Preview extension allows you to collaborate live on the project with someone else without their needing to setup the project on their own. Recommend the Vetur extension for better Vue file formatting.
* [Glitch](https://glitch.com) : Allows you to import a project from github and collaborate as well. You'll need to build and start the npm project as a single page app (spa) in order for this to work though.

## Recommendations

* Create a design folder under the regular pages folder to separate ongoing designs from current work. Although, you could use Git version control branch instead.
* Create a Git design branch in addition to a dev branch.
* Don't spend a lot of time mocking up a component when designing. Create an image instead or many pages under a design folder to get the point across.
* more TBD

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# glitch.com might need a single page app started
$ npm start --spa
```

For detailed explanation on how Nuxt works, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

version 1.0.0
