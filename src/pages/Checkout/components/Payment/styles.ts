import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding: 1.5rem;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 1440px) {
    padding: 2.5rem;
    width: 40rem;
  }
`

export const PaymentText = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const PaymentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 0.3rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-text']};
    text-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 1440px) {
    p {
      font-size: 0.875rem;
    }
  }
`

export const PaymentOptionsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .checked {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme['purple-dark']};
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: solid 2px transparent;
  border-radius: 8px;
  width: 100%;
  transition: 300ms;

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    box-shadow: none;
  }

  @media (min-width: 1440px) {
    width: 33%;
  }
`
