import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myprojects from './projectData'

const project = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div className='_box' id="experts" >
                <h1 className='_pro'>Our Experts</h1>
                <div className='main_container' data-aos="fade-left">
                    <Slider {...settings}>
                        {myprojects.map((item) => (
                            <div className='all_cards'>
                                <div className='cards_image'>
                                    <a href={item.link}> <img src={item.image} className='card_img' /></a>
                                </div>
                                <div className='cards_name'>
                                    <a href={item.link} className='card_type' ><h1>{item.type} </h1> </a>
                                    <a className='card_desc'><h1>{item.description} </h1> </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default project
