import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import firebase from 'firebase';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import auth from './firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
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
            <Route exact path="/sign-in">
              <SignInAndSignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
