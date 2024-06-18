import { ComponentProps } from 'react'

import { styled } from '../styles'

export const Card = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface CardProps extends ComponentProps<typeof Card> {}
