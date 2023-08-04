import { RegularText } from '../../../../../components/typography/regular-text'
import { QuantityInput } from '../../../../home/components/quantity-input'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { Trash } from 'phosphor-react'

interface CoffeeCartCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coffee: any
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  function handleIncrease() {
    console.log(coffee.id, 'increase')
  }

  function handleDecrease() {
    console.log(coffee.id, 'decrease')
  }

  function handleRemove() {
    console.log(coffee.id)
  }

  const formattedPrice = 0

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
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
