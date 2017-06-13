module.exports = (state, { type, payload }) => {
  const newState = require('clone')(state)
  switch (type) {
    case 'CHANGE_ROUTE':
      newState.routeHistory.push(newState.route)
      return { ...newState, route: payload }
    case 'BACK_BUTTON':
      newState.route = newState.routeHistory.pop()
      return newState
    case 'SELECT_SERVICE':
      newState.selectedService = payload
      return newState
    default:
      return newState
    }
  }
