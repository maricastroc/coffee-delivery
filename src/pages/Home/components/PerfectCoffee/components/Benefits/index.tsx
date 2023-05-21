import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  BenefitsContainer,
  BenefitItem,
  BenefitsWrapper,
  Paragraph,
  IconContainer,
} from './styles'

const benefits = [
  {
    icon: ShoppingCart,
    color: 'orange',
    text: 'Simple and secure purchase',
  },
  {
    icon: Coffee,
    color: 'yellow',
    text: 'Fast and tracked delivery',
  },
  {
    icon: Timer,
    color: 'gray',
    text: 'The packaging keeps the coffee intact',
  },
  {
    icon: Package,
    color: 'purple',
    text: 'You get a freshly brewed coffee',
  },
]

export function Benefits() {
  return (
    <BenefitsContainer>
      {benefits.map((benefit, index) => (
        <BenefitsWrapper key={index}>
          <BenefitItem>
            <IconContainer className={`bg-${benefit.color}`}>
              <benefit.icon weight="fill" size={16} className="icon" />
            </IconContainer>
            <Paragraph>{benefit.text}</Paragraph>
          </BenefitItem>
        </BenefitsWrapper>
      ))}
    </BenefitsContainer>
  )
}
