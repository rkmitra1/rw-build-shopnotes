# App versus Tutorial comparison

## setup

- rw version
  - 6.1.0
- node version
  - v18.15.0
- yarn version
  - 3.5.1
- typescript version
  - 4.1.3

## steps

- create readwood app
  - typescript
- git init
- add README.mdro
- add License
- setup Tailwindcss
- create model
  - ShopNote
    - illustrate one to many relationship
  - Item
- scaffold
  - ShopNote
  - Item
  - note: creates and illustrate cells.
- generate home page
- generate layout
  - note: use layout in page rather than wrap
- generate components
  - ShopNoteCard
  - ShopNotesItemsDisplay
- services/sdl
- add mutations
  - note: demonstrate using mutation in page and component as well as regulary cell
- tests
- storybook

## Standard Redwoodjs items not used in this app

- authentication
- forms

## general

- tailwindcss
- postgresql
- heroicons
- tailwind/typography
- demonstrated - markdown use in code

## miscellaneaus

- This app illustrate using stock Rewoodjs. The only package addtions are for tailwindcss, heroicons, tailwind/typography.
  - You can easily not include heroicons. I just added it to illustrate easy addtions of unique icons.
- While "Design driven development" using storybook is effective in some cases, Redwood's hot reloading allows design driven development straight from running the component in the development server.
- Unique features
  - updates directly from the page, rather than going to another page and having to hit save.
  - help modal display content from markdown file.
  - illustrate debouncing of input field entry to prevent excessive database updates.
