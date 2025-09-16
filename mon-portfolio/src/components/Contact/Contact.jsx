import "./Contact.css";
import ContactImage from "../../assets/contact-image.png";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import NotificationSound from "../../assets/notification-sound.mp3";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
    const form = useRef();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleRecaptcha = (token) => {
        setRecaptchaToken(token);
    };

    const playNotificationSound = () => {
        const audio = new Audio(NotificationSound);
        audio.play();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!recaptchaToken) {
            toast.warning("Please verify that you are not a robot !");
            playNotificationSound();
            return;
        }

        emailjs
            .sendForm(serviceID, templateID, form.current, publicKey)
            .then(() => {
                toast.success("Message sent successfully !");
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

                    <div className="recaptcha-container" >
                        <ReCAPTCHA
                            sitekey={siteKey}
                            onChange={handleRecaptcha}
                        />
                    </div>

                    <button type="submit"> <FaPaperPlane /> Send Message</button>
                </form>
            </div>
        </section>
    );
};
