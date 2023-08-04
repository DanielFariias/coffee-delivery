import { Button } from '../../../../components/button'
import { RegularText } from '../../../../components/typography/regular-text'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 29.90</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {DELIVERY_PRICE}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {DELIVERY_PRICE}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={false} type="submit" />
    </ConfirmationSectionContainer>
  )
}
