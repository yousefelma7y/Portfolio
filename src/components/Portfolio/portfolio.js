import {React , useEffect}  from 'react'
import { Button, Row } from 'react-bootstrap'
import './portfolio.css';

import { BsGithub } from 'react-icons/bs';
import { AiOutlineSelect } from 'react-icons/ai';

import {motion} from 'framer-motion/dist/es/index' ;
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';



const Portfolio = () => {
  
  const {ref ,inView} = useInView() ;
  const animation = useAnimation();
  const animation2 = useAnimation();


  useEffect(() => {

    if(inView){
      animation.start({
        x:0 ,
        transition:{type:'spring' , duration:1.2 , bounce:0.3},
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

  const projects = [
    {
      id: 1 ,
      name: 'FootBall Reservation',
      class: 'projects FootBall-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://walrus-app-oscsz.ondigitalocean.app/',
      github: 'https://github.com/yousefelma7y/cta-football-project' ,
      
    } ,
    {
      id: 2 ,
      name: 'Freelansing Services',
      class: 'projects Freelansing-proj col-md-3 col-sm-5 col-9' ,
      website :'https://freelance-services.netlify.app/',
      github: 'https://github.com/yousefelma7y/freelance-services' ,
      
    } ,
    {
      id: 3 ,
      name: 'Movies Lights Out',
      class: 'projects Movies-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://movies-lights-out.netlify.app/',
      github: 'https://github.com/yousefelma7y/Movie-app' ,
      
    } ,
    {
      id: 4 ,
      name: 'The Programmers',
      class: 'projects Programmers-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://the-programmers.netlify.app/',
      github: 'https://github.com/yousefelma7y/programmers' ,
     
    } ,
    {
      id: 5 ,
      name: 'Smart School',
      class: 'projects School-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://new-dawn-school.netlify.app/',
      github: 'https://github.com/yousefelma7y/NewDawnSchool' ,
     
    } ,
    {
      id: 6 ,
      name: 'Ecommerce Souq',
      class: 'projects Ecommerce-proj col-md-3 col-sm-5 col-9' ,
      website : 'https://ecommerce-souq.netlify.app/',
      github: 'https://github.com/yousefelma7y/eCommerce' ,
    
    } ,
    // {
    //   id: 4 ,
    //   name: 'Damanhour Football',
    //   class: 'projects fourth-proj col-md-3 col-sm-5 col-9'  ,
    //   website : 'https://damanhour-football.netlify.app/',
    //   github: 'https://github.com/yousefelma7y/football' ,
      
    // },
 
  ]

  return (
    <div ref={ref} className="portfolio-page justify-content-center text-center  w-100" id='portfolio'>
      <motion.h1  animate={animation}  className='fw-bold pt-5'>
        My Portfolio
      </motion.h1>
      <Row className='justify-content-center mt-5 w-100'>

      {
        projects.map(projects =>  
        <motion.div animate={animation2} whileHover={{y:-10}} 
         key={projects.id} className={projects.class} >
            <p className="overlay p-2 ">
              <p className='projects-name fs-3 '>{projects.name}</p>
              <span className='mt-5 '>
                 <Button  variant="danger" className=" m-1" onClick={()=> window.open( projects.website , "_blank")}>
                    <AiOutlineSelect/> VIEW WEBSITE
                 </Button >
                 <Button   variant="success" className="  m-1" onClick={()=> window.open( projects.github , "_blank")}>
                    <BsGithub/> GITHUB
                 </Button >
              </span>
                
             </p>
           </motion.div>)
      }

      </Row>
     
    </div>
  )
}

export default Portfolio
