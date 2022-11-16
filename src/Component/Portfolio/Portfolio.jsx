import React, { Component } from 'react';
import img1 from './img/cabin.png';
import img2 from './img/cake.png';
import img3 from './img/circus.png';
import img4 from './img/game.png';
import img5 from './img/safe.png';
import img6 from './img/submarine.png';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className='portfolio container'>
            <h1>PORTFOLIO</h1>
            <div className='divider'>
                <div className="divider-custom-line"></div>
                <i class="fa-solid fa-star star"></i>
                <div className="divider-custom-line"></div>
            </div>
            <div className='row'>
                <div className='col-md-4 port-img mb-5'>
                    <div class="img position-relative">
                        <div class="overlay">
                            <span><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <img src={img1} class="w-100"alt=""/>
                    </div>
                </div>
                <div className='col-md-4 port-img mb-5'>
                    <div class="img position-relative">
                        <div class="overlay">
                            <span><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <img src={img2} class="w-100"alt=""/>
                    </div>
                </div>
                <div className='col-md-4 port-img mb-5'>
                    <div class="img position-relative">
                        <div class="overlay">
                            <span><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <img src={img3} class="w-100"alt=""/>
                    </div>
                </div>
                <div className='col-md-4 port-img mb-5'>
                    <div class="img position-relative">
                        <div class="overlay">
                            <span><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <img src={img4} class="w-100"alt=""/>
                    </div>
                </div>
                <div className='col-md-4 port-img mb-5'>
                    <div class="img position-relative">
                        <div class="overlay">
                            <span><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <img src={img5} class="w-100"alt=""/>
                    </div>
                </div>
                <div className='col-md-4 port-img mb-5'>
                    <div class="img position-relative">
                        <div class="overlay">
                            <span><i class="fa-solid fa-plus"></i></span>
                        </div>
                        <img src={img6} class="w-100"alt=""/>
                    </div>
                </div>

            </div>
        </div>
      </div>
    )
  }
}
