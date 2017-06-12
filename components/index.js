import React from 'react'
import back from './buttons/back'
import header from './header'
import nav from './nav'
import menu from './menu'

export default ({state, dispatch}) => {
  return (
    <div>
      {header(dispatch)}
      <button className="bannerButton" onClick={() => changePage('/Services')}>Explore Services</button>
      <div className="banner">
      </div>
      {nav(dispatch)}
      {menu(state, dispatch)}
    </div>
  )
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
