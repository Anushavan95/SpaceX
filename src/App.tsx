import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Routes from './routes'
import { Router } from 'react-router-dom'
import browserHistory from './browserHistory'
import Header from './components/Header'
import getCompanies from './store/companies/action/getCompanies'

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <Header />
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </Provider>
)

export default App

store.dispatch(getCompanies())
