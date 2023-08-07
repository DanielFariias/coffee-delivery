import { useTheme } from 'styled-components'
import { TitleText } from '../../components/typography/title-text'
import { RegularText } from '../../components/typography/regular-text'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import { InfoWithIcon } from '../../components/info-with-icon'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import confirmedOrderIllustration from '../../assets/images/confirmation-illustration.svg'

// interface LocationType {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   state: any
// }

export function Success() {
  const { colors } = useTheme()

  // const { state } = useLocation() as unknown as LocationType

  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!state) {
  //     navigate('/')
  //   }
  // }, [])

  // if (!state) return <></>

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
            iconBg={colors['product-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua Batatinha</strong>, 123
                <br />
                Farrapos - SGA, CE
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['product-yellow']}
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
            iconBg={colors['product-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>cartão</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedContainer>
  )
}
