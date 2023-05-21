import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 5rem auto 0;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: auto;
    justify-content: space-between;
    gap: 4rem;
    margin: 5rem auto 0;
    padding: 0 5rem 5rem;
    align-items: flex-end;
  }

  @media (min-width: 1440px) {
    gap: 6.375rem;
    padding: 0 12rem;
  }
`

export const ResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 85vw;

  @media (min-width: 1024px) {
    width: auto;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['yellow-dark']};

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${(props) => props.theme['base-text']};

  @media (min-width: 480px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`

export const InfoContainer = styled.div`
  padding: 2rem 1.5rem;
  position: relative;
  margin: 0 auto;
  width: clamp(10rem, 85vw, 30rem);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid white;
    border-start-start-radius: 6px;
    border-end-end-radius: 6px;
    border-start-end-radius: 36px;
    border-end-start-radius: 36px;
    padding: 1.2px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme['yellow-medium']},
      ${(props) => props.theme['purple-medium']}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  }

  @media (min-width: 1024px) {
    width: 30rem;
    padding: 2.5rem;
  }

  @media (min-width: 1440px) {
    width: 32.8rem;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 2.7rem;

  &:not(:first-of-type) {
    margin-top: 1.8rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-weight: 700;
  }
`

export const LineWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const IconContainer = styled.div`
  padding: 0.5rem;
  border-radius: 50%;

  &.bg_purple {
    background-color: ${(props) => props.theme['purple-dark']};
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  p,
  strong {
    font-size: 0.85rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 0.85rem;
    font-weight: 700;
  }

  @media (min-width: 480px) {
    p,
    span,
    strong {
      font-size: 1rem;
    }
  }
`

export const ImageContainer = styled.div`
  img {
    width: clamp(10rem, 85vw, 25rem);
    margin-bottom: 5rem;
  }

  @media (min-width: 1024px) {
    img {
      width: 27rem;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    img {
      width: 30.75rem;
    }
  }
`
