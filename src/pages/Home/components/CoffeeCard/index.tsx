import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import {
  CoffeeCardContainer,
  ShopButton,
  TagsContainer,
  FeaturesCardContainer,
} from './styles'
import { QuantityButton } from '../../../../components/QuantityButton'
import {
  CoffeeContext,
  ItemsListProps,
} from '../../../../contexts/CoffeeContext'

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
  const { itemsList, setItemsList } = useContext(CoffeeContext)
  const [quantity, setQuantity] = useState(0)

  const addCoffeeItem = (value: number) => {
    const existingItem = itemsList.find(
      (item: ItemsListProps) => item.id === props.id,
    )

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: props.quantity++,
      }

      const updatedList = itemsList.map((item: ItemsListProps) => {
        return item.id === props.id ? updatedItem : item
      })

      setItemsList(updatedList)
    } else {
      const newItem = { ...props, quantity: value }
      setItemsList([...itemsList, newItem])
    }
  }

  const removeCoffeeItem = (value: number) => {
    const existingItem = itemsList.find(
      (item: ItemsListProps) => item.id === props.id,
    )

    if (existingItem && existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: value,
      }

      const updatedList = itemsList.map((item: ItemsListProps) => {
        return item.id === props.id ? updatedItem : item
      })

      setItemsList(updatedList)
    } else {
      const coffeeListWithoutRemovedOne = itemsList.filter(
        (item: CoffeeCardProps) => {
          return item.id !== props.id
        },
      )
      setItemsList(coffeeListWithoutRemovedOne)
    }
  }

  const handleSetCoffeeItem = (operation: string, value: number) => {
    if (operation === 'add') {
      addCoffeeItem(value)
      setQuantity(quantity + 1)
    } else {
      removeCoffeeItem(value)
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
            onClick={handleSetCoffeeItem}
            initialValue={props.quantity}
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
