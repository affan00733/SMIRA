import React from 'react'
import {Link} from  'react-router-dom'
import abimg from '../../images/simira/Picture 4.jpg'
import shape from '../../images/ab-shape-2.png'


const About = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                                <div className="wpo-ab-shape-1">
                                    <div className="s-s1"></div>
                                    <div className="s-s2"></div>
                                </div>
                                <div className="wpo-ab-shape-2"><img src={shape} alt=""/></div>
                                <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Total Raised<span>$25000</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>About Us</span>
                            <h4>Smira foundation helps people affected by ineffective resource allocation—including the lack of clean, warm clothing — to recover and rebuild their lives.</h4>
                            <p>Founded in 2021 at the hear of Covid crisis in India, Smira is now at work in over 40 affected localities as well as communities throughout Nigeria. We deliver lasting impact by providing garments, food empowering communities to become self-reliant and prevent infections.
In 2023, Smira has reached over 35 thousand people in India and Nigeria. As part of this work, we:
</p>
                            <ul>
                            

                                <li>Supported xx health facilities</li>
                                <li>Provided 8,013,515 primary health care consultations</li>
                                <li>Treated 222,278 children under 5 for severe acute malnutrition</li>
                                <li>Admitted 453,344 children and 106,722 pregnant and lactating women to nutrition programs</li>
                                <li>Built or rehabilitated water supplies serving 3,490,159 people</li>
                                <li>Reached 1,421,270 people with cash assistance</li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn-s2" to="/about">More About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;