import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/'
import reduxImmutableState from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
    applyMiddleware(thunk, reduxImmutableState()))
  )
}
