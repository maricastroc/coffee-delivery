import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: clamp(10rem, 90vw, 50rem);
  padding: 1.5rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 1440px) {
    padding: 2.5rem;
    width: 100%;
  }
`

export const AddressText = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const IconContainer = styled.span`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 30px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const Heading = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};

  @media (min-width: 1440px) {
    font-size: 1rem;
  }
`

export const Paragraph = styled.p`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  @media (min-width: 1440px) {
    font-size: 0.875rem;
  }
`

export const BaseInput = styled.input`
  padding: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-label']};
`

const inputStyles = css`
  padding: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};
  border: none;
  border-radius: 8px;
`

export const Input = styled.input`
  ${inputStyles}

  &[name='complement'] {
    padding-left: 0.75rem;
    min-width: 100%;
    border: none;
  }

  @media (min-width: 1440px) {
    &[name='zip'],
    &[name='number'],
    &[name='neighborhood'],
    &[name='number'] {
      width: 33%;
    }

    &[name='complement'] {
      width: 67%;
    }

    &[name='city'] {
      width: 52%;
    }

    &[name='uf'] {
      width: 15%;
    }
  }
`

export const AddressInfoContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

export const ComplementContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 8px;
  width: 100%;

  @media (min-width: 1440px) {
    width: 67%;
  }
`

export const Span = styled.span`
  position: absolute;
  top: 35%;
  left: 73%;
  align-self: flex-end;
  font-size: 0.75rem;
  font-style: italic;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  @media (min-width: 1440px) {
    left: 83%;
  }
`
