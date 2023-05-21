import styled from 'styled-components'

export const ShopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    width: 100%;
    text-align: center;
    text-decoration: none;
  }
`

export const Heading = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.975rem;

  @media (min-width: 1440px) {
    font-size: 1.125rem;
    margin-top: 0;
  }
`

export const ShopInfoBox = styled.div`
  width: clamp(10rem, 90vw, 50rem);
  padding: 1rem;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 480px) {
    padding: 2.5rem;
  }

  @media (min-width: 1440px) {
    padding: 2.5rem;
    width: 28rem;
  }
`

export const ShopCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Separator = styled.span`
  width: 100%;
  height: 0.02rem;
  background-color: ${(props) => props.theme['base-button']};
`

export const ShopInfoTextContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};

    > p {
      font-size: 1rem;
    }

    > span {
      font-size: 1rem;
    }

    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  @media (min-width: 1440px) {
    div {
      > p {
        font-size: 0.875rem;
      }

      > span {
        font-size: 0.875rem;
      }

      > strong {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme['base-text']};
`

export const ConfirmButton = styled.button`
  margin-top: 1.5rem;
  cursor: pointer;
  display: flex;
  background-color: ${(props) => props.theme['yellow-medium']};
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  transition: 300ms;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const ConfirmButtonLabel = styled.p`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme['base-white']};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
`
