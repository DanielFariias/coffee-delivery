import { TitleText } from '../../../../components/typography/title-text'
import { CoffeeCartCard } from './coffee-card'
import { ConfirmationSection } from './confirmation-section'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

const coffees = [
  {
    id: 1,
    name: 'Café da casa',
    photo: '/images/coffee/americano.png',
    quantity: 1,
  },
  {
    id: 12,
    name: 'Café da casa',
    photo: '/images/coffee/americano.png',
    quantity: 12,
  },
]

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {coffees.map((item) => (
          <CoffeeCartCard key={1} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
