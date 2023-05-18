import { useContext } from 'react'
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

export function ShopInformation() {
  const { itemsList } = useContext(CoffeeListContext)
  return (
    <ShopInfoContainer>
      <Heading>Selected coffees</Heading>
      <ShopInfoBox>
        <ShopCardsContainer>
          {itemsList.map((item: CoffeeCardProps) => {
            return (
              <>
                <ShopCard key={item.id} {...item} />
                <Separator></Separator>
              </>
            )
          })}
        </ShopCardsContainer>
        <ShopInfoTextContainer>
          <TextContainer>
            <p>Total itens</p>
            <span>$ 29.70</span>
          </TextContainer>
          <TextContainer>
            <p>Delivery</p>
            <span>$ 3.50</span>
          </TextContainer>
          <TextContainer>
            <strong>Total</strong>
            <strong>$ 33.20</strong>
          </TextContainer>
        </ShopInfoTextContainer>
        <ConfirmButton>
          <ConfirmButtonLabel>Confirm delivery</ConfirmButtonLabel>
        </ConfirmButton>
      </ShopInfoBox>
    </ShopInfoContainer>
  )
}
