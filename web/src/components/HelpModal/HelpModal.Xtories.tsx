// THIS STORY DOES NOT WORK BECAUSE OF THE LOAD OF THE MARKDOWN FILE

import type { Meta, StoryObj } from '@storybook/react'

import HelpModal from './HelpModal'

const meta: Meta<typeof HelpModal> = {
  component: HelpModal,
}

export default meta

type Story = StoryObj<typeof HelpModal>

export const Primary: Story = {}
