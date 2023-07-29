import * as S from './styles'
import introBanner from '../../../../assets/images/intro-banner.png'
import { ShoppingCart } from 'phosphor-react'

export function Intro() {
  return (
    <S.Container>
      <S.Content className="container">
        <S.DescriptionSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Highlights />
        </S.DescriptionSection>
        <img src={introBanner} alt="" />
      </S.Content>
    </S.Container>
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
    icon: <ShoppingCart size={16} weight="fill" />,
    text: 'Embalagem mantém o café intacto',
    bgColor: 'base-text',
  },
  {
    id: 1,
    icon: <ShoppingCart size={16} weight="fill" />,
    text: 'Entrega rápida e rastreada',
    bgColor: 'product-yellow',
  },
  {
    id: 1,
    icon: <ShoppingCart size={16} weight="fill" />,
    text: 'O café chega fresquinho até você',
    bgColor: 'product-purple',
  },
] as const

function Highlights() {
  return (
    <S.HighlightList>
      {highlightsList.map((highlight) => (
        <li key={highlight.id}>
          <S.HighlightIcon bgColor={highlight.bgColor}>
            {highlight.icon}
          </S.HighlightIcon>
          <span>{highlight.text}</span>
        </li>
      ))}
    </S.HighlightList>
  )
}
