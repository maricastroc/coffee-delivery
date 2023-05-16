import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'
import { useContext, useState } from 'react'
import { CoffeeContext, ItemsListProps } from '../../contexts/CoffeeContext'
import { CoffeeCardProps } from '../../pages/Home/components/CoffeeCard'

interface QuantityButtonProps {
  onClick: (operation: string, value: number) => void
  initialValue: number // Valor inicial para "quantity"
  id: number
}

export function QuantityButton(props: QuantityButtonProps) {
  const { itemsList, setItemsList } = useContext(CoffeeContext)

  const addCoffeeItem = (value: number) => {
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

  return (
    <QuantityButtonContainer>
      <Minus
        size={16}
        onClick={() => {
          if (quantity > 1) {
            const updatedQuantity = quantity - 1
            setQuantity(updatedQuantity)
            props.onClick('remove', updatedQuantity)
          }
        }}
      />
      <p>{quantity}</p>
      <Plus
        size={16}
        onClick={() => {
          const updatedQuantity = quantity + 1
          setQuantity(updatedQuantity)
          props.onClick('add', updatedQuantity)
        }}
      />
    </QuantityButtonContainer>
  )
}
