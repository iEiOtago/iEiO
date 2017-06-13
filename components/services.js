import React from 'react'
import menu from './menu'

export default ({state, dispatch}) => {
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        <h1>{state.route.slice(1)}</h1>
      </div>
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
