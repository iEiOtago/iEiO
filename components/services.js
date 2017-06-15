import React from 'react'
import menu from './menu'

export default ({state, dispatch}) => {
  const {route, services} = state
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        <h3>{route.slice(1)}</h3>
      </div>
      <div className="servicesContainer" >
      {createServices(services)}
      </div>
    </div>
  )
  function createServices(services) {
    return (
      <div className="services">
        {services.map((service, i)=> {
          return <div className="serviceItem col-md-4 col-sm-12" key={i} onClick={() => {
                  selectService(service)
                  changePage("/Service")
                }} >
                  <img src="https://c1.staticflickr.com/9/8371/8512264358_ff41d08ccc_b.jpg" />
                  <h3>{service.service}</h3>
                 </div>
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
