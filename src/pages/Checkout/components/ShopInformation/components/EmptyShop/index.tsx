import Lottie from 'lottie-react'

import smilingCoffeeAnimation from '../../../../../../../public/assets/lottie/smiling-coffee.json'

import { EmptyListContainer } from './styles'

export function EmptyList() {
  return (
    <EmptyListContainer>
      <Lottie animationData={smilingCoffeeAnimation} loop={true} />
      <h1>
        Hey, you haven&apos;t added any products to your cart yet.
        <br />
        <br />
        <a href="/">Click here </a>to add some of our delicious coffees!
      </h1>
    </EmptyListContainer>
  )
}
