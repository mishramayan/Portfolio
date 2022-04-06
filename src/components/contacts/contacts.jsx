import React from "react";
import "./contacts.css";
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_px6vn9q', 'template_5a9w7ru', form.current, 'wk0ycdjgRaG2LZ-xX')
     
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>mishra.ma@northeastern.edu</h5>
            <a href="mailto:mishra.ma@northeastern.edu">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>mayanmishra</h5>
            <a href="https://m.me/mayan.mishra.3">Send a message</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+1 (667)-646 0161</h5>
            <a href="https://api.whatsapp.com/send?phone=+16676460161">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
