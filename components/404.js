import React from 'react'
import menu from './menu'
import back from './buttons/back'

export default ({state, dispatch}) => {
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        {back(dispatch)}
        <h4>404</h4>
      </div>
      <div className="blockHeader"></div>
      <div className="FourOhFour">
      <p>We could not find the page you were looking for!</p>
      </div>
    </div>
  )
}
