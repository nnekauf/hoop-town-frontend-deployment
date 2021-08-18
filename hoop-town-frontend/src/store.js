import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import tournaments from './reducers/tournaments'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import tournamentForm from './reducers/tournamentForm'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({
  tournaments, 
  currentUser,
  loginForm,
  signupForm,
  tournamentForm,
 
})

const store = createStore(combinedReducer, compose(applyMiddleware(thunk), composeWithDevTools()))


export default store