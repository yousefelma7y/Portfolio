import React from 'react'
import {Link} from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './portfolio.css';

import {motion} from 'framer-motion/dist/es/index' ;

const portfolio = () => {

  const projects = [
    {
      id: 1 ,
      class: 'projects first-proj col-md-3 col-sm-5 col-9' ,
      link : 'https://ecommerce-souq.netlify.app/'
    } ,
    {
      id: 2 ,
      class: 'projects secound-proj col-md-3 col-sm-5 col-9'  ,
      link : 'https://damanhour-football.netlify.app/'
    },
    {
      id: 3 ,
      class: 'projects third-proj col-md-3 col-sm-5 col-9'  ,
      link : 'https://travelagency711.000webhostapp.com/'
    },
 
  ]
    
  

  return (
    <div className="portfolio-page justify-content-center text-center  w-100" id='portfolio'>
      <motion.h1 initial={{opacity:0 ,y:-50 ,x:-60}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.05}} className='fw-bold pt-5'>
        My Portfolio
      </motion.h1>
      <Row className='justify-content-center mt-5 w-100'>

      {
        projects.map(projects =>  
        <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.05}}   whileHover={{y:-10}} 

         key={projects.id} className={projects.class} >
            <p className="overlay">
                 <button className="show-project" onClick={()=> window.open( projects.link , "_blank")}>
                     Show Project
                 </button>
             </p>
           </motion.div>)
      }

      </Row>
     
    </div>
  )
}

export default portfolio
