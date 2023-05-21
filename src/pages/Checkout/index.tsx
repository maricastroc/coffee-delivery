import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { AddressForm, AddressType } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { ShopInformation } from './components/ShopInformation'

import {
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutWrapper,
  Heading,
  Error,
  ShopInformationContainer,
} from './styles'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { useContext, useState } from 'react'

export type FormDataType = AddressType

export function Checkout() {
  const navigate = useNavigate()
  const { paymentMethod, handleCheckout } = useContext(CheckoutContext)
  const [paymentMissing, setPaymentMissing] = useState(false)

  const methods = useForm<FormDataType>()

  const { handleSubmit } = methods

  const onSubmit = (data: AddressType) => {
    if (!paymentMethod) {
      setPaymentMissing(true)
    }

    handleCheckout({
      address: data,
      paymentMethod,
    })

    navigate('/checkout/success')
  }

  return (
    <CheckoutWrapper>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <CheckoutInfoContainer>
          <Heading>Complete your order</Heading>
          <FormProvider {...methods}>
            <AddressForm />
          </FormProvider>
          <PaymentForm onSelect={() => setPaymentMissing(false)} />
        </CheckoutInfoContainer>
        <ShopInformationContainer>
          <ShopInformation />
          {paymentMissing && (
            <Error>
              <p>* Please inform your payment method</p>
            </Error>
          )}
        </ShopInformationContainer>
      </CheckoutContainer>
    </CheckoutWrapper>
  )
}
