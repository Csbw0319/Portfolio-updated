import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Projects() {
  return (
    <div>
        <h1>Projects:</h1>
        <Splide  aria-label="My Projects" 
      options={{
        perPage: 3,
        pagination: false,
        drag: 'free',
        
      }}>
        <SplideSlide>
            <img className='project-img' src={require('../assets/iPhone 14 Pro in deep purple color_Simulator Screen Shot - iPhone 13 - 2023-02-09 at 22.22.40.png')} alt='' />
            <h3>Number Guessing Game:</h3>
            <p>This number guessing game was made with React Native. It allows a user to choose a number between 1 and 100. The program then tries to guess the users number based on higher or lower user input.</p>
        </SplideSlide>
        <SplideSlide>
            <img className='project-img' src={require('../assets/Laptop_Screen Shot 2023-02-09 at 11.38.05 PM.png')} alt='' />
            <h3>Recipe web application:</h3>
            <p>Simply search for any recipe to see ingredients and cooking instructions. Search through the homepage to find recipe inspiration.</p>
            <a href='https://62da10a867648d314f77c944--helpful-mandazi-aea50e.netlify.app' alt=''>Live Website</a>
        </SplideSlide>
        <SplideSlide>
            <img className='project-img' src={require('../assets/Laptop_Screen Shot 2023-02-10 at 5.24.17 PM.png')} alt='' />
            <h3>School Garden Program website:</h3>
            <p>This is a website that allows volunteers to create an account to volunteer for their local school system school garden program. Volunteers are able to schedule day and time to volunteer with a school.</p>
        </SplideSlide>
        {/* <h3>Enjoy this Number's Guessing game made with React Native. </h3>
        <h3>Simply enter any number to begin and let the computer guess your number!</h3> */}
        </Splide>
    </div>
  )
}

export default Projects