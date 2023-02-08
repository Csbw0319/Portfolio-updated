import React, { useState } from 'react';
import { send } from 'emailjs-com';


function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
  });

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


  return (
    <div>
      <h1>Get in Touch</h1>
      <form onSubmit={onSubmit} id="form">
        <div class="field">
          <label for="from_name">Full Name:</label>
          <input type="text" name="from_name" id="from_name" />
    </div>
        <div class="field">
          <label for="message">Message</label>
          <input type="text" name="message" id="message" />
    </div>
        <div class="field">
          <label for="reply_to">reply to</label>
          <input type="text" name="reply_to" id="reply_to" />
    </div>

    <input type="submit" id="button" value="Send Email" />
  </form>
</div>
  )
}

export default Contact