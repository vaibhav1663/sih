import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>  
            <Navbar page="about" />
            <div className="w-1/2 p-4 box mt-3 text-center">
                <h1>Indian Systems of Medicine </h1>
                <p>The Traditional medical systems like Ayurveda, Unani, Siddha & Sowa Rigpa come under the heading of Indian Systems of Medicine</p>
            </div>
            <div className='w-1/2 gird gap-3'>
                
            </div>
        </div>
    )
}

export default About