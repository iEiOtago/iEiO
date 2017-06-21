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
    <h5>If you want to make an appointment, email us and we will book you in and get back to you.</h5>
    <form className="form">
    <p type="Name:"><input placeholder="Write your name here.."></input></p>
    <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
    <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
    <button>Send Message</button>
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
}

// <p>If you have a quick question feel free to phone during office hours; I respond to 2 calls whilst on a job, after that I stop answering so I can finish the job I am on. Please email us if you miss us.</p>
