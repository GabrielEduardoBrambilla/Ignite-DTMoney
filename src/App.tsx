import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
