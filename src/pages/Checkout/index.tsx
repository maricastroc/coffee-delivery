import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { ShopInformation } from './components/ShopInformation'
import { CheckoutContainer, CheckoutInfoContainer, Heading } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutInfoContainer>
        <Heading>Complete your order</Heading>
        <AddressForm />
        <PaymentForm />
      </CheckoutInfoContainer>
      <ShopInformation />
    </CheckoutContainer>
  )
}
