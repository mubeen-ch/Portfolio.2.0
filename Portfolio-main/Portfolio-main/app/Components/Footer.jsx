import { assets } from '@/next_js_portfolio_assets/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div>
        <div>
            <Image src={isDarkMode? assets.logo_dark :assets.logo} alt='' className='w-36 mx-auto mb-2'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode? assets.mail_icon_dark: assets.mail_icon} alt='' className='w-6'/>
                mubeenanees786@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2024 Mubeen Anees. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
               <li><a  target="_blank" href="https://www.linkedin.com/in/mubeen-anees-37b085291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"></a>Linked inn</li> 
               <li><a target="_blank"  href="https://www.instagram.com/mubeench.100/?igsh=MXFzMmU4bXJiZW9xYw%3D%3D#"></a>Instagram</li> 
               <li><a target="_blank"  href="https://github.com/mubeen-ch"></a>GitHub</li> 
            </ul>
        </div>
    </div>
  )
}

export default Footer