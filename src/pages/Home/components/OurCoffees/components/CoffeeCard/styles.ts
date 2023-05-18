import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const CoffeeImage = styled.img`
  margin-top: -3rem;
  width: 7.5rem;
  height: auto;
`

export const Heading = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.p`
  margin-top: 0.3rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
`

export const FeaturesCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.05rem;
  width: 100%;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const PriceContainer = styled.span`
  display: flex;
  gap: 0.1rem;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
`

export const DollarSign = styled.p`
  font-size: 0.9rem;
`

export const Price = styled.strong`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.35rem;
  margin: 0.75rem 0 1rem;

  > span {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 4px;
    padding: 0.3rem;
  }
`

export const ShopButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 8px;
  border: none;
  padding: 0.4rem;
  transition: background-color 300ms;

  &:hover {
    background-color: ${(props) => props.theme['purple-medium']};
  }

  &:focus {
    box-shadow: none;
  }
`

export const ShopButtonImage = styled.img`
  width: 1.365rem;
  height: 1.365rem;
`
