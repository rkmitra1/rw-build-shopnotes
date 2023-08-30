import { render } from '@redwoodjs/testing/web'

import ShopNoteItemsDisplay from './ShopNoteItemsDisplay'
import { standard } from './ShopNoteItemsDisplay.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShopNoteItemsDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShopNoteItemsDisplay item={standard().shopnote.items[0]} />)
    }).not.toThrow()
  })
})
