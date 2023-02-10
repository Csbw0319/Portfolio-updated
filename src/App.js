import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Skills from './Screens/Skills';
import Projects from './Screens/Projects';

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
        <Route path='/project' element={<Projects />} />
      </Routes>
     </div>
  );
}

export default App;
