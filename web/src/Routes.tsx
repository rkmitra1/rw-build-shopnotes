// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Items" titleTo="items" buttonLabel="New Item" buttonTo="newItem">
        <Route path="/items/new" page={ItemNewItemPage} name="newItem" />
        <Route path="/items/{id:Int}/edit" page={ItemEditItemPage} name="editItem" />
        <Route path="/items/{id:Int}" page={ItemItemPage} name="item" />
        <Route path="/items" page={ItemItemsPage} name="items" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ShopNotes" titleTo="shopNotes" buttonLabel="New ShopNote" buttonTo="newShopNote">
        <Route path="/shop-notes/new" page={ShopNoteNewShopNotePage} name="newShopNote" />
        <Route path="/shop-notes/{id:Int}/edit" page={ShopNoteEditShopNotePage} name="editShopNote" />
        <Route path="/shop-notes/{id:Int}" page={ShopNoteShopNotePage} name="shopNote" />
        <Route path="/shop-notes" page={ShopNoteShopNotesPage} name="shopNotes" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
