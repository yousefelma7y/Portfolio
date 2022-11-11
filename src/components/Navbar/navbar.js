import React  from 'react'
import {Navbar,Nav  } from 'react-bootstrap' ;
import { Link } from "react-router-dom";
import {motion} from 'framer-motion/dist/es/index' ;

import "./navbar.css";
import image1 from '../../images/Y.png';

const NavbarComponent = () => {

    const animateFrom = {opacity : 0 , y :-40}
    const animateto = {opacity : 1 , y :1}


  return (
      <>
    
    <Navbar  className='navbar  ' bg="white" expand="md">
      

     
        <Navbar.Brand as={Link} to={"/"} >
            <motion.div initial={{opacity:0}} animate={{opacity:1,x:50 }} transition={{delay:0.1}} 
            className="logo-div ">
                <img src={image1} alt="Logo" className="logo" />
                <div className="wrapper">
                    <span className="logo-text text-black">ousef Elmahy</span>
                </div>
            </motion.div>
        </Navbar.Brand>

        <Navbar.Toggle  aria-controls="basic-navbar-nav"  />
        

        <Navbar.Collapse className=' justify-content-end ' id="basic-navbar-nav">

        <Nav>                              
            <motion.a initial ={animateFrom} animate={animateto} transition={{delay:0.05}} whileHover={{scale:1.1}}
                   href="/" data-rr-ui-event-key="/" className="nav-links text-center text-black nav-link ">Home</motion.a >

            <motion.a initial ={animateFrom} animate={animateto} transition={{delay:0.10}} whileHover={{scale:1.1}}
             href="/#work" data-rr-ui-event-key="/#work" className="nav-links text-center text-black nav-link">Work</motion.a >

            <motion.a initial ={animateFrom} animate={animateto} transition={{delay:0.20}} whileHover={{scale:1.1}}
              href="/#portfolio" data-rr-ui-event-key="/#portfolio" className="nav-links text-center text-black nav-link">Portfolio</motion.a >   

            <motion.a initial ={animateFrom} animate={animateto} transition={{delay:0.30}} whileHover={{scale:1.1}}
              href="/#resume" data-rr-ui-event-key="/#resume" className="nav-links text-center text-black nav-link">Resume</motion.a >

            <motion.a initial ={animateFrom} animate={animateto} transition={{delay:0.40}} whileHover={{scale:1.1}}
              href="/#about" data-rr-ui-event-key="/#about" className="nav-links text-center text-black nav-link">About</motion.a >

            <motion.a initial ={animateFrom} animate={animateto} transition={{delay:0.50}} whileHover={{scale:1.1}}
             href="/contact" data-rr-ui-event-key="/contact" className="nav-links text-center text-black nav-link">Contact</motion.a >

                                    
        </Nav>

        </Navbar.Collapse>

  
    </Navbar>
    </>
 
  )
}

export default NavbarComponent ;
