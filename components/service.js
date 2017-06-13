import React from 'react'
import menu from './menu'

export default ({state, dispatch}) => {
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        <h1>{state.selectedService.service}</h1>
      </div>
      <p>{state.selectedService.blurb}</p>
      <h2>Did you know?</h2>
      <p>{state.selectedService.dyk}</p>
      <h2>What an {state.selectedService.service} Involves</h2>
      <p>{state.selectedService.involve}</p>
      <h2>What is Important for {state.selectedService.service}</h2>
      <p>{state.selectedService.important}</p>
      <h2>Where do I get an {state.selectedService.service} done?</h2>
      <p>{state.selectedService.done}</p>
      <h2>How do I book an {state.selectedService.service}?</h2>
      {createSteps(state.selectedService.book)}
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
}
