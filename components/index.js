import React from 'react'
import back from './buttons/back'
import menu from './menu'

export default ({state, dispatch}) => {
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        <h1>Independent Electrical Inspectors Otago</h1>
      </div>
      <button className="bannerButton" onClick={() => changePage('/Services')}>Explore Services</button>
      <div className="banner">
      </div>
    </div>
  )
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
