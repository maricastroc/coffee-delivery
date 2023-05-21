import { NavLink } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { useLocation } from '../../hooks/useLocation'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

import {
  ButtonShop,
  ButtonShopLabel,
  FeaturesContainer,
  HeaderContainer,
  HomeIcon,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const { itemsList } = useContext(CoffeeListContext)
  const { city, uf } = useLocation()

  const totalQuantity = useMemo(() => {
    return itemsList.reduce((total, item) => total + (item.quantity || 0), 0)
  }, [itemsList])

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <HomeIcon src="/assets/icons/logo.svg" alt="Logo_Img" />
      </NavLink>
      <FeaturesContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" className="mapPin_icon" />
          <p>
            {city} {uf}
          </p>
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout">
          <ButtonShop>
            {totalQuantity > 0 && (
              <ButtonShopLabel>
                <p>{totalQuantity}</p>
              </ButtonShopLabel>
            )}
            <ShoppingCart size={22} weight="fill" className="shopCart_icon" />
          </ButtonShop>
        </NavLink>
      </FeaturesContainer>
    </HeaderContainer>
  )
}
