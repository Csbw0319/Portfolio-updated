import './App.css';
import MainPhoto from './components/MainPhoto';
import Header from './components/Header';
import Typewriter from 'typewriter-effect';
import BackgroundImage from './components/BackgroundImage';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import Title from './components/title';

function App() {
  return (
    <div className="App">
      <Header />
        <div className='typewriter'>
          <Typewriter 
          className='typewriter'
          onInit={(typewriter) => {
            typewriter.typeString("Software Developer")
            .pauseFor(2000)
            .deleteAll()
            .typeString('Full-Stack Engineer')
            .pauseFor(2000)
            // .deleteAll()
            .start()
          }}/>
        </div>
      <MainPhoto />
      <Title />
      <div className='social-icons'>
      <FaHome size={40}/>
        <div className='icons'>
          <FaLinkedin size={40}/>
        </div>
        <div className='icons'>
          <FaGithub size={40}/>
        </div>
      </div>
      <BackgroundImage />
    </div>
  );
}

export default App;
