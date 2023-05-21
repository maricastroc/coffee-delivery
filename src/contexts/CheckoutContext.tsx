import { createContext, ReactNode, useState } from 'react'
import { AddressType } from '../pages/Checkout/components/AddressForm'

interface HandleCheckoutType {
  address: AddressType
  paymentMethod: string
}

interface CheckoutContextData {
  paymentMethod: string
  setPaymentMethod: (payment: string) => void
  checkoutData: HandleCheckoutType | null
  handleCheckout: (values: HandleCheckoutType) => void
}

export const CheckoutContext = createContext<CheckoutContextData>(
  {} as CheckoutContextData,
)

interface CheckoutContextProviderProps {
  children: ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [checkoutData, setCheckoutData] = useState<HandleCheckoutType | null>(
    null,
  )

  function handleCheckout({ address, paymentMethod }: HandleCheckoutType) {
    setCheckoutData({ address, paymentMethod })
  }

  const checkoutContextValue: CheckoutContextData = {
    paymentMethod,
    setPaymentMethod,
    handleCheckout,
    checkoutData,
  }

  return (
    <CheckoutContext.Provider value={checkoutContextValue}>
      {children}
    </CheckoutContext.Provider>
  )
}
