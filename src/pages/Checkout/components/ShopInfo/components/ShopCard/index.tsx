import { QuantityButton } from '../../../../../../components/QuantityButton'
import { Trash } from 'phosphor-react'
import {
  ButtonsContainer,
  InfoContainer,
  RemoveButton,
  ShopCardContainer,
  ShopCardText,
  TextContainer,
} from './styles'
import { useContext } from 'react'
import {
  CoffeeContext,
  ItemsListProps,
} from '../../../../../../contexts/CoffeeContext'
import { CoffeeCardProps } from '../../../../../Home/components/CoffeeCard'

interface ShopCardProps {
  title: string
  image_source: string
  quantity: number
  price: string
  id: number
}

export function ShopCard(props: ShopCardProps) {
  const { itemsList, setItemsList } = useContext(CoffeeContext)

  const addCoffeeItem = (value: number) => {
    const existingItem = itemsList.find(
      (item: ItemsListProps) => item.id === props.id,
    )

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: value,
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
    operation === 'add' ? addCoffeeItem(value) : removeCoffeeItem(value)
  }

  return (
    <ShopCardContainer>
      <InfoContainer>
        <img src="/assets/coffees/traditional-espresso.png" alt="" />
        <ShopCardText>
          <TextContainer>
            <p>{props.title}</p>
            <strong>$ {props.price}</strong>
          </TextContainer>
          <ButtonsContainer>
            <QuantityButton
              onClick={handleSetCoffeeItem}
              initialValue={props.quantity}
              id={props.id}
            />
            <RemoveButton>
              <Trash size={16} />
              <p>Remove</p>
            </RemoveButton>
          </ButtonsContainer>
        </ShopCardText>
      </InfoContainer>
    </ShopCardContainer>
  )
}
