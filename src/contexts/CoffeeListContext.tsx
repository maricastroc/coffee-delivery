import React, { createContext, ReactNode, useState } from 'react'
import { CoffeeCardProps } from '../pages/Home/components/CoffeeCard'

interface CoffeeListContextData {
  itemsList: CoffeeCardProps[]
  setItemsList: React.Dispatch<React.SetStateAction<CoffeeCardProps[]>>
  increaseCoffeeQuantity: (coffee: CoffeeCardProps) => void
  decreaseCoffeeQuantity: (coffee: CoffeeCardProps) => void
  removeCoffeeItem: (coffee: CoffeeCardProps) => void
}

export const CoffeeListContext = createContext<CoffeeListContextData>(
  {} as CoffeeListContextData,
)

interface CoffeeListContextProps {
  children: ReactNode
}

export function CoffeeListContextProvider({
  children,
}: CoffeeListContextProps) {
  const [itemsList, setItemsList] = useState<CoffeeCardProps[]>([])

  const removeCoffeeItem = (coffee: CoffeeCardProps) => {
    if (itemsList.length > 0) {
      const coffeeListWithoutRemovedOne = itemsList.filter(
        (item) => item.id !== coffee.id,
      )

      setItemsList(coffeeListWithoutRemovedOne)
    }
  }

  const increaseCoffeeQuantity = (coffee: CoffeeCardProps) => {
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
  }

  const decreaseCoffeeQuantity = (coffee: CoffeeCardProps) => {
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
        removeCoffeeItem(coffee)
      }
    }
  }

  const coffeeListContextValue: CoffeeListContextData = {
    itemsList,
    setItemsList,
    increaseCoffeeQuantity,
    decreaseCoffeeQuantity,
    removeCoffeeItem,
  }

  return (
    <CoffeeListContext.Provider value={coffeeListContextValue}>
      {children}
    </CoffeeListContext.Provider>
  )
}
