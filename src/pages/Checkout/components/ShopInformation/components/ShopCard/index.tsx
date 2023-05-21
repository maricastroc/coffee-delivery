import { useContext, useState } from 'react'
import { CoffeeListContext } from '../../../../../../contexts/CoffeeListContext'

import {
  ButtonsContainer,
  CardImage,
  CardLabel,
  CardPrice,
  InfoContainer,
  RemoveButton,
  RemoveLabel,
  ShopCardContainer,
  ShopCardText,
  TextContainer,
} from './styles'

import { QuantityButton } from '../../../../../../components/QuantityButton'
import { CoffeeCardProps } from '../../../../../Home/components/OurCoffees/components/CoffeeCard'

import { Trash } from 'phosphor-react'

export function ShopCard(props: CoffeeCardProps) {
  const { removeCoffeeItem } = useContext(CoffeeListContext)
  const [removeCoffe, setRemoveCoffe] = useState(false)

  function handleRemoveCoffee() {
    setRemoveCoffe(true)

    const time = setTimeout(() => {
      removeCoffeeItem(props)
      setRemoveCoffe(false)
    }, 500)

    return () => clearTimeout(time)
  }

  return (
    <ShopCardContainer className={removeCoffe ? 'remove-coffee' : ''}>
      <InfoContainer>
        <CardImage src={props.img_source} alt="" />
        <ShopCardText>
          <TextContainer>
            <CardLabel>{props.title}</CardLabel>
            <CardPrice>$ {props.price}</CardPrice>
          </TextContainer>
          <ButtonsContainer>
            <QuantityButton key={props.id} {...props} />
            <RemoveButton onClick={handleRemoveCoffee}>
              <Trash size={16} />
              <RemoveLabel>Remove</RemoveLabel>
            </RemoveButton>
          </ButtonsContainer>
        </ShopCardText>
      </InfoContainer>
    </ShopCardContainer>
  )
}
