import { QuantityButton } from '../../../../../../components/QuantityButton'
import { Trash } from 'phosphor-react'
import {
  ButtonsContainer,
  InfoContainer,
  RemoveButton,
  ShopCardContainer,
  ShopCardText,
  TextContainer,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { CoffeeAndButtonContext } from '../../../../../../contexts/CoffeeAndButtonContext'
import { CoffeeCardProps } from '../../../../../Home/components/CoffeeCard'

export function ShopCard(props: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(props.quantity)

  useEffect(() => {
    console.log(quantity)
  }, [quantity])

  const { addCoffeeItem, removeCoffeeItem } = useContext(CoffeeAndButtonContext)

  const button = {
    id: props.id,
    quantity,
  }

  const handleSetCoffeeItem = (operation: string) => {
    if (operation === 'add') {
      addCoffeeItem(props, button)
      setQuantity(quantity + 1)
    } else {
      removeCoffeeItem(props, button)
      setQuantity(quantity - 1)
    }
  }

  return (
    <ShopCardContainer>
      <InfoContainer>
        <img src="/assets/coffees/traditional-espresso.png" alt="" />
        <ShopCardText>
          <TextContainer>
            <p>{props.title}</p>
            <strong>$ {props.price}</strong>
          </TextContainer>
          <ButtonsContainer>
            <QuantityButton
              onClick={handleSetCoffeeItem}
              quantity={props.quantity}
              id={props.id}
            />
            <RemoveButton>
              <Trash size={16} />
              <p>Remove</p>
            </RemoveButton>
          </ButtonsContainer>
        </ShopCardText>
      </InfoContainer>
    </ShopCardContainer>
  )
}
