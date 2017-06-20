import React from 'react'
import menu from './menu'
import footer from './footer'
import back from './buttons/back'

export default ({state, dispatch}) =>
  <div>
    {menu(state, dispatch)}
    <div className="bannerPage">
      {back(dispatch)}
      <h4>{state.route.slice(1)}</h4>
    </div>
    <div className="blockHeader"></div>
    {footer()}
  </div>
