import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 1440px) {
    width: 40rem;
    padding: 2.5rem;
  }
`

export const AddressText = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 30px;
  }
`

export const TextContainer = styled.div`
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

export const AddressInfoContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    ${inputStyles}
  }

  @media (min-width: 1440px) {
    input {
      &[name='cep'],
      &[name='number'],
      &[name='neighborhood'] {
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

    input[name='number'] {
      width: 33%;
    }
  }
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

  input {
    padding-left: 0.75rem;
    min-width: 100%;
    border: none;
  }

  span {
    position: absolute;
    top: 35%;
    left: 73%;
    align-self: flex-end;
    font-size: 0.75rem;
    font-style: italic;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  @media (min-width: 1440px) {
    width: 67%;

    span {
      left: 83%;
    }
  }
`
