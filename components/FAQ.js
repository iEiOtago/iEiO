import React from 'react'
import menu from './menu'

export default ({state, dispatch}) =>
  <div>
    {menu(state, dispatch)}
    <div className="bannerPage">
      <h1>{state.route.slice(1)}</h1>
    </div>
  </div>
