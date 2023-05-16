import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1rem;
  width: clamp(10rem, 90vw, 45rem);

  a {
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  img {
    width: 4rem;
  }

  @media (min-width: 680px) {
    padding: 2.5rem 3rem;
    width: 100%;

    img {
      width: 5.3rem;
      height: auto;
    }
  }

  @media (min-width: 980px) {
    padding: 2.5rem 5rem;
    width: 100%;

    img {
      width: 5.3rem;
      height: auto;
    }
  }

  @media (min-width: 1440px) {
    padding: 2.5rem 12rem;
    width: 100%;

    img {
      width: 5.3rem;
      height: auto;
    }
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const InfoLocation = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 0.3rem;
  padding: 0.4rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};

  img {
    width: 1.2rem;
  }

  @media (min-width: 1440px) {
    padding: 0.625rem;
    font-size: 0.875rem;

    img {
      width: 1.4rem;
    }
  }
`

export const ButtonShop = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border: none;
  border-radius: 8px;

  img {
    width: 1.2rem;
  }

  @media (min-width: 1440px) {
    padding: 0.625rem;
    font-size: 0.875rem;

    img {
      width: 1.4rem;
    }
  }
`
