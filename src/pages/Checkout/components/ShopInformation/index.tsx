import { useContext, useState, useEffect, useMemo } from 'react'
import { CoffeeListContext } from '../../../../contexts/CoffeeListContext'

import {
  ConfirmButton,
  ConfirmButtonLabel,
  Heading,
  Separator,
  ShopCardsContainer,
  ShopInfoBox,
  ShopInfoContainer,
  ShopInfoTextContainer,
  TextContainer,
} from './styles'

import { ShopCard } from './components/ShopCard'
import { CoffeeCardProps } from '../../../Home/components/OurCoffees/components/CoffeeCard'
import { EmptyList } from './components/EmptyShop'

import { COFFEES_UF_STORAGE_KEY } from '../../../../hooks/useLocation'
import deliveryPriceByStateJSON from '../../../../data/delivery-price-by-state.json'

export function ShopInformation() {
  const { itemsList } = useContext(CoffeeListContext)
  const [isListEmpty, setIsListEmpty] = useState(false)

  useEffect(() => {
    itemsList.length > 0 ? setIsListEmpty(false) : setIsListEmpty(true)
  }, [itemsList.length, setIsListEmpty])

  const deliveryPrice = useMemo(() => {
    const UF = localStorage.getItem(COFFEES_UF_STORAGE_KEY)

    if (UF) {
      const deliveryValue =
        deliveryPriceByStateJSON[UF as keyof typeof deliveryPriceByStateJSON]

      return deliveryValue
    }

    return 0
  }, [])

  const subtotal = useMemo(() => {
    return itemsList.reduce((acc, coffee) => {
      const coffeePrice = parseFloat(coffee.price) * coffee.quantity

      return acc + coffeePrice
    }, 0)
  }, [itemsList])

  const subtotalFormatted = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(subtotal)

  const deliveryPriceFormatted = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(deliveryPrice)

  const totalPrice = useMemo(() => {
    return subtotal + deliveryPrice
  }, [deliveryPrice, subtotal])

  const totalPriceFormatted = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice)

  return (
    <ShopInfoContainer>
      <Heading>Selected coffees</Heading>
      <ShopInfoBox>
        <ShopCardsContainer>
          {!isListEmpty ? (
            itemsList.map((item: CoffeeCardProps) => {
              return (
                <>
                  <ShopCard key={item.id} {...item} />
                  <Separator></Separator>
                </>
              )
            })
          ) : (
            <EmptyList />
          )}
        </ShopCardsContainer>
        {!isListEmpty && (
          <>
            <ShopInfoTextContainer>
              <TextContainer>
                <p>Total itens</p>
                <span>{subtotalFormatted}</span>
              </TextContainer>
              <TextContainer>
                <p>Delivery</p>
                <span>{deliveryPriceFormatted}</span>
              </TextContainer>
              <TextContainer>
                <strong>Total</strong>
                <strong>{totalPriceFormatted}</strong>
              </TextContainer>
            </ShopInfoTextContainer>
            <ConfirmButton type="submit">
              <ConfirmButtonLabel>Confirm delivery</ConfirmButtonLabel>
            </ConfirmButton>
          </>
        )}
      </ShopInfoBox>
    </ShopInfoContainer>
  )
}
