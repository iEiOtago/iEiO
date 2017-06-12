import React from 'react'
import header from './header'
import nav from './nav'
import menu from './menu'

export default ({state, dispatch}) =>
  <div>
    {header(dispatch)}
    <div className="bannerPage">
      <h1>{state.route.slice(1)}</h1>
    </div>
    {nav(dispatch)}
    {menu(state, dispatch)}
  </div>
