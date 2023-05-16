import {
  AddressContainer,
  AddressInfoContent,
  AddressText,
  ComplementContainer,
  InputContainer,
  TextContainer,
} from './styles'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from '../../../../utils/useDebounce'
import { MapPinLine } from 'phosphor-react'
import axios from 'axios'

export function Address() {
  const { register, watch, setValue } = useForm()

  const cep = useDebounce(watch('cep'), 500)

  useEffect(() => {
    async function getAddress() {
      if (cep) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`,
        )

        if (data.erro) {
          return
        }

        setValue('street', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('cidade', data.localidade)
        setValue('uf', data.uf)
      }
    }

    getAddress()
  }, [cep, setValue])

  return (
    <AddressContainer>
      <AddressText>
        <MapPinLine size={22} />
        <TextContainer>
          <h2>Delivery Address</h2>
          <p>Enter the address where you would like to receive your order</p>
        </TextContainer>
      </AddressText>
      <AddressInfoContent>
        <input
          type="text"
          id="cep"
          placeholder="CEP"
          inputMode="numeric"
          pattern="^[0-9]*$"
          {...register('cep')}
          required
        />
        <input
          type="text"
          id="street"
          placeholder="Street"
          {...register('street')}
          required
        />
        <InputContainer>
          <input
            type="number"
            id="number"
            placeholder="Number"
            {...register('number')}
            required
          />
          <ComplementContainer>
            <input
              type="text"
              id="complement"
              placeholder="Complement"
              {...register('complement')}
            />
            <span>Optional</span>
          </ComplementContainer>
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            id="neighborhood"
            placeholder="Neighborhood"
            {...register('neighborhood')}
            required
          />
          <input
            type="text"
            id="city"
            placeholder="City"
            {...register('city')}
            required
          />
          <input
            type="text"
            id="uf"
            placeholder="UF"
            {...register('uf')}
            required
          />
        </InputContainer>
      </AddressInfoContent>
    </AddressContainer>
  )
}
