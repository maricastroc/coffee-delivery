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

import { forwardRef, useEffect } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
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

export const AddressForm = forwardRef<HTMLInputElement>((_, _ref) => {
  const { watch, setValue, control } = useFormContext<AddressType>()

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
        <Controller
          name="zip"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input className="cep" placeholder="CEP" {...field} />
          )}
        />
        <Controller
          name="street"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input className="street" placeholder="Street" {...field} />
          )}
        />
        <InputContainer>
          <Controller
            name="number"
            defaultValue=""
            control={control}
            rules={{ required: true, pattern: /^[0-9]+$/ }}
            render={({ field }) => (
              <Input className="number" placeholder="Number" {...field} />
            )}
          />
          <ComplementContainer>
            <Controller
              name="complement"
              defaultValue=""
              control={control}
              render={() => (
                <Input className="complement" placeholder="Complement" />
              )}
            />
            <Span>Optional</Span>
          </ComplementContainer>
        </InputContainer>
        <InputContainer>
          <Controller
            name="neighborhood"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                className="neighborhood"
                placeholder="Neighborhood"
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input className="city" placeholder="City" {...field} />
            )}
          />
          <Controller
            name="uf"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input className="uf" placeholder="UF" {...field} />
            )}
          />
        </InputContainer>
      </AddressInfoContent>
    </AddressContainer>
  )
})

AddressForm.displayName = 'AddressForm'
