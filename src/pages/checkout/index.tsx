import { ComplementForm } from './components/complement-form'
import { SelectedCoffees } from './components/selected-coffees'
import { CompleteOrderContainer } from './styles'

export function Checkout() {
  return (
    <CompleteOrderContainer className="container">
      <ComplementForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  )
}
