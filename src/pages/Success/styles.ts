import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  gap: 6.375rem;
`

export const ResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h2`
  font-size: 2rem;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Paragraph = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const InfoContainer = styled.div`
  padding: 2.5rem;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      ${(props) => props.theme['yellow-medium']},
      ${(props) => props.theme['purple-medium']}
    )
    1;
`

export const InfoWrapper = styled.div`
  display: flex;
  gap: 2.7rem;

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
  gap: 0.2rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-weight: 700;
  }
`

export const ImageContainer = styled.div`
  img {
    width: 30.75rem;
    height: auto;
  }
`
