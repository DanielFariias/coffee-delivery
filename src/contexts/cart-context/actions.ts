import { ICoffee } from './reducer'

export enum CartActionKind {
  ADD_TO_CART = 'ADD_TO_CART',
  INCREASE_COFFEE = 'INCREASE_COFFEE',
  DECREASE_COFFEE = 'DECREASE_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART = 'CLEAR_CART',
}

export interface ICartCoffeeAction {
  type: CartActionKind
  payload?: ICoffee
}

export function AddNewCoffeeToCartAction(coffee: ICoffee): ICartCoffeeAction {
  return {
    type: CartActionKind.ADD_TO_CART,
    payload: coffee,
  }
}

export function increaseCoffeeToCartAction(coffee: ICoffee): ICartCoffeeAction {
  return {
    type: CartActionKind.INCREASE_COFFEE,
    payload: coffee,
  }
}

export function decreaseCoffeeToCartAction(coffee: ICoffee): ICartCoffeeAction {
  return {
    type: CartActionKind.DECREASE_COFFEE,
    payload: coffee,
  }
}

export function removeCoffeeToCartAction(coffee: ICoffee): ICartCoffeeAction {
  return {
    type: CartActionKind.REMOVE_COFFEE,
    payload: coffee,
  }
}

export function clearCartAction() {
  return {
    type: CartActionKind.CLEAR_CART,
  }
}
