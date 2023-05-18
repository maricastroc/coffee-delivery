import {
  BenefitsContainer,
  BenefitItem,
  BenefitsWrapper,
  Paragraph,
  Icon,
  IconContainer,
} from './styles'

export function Benefits() {
  return (
    <BenefitsContainer>
      <BenefitsWrapper>
        <BenefitItem>
          <IconContainer className="bg-orange">
            <Icon src="/assets/icons/icon-shop-small.svg" alt="" />
          </IconContainer>
          <Paragraph>Simple and secure purchase</Paragraph>
        </BenefitItem>
        <BenefitItem>
          <IconContainer className="bg-yellow">
            <Icon src="/assets/icons/icon-coffee-small.svg" alt="" />
          </IconContainer>
          <Paragraph>Fast and tracked delivery</Paragraph>
        </BenefitItem>
      </BenefitsWrapper>
      <BenefitsWrapper>
        <BenefitItem>
          <IconContainer className="bg-gray">
            <Icon src="/assets/icons/icon-delivery-small.svg" alt="" />
          </IconContainer>
          <Paragraph>The packaging keeps the coffee intact</Paragraph>
        </BenefitItem>
        <BenefitItem>
          <IconContainer className="bg-purple">
            <Icon src="/assets/icons/icon-package-small.svg" alt="" />
          </IconContainer>
          <Paragraph>You get a freshly brewed coffee</Paragraph>
        </BenefitItem>
      </BenefitsWrapper>
    </BenefitsContainer>
  )
}
