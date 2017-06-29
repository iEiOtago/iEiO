import React from 'react'
import menu from './menu'
import footer from './footer'
import submitEmailForm from './utilities/submitEmailForm'
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
    <h5>If you want book a job, email us and we will get back to you.</h5>
    <form className="form">

      <label>Name</label>
      <input type="text" name="name" placeholder="Your name"></input>

      <label>Email</label>
      <input type="text" name="email" placeholder="example@email.com"></input>

      <label>Message</label>
      <input type="text" name="message" placeholder="Your message"></input>

      <button onClick={(e) => {
        submitEmailForm()
        e.preventDefault()
        changePage('/About')
      }}>Submit</button>
      <div>
      <span className="fa fa-phone"></span><a href="tel:+64204771262">020 477 1262</a>
      <span className="fa fa-envelope-o"></span><a href="mailto:allan@ieio.co.nz">allan@ieio.co.nz</a>
      </div>
    </form>
    </div>

    <div className="col-md-6">
      <h4>Location</h4>
      <p>We operate in the Otago region, since we are always out and about working we do not have a main office building. Feel free to email or call us to get in touch</p>
      <h4>Hours</h4>
      <p>8 am - 4 pm, Monday - Friday</p>
      <img src="https://thumb7.shutterstock.com/display_pic_with_logo/512149/502577554/stock-photo-trondheim-norway-october-silver-gray-toyota-rav-hybrid-sport-utility-vehicle-suv-502577554.jpg" />
    </div>


    </div>
    {footer()}
    </div>
  )
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
// type="submit" value="Submit"
 // method="POST" action="https://script.google.com/macros/s/AKfycbwuxBA9kJlHrzI8I97yCHv0O7z7BXyfkcxp3LGWtQa4a5xEhsH6/exec"
 // onClick={() => {changePage('/')}}


// old form
//
// <p type="Name"><input type="text" placeholder="your name" id="name"></input></p>
// <p type="Email"><input type="text" placeholder="example@email.com" id="email"></input></p>
//
// <p type="Message"><input type="text" placeholder="your query" id="message"></input></p>
// <button>Send Message</button>
// <div>
// <span className="fa fa-phone"></span><a href="tel:+64204771262">020 477 1262</a>
// <span className="fa fa-envelope-o"></span><a href="mailto:allan@ieio.co.nz">allan@ieio.co.nz</a>
// </div>
// </form>


// <label>Subject</label>
// <select name="subject">
//   <option value="Choose a subject">Choose a subject</option>
//   <option value="Property Inspection">Property Inspection</option>
//   <option value="Electrical Warrant of Fitness">Electrical Warrant of Fitness</option>
//   <option value="Explosive Area Inspection">Explosive Area Inspection</option>
//   <option value="Connections">Connections</option>
//   <option value="Permanent Disconnection">Permanent Disconnection</option>
//   <option value="Electrical Upgrades">Electrical Upgrades</option>
//   <option value="Other">Other</option>
// </select>


// <p>If you have a quick question feel free to phone during office hours; I respond to 2 calls whilst on a job, after that I stop answering so I can finish the job I am on. Please email us if you miss us.</p>
