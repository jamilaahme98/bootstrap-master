import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
        <div className='contact'>
            <div className="container">
                <h1>CONTACT ME</h1>
                <div className='divider'>
                    <div className="divider-custom-line"></div>
                    <i className="fa-solid fa-star star"></i>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="crud">
                    <input type="text" className="name" placeholder='Full name' />
                    <input type="email" className="email" placeholder='Email address' />
                    <input type="phone" className="phone" placeholder='Phone number' />
                    <input type="text" className="message" placeholder='Message' />
                </div>
                <button className='submit' type="submit">Send</button>
            </div>
        </div>
    )
  }
}
