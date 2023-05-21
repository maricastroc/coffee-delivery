import styled from 'styled-components'

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
`

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  width: clamp(10rem, 90vw, 50rem);

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0 12rem;
    width: 100%;
  }
`

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1440px) {
    gap: 0.75rem;
  }
`
export const Heading = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  margin-bottom: 0.975rem;

  @media (min-width: 1440px) {
    font-size: 1.125rem;
  }
`

export const ShopInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`

export const Error = styled.div`
  width: 100%;

  p {
    color: ${(props) => props.theme['purple-medium']};
    text-align: end;
  }
`
