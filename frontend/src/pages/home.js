import React from 'react';
import './home.css';
import NavBar from '../components/navbar';




const Home = () => {
  
  return (
    <div className="home">
    <div className="nav">
      <NavBar /> </div>
      <div className="content">
        <h1 className="title">JOB <br/>BRIDGE</h1>
        <h1 className='t1'>CAREER CONNECT PRO!</h1>
        <h3 className='para1'>"Jobs are not just a means of earning a living; they are a path to self-discovery and personal growth. They shape our identities, provide us with purpose, and offer us the opportunity to contribute to the betterment of our communities and the world."</h3>
      </div>
    </div>
  );
  
}

export default Home;
