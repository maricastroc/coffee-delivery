import {
  BenefitItem,
  BenefitsContainer,
  HomeContainer,
  OurCoffeesContainer,
  PerfectCoffeeContainer,
  PerfectCoffeeContent,
  PerfectCoffeeText,
} from './styles'

import { CoffeeCard } from './components/CoffeeCard'
import CoffeeList from '../../data/coffee-types.json'

export function Home() {
  const coffeeList = CoffeeList

  return (
    <HomeContainer>
      <PerfectCoffeeContainer>
        <PerfectCoffeeContent>
          <PerfectCoffeeText>
            <h2>Find the perfect coffee for any time!</h2>
            <p>
              With Coffee Delivery you can get your coffee anytime, wherever you
              are!
            </p>
            <BenefitsContainer>
              <div>
                <BenefitItem>
                  <span className="bg-orange">
                    <img src="/assets/icons/icon-shop-small.svg" alt="" />
                  </span>
                  <p>Simple and secure purchase</p>
                </BenefitItem>
                <BenefitItem>
                  <span className="bg-yellow">
                    <img src="/assets/icons/icon-coffee-small.svg" alt="" />
                  </span>
                  <p>Fast and tracked delivery</p>
                </BenefitItem>
              </div>
              <div>
                <BenefitItem>
                  <span className="bg-gray">
                    <img src="/assets/icons/icon-delivery-small.svg" alt="" />
                  </span>
                  <p>The packaging keeps the coffee intact</p>
                </BenefitItem>
                <BenefitItem>
                  <span className="bg-purple">
                    <img src="/assets/icons/icon-package-small.svg" alt="" />
                  </span>
                  <p>You get a freshly brewed coffee</p>
                </BenefitItem>
              </div>
            </BenefitsContainer>
          </PerfectCoffeeText>
          <img src="/assets/coffee-image.png" alt="" />
        </PerfectCoffeeContent>
      </PerfectCoffeeContainer>
      <OurCoffeesContainer>
        <h2>Our Coffees</h2>
        <div>
          {coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                title={coffee.title}
                subtitle={coffee.subtitle}
                tags={coffee.tags}
                img_source={coffee.img_source}
                price={coffee.price}
                quantity={coffee.quantity}
              />
            )
          })}
        </div>
      </OurCoffeesContainer>
    </HomeContainer>
  )
}
