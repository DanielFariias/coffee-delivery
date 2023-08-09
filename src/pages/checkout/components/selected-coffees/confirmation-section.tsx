import { CartContext } from '@contexts/cart-context'
import { ConfirmationSectionContainer } from './styles'
import { useContext } from 'react'
import { RegularText } from '@components/typography/regular-text'
import { Button } from '@components/button'
import { formatPricer } from '@utils/formatPricer'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartList } = useContext(CartContext)

  const totalPricer = cartList.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.quantity!
  }, 0)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatPricer(totalPricer)}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatPricer(DELIVERY_PRICE)}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formatPricer(totalPricer + DELIVERY_PRICE)}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={false} type="submit" />
    </ConfirmationSectionContainer>
  )
}
