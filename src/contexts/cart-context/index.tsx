import { createContext, useEffect, useReducer } from 'react'
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
  const [cartState, dispatch] = useReducer(
    CartReducer,
    initialState,
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem('@coffee:cart-1.0.0')

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee:cart-1.0.0', stateJSON)
  }, [cartState])

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
