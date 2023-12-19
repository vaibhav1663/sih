import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar page="about" />
            <div class="lg:mb-0 flex " style={{height: '100vh' ,textAlign: 'center'}} >
                <img src="./img/img2.jpg" alt="" class="object-cover w-1/2 h-screen"/>
                <div class="p-8 ">
                <h2 class="mb-10 text-3xl max-w-[700px] font-bold leading-[1.208] text-dark  lg:text-[38px] xl:text-[40px] m-auto">
                    About National Commission For Indian System Of Medicine
                </h2>
                <p class=" mb-8 max-w-[700px] text-base text-body-color m-auto text-justify">
                    The National Commission For Indian System Of Medicine is the statutory body constituted under <b>NCISM Act, 2020</b> vide gazette notification extraordinary part (ii) section 3(ii) dated 21.09.2020.

                    An Act to provide for a <b>medical education system that improves access to quality and affordable medical education</b>, ensures availability of adequate and high quality medical professionals of Indian System of Medicine in all parts of the country; that promotes equitable and universal healthcare that encourages community health perspective and makes services of such medical professionals accessible and affordable to all the citizens; that promotes national health goals; that encourages such medical professionals to adopt latest medical research in their work and to contribute to research; that has an objective periodic and transparent assessment of medical institutions and facilitates maintenance of a medical register of Indian System of Medicine for India and enforces high ethical standards in all aspects of medical services; that is flexible to adapt to the changing needs and has an effective grievance redressal mechanism and for matters connected therewith or incidental thereto.
                </p>
                </div>

            </div>

        </div>
    )
}

export default About