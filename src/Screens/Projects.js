import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Projects() {
  return (
    <div>
        <h1>Projects:</h1>
        <Splide  aria-label="My Projects" 
      options={{
        perPage: 1,
        pagination: false,
        drag: 'free',
        
      }}>
    <div>
        <SplideSlide>
            <img className='project-img' src={require('../assets/iPhone 14 Pro in deep purple color_Simulator Screen Shot - iPhone 13 - 2023-02-09 at 22.22.40.png')} alt='' />
        </SplideSlide>
        <SplideSlide>
            <img className='project-img' src={require('../assets/Laptop_Screen Shot 2023-02-09 at 11.38.05 PM.png')} alt='' />
        </SplideSlide>
        <SplideSlide>
            <img className='project-img' src={require('../assets/Laptop_Screen Shot 2023-02-10 at 5.24.17 PM.png')} alt='' />
        </SplideSlide>
        {/* <h3>Enjoy this Number's Guessing game made with React Native. </h3>
        <h3>Simply enter any number to begin and let the computer guess your number!</h3> */}
        </div>
        </Splide>
    </div>
  )
}

export default Projects