import './App.css';
import Navigation from './components/navigation'
import Home from './components/home'
import CreateAccount from './components/createAccount'
import Withdraw from './components/withdraw'
import Balance from './components/balance'
import Deposit from './components/deposit'
import AllData from './components/allData'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateAccount />
            </Route>
            <Route path="/deposit">
              <Deposit />
            </Route>
            <Route path="/withdraw">
              <Withdraw />
            </Route>
            <Route path="/balance">
              <Balance />
            </Route>
            <Route path="/alldata">
              <AllData />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
