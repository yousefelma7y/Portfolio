import React from 'react' ;
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;
import './about.css';

const about = () => {
  return (
    <div className=' about-page w-100' id='about'>
      <Row className='w-100 justify-content-end'>

     
      <div className='col-sm-6 col-1'>

      </div>
      <div className='col-lg-5 col-10 m-5 p-5 '>
        <motion.h1 initial={{opacity:0 ,x:150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.1}}
         className='about-header p-2'>
          This is Me
        </motion.h1><br></br>
        <motion.h2 initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} 
         className='about-header2 p-2'>
          Web Developer
        </motion.h2>
        <motion.p initial={{opacity:0 ,y:150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.3}} 
        className='p-2 fs-5'>
        I'm a Full-Stack Web Developer in Egypt. I have been performing as a web developer for 2
         years and am still in  the process of gaining more experience through more years. As you're 
         reading this, I'm working to develop my skills.
        </motion.p>
      </div>
      </Row>
    </div>
  )
}

export default about
