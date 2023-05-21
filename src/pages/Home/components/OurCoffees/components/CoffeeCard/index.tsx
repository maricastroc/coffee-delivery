import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import {
  CoffeeCardContainer,
  CoffeeImage,
  Description,
  Heading,
  FeaturesCardContainer,
  ShopButton,
  TagsContainer,
  Price,
  PriceContainer,
  DollarSign,
  Options,
} from './styles'

import { QuantityButton } from '../../../../../../components/QuantityButton'
import { CoffeeListContext } from '../../../../../../contexts/CoffeeListContext'
import { ShoppingCart } from 'phosphor-react'

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
  const [displayedQuantity, setDisplayedQuantity] = useState(props.quantity)
  const { itemsList } = useContext(CoffeeListContext)

  useEffect(() => {
    const existingCoffeeItem = itemsList.find((item) => item.id === props.id)
    const existingQuantity = existingCoffeeItem?.quantity || 0
    if (existingQuantity !== props.quantity) {
      setDisplayedQuantity(existingQuantity)
    }
  }, [itemsList, props.id, props.quantity])

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={props.img_source} alt="" />
      <TagsContainer>
        {props.tags.map((item) => {
          return <span key={item}>{item}</span>
        })}
      </TagsContainer>
      <Heading>{props.title}</Heading>
      <Description>{props.subtitle}</Description>
      <FeaturesCardContainer>
        <PriceContainer>
          <DollarSign>$</DollarSign>
          <Price>{props.price}</Price>
        </PriceContainer>
        <Options>
          <QuantityButton
            {...props}
            quantity={
              displayedQuantity === props.quantity
                ? props.quantity
                : displayedQuantity
            }
          />
          <NavLink to="/checkout" title="Checkout">
            <ShopButton>
              <ShoppingCart weight="fill" size={22} className="icon" />
            </ShopButton>
          </NavLink>
        </Options>
      </FeaturesCardContainer>
    </CoffeeCardContainer>
  )
}
