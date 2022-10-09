import React from 'react'
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;

import './work.css' ;

const work = () => {

  const works =[
    {
      id:1,
      workName : 'Front End' ,
      workDescription : 'Trained at ITI company for 2 months as a Front End developer .' ,
      workMotion : -350 ,
    },
    {
      id:2,
      workName : 'Freelance' ,
      workDescription : 'Worked as a freelancer in many projects.' ,
      workMotion : 350 ,
    }
  ]

  return (
   <div className='mt-5 ' id='work'>
     <motion.h1 initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.2}} className='work-header '>
       My <span className='fw-bold '>Work</span>
     </motion.h1>

     <Row className='p-5 w-100 justify-content-center'>
      {
        works.map(works =>
        <motion.div key={works.id} whileHover={{scale:1.1}} initial={{opacity:0 , x: works.workMotion }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
            className='work-card col-xl-5 col-sm-8  text-center m-5'>
            <h2 className='work-title'>
              {works.workName}
            </h2>
            <hr></hr>
            <p className='text-secondary'>
            {works.workDescription}
            </p>
        </motion.div>
        )
      }
     
     </Row>
    
   </div>
  )
}

export default work
