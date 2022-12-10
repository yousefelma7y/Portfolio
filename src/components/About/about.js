import React from 'react' ;
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;
import './about.css';


import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const About = () => {

  const {ref ,inView} = useInView() ;
  const animation = useAnimation();
  const animation2 = useAnimation();


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
    }

    if(!inView){
      animation.start({x:'-100vw'});
      animation2.start({y:'10vw'});
   
    }

  },[inView]);

  return (
    <div ref={ref} className='about-page ' id='about'>
    <Row className='w-100 m-0'>
      <div className='col-md-6  d-md-flex d-none d-print-block'>
    
      </div>
      <div className='aboutme-smallScreen col-lg-6 col-12 px-5 '>
        <motion.h1 animate={animation}
         className='about-header pt-5 mt-5 '>
          This is Me
        </motion.h1><br></br>
        <motion.h2 animate={animation2}
         className='about-header2 '>
          Web Developer
        </motion.h2>
        <motion.p animate={animation}
        className='about-me  fs-5 pt-3 pb-3 '>
        I'm a Front-End Web Developer in Egypt. I have been performing as a web developer for 3
         years and am still in  the process of gaining more experience through more years. As you're 
         reading this, I'm working to develop my skills.
        </motion.p>
      </div>
      </Row>
    </div>
  )
}

export default About
