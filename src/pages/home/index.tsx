import { CoffeeMenu } from './components/coffee-menu'
import { Intro } from './components/intro'
import * as S from './styles'

export function Home() {
  return (
    <S.Wrappper>
      <Intro />
      <CoffeeMenu />
    </S.Wrappper>
  )
}
