import React from 'react'
import './socialMedia.css'
import { Row } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


const SocialMedia = () => {
  return (
    <Row className=' w-100  p-0 m-0'>
      <button
       className='facebook col-md-4' onClick={()=> window.open("https://www.facebook.com/yousef.elmahy.7", "_blank")}>
        <span className="fs-2">  <FaFacebookF/> </span>
        <p className="fs-3 text-white">
          <span className="fw-bold">Follow Me on</span><br></br>
          <span >Social Facebook</span>
        </p>
      </button>

      <button
       className='github col-md-4' onClick={()=> window.open("https://github.com/yousefelma7y", "_blank")}>
        <span className="fs-2"> <AiFillGithub/>      </span>          
        <p className="fs-3 text-white">
          <span className="fw-bold">Take A Look On My</span><br></br>
          <span >Social github</span>
        </p>
      </button>

      <button 
       className='linked col-md-4' onClick={()=> window.open("https://www.linkedin.com/in/yousef-elmahy-605789212/", "_blank")}>
        <span className="fs-2"> <AiFillLinkedin/></span>
        <p className="fs-3 text-white">
          <span className="fw-bold">Contact With Me on</span><br></br>
          <span >Social linkedin</span>
        </p>
      </button>
    </Row>
  )
}

export default SocialMedia
