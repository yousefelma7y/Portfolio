import React from 'react'
import { Container } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;
import './Home.css';
const Home = () => {
  return (
    <div className='home-page bg-light text-center'>
    <Container className='home-container'>
        <motion.h1 initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.2}}  className='home-title'>
            Yousef Elmahy
        </motion.h1>
        <motion.h3 initial={{opacity:0 ,x:-350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}}  className='home-info'>
        Web Developer
        </motion.h3>
        <motion.p initial={{opacity:0 ,x:350 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}} 
         className='home-desc'>
            Iam a professional 
            <span>Full-Stack Web Developer</span>  
            creating modern and resposive designs to Web and Mobile.
            <br></br> Let us work together. Thank you.
        </motion.p>
        <motion.button initial={{opacity:0 ,y:350 }} animate={{opacity:1 ,y:0}} transition={{delay:0.6}}  className='home-btn'>
           <a  className='home-btn' href="#work"> Let's Begin </a>
        </motion.button>
    </Container>   
    </div>
  )
}

export default Home
