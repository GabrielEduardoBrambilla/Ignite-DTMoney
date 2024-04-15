import { ArrowCircleDown, ArrowCircleUp, CurrencyBtc } from 'phosphor-react'
import { SummaryContainer, SummaryCard } from './styles'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard className="">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard className="">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard className="" variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyBtc size={32} color="#FFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
