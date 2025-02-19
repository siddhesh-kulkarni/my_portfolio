import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import { BiMailSend, BiPhoneCall } from "react-icons/bi";

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(e);
        emailjs.sendForm('service_gbv6yqs', 'template_dv12vof', form.current,'yKPxLa3bY6LlxCToJ');

        e.target.reset();
    }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div class="container contact_container">
        <div class="contact_options">
          <article class="contact_option">
            <BiMailSend className="contact_option-icon" />
            <h4>Email</h4>
            <h5>siddheshsanjaykulkarni1111@gmail.com</h5>
            <a
              href="mailto:siddheshsanjaykulkarni1111@gmail.com"
              target="_blank"
            >
              Send Message
            </a>
          </article>

          <article class="contact_option">
            <BiPhoneCall className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-7741973805</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917741973805"
              target="_blank"
            >Send Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
