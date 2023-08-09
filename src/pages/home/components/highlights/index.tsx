import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import * as S from './styles'

export function Highlights() {
  return (
    <S.HighlightList>
      {highlightsList.map((highlight) => (
        <li key={highlight.id}>
          <S.HighlightIcon $bgColor={highlight.bgColor}>
            {highlight.icon}
          </S.HighlightIcon>
          <span>{highlight.text}</span>
        </li>
      ))}
    </S.HighlightList>
  )
}

const highlightsList = [
  {
    id: 1,
    icon: <ShoppingCart size={16} weight="fill" />,
    text: 'Compra simples e segura',
    bgColor: 'product-yellow-dark',
  },
  {
    id: 2,
    icon: <Package size={16} weight="fill" />,
    text: 'Embalagem mantém o café intacto',
    bgColor: 'base-text',
  },
  {
    id: 3,
    icon: <Timer size={16} weight="fill" />,
    text: 'Entrega rápida e rastreada',
    bgColor: 'product-yellow',
  },
  {
    id: 4,
    icon: <Coffee size={16} weight="fill" />,
    text: 'O café chega fresquinho até você',
    bgColor: 'product-purple',
  },
] as const
