import { createContext, ReactNode, useState } from 'react'
import { CoffeeCardProps } from '../pages/Home/components/CoffeeCard'

export const CoffeeContext = createContext({} as any)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface ItemsListProps {
  id: number
  title: string
  subtitle: string
  tags: string[]
  img_source: string
  price: string
  quantity: 0
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [itemsList, setItemsList] = useState<CoffeeCardProps[]>([])

  return (
    <CoffeeContext.Provider
      value={{
        itemsList,
        setItemsList,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
