import React, { useState } from 'react';
import { send } from 'emailjs-com';


function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
  });

  const onClick = () => {
    alert('Message sent successfully!')
  }
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_f1xdnkd',
      'template_tn0xty7',
      toSend,
      'ZblxdsnwURpZYfb0c'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('Failed...', err);
    });
  };

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <h1>Get in Touch</h1>
        <form className='contact-form'onSubmit={onSubmit}>
          <div>
            <input 
              className='name-field'
              type='text'
              name='from_name'
              placeholder='Full Name'
              value={toSend.from_name}
             onChange={handleChange}
            />
          </div>
          <div>
            <input 
              className='message-field'
              type='text'
              name='message'
              placeholder='Message'
              value={toSend.message}
              onChange={handleChange}
            />
          </div>
          <button onClick={onClick} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact