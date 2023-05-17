import { CoffeeCardProps } from '../pages/Home/components/CoffeeCard'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  // eslint-disable-next-line no-unused-vars
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  // eslint-disable-next-line no-unused-vars
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export type CoffeeListAction =
  | { type: ActionTypes.INCREASE_QUANTITY; payload: CoffeeCardProps }
  | { type: ActionTypes.DECREASE_QUANTITY; payload: CoffeeCardProps }
  | { type: ActionTypes.REMOVE_COFFEE; payload: CoffeeCardProps }

export function RemoveCoffee(coffee: CoffeeCardProps) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function IncreaseQuantity(coffee: CoffeeCardProps) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: {
      coffee,
    },
  }
}

export function DecreaseQuantity(coffee: CoffeeCardProps) {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: {
      coffee,
    },
  }
}
