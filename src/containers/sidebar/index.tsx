import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>João Victor Ragazzi</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        @jvragazzi
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Frontend
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
