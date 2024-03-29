import React, {useState} from 'react'
import {BsArrowUpCircleFill} from 'react-icons/bs';
import './scrollButton.css';


const ScrollButton = () => {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (


    <div className='scroll-but d-md-flex d-none d-print-block'>
       <BsArrowUpCircleFill onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </div>
  )
}

export default ScrollButton
