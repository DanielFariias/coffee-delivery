import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/input'
import * as S from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AdressForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType
  return (
    <S.AdressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register('neighborhood')}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        {...register('state')}
        error={errors.state?.message}
      />
    </S.AdressFormContainer>
  )
}
