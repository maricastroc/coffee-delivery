import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { ShopCard } from './components/ShopCard'
import {
  ConfirmButton,
  ShopCardContainer,
  ShopInfoBox,
  ShopInfoContainer,
  ShopInfoTextContainer,
} from './styles'
import { CoffeeCardProps } from '../../../Home/components/CoffeeCard'

export function ShopInfo() {
  const { itemsList } = useContext(CoffeeContext)
  return (
    <ShopInfoContainer>
      <h2>Selected coffees</h2>
      <ShopInfoBox>
        <ShopCardContainer>
          {itemsList.map((item: CoffeeCardProps) => {
            return (
              <>
                <ShopCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image_source={item.img_source}
                  price={item.price}
                />
                <span></span>
              </>
            )
          })}
        </ShopCardContainer>
        <ShopInfoTextContainer>
          <div>
            <p>Total itens</p>
            <span>$ 29.70</span>
          </div>
          <div>
            <p>Delivery</p>
            <span>$ 3.50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>$ 33.20</strong>
          </div>
        </ShopInfoTextContainer>
        <ConfirmButton>
          <p>Confirm delivery</p>
        </ConfirmButton>
      </ShopInfoBox>
    </ShopInfoContainer>
  )
}
