import { ICoffee } from './reducer'

export enum CartActionKind {
  ADD_TO_CART = 'ADD_TO_CART',
}

export interface ICartAction {
  type: CartActionKind
  payload: ICoffee
}

export function AddNewCoffeeToCartAction(coffee: ICoffee): ICartAction {
  return {
    type: CartActionKind.ADD_TO_CART,
    payload: coffee,
  }
}
