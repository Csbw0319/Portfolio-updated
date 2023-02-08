import './App.css';
import MainPhoto from './components/MainPhoto';
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Title from './components/title';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Skills from './Screens/Skills';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
        <div className='typewriter'>
          <Typewriter 
          className='typewriter'
          onInit={(typewriter) => {
            typewriter.typeString("Software Engineer")
            .pauseFor(2000)
            .deleteAll()
            .typeString('Full-Stack Developer')
            .pauseFor(2000)
            // .deleteAll()
            .start()
          }}/>
        </div>
      <div className='middle-container'>
        <MainPhoto />
        <Title />
      </div>
      <div className='social-icons'>
        <div className='icons'>
        </div>
        <div className='icons'>
          <FaLinkedin size={40}/>
        </div>
        <div className='icons'>
          <FaGithub size={40}/>
        </div>
      </div>
    </div>
  );
}

export default App;
