import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Transaction } from './pages/Transactions'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transaction />
      <GlobalStyle />
    </ThemeProvider>
  )
}
