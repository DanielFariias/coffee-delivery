import { ComplementForm } from './components/complement-form'
import { SelectedCoffees } from './components/selected-coffees'
import { CompleteOrderContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '@contexts/cart-context'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const complementSchema = z.object({
  cep: z.string().min(8, 'Informe o CEP').max(8, 'CEP inválido'),
  street: z.string().min(1, 'Informe o Rua'),
  number: z.string().min(1, 'Informe o Número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe o Cidade'),
  state: z.string().min(1, 'Informe o Estado'),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => ({ message: 'Selecione uma forma de pagamento' }),
  }),
})

export type TComplementFormData = z.infer<typeof complementSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { onClearCart } = useContext(CartContext)

  const complementForm = useForm<TComplementFormData>({
    resolver: zodResolver(complementSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })
  const { handleSubmit } = complementForm

  function handleSendCheckout(data: TComplementFormData) {
    console.log(data)
    onClearCart()
    navigate('/success', {
      state: data,
    })
  }

  return (
    <FormProvider {...complementForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleSendCheckout)}
      >
        <ComplementForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
