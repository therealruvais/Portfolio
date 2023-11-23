import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
// import ComputerCanvas from './ComputerCanvas';
import Map from "./Map";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">
        <div className="contact-left">
          <form
            ref={ref}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <h1 className="contact-title">Contact Me</h1>
            <input
              className="contact-input"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="contact-input"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="contact-textarea"
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <button
              className="contact-button"
              type="submit"
            >
              <a>Send</a>
            </button>
            <p>
              {success &&
                "Your message has been Sent. I'll get back to you soon :)"}
            </p>
          </form>
        </div>
        <div className="contact-right">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
