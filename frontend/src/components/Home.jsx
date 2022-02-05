import React from 'react';
import Image from '../assets/img3.jpeg'
import Robots from './Robots';

const Home = () => {
    return (
        <div className="hero">
           <div className="card bg-dark text-white border-0">
  <img src={Image} className="card-img" alt="..." 
       height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
      <div className="container">
      <h5 className="card-title display-3 fw-bolder mb-0">Our Robots on Display</h5>
    <p className="card-text lead fs-2">
        Checkout Out new Robots
        </p>
   
      </div>
   
  </div>
</div>
<Robots />
        </div>
    )
}

export default Home
