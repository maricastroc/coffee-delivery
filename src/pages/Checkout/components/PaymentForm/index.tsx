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
  { type: 'credit', label: 'Credit Card', icon: <CreditCard size={22} /> },
  { type: 'debit', label: 'Debit Card', icon: <Bank size={22} /> },
  { type: 'money', label: 'Money', icon: <Money size={22} /> },
]

interface PaymentFormProps {
  onSelect: (type: string) => void
}

export function PaymentForm(props: PaymentFormProps) {
  const [paymentType, setPaymentType] = useState('')

  const handlePaymentTypeChange = (type: string) => {
    setPaymentType(type)
    props.onSelect(type)
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
