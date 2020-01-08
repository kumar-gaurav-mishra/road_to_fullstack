import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
class App extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/shop">
              <ShopPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
