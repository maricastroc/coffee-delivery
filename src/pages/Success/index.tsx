import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import {
  Heading,
  ImageContainer,
  InfoContainer,
  InfoWrapper,
  LineWrapper,
  Paragraph,
  ResumeSection,
  SuccessContainer,
  TextContainer,
  TextWrapper,
} from './styles'
import { MapPin } from 'phosphor-react'
import { Icon } from './components/Icon'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

export function Success() {
  const navigate = useNavigate()

  const { checkoutData, setPaymentMethod } = useContext(CheckoutContext)
  const { resetList } = useContext(CoffeeListContext)

  useEffect(() => {
    if (!checkoutData) {
      navigate('/')
    } else {
      resetList()
      setPaymentMethod('')
    }
  })

  if (!checkoutData) {
    return <></>
  }

  return (
    <SuccessContainer>
      <ResumeSection>
        <TextContainer>
          <Heading>Yay! You&apos;re all set!</Heading>
          <Paragraph>
            Now just wait for the coffee to come to you soon
          </Paragraph>
        </TextContainer>
        <InfoContainer>
          <InfoWrapper>
            <LineWrapper>
              <Icon color="purple" icon={<MapPin weight="fill" size={16} />} />
              <TextWrapper>
                <p>
                  Delivery at {''}
                  <span>
                    {checkoutData?.address.street}, {''}
                    {checkoutData?.address.number}
                  </span>
                </p>
                <p>
                  {checkoutData?.address.neighborhood}, {''}
                  {checkoutData?.address.city} - {checkoutData?.address.uf}
                </p>
              </TextWrapper>
            </LineWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <LineWrapper>
              <Icon color="yellow" icon={<MapPin weight="fill" size={16} />} />
              <TextWrapper>
                <p>Delivery forecast</p>
                <strong>20 - 30min</strong>
              </TextWrapper>
            </LineWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <LineWrapper>
              <Icon
                color="yellowDark"
                icon={<MapPin weight="fill" size={16} />}
              />
              <TextWrapper>
                <p>Payment on delivery</p>
                <strong>{checkoutData.paymentMethod}</strong>
              </TextWrapper>
            </LineWrapper>
          </InfoWrapper>
        </InfoContainer>
      </ResumeSection>
      <ImageContainer>
        <img src="/assets/success-image.svg" alt="" />
      </ImageContainer>
    </SuccessContainer>
  )
}
