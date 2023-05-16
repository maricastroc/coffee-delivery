import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 6rem;
  margin-top: 2.5rem;

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    margin-bottom: 0.975rem;
  }

  @media (min-width: 1440px) {
    gap: 0.75rem;
  }
`
