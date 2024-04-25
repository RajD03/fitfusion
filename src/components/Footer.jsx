import React from 'react'
import git from './images/Git.jpg';
import linkedin from './images/linkedin.jpg';
import x from './images/x.jpg';
import insta from './images/insta.jpg';

const Footer = () => {
    return (
        <>
            <foooter>
                <div className='_footer'>
                    <div className='footer_img'>
                        <a href='https://github.com/RajD03' target='blank' ><img src={git} className='_git' /></a>
                        <a href='https://www.linkedin.com/in/d-d-raj-7a4b35247/' target='blank'><img src={linkedin} className='_link' /></a>
                        <a href='https://twitter.com/home?lang=en' target='blank'><img src={x} className='_twit' /></a>
                        <a href='https://www.instagram.com/divesh_raj_03/' target='blank' ><img src={insta} className='_instagram' /></a>
                    </div>
                    <div className='nav_foot' >
                        <a href='#' > ⬆️ </a>
                        <a href='#' className='back_to_top'> BACK TO TOP </a>
                    </div>
                </div>
            </foooter>
        </>
    )
}

export default Footer

