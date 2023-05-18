import {
  AddressContainer,
  AddressInfoContent,
  AddressText,
  ComplementContainer,
  Heading,
  IconContainer,
  Input,
  InputContainer,
  Paragraph,
  Span,
  TextContainer,
} from './styles'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDebounce } from '../../../../utils/useDebounce'
import axios from 'axios'

import { MapPinLine } from 'phosphor-react'

export function AddressForm() {
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
        setValue('city', data.localidade)
        setValue('uf', data.uf)
      }
    }

    getAddress()
  }, [cep, setValue])

  return (
    <AddressContainer>
      <AddressText>
        <IconContainer>
          <MapPinLine size={22} />
        </IconContainer>
        <TextContainer>
          <Heading>Delivery Address</Heading>
          <Paragraph>
            Enter the address where you would like to receive your order
          </Paragraph>
        </TextContainer>
      </AddressText>
      <AddressInfoContent>
        <Input
          type="text"
          id="cep"
          placeholder="CEP"
          inputMode="numeric"
          pattern="^[0-9]*$"
          {...register('cep')}
          required
        />
        <Input
          type="text"
          id="street"
          placeholder="Street"
          {...register('street')}
          required
        />
        <InputContainer>
          <Input
            type="number"
            id="number"
            placeholder="Number"
            {...register('number')}
            required
          />
          <ComplementContainer>
            <Input
              type="text"
              id="complement"
              placeholder="Complement"
              {...register('complement')}
            />
            <Span>Optional</Span>
          </ComplementContainer>
        </InputContainer>
        <InputContainer>
          <Input
            type="text"
            id="neighborhood"
            placeholder="Neighborhood"
            {...register('neighborhood')}
            required
          />
          <Input
            type="text"
            id="city"
            placeholder="City"
            {...register('city')}
            required
          />
          <Input
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
