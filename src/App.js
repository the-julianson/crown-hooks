import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';


function App() {
  return (
    <>
      <Header/>
      <Switch>
      <Route exact={true} path="/" component={HomePage}/>
      <Route exact={true} path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndSignUpPage}/>
      <Route path="/shop/:id" component={ShopPage}/>
      </Switch>
    </>
  );
}

export default App;
