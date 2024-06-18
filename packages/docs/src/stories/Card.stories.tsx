import { Card, CardProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  tags: ['autodocs'],

  args: {
    children: <Text>Textando o elemento Box</Text>,
  },

  argTypes: {
    children: {
      control: {
        type: null!,
      },
    },
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
