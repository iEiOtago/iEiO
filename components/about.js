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
    <div className="aboutContent">
    <div className="col-md-6 blurb">
    <h5>iEi Otago is a small company that specializes in providing independent electrical inspections within the Otago region.</h5>
    <img src="https://user-images.githubusercontent.com/20106637/27616634-32f56e4c-5c05-11e7-9311-54bb9469a64e.JPG" />
    <div className="allan"><h3>Allan Perry</h3></div>
    <div className="imgCont">
    </div>
    </div>

    <div className="col-md-6">
    <p>Allan Perry is the main inspector; Allan has worked in the electrical industry for the majority of his career. Most recently, at Delta as the Superintendent for the Electrical Inspectors team in Dunedin and Central.</p>
    <p>Allan has a wealth of knowledge and expertise from his time in the industry and is happy to guide others who need clarification about regulations, compliance and best practice.</p>
    <p>Allan mentors electricians who are working towards their inspectors’ ticket.</p>
    </div>
    </div>
    {footer()}
    </div>
  )
}
