import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const OurCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.85rem 1.5rem;
  margin: 0 auto;
  align-items: center;
  text-align: center;

  > h2 {
    width: 80%;
    font-size: 2rem;
    line-height: 3.5rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 2rem;
  }

  > div {
    margin-top: 2.15rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 680px) {
    > div {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }

  @media (min-width: 980px) {
    > div {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
    }
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    text-align: left;
    padding: 5.85rem 12rem;

    > h2 {
      width: 100%;
    }

    > div {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`
