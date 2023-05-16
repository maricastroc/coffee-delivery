import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { ShopInfo } from './components/ShopInfo'
import { CheckoutContainer, CheckoutInfoContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutInfoContainer>
        <h2>Complete your order</h2>
        <Address />
        <Payment />
      </CheckoutInfoContainer>
      <ShopInfo />
    </CheckoutContainer>
  )
}
