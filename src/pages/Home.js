import React from 'react';
import { Link } from "react-router-dom";
import random from '../pics/random.png';
import './Home.css';

const Home = () => {
  return (
     <>
     <div className= "Header">
      <div>
        <div className = "img">
          <img  src={random} className = 'img-fluid' alt = ""/>
          </div>
          <div className = "HeaderOverlay"></div>
          </div>
          <div className="HeaderContent">
            <h1 className='Title'>ChangeMakers</h1>
            <p>See the change. Be the change. Make the change.</p>
            
            <Link to= "/Organizations">
            <button className='VolunteerButton'>Volunteer Today</button>
            </Link>
          </div>
      </div>

    </>
  )
 }

 export default Home;