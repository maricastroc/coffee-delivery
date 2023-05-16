import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import {
  CoffeeCardContainer,
  ShopButton,
  TagsContainer,
  FeaturesCardContainer,
} from './styles'
import { QuantityButton } from '../../../../components/QuantityButton'
import { CoffeeAndButtonContext } from '../../../../contexts/CoffeeAndButtonContext'

export interface CoffeeCardProps {
  id: number
  title: string
  subtitle: string
  tags: string[]
  img_source: string
  price: string
  quantity: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(props.quantity)

  useEffect(() => {
    console.log(quantity)
  }, [quantity])

  const { addCoffeeItem, removeCoffeeItem } = useContext(CoffeeAndButtonContext)

  const handleSetCoffeeItem = (operation: string) => {
    if (operation === 'add') {
      addCoffeeItem(props)
      setQuantity(quantity + 1)
    } else {
      removeCoffeeItem(props)
      setQuantity(quantity - 1)
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={props.img_source} alt="" />
      <TagsContainer>
        {props.tags.map((item) => {
          return <span key={item}>{item}</span>
        })}
      </TagsContainer>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <FeaturesCardContainer>
        <span>
          <p>$</p>
          <strong>{props.price}</strong>
        </span>
        <div>
          <QuantityButton
            id={props.id}
            quantity={props.quantity}
            onClick={handleSetCoffeeItem}
          />
          <NavLink to="/checkout" title="Checkout">
            <ShopButton>
              <img src="/assets/icons/icon-shop-small.svg" alt="" />
            </ShopButton>
          </NavLink>
        </div>
      </FeaturesCardContainer>
    </CoffeeCardContainer>
  )
}
