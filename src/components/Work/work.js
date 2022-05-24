import React from 'react'
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;

import './work.css' ;

const work = () => {
  return (
   <div className='mt-5 ' id='work'>
     <h1 className='work-header '>
       My <span className='fw-bold '>Work</span>
     </h1>
     <Row className='p-5 w-100 justify-content-center'>
     <motion.div    whileHover={{scale:1.1}}  className='work-card col-xl-5 col-sm-8  text-center m-5'>
          <h2 className='work-title'>
            Front End
          </h2>
          <hr></hr>
          <p className='text-secondary'>
          Trained at ITI company for 2 months as a Front End developer .
          </p>
          </motion.div>
      <motion.div  whileHover={{scale:1.1}}  className='work-card col-xl-5 col-sm-8  text-center m-5 '>
          <h2 className='work-title'>
          Freelance
          </h2>
          <hr></hr>
          <p className='text-secondary'>
          Worked as a freelancer in many projects.
          </p>
          </motion.div>
     </Row>
    
   </div>
  )
}

export default work
