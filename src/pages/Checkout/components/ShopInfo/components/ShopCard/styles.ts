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

  img {
    width: 4rem;
    height: auto;
  }
`

export const ShopCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
    gap: 5.5rem;

    > p {
      width: auto;
    }
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`
