import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'


class Testimonial extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const testimonial = [
            {
                tsImg: ts1,
                Des: "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
                Title: 'Harverd Tommy',
                Sub: "Maneger Of MNTR",
            },
            {
                tsImg: ts2,
                Des: "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
                Title: 'Marry Jenefer',
                Sub: "CEO Of Golden Bravo",
            },
            {
                tsImg: ts3,
                Des: "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
                Title: 'William Robert',
                Sub: "CEO Of Bexima",
            }
        ]
        return (

            <div className="wpo-testimonial-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title">
                                <span>Testimonial</span>
                                <h2>What People Say About Us</h2>
                                <p>Inspiring testimonials showcasing the profound impact of the NGO's work, as recounted by beneficiaries, volunteers, and community members
</p>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-testimonial-wrap">
                        <div className="testimonial-slider owl-carousel">
                        <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="wpo-testimonial-item" key={tsm}>
                                        <div className="wpo-testimonial-img">
                                            <img src={tesmnl.tsImg} alt="" />
                                        </div>
                                        <div className="wpo-testimonial-content">
                                            <p>{tesmnl.Des}</p>
                                            <h2>{tesmnl.Title}</h2>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;