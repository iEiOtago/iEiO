import React from 'react'
import menu from './menu'
import footer from './footer'
import scrollToTop from './utilities/scrollToTop'
import back from './buttons/back'

export default ({state, dispatch}) => {
  const {complexSerivces} = state
  const {reconnection, newConnection} = complexSerivces
  scrollToTop()
  return (
    <div>
      {menu(state, dispatch)}
      <div className="bannerPage">
        {back(dispatch)}
        <h4>Connections</h4>
      </div>
      <div className="blockHeader"></div>
      <div className="servicesContent">
        <div className="col-sm-12 col-md-6">
        <h2>Reconnections</h2>
        {createContent(reconnection.content)}
        {createSteps(reconnection.steps)}
        </div>
        <div className="col-sm-12 col-md-6">
        <h2>New Connections</h2>
        {createContent(newConnection.content)}
        <img src={newConnection.image} />
        {createSteps(newConnection.steps)}
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
