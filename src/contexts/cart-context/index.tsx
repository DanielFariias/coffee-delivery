import { createContext, useEffect, useReducer } from 'react'
import { CartReducer, ICoffee } from './reducer'
import {
  AddNewCoffeeToCartAction,
  clearCartAction,
  decreaseCoffeeToCartAction,
  increaseCoffeeToCartAction,
  removeCoffeeToCartAction,
} from './actions'

interface ICartContextData {
  quantity: number
  onAddToCart: (coffee: ICoffee) => void
  cartList: ICoffee[]
  onIncreaseCoffeeQuantity: (id: ICoffee) => void
  onDecreaseCoffeeQuantity: (id: ICoffee) => void
  onRemoveCoffeeCart: (id: ICoffee) => void
  onClearCart: VoidFunction
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
  const { cartList } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee:cart-1.0.0', stateJSON)
  }, [cartState])

  function addToCart(coffee: ICoffee) {
    dispatch(AddNewCoffeeToCartAction(coffee))
  }

  function handleIncreaseCoffeeQuantity(coffee: ICoffee) {
    dispatch(increaseCoffeeToCartAction(coffee))
  }

  function handleDecreaseCoffeeQuantity(coffee: ICoffee) {
    dispatch(decreaseCoffeeToCartAction(coffee))
  }

  function handleRemoveCoffeeCart(coffee: ICoffee) {
    dispatch(removeCoffeeToCartAction(coffee))
  }

  function handleClearCart() {
    dispatch(clearCartAction())
  }

  const cartQuantity = cartState.cartList.length

  return (
    <CartContext.Provider
      value={{
        cartList,
        quantity: cartQuantity,
        onAddToCart: addToCart,
        onIncreaseCoffeeQuantity: handleIncreaseCoffeeQuantity,
        onDecreaseCoffeeQuantity: handleDecreaseCoffeeQuantity,
        onRemoveCoffeeCart: handleRemoveCoffeeCart,
        onClearCart: handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
