import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.Container className="container">
      <img
        src={logo}
        alt="logo do coffee delivery, um copo de café na cor roxa com um joguete desenhado e um texto escrito 'coffee delivery'"
      />

      <S.Actions>
        <S.LocationButton>
          <MapPin size={22} weight="fill" />
          <span>São Gonçalo do Amarante, CE</span>
        </S.LocationButton>

        <S.CartButtonSection>
          <S.CartButton>
            <ShoppingCart size={22} weight="fill" />
          </S.CartButton>
          <S.CartButtonCounter>3</S.CartButtonCounter>
        </S.CartButtonSection>
      </S.Actions>
    </S.Container>
  )
}
