import { useContext } from 'react'

import {
  Container,
  Heading,
  IconContainer,
  Option,
  OptionLabel,
  OptionsSection,
  Paragraph,
  TextSection,
  TextContainer,
} from './styles'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { CheckoutContext } from '../../../../contexts/CheckoutContext'

const paymentOptions = [
  { type: 'Credit Card', label: 'Credit Card', icon: <CreditCard size={22} /> },
  { type: 'Debit Card', label: 'Debit Card', icon: <Bank size={22} /> },
  { type: 'Money', label: 'Money', icon: <Money size={22} /> },
]

export function PaymentForm() {
  const { paymentMethod, setPaymentMethod } = useContext(CheckoutContext)

  const handlePaymentMethodChange = (type: string) => {
    setPaymentMethod(type)
  }

  return (
    <Container>
      <TextSection>
        <IconContainer>
          <CurrencyDollar size={22} />
        </IconContainer>
        <TextContainer>
          <Heading>Payment</Heading>
          <Paragraph>
            Payment is due upon delivery. Choose your preferred payment method.
          </Paragraph>
        </TextContainer>
      </TextSection>
      <OptionsSection>
        {paymentOptions.map((option) => (
          <Option
            key={option.type}
            type="button"
            className={paymentMethod === option.type ? 'checked' : ''}
            onClick={() => handlePaymentMethodChange(option.type)}
          >
            <IconContainer>{option.icon}</IconContainer>
            <OptionLabel>{option.label}</OptionLabel>
          </Option>
        ))}
      </OptionsSection>
    </Container>
  )
}
