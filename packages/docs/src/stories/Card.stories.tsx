import { Card, CardProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Card',
  component: Card,

  args: {
    children: (
      <>
        <span>Textando o elemento Box</span>
      </>
    ),
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
