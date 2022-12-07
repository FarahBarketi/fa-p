
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='LandingPage'>
        
    <div className='landing' >
        
       
        <p className='parag'>
           
            <span className='para'>Hello , if you are looking for a friend you come to the<br/></span>

            <span className='para'>right place in this website you will found what<br/></span>

            <span className='para'>you are looking for we have multiple<br/></span>

            <span className='para'> choices from top breeds to best toys<br/></span>

            <span className='para'> for your animals. you can found<br/></span>

            <span className='para'> vets and specialist on our</span><br/>
            <span className='para'> website to help your </span><br/>
            <span className='para'>with your pet </span>
            
            
            </p>
        
         

          <span className='btnss'> <Link to="/login"> <button className="button-85" role="button">Log in</button></Link>
           
           <Link to="/register"> <button className="button-85" role="button">register</button></Link></span>
 
  </div>
 
  </div>
  )
}

export default Home;