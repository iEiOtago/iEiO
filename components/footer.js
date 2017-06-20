import React from 'react'

export default () => {
  return (
    <div className="footer">
      <span>&copy; {getDate()} Independent Electrical Inspectors Otago. All Rights Reserved. <span className="developer">Devloped by <a href="https://github.com/bradymat">bradymat</a></span></span>
    </div>
  )
  function getDate() {
    return new Date().getFullYear()
  }
}
