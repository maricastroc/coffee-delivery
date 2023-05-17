import { NavLink } from 'react-router-dom'
import {
  CoffeeCardContainer,
  ShopButton,
  TagsContainer,
  FeaturesCardContainer,
} from './styles'
import { QuantityButton } from '../../../../components/QuantityButton'
import { useContext, useEffect, useState } from 'react'
import { CoffeeListContext } from '../../../../contexts/CoffeeListContext'

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
  const [updatedQuantity, setUpdatedQuantity] = useState(props.quantity)
  const { itemsList } = useContext(CoffeeListContext)

  useEffect(() => {
    const existingCoffeeItem = itemsList.find((item) => item.id === props.id)
    const existingQuantity = existingCoffeeItem?.quantity || 0
    if (existingQuantity !== props.quantity) {
      setUpdatedQuantity(existingQuantity)
    }
  }, [itemsList, props.id, props.quantity])

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
            key={props.id}
            id={props.id}
            title={props.title}
            subtitle={props.subtitle}
            tags={props.tags}
            img_source={props.img_source}
            price={props.price}
            quantity={
              updatedQuantity === props.quantity
                ? props.quantity
                : updatedQuantity
            }
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
