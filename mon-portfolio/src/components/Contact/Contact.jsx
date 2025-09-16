import "./Contact.css";
import ContactImage from "../../assets/contact-image.png";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import NotificationSound from "../../assets/notification-sound.mp3";

export const Contact = () => {
    const form = useRef();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const playNotificationSound = () => {
        const audio = new Audio(NotificationSound);
        audio.play();
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                toast.success("Message sent successfuly");
                playNotificationSound();
                form.current.reset();
            })
            .catch((error) => {
                toast.error("Oops ! Something went wrong" + error.text);
                playNotificationSound();
            });
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
