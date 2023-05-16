import { useContext } from 'react'
import { CoffeeAndButtonContext } from '../../../../contexts/CoffeeAndButtonContext'
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
  const { itemsList } = useContext(CoffeeAndButtonContext)
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
                  subtitle={item.subtitle}
                  tags={item.tags}
                  img_source={item.img_source}
                  price={item.price}
                  quantity={item.quantity}
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
