import { assets } from '@/next_js_portfolio_assets/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2f9fe79e-4b48-45d8-83cf-8a9062d47c99");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
         <h4 className='text-center mb-2 text-2xl font-Ovo'>Connect with me</h4>
  <h2 className=" text-center font-Ovo text-5xl font-medium text-black-300">Get in Touch</h2>
  <p className='text-center max-w-5xl mx-auto mb-12 mt-5 font-Ovo text-xl'>I'm always excited to collaborate, share ideas, and explore new opportunities! Whether you have a project in mind, a role for me , or just want to say hello, feel free to reach out. </p>
<form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
    <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
<input type="text" placeholder='Enter your name'required
className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>
<input type="email" placeholder='Enter your email'required
className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>
</div>
<textarea rows='6' placeholder='Enter your message' 
className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-5 bg-white dark:bg-darkHover/30 dark:border-white/90'required name='message'></textarea>

<button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Send Now <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
    
</form>
<p className='bg-red text-white rounded-2xl '>{result}</p>
    </div>
  )
}

export default Contact