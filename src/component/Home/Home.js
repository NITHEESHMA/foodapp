import React from 'react';
import dosa from '../images/dosa.jpg';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
         <img src={dosa}/>
          

            <div className='header'>
            <h1>FOOD CORNER</h1>
            <p>Indian Food At A Click</p>
           
          <a href='/order'><button>order now</button></a>
          </div>
           
        </div>
    );
};

export default Home;