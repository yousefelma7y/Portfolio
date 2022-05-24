import React from 'react'
import {Link} from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './portfolio.css';

import {motion} from 'framer-motion/dist/es/index' ;

const portfolio = () => {
  return (
    <div className="portfolio-page justify-content-center text-center  w-100" id='portfolio'>
      <motion.h1 initial={{opacity:0 ,y:-50 ,x:-60}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.05}} className='fw-bold pt-5'>
        My Portfolio
      </motion.h1>
      <Row className='justify-content-center mt-5 w-100'>
      <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.05}}   whileHover={{y:-10}} 
       className='projects first-proj col-md-3 col-sm-5 col-9 '>
         <p className="overlay">
              <button className="show-project" onClick={()=> window.open("https://damanhour-football.netlify.app/", "_blank")}>
                  Show Project
              </button>
          </p>
        </motion.div>
        <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.1}}   whileHover={{y:-10}}
         className='projects secound-proj col-md-3 col-sm-5 col-9'>
         <p className="overlay ">
          <button className="show-project" onClick={()=> window.open("https://travelagency711.000webhostapp.com/", "_blank")} >
                    Show Project
           </button>
          </p>
          </motion.div>
          <motion.div initial={{opacity:0 ,y:-50 ,x:-50}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:0.15}}  whileHover={{y:-10}}
           className='projects third-proj col-md-3 col-sm-5 col-9'>
          <p className="overlay ">
          <button className="show-project " >
            <Link className="showimage" to="/school">Show Image</Link>
           </button>
          </p>
          </motion.div>
        
      
      </Row>
     
    </div>
  )
}

export default portfolio
