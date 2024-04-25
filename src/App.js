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


const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <Todolist />
      <Project />
      <Videos />
      {/* <Project /> */}
      {/* <Accordion /> */}
      <Subscriptions />
      <Contact />
      <Footer />
    </>
  )
}

export default App
