import { OurCoffeesContainer, Heading, Wrapper } from './styles'
import { CoffeeCard, CoffeeCardProps } from './components/CoffeeCard'
import CoffeeList from '../../../../data/coffee-types.json'

export function OurCoffees() {
  const coffeeList = CoffeeList

  return (
    <OurCoffeesContainer>
      <Heading>Our Coffees</Heading>
      <Wrapper>
        {coffeeList.map((coffee: CoffeeCardProps) => {
          return <CoffeeCard key={coffee.id} {...coffee} />
        })}
      </Wrapper>
    </OurCoffeesContainer>
  )
}
