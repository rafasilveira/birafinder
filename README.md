# 🍺 Birafinder

This project is based on [BEES front-end code challenge](https://gist.github.com/lucaslacava/9608d8b957224df44cd198c08de5bf2b). The goal is to create a list of breweries from [Openm Brewery DB](https://www.openbrewerydb.org/documentation/01-listbreweries), based on the [specified Figma layout](https://www.figma.com/file/uFEUiFI47Ap1wSfWaEHSnI/BEES-front-end-challenge?node-id=0%3A1). You can see it [live here](https://birafinder.vercel.app/)!

## Running the project
You can either use [the live URL](https://birafinder.vercel.app/) or run locally. If you prefer the second option, just clone the repo and start the application, no need for anything fancy.

```bash
gh repo clone rafasilveira/birafinder
cd birafinder
yarn install
yarn test
yarn start
```

## Concerning my solution

> **TL;DR:** TypeScript, React, CRA, Styled-Components, default test suite, SWR, context API
  
Given that this is a simple project, but it's also a code _challenge_ in which I'll be evaluated, I've chosen to go with a balance between simplicity and robustness. To avoid unneeded configurations, I've started my project with **Create-React-App** and the **Typescript** template, since it provides out-of-the-box basic linting, test suite, dev server, and so on. I'm also using **Styled-Components** for convenience and dynamic styles, as well as to simplify some component declarations. **SWR** allows better request handling (cache and error/loading state management). **Context API** handles my data layer. Since this is a weekend project and it won't receive contributions by other developers, I didn't bother setting up pre-commit hooks to guarantee style consistency. I trust myself, lol.

### Folder structure
My application follows a simple folder structure, mostly based on Angular styleguide and React common practices, where files are grouped by the purpose they serve and named according to what they are. There's also some barrels on key folders to simplify importing. The following table presents my `svg` folder structure, alphabetically.

folder | description
--- | ---
assets | All SVG files used in the project. They're written as React components to simplify importing and to preserve `svg` html tag. 
components | All stateless components. The building blocks used on the project. 
context | Handles the application data
hocs | High-order components 
modules | Contains the functional parts of my application, divided by `app` (the application itself), `signup` (first screen) and `breweries`(second screen)
request | All requests and remote data models.
routes | Application routing


### Extra features
Unfortunately I haven't had time to do the UI tests. After all, it's easter 🐰

Apart from that, everything else is here ;)

Here are some thoughts on the bonus features:
- My whole project is TS-based. There's also some neat usages, such conditional interfaces on my [withLoading HOC](src/hocs/with-loading.hoc.tsx)
- All my stateless components are tested, using Jest and Testing Library (`yarn test`).
- I've followed the principle "stateless whenever possible, reactive where it makes sense". This has made my app easier to test.
- My [add more feature](src/components/tag/tag-input.component.tsx) is kind of a state machine. Note: added text kept on-screen only and it isn't persisted once user leaves the page.
- I've added lazy loading (using `React.Suspense`, check [app module](src/modules/app/app.component.tsx) and [routes](src/routes/application-router.component.tsx)
- Loading/error/empty can be seen at [the breweries page](src/modules/breweries/breweries.component.tsx). You may trigger an empty state by deleting everything, and a loading state by moving forward on the pages.
- There's pagination.
- I'm quite proud of my [git history](https://github.com/rafasilveira/birafinder/commits/main).
- My project is [live on Vercel](https://birafinder.vercel.app/)


