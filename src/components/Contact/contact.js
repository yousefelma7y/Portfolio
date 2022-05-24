import React from 'react';
import emailjs from 'emailjs-com' ;
import './contact.css';
import {motion} from 'framer-motion/dist/es/index' ;
export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yuw70rn', 'template_l13wzii', e.target , 'user_lCp2aDRJsQP3oE0gAEhlv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
  return (
    <div className='justify-content-center row w-100'>
      <div className=' contact-form col-lg-7 col-11  justify-content-center  row '>

        <motion.h1 initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.1}}
          className='text-center col-12 mb-5 fs-1'>
          Drop <span className='fw-bold'>Me A line</span>
        </motion.h1>

        <motion.p initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}}
         className='contact-par text-center col-12 '>
        Have a question or want to work together?
        </motion.p>

        <form className='row justify-content-center'  onSubmit={sendEmail}>
          <motion.input initial={{opacity:0 ,x:250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}}
            type="text" className='col-lg-5 col-11 m-2' placeholder="Your Name" name="name" />

          <motion.input initial={{opacity:0 ,x:-250 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}}
            type="email" className='col-lg-5 col-11 m-2' placeholder="Your Email" name="email" />

          <motion.textarea initial={{opacity:0 ,y:150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.5}} 
            className='col-11 m-2' cols="20" rows="8" placeholder="Your Message" name="message"></motion.textarea>

          <motion.input initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.6}} 
            type="submit" className='sendmess' value="Send Message" />

        </form>
        </div>    
    </div>
  )
}


