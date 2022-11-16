import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="part-one">
            <div className="container m-auto row">
                <div className="col-md-4 location">
                    <h2>LOCATION</h2>
                    <p className='px-lg-5'>2215 John Daniel Drive Clark, MO 65243</p>
                </div>
                <div className="col-md-4 social">
                    <h2>AROUND THE WEB</h2>
                    <ul className='lists'>
                        <li className='item'>
                            <i class="fa-brands fa-facebook-f px-1 py-1"></i>
                        </li>
                        <li className='item'>
                            <i class="fa-brands fa-twitter py-1"></i>
                        </li>
                        <li className='item'>
                            <i class="fa-brands fa-linkedin-in py-1"></i>
                        </li>
                        <li className='item'>
                            <i class="fa-brands fa-dribbble py-1"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 freelancer">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#">Start Bootstrap</a> .</p>

                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container m-auto">
                <p>Copyright © Your Website 2022</p>
            </div>
        </div>
      </footer>
    )
  }
}
