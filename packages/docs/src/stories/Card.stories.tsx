import { Card, CardProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Card',
  component: Card,

  args: {
    children: <Text>Textando o elemento Box</Text>,
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
