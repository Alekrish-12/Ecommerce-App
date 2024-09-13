import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt=""/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore enim minima harum, deserunt placeat obcaecati quibusdam dolores repellendus laborum, exercitationem debitis itaque, nobis dolor atque voluptas at quasi ad est?
                </p>
            </div>

     
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-274-837-1832</li>
                <li>contact@shopforever.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr/>
        <p className='font-semibold py-5 text-sm text-center'>Copyright 2024 forever.com - All Rights Reserved</p>
      </div>

      </div>

  )
}

export default Footer
