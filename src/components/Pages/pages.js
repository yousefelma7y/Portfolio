import React  from  'react';
import './pages.css'

import Home from '../Home/Home'
import Work from '../Work/work'
import Portfolio from '../Portfolio/portfolio'
import Profile  from '../Profile/profile';
import SocialMedia from '../SocialMedia/SocialMedia'
import About from '../About/about'


const Pages = () => {

   
        return(
            <div className='pages'>
                <Home/>                 
                <Work/>
                <Portfolio/>   
                <Profile/>        
                <About/>
                <SocialMedia/>
                       
            </div>
          
          
        )
    

}

export default Pages ;
