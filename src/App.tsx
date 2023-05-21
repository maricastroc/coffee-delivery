import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CoffeeListContextProvider } from './contexts/CoffeeListContext'
import { CheckoutContextProvider } from './contexts/CheckoutContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CoffeeListContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CoffeeListContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
