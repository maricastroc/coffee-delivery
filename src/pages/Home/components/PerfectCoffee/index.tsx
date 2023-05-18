import {
  Heading,
  Icon,
  Paragraph,
  PerfectCoffeeContainer,
  PerfectCoffeeContent,
  PerfectCoffeeText,
} from './styles'

import { Benefits } from './components/Benefits'

export function PerfectCoffee() {
  return (
    <PerfectCoffeeContainer>
      <PerfectCoffeeContent>
        <PerfectCoffeeText>
          <Heading>Find the perfect coffee for any time!</Heading>
          <Paragraph>
            With Coffee Delivery you can get your coffee anytime, wherever you
            are!
          </Paragraph>
          <Benefits />
        </PerfectCoffeeText>
        <Icon src="/assets/coffee-image.png" alt="" />
      </PerfectCoffeeContent>
    </PerfectCoffeeContainer>
  )
}
