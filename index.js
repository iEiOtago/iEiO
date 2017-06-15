import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'
import Home from './components'
import Contact from './components/contact'
import FAQ from './components/FAQ'
import Service from './components/service'
import FourOhFour from './components/404'

const initialState = require('./initialState')()

const { getState, dispatch, subscribe } = createStore(reducer, initialState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/Contact', (params) => Contact],
  ['/FAQ', (params) => FAQ],
  ['/Service', (params) => Service],
  ['/404', (params) => FourOhFour]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
