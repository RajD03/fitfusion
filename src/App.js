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

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <Todolist />
      <Accordion />
      <Videos />
      <Subscriptions />
      <Contact />
      <Footer />
    </>
  )
}

export default App
