import React from 'react'
import Navigation from './components/Navigation/Navigation'

import { Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

import './app.css'

import About from './components/About/About'
import Account from './components/Account/Account'
import Bills from './components/Bills/Bills'
import Customers from './components/Customers/Customers'
import Products from './components/Products/Products'
import SignIn from './components/SignIn/SignIn'
import Default from './components/Default/Default'

const App = (props) => {
  return (
    <div>

      <Navigation/>

      <Route path="/" component={ Home } exact={true} />
      <Route path="/login" component={ Login } exact={true} />
      <Route path="/about" component={ About } exact={true} />
      <Route path="/customers" component={ Customers } exact={true} />
      <Route path="/products" component={ Products } exact={true} />
      <Route path="/account" component={ Account } exact={true} />
      <Route path="/bills" component={ Bills } exact={true} />
      <Route path="/signin" component={ SignIn } exact={true} />
      <Route  component={ Default } exact={true} />
      
    </div>
  )
}

export default App
