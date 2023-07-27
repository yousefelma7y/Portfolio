import React from 'react';
import { Row } from 'react-bootstrap';
import {motion} from 'framer-motion/dist/es/index' ;

import './profile.css';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Profile = () => {

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
        x:0 ,      
        transition:{type:'spring', duration: 2 , bounce:0.3},
      });
    }

    if(!inView){
      animation.start({x:'-100vw'});
      animation2.start({x:'10vw'});
   
    }

  },[inView]);

  return (
    <Row ref={ref} className='w-100 justify-content-center' id='resume'>
      <div className='col-md-5 col-12  '>
         <motion.h1 animate={animation} 
          className='p-5'>
          My <span className='fw-bold'>Profile</span>
          </motion.h1>
        <div className='profile-list m-5'>
           
           <motion.div  animate={animation} 
             className='profile-items row '>
            <span className='col-xl-3 col-6 fw-bold'>Name  </span>
            <span className='col-xl-4 col-6'> Yousef Elmahy  </span>
            </motion.div>
            <motion.div animate={animation} 
             className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Birthday</span>
            <span className='col-xl-3 col-6'>7/11/2000  </span>
            </motion.div>
            <motion.div animate={animation} 
             className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Address</span>
            <span className='col-xl-3 col-6'> Egypt  </span>
            </motion.div>
            <motion.div animate={animation} 
            className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Phone</span>
            <span className='col-xl-3 col-6'>01022361568 </span>
            </motion.div>
            <motion.div animate={animation} 
             className='profile-items row'>
            <span className='col-xl-3 col-6 fw-bold'>Email</span>
            <span className='col-xl-3 col-sm-6  email'> yousefelmahy7112000@gmail.com </span>
            </motion.div>
           
    
       </div>
      </div>
      <div className='col-md-5 col-12 p-5 m-5'>
         
         <motion.h1 animate={animation2} >
         <span className='fw-bold'> Some </span> Skills
         </motion.h1>

         <Row    className=" profile-skills ">
            <motion.span animate={animation2}   className="col-6 p-3">HTML</motion.span>
            <motion.span animate={animation2}  className="col-6 p-3 text-center">95%</motion.span>
            <div className="parent col-12">
                <span className="sp1"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <motion.span animate={animation2}   className="col-6 p-3">CSS</motion.span>
            <motion.span animate={animation2}  className="col-6 p-3 text-center">90%</motion.span>
            <div className="parent col-12">
                <span className="sp2"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <motion.span animate={animation2}   className="col-6 p-3">Bootstrap</motion.span>
            <motion.span animate={animation2}  className="col-6 p-3 text-center">90%</motion.span>
            <div className="parent col-12">
                <span className="sp3"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <motion.span animate={animation2}   className="col-6  p-3">JavaScript</motion.span>
            <motion.span animate={animation2}  className="col-6  p-3 text-center">85%</motion.span>
            <div className="parent col-12">
                <span className="sp4"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <motion.span animate={animation2}   className="col-6  p-3">React.js</motion.span>
            <motion.span animate={animation2}  className="col-6  p-3 text-center">95%</motion.span>
            <div className="parent col-12">
                <span className="sp5"></span>
            </div>
         </Row>
         <Row  className="profile-skills">
            <motion.span animate={animation2}   className="col-6 p-3">Redux</motion.span>
            <motion.span animate={animation2}  className="col-6  p-3 text-center">80%</motion.span>
            <div className="parent col-12">
                <span className="sp6"></span>
            </div>
         </Row>
        
      </div>
    </Row>
  )
}

export default Profile
