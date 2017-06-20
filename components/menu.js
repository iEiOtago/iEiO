import React from 'react'

export default (state, dispatch) => {
  return (
    <div>
    <ul className="menu">
      <li onClick={() => changePage("/")} ><a className="active" ><img src="https://user-images.githubusercontent.com/20106637/27310095-056d057a-55ac-11e7-99c7-a6a05b733c62.png" /></a></li>
      {menu(state.menu, changePage)}
    </ul>
    <div className="blockMenu"></div>
    </div>
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
