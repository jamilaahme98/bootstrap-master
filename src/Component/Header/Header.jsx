import React, { Component } from 'react'
import aaa from './img/aaa.svg'
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <div className='logo'>
                <img src={aaa}/>
            </div>
            <h1>START BOOTSTRAP</h1>
            <div className='divider'>
                <div className="divider-custom-line"></div>
                <i class="fa-solid fa-star star"></i>
                <div className="divider-custom-line"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
</header>

      </div>
    )
  }
}
