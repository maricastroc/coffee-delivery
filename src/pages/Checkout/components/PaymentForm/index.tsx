import { useState } from 'react'

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

const paymentOptions = [
  { type: 'credit', label: 'Credit Card', icon: <CreditCard size={16} /> },
  { type: 'debit', label: 'Debit Card', icon: <Bank size={16} /> },
  { type: 'money', label: 'Money', icon: <Money size={16} /> },
]

export function PaymentForm() {
  const [paymentType, setPaymentType] = useState('')

  const handlePaymentTypeChange = (type: string) => {
    setPaymentType(type)
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
            className={paymentType === option.type ? 'checked' : ''}
            onClick={() => handlePaymentTypeChange(option.type)}
          >
            <IconContainer>{option.icon}</IconContainer>
            <OptionLabel>{option.label}</OptionLabel>
          </Option>
        ))}
      </OptionsSection>
    </Container>
  )
}
