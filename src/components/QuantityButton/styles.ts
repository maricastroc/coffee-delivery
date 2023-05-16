import styled from 'styled-components'

export const QuantityButtonContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 8px;
  padding: 0.45rem;

  > p {
    color: ${(props) => props.theme['base-title']};
  }

  > svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple-medium']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
