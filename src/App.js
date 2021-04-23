import './App.css'
import Home from './Home/Home'
import ClientPortal from './ClientPortal/ClientPortal'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/client-portal" component={ClientPortal} />
      </Switch>
    </div>
  );
}

export default App;
