import React from 'react'
import menu from './menu'
import footer from './footer'
import scrollToTop from './utilities/scrollToTop'
import back from './buttons/back'

export default ({state, dispatch}) => {
  const {selectedService} = state
  const {service, image, blurb, content, stepsHeading, steps} = selectedService
  scrollToTop()
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        {back(dispatch)}
        <h4>{service}</h4>
      </div>
      <div className="blockHeader"></div>
      <div className="servicesContent">
        <div className="blurb col-md-12">
          <h5>{blurb}</h5>
        </div>
        <div className="col-sm-12 col-md-6">
        {createContent(content)}
        </div>
        <div className="col-sm-12 col-md-6">
        <h4>{stepsHeading}</h4>
        {createSteps(steps)}
        <img src={image} />
        </div>
      </div>
      {footer()}
    </div>
  )
  function createSteps(steps) {
    return (
      <ol className="serviceSteps">
        {steps.map((step, i) => {
          return <li key={i}> {step} </li>
        })}
      </ol>
    )
  }
  function createContent(content) {
    return (
      <div>
        {content.map((item, i) => {
          return (
            <div className="serviceInfo" key={i}>
            <h4> {item.heading} </h4>
            <p> {item.content} </p>
            </div>
          )
        })}
      </div>
    )
  }
}
