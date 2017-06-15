import React from 'react'
import menu from './menu'

export default ({state, dispatch}) => {
  const {selectedService} = state
  const {service, content, stepsHeading, steps} = selectedService
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        <h3>{service}</h3>
      </div>
      <div className="container">
      {createContent(content)}
      <h3>{stepsHeading}</h3>
      {createSteps(steps)}
      </div>
    </div>
  )
  function createSteps(steps) {
    return (
      <ol>
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
            <span key={i}>
            <h3 className="serviceInfo"> {item.heading} </h3>
            <p> {item.content} </p>
            </span>
          )
        })}
      </div>
    )
  }
}
