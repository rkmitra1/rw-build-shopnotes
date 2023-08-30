import { fireEvent, render, waitFor } from '@redwoodjs/testing/web'

import ShopNoteCard from './ShopNoteCard'
import { standard } from './ShopNoteCard.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShopNoteCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShopNoteCard shopnote={standard().shopnote} />)
    }).not.toThrow()
  })

  it('renders a delete button', () => {
    const { getByText } = render(
      <ShopNoteCard shopnote={standard().shopnote} />
    )
    expect(getByText('Delete')).toBeInTheDocument()
  })

  it('renders an clear button', () => {
    const { getByText } = render(
      <ShopNoteCard shopnote={standard().shopnote} />
    )
    expect(getByText('Clear')).toBeInTheDocument()
  })

  it('display confirmation message on Clear click', () => {
    const { getByText } = render(
      <ShopNoteCard shopnote={standard().shopnote} />
    )
    fireEvent.click(getByText('Clear'))
    waitFor(() => {
      expect(getByText('Are you sure', { exact: false })).toBeInTheDocument()
    })
  })
})
