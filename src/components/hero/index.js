import React from "react";
import { Link } from 'react-router-dom'
import Clients from './client'


import hero1 from '../../images/simira/Picture 1.png'
import hero2 from '../../images/slider/s.png'
import hero3 from '../../images/simira/Picture 2.png'




const Hero =() => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title-top">
                                <span>Delivering lasting impact</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Our closets have the power to change someone’s winter</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We optimize resources across the society with current area of focus garment allocation.</p>
                            </div>
                            <div className="btns">
                                <Link to="/about" className="btn theme-btn-s2">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <img src={hero1} alt=""/>
                                    </div>
                                    <div className="wpo-happy-client">
                                        <Clients/>
                                        
                                         {/* <img src={hero1} alt=""/> */}
                                    </div>
                                </div>
                                <div className="right-item">
                                    <div className="wpo-total-project">
                                        <div className="wpo-total-project-wrap">
                                            <div className="wpo-total-project-icon">
                                                <i className="fi flaticon-salary"></i>
                                            </div>
                                            <div className="wpo-total-project-text">
                                                <h3>450+</h3>
                                                <p>drives across India and Nigeria</p>
                                            </div>
                                        </div>
                                        <div className="project-shape">
                                            <img src={hero2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="r-img">
                                        <img src={hero3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;
