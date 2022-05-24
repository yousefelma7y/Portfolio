import React from 'react';
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;

import './profile.css';

const profile = () => {
  return (
    <Row className='w-100 justify-content-center' id='resume'>
      <div className='col-md-5 col-12  '>
         <motion.h1 initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.1}} 
          className='p-5'>
          My <span className='fw-bold'>Profile</span>
          </motion.h1>
        <div className='profile-list m-5'>
           
           <motion.div initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.2}} 
             className='profile-items row '>
            <span className='col-xl-3 col-6 fw-bold'>Name  </span>
            <span className='col-xl-4 col-6'> Yousef Elmahy  </span>
            </motion.div>
            <motion.div initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.3}} 
             className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Birthday</span>
            <span className='col-xl-3 col-6'>7/11/2000  </span>
            </motion.div>
            <motion.div initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.4}} 
             className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Address</span>
            <span className='col-xl-3 col-6'> Damanhour  </span>
            </motion.div>
            <motion.div initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.5}} 
            className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Phone</span>
            <span className='col-xl-3 col-6'>01022361568 </span>
            </motion.div>
            <motion.div initial={{opacity:0 ,x:-150 }} animate={{opacity:1 ,x:0}} transition={{delay:0.6}} 
             className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Email</span>
            <span className='col-xl-3 col-sm-6  email'> yousefelmahy7112000@gmail.com </span>
            </motion.div>
           
    
       </div>
      </div>
      <div className='col-md-5 col-12 p-5 m-5'>
         
         <motion.h1 initial={{opacity:0 ,y:-150 }} animate={{opacity:1 ,y:0}} transition={{delay:0.1}} >
         <span className='fw-bold'> Some </span> Skills
         </motion.h1>

         <Row    className=" profile-skills ">
            <span className="col-6 p-3">HTML</span>
            <span className="col-6 p-3 text-center">90%</span>
            <div className="parent col-12">
                <span className="sp1"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <span className="col-6 p-3">CSS</span>
            <span className="col-6 p-3 text-center">75%</span>
            <div className="parent col-12">
                <span className="sp2"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <span className="col-6  p-3">JavaScript</span>
            <span className="col-6  p-3 text-center">70%</span>
            <div className="parent col-12">
                <span className="sp3"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <span className="col-6  p-3">React.js</span>
            <span className="col-6  p-3 text-center">75%</span>
            <div className="parent col-12">
                <span className="sp4"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <span className="col-6 p-3">Node.js</span>
            <span className="col-6  p-3 text-center">10%</span>
            <div className="parent col-12">
                <span className="sp5"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <span className="col-6  p-3">MongoDB </span>
            <span className="col-6  p-3 text-center">10%</span>
            <div className="parent col-12">
                <span className="sp6"></span>
            </div>
         </Row>
      </div>
    </Row>
  )
}

export default profile
