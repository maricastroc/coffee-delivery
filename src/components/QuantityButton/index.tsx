import { useContext, useState, useEffect } from 'react'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

import {
  ButtonContainer,
  QuantityButtonContainer,
  QuantityLabel,
} from './styles'

import { Minus, Plus } from 'phosphor-react'

export interface QuantityButtonProps {
  id: number
  title: string
  subtitle: string
  tags: string[]
  img_source: string
  price: string
  quantity?: number
}

export function QuantityButton(props: QuantityButtonProps) {
  const { increaseCoffeeQuantity, decreaseCoffeeQuantity } =
    useContext(CoffeeListContext)
  const [quantity, setQuantity] = useState(props.quantity || 0)

  useEffect(() => {
    setQuantity(props.quantity || 0)
  }, [props.quantity])

  const handleAddClick = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    increaseCoffeeQuantity({ ...props, quantity: newQuantity })
  }

  const handleRemoveClick = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      decreaseCoffeeQuantity({ ...props, quantity: newQuantity })
    }
  }

  return (
    <QuantityButtonContainer>
      <ButtonContainer disabled={quantity === 0}>
        <Minus size={16} onClick={handleRemoveClick} />
      </ButtonContainer>
      <QuantityLabel>{quantity}</QuantityLabel>
      <ButtonContainer>
        <Plus size={16} onClick={handleAddClick} />
      </ButtonContainer>
    </QuantityButtonContainer>
  )
}
