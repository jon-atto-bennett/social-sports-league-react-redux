import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { BrowserRouter, Route } from 'react-router-dom'

import {fetchTeams} from './actions/'

import Header from './components/common/Header'
import HomePage from './components/home/HomePage'
import FixturesPage from './components/fixtures/FixturesPage'
import ResultsPage from './components/results/ResultsPage'
import TablePage from './components/table/TablePage'

// Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

const store = configureStore()
store.dispatch(fetchTeams())

render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='container text-center'>
        <Header />
        <main>
          <Route exact path='/' component={HomePage} />
          <Route path='/Fixtures' component={FixturesPage} />
          <Route path='/Results' component={ResultsPage} />
          <Route path='/Table' component={TablePage} />
        </main>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
 )
