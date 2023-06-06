import React from 'react'
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;

import './work.css' ;
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Work = () => {
  const {ref ,inView} = useInView() ;
  const animation = useAnimation();
  const animation2 = useAnimation();


  useEffect(() => {

    if(inView){
      animation.start({
        x:0 ,
        transition:{type:'spring'  , bounce:0.3},
      });
      animation2.start({
        y:0 ,      
        transition:{type:'spring', duration:2 , bounce:0.3},
      });
    }

    if(!inView){
      animation.start({x:'-100vw'});
      animation2.start({y:'-10vw'});
   
    }

  },[inView]);

  const works =[
    {
      id:1,
      workName : 'CTA Company' ,
      workDescription : 'Worked as a Frontend developer in CTA Company for 1 year.' ,
    },
    {
      id:2,
      workName : 'Freelance' ,
      workDescription : 'Worked as a freelancer in many projects.' ,
    },
    {
      id:3,
      workName : 'Internship' ,
      workDescription : 'Trained at ITI company for 3 months as a Front End developer .' ,

    }
  ]

  return (
   <div ref={ref} className='mt-5 ' id='work'>
     <motion.h1  animate={animation} duration={1.2} className='work-header '>
       My <span className='fw-bold '>Work</span>
     </motion.h1>

     <Row className='p-5 w-100 justify-content-center'>
      {
        works.map(works =>
        <motion.div key={works.id} whileHover={{scale:1.1}} animate={animation2}
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

export default Work
