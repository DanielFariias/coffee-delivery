import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'
import { QuantityInput } from '../quantity-input'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/cart-context'
import { formatPricer } from '../../../../utils/formatPricer'
import { ICoffee } from '../../../../contexts/cart-context/reducer'

interface ICoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: ICoffeeCardProps) {
  const [amount, setAmount] = useState(1)
  const { onAddToCart } = useContext(CartContext)

  function handleIncrease() {
    setAmount((prev) => prev + 1)
  }

  function handleDecrease() {
    setAmount((prev) => prev - 1)
  }

  function clearAmount() {
    setAmount(1)
  }

  function handleAddToCart() {
    onAddToCart({ ...coffee, quantity: amount })
    clearAmount()
  }

  return (
    <S.Wrapper>
      <img src={`/images/coffee/${coffee?.photo}`} alt="" />

      <S.Tabs>{coffee?.tags.map((tag) => <span key={tag}>{tag}</span>)}</S.Tabs>

      <S.Title>{coffee?.name}</S.Title>
      <S.Description>{coffee?.description}</S.Description>

      <S.Footer>
        <S.Price>
          <span>R$</span>
          <strong>{formatPricer(coffee?.price)}</strong>
        </S.Price>

        <S.AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={amount}
          />

          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </S.AddCartWrapper>
      </S.Footer>
    </S.Wrapper>
  )
}
