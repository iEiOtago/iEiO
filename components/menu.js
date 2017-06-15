import React from 'react'

export default (state, dispatch) => {
  return (
    <ul className="menu">
      <li onClick={() => changePage("/")} ><a className="active" >iEi Otago</a></li>
      {menu(state.menu, changePage)}
    </ul>
  )

  function menu (menuItems) {
    return (
      <span>
        {menuItems.map(function(item, i) {
            return <li key={i} onClick={() => changePage(item.route)} ><a>{item.page}</a></li>
        })}
      </span>
    )
  }
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
