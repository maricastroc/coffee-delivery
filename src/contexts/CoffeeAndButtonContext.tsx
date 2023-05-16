import React, { createContext, ReactNode, useState } from 'react'
import { CoffeeCardProps } from '../pages/Home/components/CoffeeCard'
import { QuantityButtonProps } from '../components/QuantityButton'

interface CoffeeAndButtonContextData {
  itemsList: CoffeeCardProps[]
  setItemsList: React.Dispatch<React.SetStateAction<CoffeeCardProps[]>>
  buttonsList: QuantityButtonProps[]
  setButtonsList: React.Dispatch<React.SetStateAction<QuantityButtonProps[]>>
  addCoffeeItem: (coffee: CoffeeCardProps) => void
  removeCoffeeItem: (coffee: CoffeeCardProps) => void
  addButtonQuantity: (button: QuantityButtonProps) => void
  removeButtonQuantity: (button: QuantityButtonProps) => void
}

export const CoffeeAndButtonContext = createContext<CoffeeAndButtonContextData>(
  {} as CoffeeAndButtonContextData,
)

interface CoffeeAndButtonContextProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeAndButtonContextProps) {
  const [itemsList, setItemsList] = useState<CoffeeCardProps[]>([])
  const [buttonsList, setButtonsList] = useState<QuantityButtonProps[]>([])

  const addCoffeeItem = (coffee: CoffeeCardProps) => {
    const existingItem = itemsList.find((item) => item.id === coffee.id)

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      }

      const updatedList = itemsList.map((item) =>
        item.id === coffee.id ? updatedItem : item,
      )

      setItemsList(updatedList)
    } else {
      const newItem = { ...coffee, quantity: 1 }
      setItemsList([...itemsList, newItem])
    }
  }

  const removeCoffeeItem = (coffee: CoffeeCardProps) => {
    if (itemsList.length > 0) {
      const existingItem = itemsList.find((item) => item.id === coffee.id)

      if (existingItem && existingItem.quantity > 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        }

        const updatedList = itemsList.map((item) =>
          item.id === coffee.id ? updatedItem : item,
        )

        setItemsList(updatedList)
      } else {
        const coffeeListWithoutRemovedOne = itemsList.filter(
          (item) => item.id !== coffee.id,
        )

        setItemsList(coffeeListWithoutRemovedOne)
      }
    }
  }

  const addButtonQuantity = (button: QuantityButtonProps) => {
    const existingItem = itemsList.find((item) => item.id === button.id)

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      }

      const updatedList = itemsList.map((item) =>
        item.id === button.id ? updatedItem : item,
      )

      setItemsList(updatedList)
    }
  }

  const removeButtonQuantity = (button: QuantityButtonProps) => {
    const existingItem = itemsList.find((item) => item.id === button.id)

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity > 1 ? existingItem.quantity - 1 : 0,
      }

      const updatedList = itemsList.map((item) =>
        item.id === button.id ? updatedItem : item,
      )

      setItemsList(updatedList)
    }
  }

  const coffeeAndButtonContextValue: CoffeeAndButtonContextData = {
    itemsList,
    setItemsList,
    buttonsList,
    setButtonsList,
    addCoffeeItem,
    removeCoffeeItem,
    addButtonQuantity,
    removeButtonQuantity,
  }

  return (
    <CoffeeAndButtonContext.Provider value={coffeeAndButtonContextValue}>
      {children}
    </CoffeeAndButtonContext.Provider>
  )
}
