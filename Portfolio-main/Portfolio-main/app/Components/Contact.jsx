import { assets } from '@/next_js_portfolio_assets/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending message...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "2f9fe79e-4b48-45d8-83cf-8a9062d47c99");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully! I'll get back to you soon.");
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
            // Clear message after 5 seconds
            setTimeout(() => setResult(""), 5000);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' 
            className='w-full px-[8%] md:px-[12%] py-10 scroll-mt-24 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
        >
            <motion.h4 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo tracking-widest uppercase text-gray-500'
            >
                Connect with me
            </motion.h4>
            
            <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center font-Ovo text-4xl md:text-5xl font-medium"
            >
                Get in Touch
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mb-12 mt-5 font-Ovo text-lg text-gray-600 dark:text-gray-300'
            >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Based in Lahore, available for global collaboration.
            </motion.p>

            <motion.form 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                onSubmit={onSubmit} 
                className='max-w-2xl mx-auto'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input 
                        type="text" 
                        placeholder='Your Name' 
                        required
                        className='p-4 outline-none border border-gray-300 rounded-xl bg-white dark:bg-darkHover/30 dark:border-white/20 focus:border-black dark:focus:border-white transition-colors duration-300' 
                        name='name'
                    />
                    <input 
                        type="email" 
                        placeholder='Your Email' 
                        required
                        className='p-4 outline-none border border-gray-300 rounded-xl bg-white dark:bg-darkHover/30 dark:border-white/20 focus:border-black dark:focus:border-white transition-colors duration-300' 
                        name='email'
                    />
                </div>
                
                <textarea 
                    rows='6' 
                    placeholder='Describe your project or just say hi...' 
                    className='w-full p-4 outline-none border border-gray-300 rounded-xl mb-6 bg-white dark:bg-darkHover/30 dark:border-white/20 focus:border-black dark:focus:border-white transition-colors duration-300' 
                    required 
                    name='message'
                ></textarea>

                <button 
                    type='submit' 
                    disabled={isSubmitting}
                    className='py-4 px-10 w-max flex items-center justify-center gap-3 bg-black text-white rounded-full mx-auto hover:bg-gray-800 transition-all duration-500 dark:bg-white dark:text-black dark:hover:bg-gray-200 disabled:bg-gray-400'
                >
                    {isSubmitting ? "Sending..." : "Send Message"} 
                    {!isSubmitting && <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert'/>}
                </button>

                {/* Status Message */}
                <p className={`mt-6 text-center font-Ovo transition-opacity duration-500 ${result ? 'opacity-100' : 'opacity-0'}`}>
                    {result}
                </p>
            </motion.form>
        </motion.div>
    )
}

export default Contact