import { render } from '@redwoodjs/testing/web'

import HelpModal from './HelpModal'

describe('HelpModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelpModal />)
    }).not.toThrow()
  })
})
