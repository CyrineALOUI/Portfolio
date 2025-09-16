import "./Contact.css";
import ContactImage from "../../assets/contact-image.png";
import { FaPaperPlane } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-illustration">
          <img src={ContactImage} alt="Contact Illustration" />
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Object" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit"> <FaPaperPlane /> Send Message</button>
        </form>
      </div>
    </section>
  );
};
