import React from 'react'

export default (dispatch) => {
  return (
    <div>
      <div className="header">
        <h1 onClick={() => changePage('/')}>iEi Otago</h1>
      </div>
    </div>
  )
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
