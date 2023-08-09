import { useContext } from 'react'
import { TitleText } from '../../../../components/typography/title-text'
import { CoffeeCartCard } from '../coffee-card'
import { ConfirmationSection } from './confirmation-section'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'
import { CartContext } from '../../../../contexts/cart-context'

export function SelectedCoffees() {
  const { cartList } = useContext(CartContext)
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <div className="coffee-list">
          {cartList.map((coffee) => (
            <CoffeeCartCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
