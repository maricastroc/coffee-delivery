import { useState } from 'react'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { ShopInformation } from './components/ShopInformation'

import { CheckoutContainer, CheckoutInfoContainer, Heading } from './styles'

export type AddressProps = {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')

  console.log(paymentMethod)

  return (
    <CheckoutContainer>
      <CheckoutInfoContainer>
        <Heading>Complete your order</Heading>
        <AddressForm />
        <PaymentForm
          onSelect={(type: string) => {
            setPaymentMethod(type)
          }}
        />
      </CheckoutInfoContainer>
      <ShopInformation />
    </CheckoutContainer>
  )
}
