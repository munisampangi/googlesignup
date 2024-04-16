import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

import Login from './components/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
