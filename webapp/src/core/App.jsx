import { useRoutes } from 'hookrouter'
import Routes from './Routes'

function App () {
  const routeResult = useRoutes(Routes)
  return routeResult || '404! Not found!'
};

export default App
