import React, { Component } from 'react'
import './About.css'
export default class About extends Component {
  render() {
    return (
        <div className='about'>
            <div className="container">
                <h1>ABOUT</h1>
                <div className='divider'>
                    <div className="divider-custom-line"></div>
                    <i className="fa-solid fa-star star"></i>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="discussion row">
                    <div className="col-md-6">
                        <p className='pe-0 pe-md-3'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
                <button className='download'>
                    <i className="fa-solid fa-download"></i>
                    <span>Free Download!</span>
                </button>
            </div>
        </div>
    )
  }
}
