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

import ShopNoteCard from './ShopNoteCard'
import { standard } from './ShopNoteCard.mock'

const meta: Meta<typeof ShopNoteCard> = {
  component: ShopNoteCard,
}

export default meta

type Story = StoryObj<typeof ShopNoteCard>

export const Primary: Story = {
  args: {
    shopnote: standard().shopnote,
  },
}
