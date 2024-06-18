import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nihil temporibus odit eaque atque pariatur, ea praesentium laboriosam quo deserunt nostrum neque quam exercitationem delectus modi dolorem optio non eum.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
