import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import FixturesPage from './components/FixturesPage'
import ResultsPage from './components/ResultsPage'
import TablePage from './components/TablePage'

// const store = configureStore()

render(
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Route exact path='/' component={HomePage} />
        <Route path='/Fixtures' component={FixturesPage} />
        <Route path='/Results' component={ResultsPage} />
        <Route path='/Table' component={TablePage} />
      </main>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
 )
