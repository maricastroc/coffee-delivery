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
import { CoffeeCardProps } from '../../../../../Home/components/CoffeeCard'
import { CoffeeListContext } from '../../../../../../contexts/CoffeeListContext'
import { useContext } from 'react'

export function ShopCard(props: CoffeeCardProps) {
  const { removeCoffeeItem } = useContext(CoffeeListContext)

  return (
    <ShopCardContainer>
      <InfoContainer>
        <img src={props.img_source} alt="" />
        <ShopCardText>
          <TextContainer>
            <p>{props.title}</p>
            <strong>$ {props.price}</strong>
          </TextContainer>
          <ButtonsContainer>
            <QuantityButton
              key={props.id}
              id={props.id}
              title={props.title}
              subtitle={props.subtitle}
              tags={props.tags}
              img_source={props.img_source}
              price={props.price}
              quantity={props.quantity}
            />
            <RemoveButton onClick={() => removeCoffeeItem(props)}>
              <Trash size={16} />
              <p>Remove</p>
            </RemoveButton>
          </ButtonsContainer>
        </ShopCardText>
      </InfoContainer>
    </ShopCardContainer>
  )
}
