import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Empowering Property Dreams, Tailored to Your Aspirations </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>15+</p>
                        <p>Completed Projects</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div> 
                <p className='my-10 max-w-lg'>Welcome to Estate, where we turn your real estate dreams into reality. With a focus on quality, innovation, and customer satisfaction, we specialize in creating exceptional living and commercial spaces that cater to your unique needs. Our mission is to deliver properties that inspire and add value to your life, blending modern designs with sustainable practices. Whether you're looking for your dream home or a smart investment, we are committed to guiding you every step of the way, ensuring a seamless and rewarding experience.</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default About
