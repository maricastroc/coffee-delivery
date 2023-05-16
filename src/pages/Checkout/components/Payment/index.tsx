import { useState } from 'react'
import {
  ButtonContainer,
  PaymentContainer,
  PaymentOptionsContainer,
  PaymentText,
  PaymentTextContainer,
} from './styles'
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'

export function Payment() {
  const [paymentType, setPaymentType] = useState('')

  return (
    <PaymentContainer>
      <PaymentText>
        <CurrencyDollar size={22} />
        <PaymentTextContainer>
          <h2>Payment</h2>
          <p>
            Payment is due upon delivery. Choose your preferred payment method.
          </p>
        </PaymentTextContainer>
      </PaymentText>
      <PaymentOptionsContainer>
        <ButtonContainer
          className={paymentType === 'credit' ? 'checked' : ''}
          onClick={() => setPaymentType('credit')}
        >
          <CreditCard size={16} />
          <p>Credit Card</p>
        </ButtonContainer>
        <ButtonContainer
          className={paymentType === 'debit' ? 'checked' : ''}
          onClick={() => setPaymentType('debit')}
        >
          <Bank size={16} />
          <p>Debit Card</p>
        </ButtonContainer>
        <ButtonContainer
          className={paymentType === 'money' ? 'checked' : ''}
          onClick={() => setPaymentType('money')}
        >
          <Money size={16} />
          <p>Money</p>
        </ButtonContainer>
      </PaymentOptionsContainer>
    </PaymentContainer>
  )
}
