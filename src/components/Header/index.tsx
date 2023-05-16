import {
  InfoLocation,
  ButtonShop,
  FeaturesContainer,
  HeaderContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useLocation } from '../../hooks/useLocation'

export function Header() {
  const { city, uf } = useLocation()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src="/assets/icons/logo.svg" alt="Logo_Img" />
      </NavLink>
      <FeaturesContainer>
        <InfoLocation>
          <img src="/assets/icons/icon-location.svg" alt="" />
          <p>
            {city} {uf}
          </p>
        </InfoLocation>
        <NavLink to="/checkout" title="Checkout">
          <ButtonShop>
            <img src="/assets/icons/icon-shop.svg" alt="" />
          </ButtonShop>
        </NavLink>
      </FeaturesContainer>
    </HeaderContainer>
  )
}
