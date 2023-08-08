import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../../pages/router'
import { CartProvider } from '../../contexts/cart-context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
