import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'
import { useContext, useState } from 'react'
import { CoffeeAndButtonContext } from '../../contexts/CoffeeAndButtonContext'
import { CoffeeCardProps } from '../../pages/Home/components/CoffeeCard'

export interface QuantityButtonProps {
  id: number
  quantity: number
  onClick: (operation: string, value: number) => void
}

export function QuantityButton(props: QuantityButtonProps) {
  const { buttonsList, setButtonsList } = useContext(CoffeeAndButtonContext)

  const addCoffeeItem = (value: number) => {
    const existingItem = itemsList.find(
      (item: CoffeeCardProps) => item.id === props.id,
    )

    if (existingItem && existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: value,
      }

      const updatedList = itemsList.map((item: CoffeeCardProps) => {
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
