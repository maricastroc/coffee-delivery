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

export function Success() {
  const navigate = useNavigate()

  const { checkoutData } = useContext(CheckoutContext)

  useEffect(() => {
    if (!checkoutData) {
      navigate('/')
    }
  })

  if (!checkoutData) {
    return <></>
  }

  console.log(checkoutData.address)

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
                    {checkoutData?.address.street},
                    {checkoutData?.address.number}
                  </span>
                </p>
                <p>
                  {checkoutData?.address.neighborhood},
                  {checkoutData?.address.city} - {checkoutData?.address.uf}
                </p>
              </TextWrapper>
            </LineWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <TextWrapper>
              <p>Delivery forecast</p>
              <strong>20 - 30min</strong>
            </TextWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <TextWrapper>
              <p>Payment on delivery</p>
              <strong>{checkoutData.paymentMethod}</strong>
            </TextWrapper>
          </InfoWrapper>
        </InfoContainer>
      </ResumeSection>
      <ImageContainer>
        <img src="/assets/success-image.svg" alt="" />
      </ImageContainer>
    </SuccessContainer>
  )
}
