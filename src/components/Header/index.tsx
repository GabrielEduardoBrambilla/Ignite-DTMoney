import { HeaderContainer, HeaderContent, NewTransactionBtn } from './styles'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <NewTransactionBtn>Nova transação</NewTransactionBtn>
      </HeaderContent>
    </HeaderContainer>
  )
}
