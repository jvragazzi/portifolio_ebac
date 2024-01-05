import Titulo from '../../components/Titulo'
import Projeto from '../../components/Projeto'

import { Lista } from './styles'

const Projetos = () => (
  <div>
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
      </Lista>
    </section>
  </div>
)

export default Projetos
