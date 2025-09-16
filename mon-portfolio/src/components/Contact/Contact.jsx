import "./Contact.css";
import ContactImage from "../../assets/contact-image.png";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
    const form = useRef();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                serviceID,     //Service ID
                templateID,    //Template ID
                form.current,
                publicKey     //Public Key
            )
            .then(
                () => {
                    alert("Message envoyé avec succès !");
                },
                (error) => {
                    alert("Erreur : " + error.text);
                }
            );
    };

    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Contact Me</h2>

            <div className="contact-container">
                <div className="contact-illustration">
                    <img src={ContactImage} alt="Contact Illustration" />
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit"> <FaPaperPlane /> Send Message</button>
                </form>
            </div>
        </section>
    );
};
