import { produce } from 'immer'
import { ICartAction } from './actions'

export interface ICoffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
  quantity?: number
}

interface ICartState {
  cartList: ICoffee[]
}

export function CartReducer(state: ICartState, action: ICartAction) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return produce(state, (draft) => {
        const coffeeIndex = draft.cartList.findIndex(
          (coffee: ICoffee) => coffee.id === action.payload.id,
        )

        if (coffeeIndex < 0) {
          draft.cartList.push(action.payload)
        } else {
          draft.cartList[coffeeIndex].quantity! += action.payload.quantity!
        }
      })
    }
    default:
      return state
  }
}
