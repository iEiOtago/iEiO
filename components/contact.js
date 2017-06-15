import React from 'react'
import menu from './menu'

export default ({state, dispatch}) =>
  <div>
    {menu(state, dispatch)}
    <div className="bannerPage">
      <h3>{state.route.slice(1)}</h3>
    </div>
  </div>
