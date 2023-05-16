import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'
import { useState } from 'react'

interface QuantityButtonProps {
  onClick: (operation: string, value: number) => void
  initialValue: number // Valor inicial para "quantity"
}

export function QuantityButton(props: QuantityButtonProps) {
  const [quantity, setQuantity] = useState(props.initialValue)

  return (
    <QuantityButtonContainer>
      <Minus
        size={16}
        onClick={() => {
          if (quantity > 1) {
            const updatedQuantity = quantity - 1
            setQuantity(updatedQuantity)
            props.onClick('remove', updatedQuantity)
          }
        }}
      />
      <p>{quantity}</p>
      <Plus
        size={16}
        onClick={() => {
          const updatedQuantity = quantity + 1
          setQuantity(updatedQuantity)
          props.onClick('add', updatedQuantity)
        }}
      />
    </QuantityButtonContainer>
  )
}
