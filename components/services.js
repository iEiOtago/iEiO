import React from 'react'
import header from './header'
import nav from './nav'
import menu from './menu'

export default ({state, dispatch}) => {
  return (
    <div>
      {header(dispatch)}
      <div className="bannerPage">
        <h1>{state.route.slice(1)}</h1>
      </div>
      {nav(dispatch)}
      {menu(state, dispatch)}
      {createServices(state.services)}
    </div>
  )
  function createServices(services) {
    return (
      <div>
        {services.map((service, i)=> {
          return <p key={i} onClick={() => {
                  selectService(service)
                  changePage("/Service")
                }} >
                  {service.service}
                 </p>
        })}
      </div>
    )
  }
  function selectService (service) {
    dispatch({type: 'SELECT_SERVICE', payload: service})
  }
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
