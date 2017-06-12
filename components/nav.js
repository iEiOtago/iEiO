import React from 'react'

export default (dispatch) => {
  return (
    <nav className="menu" onClick={() => toggle()}>
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
      <label className="menu-open-button" htmlFor="menu-open">
        <span className="hamburger hamburger-1"></span>
        <span className="hamburger hamburger-2"></span>
        <span className="hamburger hamburger-3"></span>
      </label>
    </nav>
  )

  function toggle() {
  const e = document.getElementsByClassName("fullMenu")
  console.log(e[0].style.display);
  if(e[0].style.display == 'none')
    e[0].style.display = 'block'
  else
    e[0].style.display = 'none'
  }
}
