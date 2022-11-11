import React from 'react' ;
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;
import './about.css';

const about = () => {
  return (
    <div className='about-page ' id='about'>
    <Row className='w-100 m-0'>
      <div className='col-md-6  d-md-flex d-none d-print-block'>
    
      </div>
      <div className='aboutme-smallScreen col-lg-6 col-12 px-5 '>
        <motion.h1 initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.1}}
         className='about-header pt-5 mt-5 '>
          This is Me
        </motion.h1><br></br>
        <motion.h2 initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} 
         className='about-header2 '>
          Web Developer
        </motion.h2>
        <motion.p initial={{opacity:0 ,y:150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.3}} 
        className='about-me  fs-5 pt-3 pb-3 '>
        I'm a Full-Stack Web Developer in Egypt. I have been performing as a web developer for 3
         years and am still in  the process of gaining more experience through more years. As you're 
         reading this, I'm working to develop my skills.
        </motion.p>
      </div>
      </Row>
    </div>
  )
}

export default about
