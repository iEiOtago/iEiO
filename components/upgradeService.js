import React from 'react'
import menu from './menu'
import footer from './footer'
import scrollToTop from './utilities/scrollToTop'
import back from './buttons/back'

export default ({state, dispatch}) => {
  const {complexSerivces} = state
  const {upgrades} = complexSerivces
  scrollToTop()
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        {back(dispatch)}
        <h4>Upgrades</h4>
      </div>
      <div className="blockHeader"></div>
      <div className="servicesContent">
        <div className="col-sm-12 col-md-6">
        <h4>{upgrades.stepsHeading1}</h4>
        {createSteps(upgrades.steps1)}
        <h4>How do I upgrade my Main earth?</h4>
        <p>Have your electrician contact iEi Otago to arrange an inspection, when he has completed his part of the work.</p>
        <img src={upgrades.image} />
        </div>
        <div className="col-sm-12 col-md-6">
        <h4>{upgrades.stepsHeading2}</h4>
        {createSteps(upgrades.steps2)}
        <h4>What is the process for Switchboard upgrades or alterations?</h4>
        <h4>Option 1: Electricity meters on switchboard</h4>
        <p>If there are electricity meters on the switchboard that you wish to replace (no seals can be broken without authorisation).</p>
        {createSteps(upgrades.stepsOption1)}
        <h4>Option 2: Electricity meters NOT on switchboard</h4>
        <p>If the electricity meter is not located on the switchboard that you wish to replace.</p>
        {createSteps(upgrades.stepsOption2)}

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
}
