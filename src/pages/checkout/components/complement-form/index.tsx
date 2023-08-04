import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { TitleText } from '../../../../components/typography/title-text'
import { SectionTitle } from '../section-title'
import { AdressForm } from './adress-form'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { PaymentOptions } from './payment-options'

export function ComplementForm() {
  const { colors } = useTheme()
  return (
    <S.Wrapper>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <S.FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['product-yellow-dark']} size={22} />}
        />
        <AdressForm />
      </S.FormSectionContainer>

      <S.FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['product-purple']} size={22} />}
        />
        <PaymentOptions />
      </S.FormSectionContainer>
    </S.Wrapper>
  )
}
