import { render } from '@redwoodjs/testing/web'

import HelpModal from './HelpModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HelpModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelpModal />)
    }).not.toThrow()
  })
})
