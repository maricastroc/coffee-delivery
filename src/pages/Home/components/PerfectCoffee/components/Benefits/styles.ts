import styled from 'styled-components'

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`

export const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 50%;

  .icon {
    color: ${(props) => props.theme['base-white']};
  }

  &.bg-orange {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &.bg-gray {
    background-color: ${(props) => props.theme['base-text']};
  }

  &.bg-yellow {
    background-color: ${(props) => props.theme['yellow-medium']};
  }

  &.bg-purple {
    background-color: ${(props) => props.theme['purple-dark']};
  }
`

export const Icon = styled.img`
  width: 1rem;
`

export const Paragraph = styled.p`
  color: ${(props) => props.theme['base-text']};
`
