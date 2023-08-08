import { createContext, useReducer } from 'react'
import { CartReducer, ICoffee } from './reducer'
import { AddNewCoffeeToCartAction } from './actions'

interface ICartContextData {
  quantity: number
  onAddToCart: (coffee: ICoffee) => void
}

export const CartContext = createContext<ICartContextData>(
  {} as ICartContextData,
)

const initialState = {
  cartList: [],
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartState, dispatch] = useReducer(CartReducer, initialState)
  console.log(cartState.cartList)

  function addToCart(coffee: ICoffee) {
    dispatch(AddNewCoffeeToCartAction(coffee))
  }

  const cartQuantity = cartState.cartList.length

  return (
    <CartContext.Provider
      value={{
        quantity: cartQuantity,
        onAddToCart: addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
