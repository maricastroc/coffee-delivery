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
  ShopInformationContainer,
} from './styles'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { useContext } from 'react'

export type FormDataType = AddressType

export function Checkout() {
  const navigate = useNavigate()

  const { paymentMethod, setPaymentMethod, handleCheckout } =
    useContext(CheckoutContext)

  const methods = useForm<FormDataType>()

  const { handleSubmit } = methods

  function verifyPayment(paymentMethod: string) {
    if (
      paymentMethod !== 'Credit Card' &&
      paymentMethod !== 'Debit Card' &&
      paymentMethod !== 'Money'
    ) {
      setPaymentMethod('waiting')
    } else {
      setPaymentMethod(paymentMethod)
    }
  }

  function onSubmit(data: AddressType) {
    verifyPayment(paymentMethod)

    if (paymentMethod !== '' && paymentMethod !== 'waiting') {
      handleCheckout({
        address: data,
        paymentMethod,
      })

      navigate('/checkout/success')
    }
  }

  return (
    <CheckoutWrapper>
      <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
        <CheckoutInfoContainer>
          <Heading>Complete your order</Heading>
          <FormProvider {...methods}>
            <AddressForm />
          </FormProvider>
          <PaymentForm />
        </CheckoutInfoContainer>
        <ShopInformationContainer>
          <ShopInformation />
        </ShopInformationContainer>
      </CheckoutContainer>
    </CheckoutWrapper>
  )
}
