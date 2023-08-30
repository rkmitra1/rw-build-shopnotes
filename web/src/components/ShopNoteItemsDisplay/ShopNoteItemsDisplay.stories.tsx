// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { back } from '@redwoodjs/router'

import ShopNoteItemsDisplay from './ShopNoteItemsDisplay'
import { standard } from './ShopNoteItemsDisplay.mock'

const meta: Meta<typeof ShopNoteItemsDisplay> = {
  component: ShopNoteItemsDisplay,
  decorators: [
    (Story) => (
      <div className="h-12 w-1/2 bg-blue-500">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ShopNoteItemsDisplay>

export const Primary: Story = {
  args: {
    item: standard().shopnote.items[0],
  },
}
