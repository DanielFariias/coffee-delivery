import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../coffee-card'
import * as S from './styles'

export function CoffeeMenu() {
  return (
    <S.Wrapper className="container">
      <S.Title>Nossos cafés</S.Title>

      <S.CardList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </S.CardList>
    </S.Wrapper>
  )
}
