import {useRoutes} from 'hookrouter'
import Routes from './Routes.js'

function App() {
  const routeResult = useRoutes(Routes)
  return routeResult
}

export default App;