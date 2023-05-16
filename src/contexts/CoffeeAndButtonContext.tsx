import React, { createContext, ReactNode, useState } from 'react'
import { CoffeeCardProps } from '../pages/Home/components/CoffeeCard'
import { QuantityButtonProps } from '../components/QuantityButton'

interface CoffeeAndButtonContextData {
  itemsList: CoffeeCardProps[]
  setItemsList: React.Dispatch<React.SetStateAction<CoffeeCardProps[]>>
  buttonsList: QuantityButtonProps[]
  setButtonsList: React.Dispatch<React.SetStateAction<QuantityButtonProps[]>>
  addCoffeeItem: (coffee: CoffeeCardProps, button: QuantityButtonProps) => void
  removeCoffeeItem: (
    coffee: CoffeeCardProps,
    button: QuantityButtonProps,
  ) => void
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

      const updatedList = buttonsList.map((item) =>
        item.id === button.id ? updatedItem : item,
      )

      setButtonsList(updatedList)
    }
  }

  const addCoffeeItem = (
    coffee: CoffeeCardProps,
    button: QuantityButtonProps,
  ) => {
    const existingCoffeeItem = itemsList.find((item) => item.id === coffee.id)

    if (existingCoffeeItem) {
      const updatedCoffeeItem = {
        ...existingCoffeeItem,
        quantity: existingCoffeeItem.quantity + 1,
      }

      const updatedCoffeeList = itemsList.map((item) =>
        item.id === coffee.id ? updatedCoffeeItem : item,
      )

      setItemsList(updatedCoffeeList)
    } else {
      const newItem = { ...coffee, quantity: 1 }
      setItemsList([...itemsList, newItem])
    }

    addButtonQuantity(button)
  }

  const removeCoffeeItem = (
    coffee: CoffeeCardProps,
    button: QuantityButtonProps,
  ) => {
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

    removeButtonQuantity(button)
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
