import type { Meta, StoryObj } from '@storybook/react'

import HelpModal from './HelpModal'

const meta: Meta<typeof HelpModal> = {
  component: HelpModal,
}

export default meta

type Story = StoryObj<typeof HelpModal>

export const Primary: Story = {
  args: {
    initialShowModal: true,
  },
}
