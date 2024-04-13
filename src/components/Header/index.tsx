import { HeaderContainer, HeaderContent, NewTransactionBtn } from './styles'
import Logo from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionBtn>Nova transação</NewTransactionBtn>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
