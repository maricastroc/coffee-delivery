import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes, coffeeListReducer } from '../reducers/reducer'
import { CoffeeCardProps } from '../pages/Home/components/OurCoffees/components/CoffeeCard'

interface CoffeeListContextData {
  itemsList: CoffeeCardProps[]
  increaseCoffeeQuantity: (coffee: CoffeeCardProps) => void
  decreaseCoffeeQuantity: (coffee: CoffeeCardProps) => void
  removeCoffeeItem: (coffee: CoffeeCardProps) => void
  resetList: () => void
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
  const [itemsList, dispatch] = useReducer(coffeeListReducer, [])

  const removeCoffeeItem = (coffee: CoffeeCardProps) => {
    dispatch({ type: ActionTypes.REMOVE_COFFEE, id: coffee.id })
  }

  const increaseCoffeeQuantity = (coffee: CoffeeCardProps) => {
    const existingCoffeeItem = itemsList.find((item) => item.id === coffee.id)

    if (existingCoffeeItem) {
      dispatch({ type: ActionTypes.INCREASE_QUANTITY, id: coffee.id })
    } else {
      dispatch({ type: ActionTypes.ADD_COFFEE, coffee })
    }
  }

  const decreaseCoffeeQuantity = (coffee: CoffeeCardProps) => {
    const existingItem = itemsList.find((item) => item.id === coffee.id)

    if (existingItem && existingItem.quantity > 1) {
      dispatch({ type: ActionTypes.DECREASE_QUANTITY, id: coffee.id })
    } else {
      removeCoffeeItem(coffee)
    }
  }

  const resetList = () => {
    dispatch({ type: ActionTypes.RESET_LIST })
  }

  const coffeeListContextValue: CoffeeListContextData = {
    itemsList,
    increaseCoffeeQuantity,
    decreaseCoffeeQuantity,
    removeCoffeeItem,
    resetList,
  }

  return (
    <CoffeeListContext.Provider value={coffeeListContextValue}>
      {children}
    </CoffeeListContext.Provider>
  )
}
