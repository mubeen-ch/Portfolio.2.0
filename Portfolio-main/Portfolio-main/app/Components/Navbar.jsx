import { assets } from '@/next_js_portfolio_assets/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu state instead of direct ref manipulation
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        // Senior practice: Always clean up event listeners
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#up' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Background Accent */}
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden opacity-50'>
                <Image src={assets.header_bg_color} alt='' className='w-full' priority />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
                isScroll 
                ? "bg-white/70 backdrop-blur-md shadow-sm dark:bg-darkTheme/70 dark:shadow-white/5" 
                : ""
            }`}>
                {/* Logo */}
                <a href="#up">
                    <Image 
                        src={isDarkMode ? assets.logo_dark : assets.logo} 
                        className='w-20 cursor-pointer transition-transform hover:scale-105' 
                        alt='Logo'
                    />
                </a>

                {/* Desktop Navigation */}
                <ul className={`hidden md:flex items-center gap-8 lg:gap-10 rounded-full px-12 py-3 transition-all ${
                    isScroll 
                    ? "bg-transparent" 
                    : "bg-white/40 shadow-sm border border-white/20 backdrop-blur-sm dark:bg-transparent dark:border-white/10"
                }`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a className='font-Ovo text-sm uppercase tracking-wider hover:text-gray-500 dark:hover:text-gray-400 transition-colors' href={link.href}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Action Controls */}
                <div className='flex items-center gap-4'>
                    <button 
                        onClick={() => setIsDarkMode(prev => !prev)} 
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full dark:border-white/50 font-Ovo hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300'>
                        Hire Me
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='' />
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className='block md:hidden p-2' onClick={toggleMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu' className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu Side Drawer */}
                <ul 
                    className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 bottom-0 w-72 z-50 h-screen bg-white transition-transform duration-500 ease-in-out dark:bg-darkHover dark:text-white shadow-2xl ${
                        isMenuOpen ? "right-0" : "-right-80"
                    }`}
                >
                    <button className='absolute right-10 top-8 p-2' onClick={toggleMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close' className='w-5' />
                    </button>
                    
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                className='font-Ovo text-xl block hover:translate-x-2 transition-transform' 
                                onClick={toggleMenu} 
                                href={link.href}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;