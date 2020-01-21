import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import firebase from 'firebase/app';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
      await createUserProfileDocument(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/shop">
              <ShopPage />
            </Route>
            <Route exact path="/signin">
              <SignInAndSignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
