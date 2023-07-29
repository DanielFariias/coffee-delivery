import * as S from './styles'
import introBanner from '../../../../assets/images/intro-banner.png'
import { Highlights } from '../highlights'

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
        <img src={introBanner} alt="Imagem de um copo de café" />
      </S.Content>
    </S.Container>
  )
}
