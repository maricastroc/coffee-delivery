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

export type AddressType = {
  zip: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

export function AddressForm() {
  const { watch, setValue, register } = useForm()

  const zip = useDebounce(watch('zip'), 500)

  useEffect(() => {
    async function getAddress() {
      if (zip) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${zip}/json/`,
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
  }, [zip, setValue])

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
          id="zip"
          placeholder="ZIP Code"
          inputMode="numeric"
          pattern="^[0-9\-]*$"
          {...register('zip')}
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
            {...register('number', { valueAsNumber: true })}
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
