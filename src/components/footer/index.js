import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo2.png'
import Projects from '../../api/projects'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={Logo} alt="blog"/>
                            </div>
                            <p>Warming Hearts, One Garment at a Time - Smira Foundation, Pune's Compassion in Action.
</p>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/cause">Causes</Link></li>
                                <li><Link onClick={ClickHandler} to="/blog">Latest News</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Events</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <p>Would you have any enquiries.Please feel free to contuct us</p>
                                <ul>
                                    <li><i className="fi flaticon-mail"></i>charitio@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+888 (123) 869523</li>
                                    <li><i className="fi flaticon-location"></i>New York – 1075 Firs Avenue</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Projects</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0,6).map((project, pitem)=>(
                                    <li className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <Link onClick={ClickHandler} to={`/project-single/${project.id}`}>
                                                <img src={project.projectImg} alt=""/>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2021 charitio Theme. Design By <Link to="/index">wpOcean</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;