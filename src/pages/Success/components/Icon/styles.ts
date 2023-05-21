import styled from 'styled-components'

import { ICONS_COLOR } from '.'

export type IconColorType = keyof typeof ICONS_COLOR

interface IconContainerStyleProps {
  iconColor: IconColorType
}

export const IconContainer = styled.div<IconContainerStyleProps>`
  background: ${(props) => props.theme[ICONS_COLOR[props.iconColor]]};
  color: ${(props) => props.theme['base-white']};

  height: 2rem;
  width: 2rem;
  padding: 8px;
  border-radius: 50%;
`
