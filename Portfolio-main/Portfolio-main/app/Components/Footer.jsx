import { assets } from '@/next_js_portfolio_assets/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mubeen-anees-37b085291' },
    { name: 'Instagram', href: 'https://www.instagram.com/mubeench.100/' },
    { name: 'GitHub', href: 'https://github.com/chmubeen1020' }
  ];

  return (
    <footer className="mt-20">
      <div className="text-center">
        {/* Logo with smooth return to top */}
        <a href="#up" className="inline-block transition-transform hover:scale-105">
          <Image 
            src={isDarkMode ? assets.logo_dark : assets.logo} 
            alt="Logo" 
            className="w-24 md:w-32 mx-auto mb-4" 
          />
        </a>

        {/* Contact Email */}
        <div className="w-max flex items-center gap-3 mx-auto py-2 px-4 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-darkHover/20 text-sm md:text-base">
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt="Mail" 
            className="w-5" 
          />
          <a href="mailto:mubeenanees786@gmail.com" className="hover:text-gray-500 transition-colors">
            mubeenanees786@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 dark:border-white/10 mx-[8%] md:mx-[12%] mt-16 py-8 text-sm text-gray-600 dark:text-gray-400">
        <p>© 2026 Mubeen Anees. Built with excellence in Lahore.</p>
        
        <ul className="flex items-center gap-8 justify-center mt-6 sm:mt-0">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={link.href}
                className="hover:text-black dark:hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                {/* Subtle underline hover effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer