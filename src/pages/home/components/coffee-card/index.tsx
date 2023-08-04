import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'
import { QuantityInput } from '../quantity-input'

export function CoffeeCard() {
  return (
    <S.Wrapper>
      <img src="/images/coffee/americano.png" alt="" />

      <S.Tabs>
        <span>Tradicional</span>
        <span>gelado</span>
      </S.Tabs>

      <S.Title>Expresso Gelado</S.Title>
      <S.Description>
        Bebida preparada com café expresso e cubos de gelo
      </S.Description>

      <S.Footer>
        <S.Price>
          <span>R$</span>
          <strong>5,00</strong>
        </S.Price>

        <S.AddCartWrapper>
          <QuantityInput
            onIncrease={() => {}}
            onDecrease={() => {}}
            quantity={0}
          />

          <button onClick={() => {}}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </S.AddCartWrapper>
      </S.Footer>
    </S.Wrapper>
  )
}
