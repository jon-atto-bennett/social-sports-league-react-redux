import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'

// const store = configureStore()

render(
  <BrowserRouter>
    <div>
      <Header />
      <HomePage />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
 )
