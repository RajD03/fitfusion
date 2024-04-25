import React from 'react'
import V1 from './videos/v1.mp4';

const Videos = () => {
    return (
        <>
            <div className='videos' id='sessions'>
                <h1>Online Sessions</h1>
                <div className='all_videos'>
                    <video src={V1} autoPlay="true" className='plates' controls />
                    <video src={V1} className='plates' contautoPlay="true" controls />
                    <video src={V1} className='plates' autoPlay="true" controls />
                    <video src={V1} autoPlay="true" className='plates' autoPlay="true" />
                    <video src={V1} className='plates' autoPlay="true" />
                    <video src={V1} className='plates' autoPlay="true" />
                </div>
            </div>
        </>
    )
}

export default Videos
