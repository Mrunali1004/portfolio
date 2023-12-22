import React from 'react'
import img2 from '../assests/about/about.jpg'

const About = () => {
    return (
        // <div class="relative flex flex-row">
        //     <img className='h-80 w-full bg-local bg-no-repeat bg-cover' src={img2} alt='' />
        //     <div class="absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center ">
        //         <p style={{ color: "white" }}>I am Mrunali Zalavadiya</p>
        //         <p style={{ color: "white" }}>I'm a Front-End Developer with extensive experiance for over more than 3 Years.</p>
        //         <p style={{ color: "white" }}>My expertise is to create and responsive React websites and many more.</p>
        //     </div>
        // </div>

        <div class="relative flex flex-row">
            <img class='h-96 w-full bg-local bg-no-repeat bg-scroll' src={img2} alt='' />
            <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <p className='mb-2 text-3xl font-bold' style={{color: "white"}}>I am Mrunali Zalavadiya</p>
                <p  className='mb-2 font-medium' style={{color: "white"}}>I'm a Front-End Developer with extensive experience for over more than 3 Years.</p>
                <p  className='mb-2 font-medium' style={{color: "white"}}>My expertise is to create responsive React websites and many more.</p>
                <button className='h-9 w-32 font-medium' style={{color: "white", backgroundColor:"black"}} >CV</button>
            </div>
        </div>
    )
}

export default About
