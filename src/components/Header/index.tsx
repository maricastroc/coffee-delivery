import { NavLink } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { useLocation } from '../../hooks/useLocation'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

import {
  ButtonShop,
  ButtonShopIcon,
  ButtonShopLabel,
  FeaturesContainer,
  HeaderContainer,
  HomeIcon,
  LocationContainer,
  LocationIcon,
} from './styles'

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
          <LocationIcon src="/assets/icons/icon-location.svg" alt="" />
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
            <ButtonShopIcon src="/assets/icons/icon-shop.svg" alt="" />
          </ButtonShop>
        </NavLink>
      </FeaturesContainer>
    </HeaderContainer>
  )
}
