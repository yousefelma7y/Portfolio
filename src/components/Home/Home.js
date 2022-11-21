import React from 'react'
import { Container } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;
import './Home.css';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Home = () => {

  const {ref ,inView} = useInView() ;
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();



  useEffect(() => {

    if(inView){
      animation.start({
        x:0 ,
        transition:{type:'spring', duration: 1.2  , bounce:0.3},
      });
      animation2.start({
        y:0 ,      
        transition:{type:'spring', duration: 2 , bounce:0.3},
      });
      animation3.start({
        y:0 ,      
        transition:{type:'spring', duration: 2 , bounce:0.3},
      });
    }

    if(!inView){
      animation.start({x:'-100vw'});
      animation2.start({y:'10vw'});
      animation3.start({y:'-10vw'});

    }

  },[inView]);


  return (
    <div ref={ref} className='home-page bg-light text-center'>
    <Container className='home-container'>
        <motion.h1  animate={animation3}  className='home-title'>
            Yousef Elmahy
        </motion.h1>
        <motion.h3  animate={animation2}  className='home-info'>
        Web Developer
        </motion.h3>
        <motion.p  animate={animation} 
         className='home-desc'>
            Iam a professional 
            <span> Full-Stack Web Developer </span>  
            creating modern and responsive designs to Web and Mobile.
            <br></br> Let us work together. Thank you.
        </motion.p>
        <motion.a href="#work"   className='home-btn'>
            Let's Begin 
        </motion.a>
    </Container>   
    </div>
  )
}

export default Home
