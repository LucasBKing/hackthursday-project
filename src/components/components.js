import Page from './page'
import Header from './header'
import Button from './button'
import Perfil from './perfil'
import PerfilItem from './perfil_item'
import PerfilComponent from './perfil_component'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  page: Page,
  header: Header,
  button: Button,
  perfil: Perfil,
  perfil_item: PerfilItem,
  perfil_component: PerfilComponent
}

const Components = type => {
  if (!ComponentList[type]) {
    return ComponentNotFound
  }

  return ComponentList[type]
}

export default Components
