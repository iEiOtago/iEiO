import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'
import Home from './components'
import About from './components/about'
import FAQ from './components/FAQ'
import Contact from './components/contact'
import Service from './components/service'
import ConnectionsSerivce from './components/connectionsService'
import DisconnectionSerivce from './components/disconnectionService'
import UpgradeService from './components/upgradeService'
import FourOhFour from './components/404'

const initialState = require('./initialState')()

const { getState, dispatch, subscribe } = createStore(reducer, initialState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/About', (params) => About],
  ['/FAQ', (params) => FAQ],
  ['/Contact', (params) => Contact],
  ['/Service', (params) => Service],
  ['/ConnectionsSerivce', (params) => ConnectionsSerivce],
  ['/DisconnectionSerivce', (params) => DisconnectionSerivce],
  ['/UpgradeService', (params) => UpgradeService],
  ['/404', (params) => FourOhFour]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
