import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers'
import Header from './components/Header'
import HomePage from './components/HomePage'
import FixturesPage from './components/FixturesPage'
import ResultsPage from './components/ResultsPage'
import TablePage from './components/TablePage'

// Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
