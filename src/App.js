import './App.css';
// import MainPhoto from './components/MainPhoto';
// import Typewriter from 'typewriter-effect';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import Title from './components/title';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Skills from './Screens/Skills';

function App() {

let activeStyle = {
 color: "#ffe4c4",
};

  return (
    <div className="App">
      <div>
        <ul className='header-list'>
          <li><NavLink to={"/"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink></li>
            <li><NavLink to={"/contact"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Contact Me</NavLink></li>
            <li><NavLink to={"/skills"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Skills</NavLink></li>
            <li><NavLink to={"/project"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Projects</NavLink></li>
            <li><NavLink to={"/resume"} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Resume</NavLink></li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
        {/* <div className='typewriter'>
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
        </div> */}
      {/* <div className='middle-container'>
        <MainPhoto />
        <Title />
      </div>
      <div className='social-icons'>
        <div className='icons'>
        </div> */}
        {/* <div className='icons'>
          <FaLinkedin size={40}/>
        </div>
        <div className='icons'>
          <FaGithub size={40}/>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
