import React from 'react'
import logo from './assests/Logo.png'
import { BsInstagram, BsFacebook, BsTelegram } from 'react-icons/bs'


const Footer = () => {
  
  return (
    
    <div>

      <footer class=" footer  bg-white rounded-lg shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4  md:py-8">
          <div class="flex items-center justify-between">
            <a href="/" class="flex items-center  sm:mb-0">
              <img src={logo} class="h-8 mr-3" alt="" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JYOTI</span>
            </a>
            <ul class="flex flex-wrap  items-center lg:gap-8 gap-4 text-2xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className='hover:scale-105 transition-transform'>
                <a href="https://www.instagram.com/jyotijgec target='_blank' rel='noreferrer'" class="mr-4 hover:text-blue-400  md:mr-6 "><BsInstagram /></a>
              </li>
              <li className='hover:scale-105 transition-transform'>
                <a href="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL" target='_blank' rel='noreferrer' class="mr-4 hover:text-blue-400 md:mr-6"><BsFacebook /></a>
              </li>
              <li className='hover:scale-105 transition-transform'>
                <a href="https://t.me/jyotijgec" target='_blank' rel='noreferrer' class="mr-4 hover:text-blue-400 md:mr-6 "><BsTelegram /></a>
              </li>

            </ul>
          </div>
          <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 " />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Jyoti JGEC™</a>. All Rights Reserved.</span>
        </div>
      </footer>


    </div>
  )
}

export default Footer
