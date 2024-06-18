import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],

  args: {},
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/lamenkazu.png',
    alt: 'Erick Etiene',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
