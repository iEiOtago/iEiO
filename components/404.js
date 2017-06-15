import React from 'react'
import menu from './menu'
import back from './buttons/back'

export default ({state, dispatch}) => {
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        <h3>404</h3>
      </div>
      <div className="FourOhFour">
      {back(dispatch)}
      <p>We could not find the page you were looking for!</p>
      </div>
    </div>
  )
}
