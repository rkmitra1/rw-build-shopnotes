import { render } from '@redwoodjs/testing/web'

import ShopNotesLayout from './ShopNotesLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ShopNotesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShopNotesLayout />)
    }).not.toThrow()
  })
})
