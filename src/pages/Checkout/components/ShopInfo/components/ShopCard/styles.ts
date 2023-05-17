import styled from 'styled-components'

export const ShopCardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  width: 100%;

  img {
    width: 4rem;
    height: auto;
  }
`

export const ShopCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  > p {
    width: 60%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > strong {
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }

  @media (min-width: 1440px) {
    display: flex;

    > p {
      width: auto;
    }
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  transition: 300ms;

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
