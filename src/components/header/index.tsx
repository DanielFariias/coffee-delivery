import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import * as S from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { quantity } = useContext(CartContext)
  return (
    <S.Container className="container">
      <NavLink to="/">
        <img
          src={logo}
          alt="logo do coffee delivery, um copo de café na cor roxa com um joguete desenhado e um texto escrito 'coffee delivery'"
        />
      </NavLink>

      <S.Actions>
        <S.LocationButton>
          <MapPin size={22} weight="fill" />
          <span>São Gonçalo do Amarante, CE</span>
        </S.LocationButton>

        <NavLink to="/checkout">
          <S.CartButtonSection>
            <S.CartButton>
              <ShoppingCart size={22} weight="fill" />
            </S.CartButton>
            <S.CartButtonCounter>{quantity}</S.CartButtonCounter>
          </S.CartButtonSection>
        </NavLink>
      </S.Actions>
    </S.Container>
  )
}
