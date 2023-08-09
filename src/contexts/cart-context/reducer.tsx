import { produce } from 'immer'
import { CartActionKind, ICartCoffeeAction } from './actions'

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

export function CartReducer(state: ICartState, action: ICartCoffeeAction) {
  switch (action.type) {
    case CartActionKind.ADD_TO_CART: {
      return produce(state, (draft) => {
        const coffeeIndex = draft.cartList.findIndex(
          (coffee: ICoffee) => coffee.id === action.payload!.id,
        )

        if (coffeeIndex < 0) {
          draft.cartList.push(action.payload!)
        } else {
          draft.cartList[coffeeIndex].quantity! += action.payload!.quantity!
        }
      })
    }

    case CartActionKind.INCREASE_COFFEE: {
      return produce(state, (draft) => {
        const coffeeIndex = draft.cartList.findIndex(
          (coffee: ICoffee) => coffee.id === action.payload!.id,
        )

        draft.cartList[coffeeIndex].quantity! += 1
      })
    }

    case CartActionKind.DECREASE_COFFEE: {
      return produce(state, (draft) => {
        const coffeeIndex = draft.cartList.findIndex(
          (coffee: ICoffee) => coffee.id === action.payload!.id,
        )

        draft.cartList[coffeeIndex].quantity! -= 1
      })
    }

    case CartActionKind.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        const coffeeIndex = draft.cartList.findIndex(
          (coffee: ICoffee) => coffee.id === action.payload!.id,
        )

        draft.cartList.splice(coffeeIndex, 1)
      })
    }

    case CartActionKind.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.cartList = []
      })
    }
    default:
      return state
  }
}
