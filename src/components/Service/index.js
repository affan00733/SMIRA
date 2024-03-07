import React from 'react'
import {Link} from 'react-router-dom'
import Services from '../../api/service'

const Service = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <section className={`${props.Fclass} section-padding  ${props.vclassClass}`}>
            <div className="container">
                <div className="row">
                    {Services.slice(0, 2).map((service, sitem) => (
                        <div className="col col-lg-6 col-lg-1 col-sm-1 col-1"  key={sitem}>
                            <div style={{
                            height: "80%",width: "190%"
                        }} className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className={`fi  ${service.fIcon1}`}></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link></h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service;