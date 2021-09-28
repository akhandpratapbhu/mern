import React from 'react'
//import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Services from './Services'
import Contact from './components/Contact'
import Register from './components/Register'
import Default from './components/Default'
import { Route } from 'react-router-dom'
//import NAV from './components/NAV'
 const App = () => {
  return (
    <>
    <Navbar/>
    <Route  exact path="/"><Home/></Route>
    <Route  exact path="/about"><About/></Route>
    <Route  exact path="/service"><Services/></Route>
    <Route  exact path="/contact"><Contact/></Route>
    <Route  exact path="/login"> <Login/></Route>
    <Route  exact path="/register"> <Register/></Route>
    <Route exact Component= {Default}></Route>
    </>
  )
}
export default App;