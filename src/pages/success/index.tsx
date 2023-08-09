import { useTheme } from 'styled-components'
import { TitleText } from '../../components/typography/title-text'
import { RegularText } from '../../components/typography/regular-text'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import { InfoWithIcon } from '../../components/info-with-icon'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import confirmedOrderIllustration from '../../assets/images/confirmation-illustration.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { paymentMethods } from '@pages/checkout/components/complement-form/payment-options'
import { TComplementFormData } from '@pages/checkout'
import { Button } from '@components/button'
import { useEffect } from 'react'

interface LocationType {
  state: TComplementFormData
}

export function Success() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  function backToHome() {
    navigate('/', {
      state: null,
    })
  }

  useEffect(() => {
    if (!state) {
      backToHome()
    }
  }, [])

  if (!state) {
    return null
  }

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            $iconBg={colors['product-purple']}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.neighborhood} - {state.city}, {state.state}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            $iconBg={colors['product-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            $iconBg={colors['product-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="" />
      </section>

      <footer>
        <Button text={'Voltar para pagina inicial'} onClick={backToHome} />
      </footer>
    </OrderConfirmedContainer>
  )
}
