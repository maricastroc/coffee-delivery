import { NavLink } from 'react-router-dom'
import { useLocation } from '../../hooks/useLocation'

import {
  ButtonShop,
  ButtonShopIcon,
  FeaturesContainer,
  HeaderContainer,
  HomeIcon,
  LocationContainer,
  LocationIcon,
} from './styles'

export function Header() {
  const { city, uf } = useLocation()

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
            <ButtonShopIcon src="/assets/icons/icon-shop.svg" alt="" />
          </ButtonShop>
        </NavLink>
      </FeaturesContainer>
    </HeaderContainer>
  )
}
