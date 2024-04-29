import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Todolist from './components/Todolist'
import Accordion from './components/ExpertAdvice/Accordion'
import Contact from './components/Contact'
import Videos from './components/Videos'
import Subscriptions from './components/Subscriptions'
import Project from './project'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <Todolist />
      <Project />
      <Videos />
      <Subscriptions />
      <Contact />
      <div className='user_reg'>
        <Login />
        <Signup />
      </div>
      <Footer />
    </>
  )
}

export default App
