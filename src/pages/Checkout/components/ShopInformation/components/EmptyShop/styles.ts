import styled from 'styled-components'

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 90%;
    color: ${({ theme }) => theme['base-text']};
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme['purple-medium']};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }

    &:focus {
      color: ${({ theme }) => theme['purple-dark']};
      box-shadow: none;
    }
  }

  @media (min-width: 1440px) {
    line-height: 130%;
    gap: 3.5rem;
  }
`
