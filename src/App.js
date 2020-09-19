import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'; 
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HT9MOB7h7HPQOigxS3sLk3vGZCXDeGAPwoWR6VNzbQFP66ZYIk2deSKz9gnrPZk2E3yLzi91ZirPK7zt031aHcX00jbJ9BlHC');

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
        <Switch>
          {/* After processing orders */}
          <Route>
            <Orders />
          </Route>

          {/* Login page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Checkout page */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Payment page */}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
