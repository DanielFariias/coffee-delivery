import { CoffeeCard } from '../coffee-card'
import * as S from './styles'

export function CoffeeMenu() {
  return (
    <S.Wrapper className="container">
      <S.Title>Nossos cafés</S.Title>

      <S.CardList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </S.CardList>
    </S.Wrapper>
  )
}
