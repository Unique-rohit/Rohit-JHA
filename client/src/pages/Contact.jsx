import React, { useState } from 'react'
import '../assets/index.css'
import { useAuth } from '../Provider/AuthProvider';

const Contact = () => {


  const { userData } = useAuth();
  const [autofill, setAutoFill] = useState(true);
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  if (!!userData && autofill) {
    setContact({
      username: `${userData.fname} ${userData.lname}`,
      email: userData.email,
      message: "",
    })

    setAutoFill(false);
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:7000/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact)

    });
    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      setContact({
        username: "",
        email: "",
        message: "",
      });

    }
    else {
      alert(data.message);
    }
  }

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">contact us</h1>
      </div>
      {/* contact page main */}
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/images/support.jpeg" alt="We are always ready to help" />
        </div>
        {/* Contact content actual form */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input type="text" name="username" id="username" autoComplete="off"
                value={contact.username} onChange={handleInput} required />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input type="email" name="email" id="email" autoComplete="off"
                value={contact.email} onChange={handleInput} required />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <textarea name="message" id="message" autoComplete="off"
                value={contact.message} onChange={handleInput} cols="30" rows="5"></textarea>
            </div>

            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </section>
      </div>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9775636275267!2d77.5639801745456!3d12.90916351624523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710665641221!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </section>
  )
}

export default Contact