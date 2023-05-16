import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PerfectCoffeeContainer = styled.div`
  padding: 4rem 1rem;
  min-width: 100%;
  background-image: url('/assets/background-benefits.png');
  background-size: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;

  @media (min-width: 980px) {
    text-align: left;
    padding: 5.85rem 5rem;
  }

  @media (min-width: 1440px) {
    text-align: left;
    padding: 5.85rem 12rem;
  }
`

export const PerfectCoffeeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    margin-top: 4rem;
    max-width: clamp(10rem, 90vw, 25rem);
    height: auto;
  }

  @media (min-width: 980px) {
    flex-direction: row;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    margin: 0 auto;

    > img {
      margin-top: 0;
      max-width: none;
      width: 29.75rem;
    }
  }
`

export const PerfectCoffeeText = styled.div`
  text-align: center;
  width: clamp(10rem, 90vw, 30rem);

  > h2 {
    font-size: clamp(2.2rem, 11vw, 2.7rem);
    line-height: 1.2em;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
  }

  > p {
    margin-top: 1.5rem;
    line-height: 1.3em;
    font-size: clamp(1.05rem, 1.05rem, 1.15rem);
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3rem;
  }

  @media (min-width: 980px) {
    text-align: left;
    width: 100%;

    > h2 {
      width: 80%;
      font-size: 3rem;
      line-height: 3.5rem;
    }

    > p {
      width: 80%;
      font-size: 1.25rem;
      line-height: 1.8rem;
      margin-bottom: 4.12rem;
    }
  }

  @media (min-width: 1440px) {
    text-align: left;
    width: 100%;

    > h2 {
      width: 80%;
      font-size: 3rem;
      line-height: 3.5rem;
    }

    > p {
      width: 80%;
      font-size: 1.25rem;
      line-height: 1.8rem;
      margin-bottom: 4.12rem;
    }
  }
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span {
    display: flex;
    align-items: center;
    padding: 0.4rem;
    border-radius: 50%;

    > img {
      width: 1rem;
    }
  }

  .bg-orange {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  .bg-gray {
    background-color: ${(props) => props.theme['base-text']};
  }

  .bg-yellow {
    background-color: ${(props) => props.theme['yellow-medium']};
  }

  .bg-purple {
    background-color: ${(props) => props.theme['purple-dark']};
  }

  > p {
    color: ${(props) => props.theme['base-text']};
  }
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
