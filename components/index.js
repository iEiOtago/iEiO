import React from 'react'
import menu from './menu'
import footer from './footer'
import scrollToTop from './utilities/scrollToTop'

export default ({state, dispatch}) => {
  const {route, routeHistory, services} = state
  scrollToTop()
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        <h4>Independent Electrical Inspectors</h4>
      </div>
      <div className="blockHeader"></div>
      <div className="servicesContainer" >
      {createServices(services)}
      </div>
      {footer()}
    </div>
  )
  function createServices(services) {
    return (
      <div className="services">
        {services.map((service, i)=> {
          return <div className="serviceItem" key={i} onClick={() => {
                  selectService(service)
                  changePage("/Service")
                }} >
                  <img src={service.image} />
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
