import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'; 
import { auth } from './firebase';
import { useStateValue } from './StateProvider'

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if(authUser) {
        // ther user is logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">
        {/* Header can be outside of the switch because it will always be rendered */}
        
        <Switch>
          {/* Login page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Checkout page */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Home page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
