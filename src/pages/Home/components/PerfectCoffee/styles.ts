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

  @media (min-width: 980px) {
    flex-direction: row;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    margin: 0 auto;
  }
`

export const Icon = styled.img`
  margin-top: 4rem;
  max-width: clamp(10rem, 90vw, 25rem);
  height: auto;

  @media (min-width: 1440px) {
    margin-top: 0;
    max-width: none;
    width: 29.75rem;
  }
`

export const PerfectCoffeeText = styled.div`
  text-align: center;
  width: clamp(10rem, 90vw, 30rem);

  @media (min-width: 980px) {
    text-align: left;
    width: 100%;
  }

  @media (min-width: 1440px) {
    text-align: left;
    width: 100%;
  }
`

export const Heading = styled.h2`
  font-size: clamp(2.2rem, 11vw, 2.7rem);
  line-height: 1.2em;
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['base-title']};

  @media (min-width: 980px) {
    width: 80%;
    font-size: 3rem;
    line-height: 3.5rem;
  }

  @media (min-width: 1440px) {
    width: 80%;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`

export const Paragraph = styled.p`
  margin-top: 1.5rem;
  line-height: 1.3em;
  font-size: clamp(1.05rem, 1.05rem, 1.15rem);
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 3rem;

  @media (min-width: 980px) {
    width: 80%;
    font-size: 1.25rem;
    line-height: 1.8rem;
    margin-bottom: 4.12rem;
  }

  @media (min-width: 1440px) {
    width: 80%;
    font-size: 1.25rem;
    line-height: 1.8rem;
    margin-bottom: 4.12rem;
  }
`
