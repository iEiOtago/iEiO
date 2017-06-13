import React from 'react'

export default (state, dispatch) => {
  return (
    <ul className="menu">
      <li onClick={() => changePage("/")} ><a className="active" >iEiO</a></li>
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
// <ul className="menu">
//   <li><a href="#" className="active"><h1>iEiO</h1></a></li>
//   <li><a href="#">Services</a></li>
//   <li><a href="#">About</a></li>
//   <li><a href="#">FAQ</a></li>
//   <li><a href="#">Contact</a></li>
//   <li className="slider"></li>
// </ul>
