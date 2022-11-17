import React  from 'react'
import { Button, Row } from 'react-bootstrap'
import './portfolio.css';

import {motion} from 'framer-motion/dist/es/index' ;
import { BsGithub } from 'react-icons/bs';
import { AiOutlineSelect } from 'react-icons/ai';




const portfolio = () => {
  



  const projects = [
    {
      id: 1 ,
      name: 'Movies Lights Out',
      class: 'projects first-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://movies-lights-out.netlify.app/',
      github: 'https://github.com/yousefelma7y/Movie-app' ,
      delay: '0.1' ,
    } ,
    {
      id: 2 ,
      name: 'Smart School',
      class: 'projects secound-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://new-dawn-school.netlify.app/',
      github: 'https://github.com/yousefelma7y/NewDawnSchool' ,
      delay: '0.1' ,
    } ,
    {
      id: 3 ,
      name: 'Ecommerce Souq',
      class: 'projects third-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://ecommerce-souq.netlify.app/',
      github: 'https://github.com/yousefelma7y/eCommerce' ,
      delay: '0.2' ,
    } ,
    {
      id: 4 ,
      name: 'Damanhour Football',
      class: 'projects fourth-proj col-md-3 col-sm-5 col-9'  ,
      website : 'https://damanhour-football.netlify.app/',
      github: 'https://github.com/yousefelma7y/football' ,
      delay: '0.3' ,
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
        <motion.div  initial={{opacity:0 ,y:-50 ,x:-60}} animate={{opacity:1 ,y:0 ,x:0 }} transition={{delay:projects.delay}} whileHover={{y:-10}} 
         key={projects.id} className={projects.class} >
            <p className="overlay p-2 ">
              <p className='projects-name fs-3 '>{projects.name}</p>
              <div className='mt-5 '>
                 <Button  variant="danger" className=" m-1" onClick={()=> window.open( projects.website , "_blank")}>
                    <AiOutlineSelect/> VIEW WEBSITE
                 </Button >
                 <Button   variant="success" className="  m-1" onClick={()=> window.open( projects.github , "_blank")}>
                    <BsGithub/> GITHUB
                 </Button >
              </div>
                
             </p>
           </motion.div>)
      }

      </Row>
     
    </div>
  )
}

export default portfolio
