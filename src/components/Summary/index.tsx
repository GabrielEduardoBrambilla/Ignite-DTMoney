import { ArrowCircleDown, ArrowCircleUp, CurrencyBtc } from 'phosphor-react'
import { SummaryContainer, SummaryCard } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard className="">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard className="">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard className="" variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyBtc size={32} color="#FFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
