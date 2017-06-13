import React from 'react'
import menu from './menu'
import back from './buttons/back'

export default ({state, dispatch}) => {
  return (
    <div>
      {menu(state, dispatch)}
      <div className="FourOhFour">
      {back(dispatch)}
      <h1>404</h1>
      <p>We could not find the page you were looking for!</p>
      </div>
    </div>
  )
}
