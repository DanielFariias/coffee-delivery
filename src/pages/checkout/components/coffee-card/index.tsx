import { RegularText } from '@components/typography/regular-text'
import { Trash } from 'phosphor-react'
import { ICoffee } from '@contexts/cart-context/reducer'
import { formatPricer } from '@utils/formatPricer'
import { QuantityInput } from '@pages/home/components/quantity-input'

import {
  RemoveButton,
  ActionsContainer,
  CoffeeCartCardContainer,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '@contexts/cart-context'

interface CoffeeCartCardProps {
  coffee: ICoffee
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const {
    onDecreaseCoffeeQuantity,
    onIncreaseCoffeeQuantity,
    onRemoveCoffeeCart,
  } = useContext(CartContext)
  function handleIncrease() {
    console.log(coffee.id, 'increase')
    onIncreaseCoffeeQuantity(coffee)
  }

  function handleDecrease() {
    console.log(coffee.id, 'decrease')
    onDecreaseCoffeeQuantity(coffee)
  }

  function handleRemove() {
    console.log(coffee.id)
    onRemoveCoffeeCart(coffee)
  }

  const formattedPrice = formatPricer(coffee.price)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/images/coffee/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee?.quantity || 0}
              size="small"
            />
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
