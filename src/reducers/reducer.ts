/* eslint-disable no-unused-vars */
import { CoffeeCardProps } from '../pages/Home/components/OurCoffees/components/CoffeeCard'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

type Action =
  | { type: ActionTypes.ADD_COFFEE; coffee: CoffeeCardProps }
  | { type: ActionTypes.INCREASE_QUANTITY; id: number }
  | { type: ActionTypes.DECREASE_QUANTITY; id: number }
  | { type: ActionTypes.REMOVE_COFFEE; id: number }

export function coffeeListReducer(state: CoffeeCardProps[], action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return [...state, { ...action.coffee, quantity: 1 }]

    case ActionTypes.INCREASE_QUANTITY:
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item,
      )

    case ActionTypes.DECREASE_QUANTITY:
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item,
      )

    case ActionTypes.REMOVE_COFFEE:
      return state.filter((item) => item.id !== action.id)

    default:
      return state
  }
}
