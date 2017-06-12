import React from 'react'

export default (state, dispatch) => {
  return (
    <div className="fullMenu">
      {menu(state.menu, changePage)}
    </div>
  )

  function menu (menuItems) {
    return (
      <div>
        {menuItems.map(function(item, i) {
            return <h1 key={i} onClick={() => changePage(item.route)} > {item.page} </h1>
        })}
      </div>
    )
  }
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
