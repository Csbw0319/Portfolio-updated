import React from 'react'

function Skills() {
  return (
    <div>
      <h1>Skills and Certifications:</h1>
      <div>
        <img className='skill-logos' src={require('../assets/js.png')} alt='javascript logo' />
        <img className='skill-logos' src={require('../assets/css-3.png')} alt='css logo' />
        <img className='skill-logos' src={require('../assets/python.png')} alt='python logo' />
        <img className='skill-logos' src={require('../assets/atom.png')} alt='react logo' />
      </div>
      <div>
        <img className='certifications' src={require('../assets/Certificate-of-Completion-cwilkins0319@icloud.com-1663858411-1.png')} alt='' />
      </div>
    </div>
  )
}

export default Skills