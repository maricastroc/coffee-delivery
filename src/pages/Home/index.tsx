import { HomeContainer } from './styles'
import { PerfectCoffee } from './components/PerfectCoffee'
import { OurCoffees } from './components/OurCoffees'

export function Home() {
  return (
    <HomeContainer>
      <PerfectCoffee />
      <OurCoffees />
    </HomeContainer>
  )
}
