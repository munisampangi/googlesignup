import {BrowserRouter, Switch, Route} from 'react-router-dom'
// if switch is noting working install react-rputer-dom@5
import Dashboard from './components/Dashboard'
// import NotFound from './components/NotFound'

import Login from './components/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Dashboard} />
     
    </Switch>
  </BrowserRouter>
)

export default App
