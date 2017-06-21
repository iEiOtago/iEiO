import React from 'react'
import menu from './menu'
import footer from './footer'
import scrollToTop from './utilities/scrollToTop'
import back from './buttons/back'

export default ({state, dispatch}) => {
  scrollToTop()
  return (
    <div>
    {menu(state, dispatch)}
    <div className="bannerPage">
    {back(dispatch)}
    <h4>{state.route.slice(1)}</h4>
    </div>
    <div className="blockHeader"></div>
    <div className="contactContent">
    <div className="col-md-6 blurb">
    <h5>iEi Otago is a small company that specializes in providing independent electrical inspections within the Otago region.</h5>
    </div>

    <div className="col-md-6">

      <img src="https://thumb7.shutterstock.com/display_pic_with_logo/3886523/389696407/stock-photo-morning-on-vineyard-at-lake-wanaka-otago-new-zealand-389696407.jpg" />
    </div>
    </div>
    {footer()}
    </div>
  )
}
