
<br />
<div align="center" >
  

  <h3 align="center">Lazy Loading on Scroll (Proof of Concept)</h3>

  <p align="center">
    Table and list based data can be configured to load based on user behaviour and interaction.
    <br />
   
  </p>
</div>






<!-- ABOUT THE PROJECT -->
## About The Project




The existing architectural approach of loading all data up front and storing in client side cache has now been shown to be inadequate and reimplements existing issues.

This PoC is to provide a viable alternative.
The intended approach presented here is to configure the way we load all list based data based entirely on the users behaviour and interaction with the app.
This allows a far more granular approach to loading and caching data in the client, allowing for more flexibility and better performance.









### Built With

This project is using the following technologies:


- Languages
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
  - <a href="https://www.typescriptlang.org/">Typescript</a>
  - <a href="https://sass-lang.com/">SCSS</a>
- Frameworks
  - <a href="https://nextjs.org/">Next.js</a>
  - <a href="https://react.dev/">React</a>
- Libraries
  - <a href="https://tanstack.com/table/latest">Tanstack (React) Table</a>
  - <a href="https://tanstack.com/virtual/latest">Tanstack Virtual</a>
  - <a href="https://www.radix-ui.com/">Radix UI</a>


  





<!-- GETTING STARTED -->

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.




<!-- USAGE EXAMPLES -->
## Usage

- Demonstrates the ability to load large data sets on the frontend whilst maintaining strong performance for vital web based metrics, i.e First Contentful Paint, etc.

- Requirements are as follows:
   - Enable a page to load quickly whilst showing large amounts of data in table or list format.

- Code behaviour and points to note:
  - Each table is initially populated from an API call with a set number of items, i.e 100.  Allowing the page to load quickly and become responsive for the user to interact with.
  - The Virtualizer for each table is created with the total number of items available per table, also taken from an initial API call, i.e 10,000.  (Currently hard coded, but intended to receive from API).
  - Remaining rows are filled with placeholder virtual items.
  - Each table only loads further data on scroll.  Currently this is configured to load immediately on scroll.
    - Can be configured further using Intersection Observers.  A set batch of data would only be called each time a particular virtual item comes close or into view whilst scrolling.
  - A loading placeholder shows in each virtual item until API results are ready.
 

