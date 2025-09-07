import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import "../styles/contact.css";

function ContactForm() {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .sendForm(
                "service_oukmdii",
                "template_8jpsg1x",
                formRef.current,
                "T-eebMdfv_gHaOWQH"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    alert("Failed to send message. Please try again.");
                }
            )
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <div className="contact-container">
            <h2>Get in Touch</h2>
            <p>
                I'm always open to discussing new projects, creative ideas, or opportunities.
                Feel free to reach out, and I'll get back to you as soon as possible.
            </p>

            <form
                ref={formRef}
                className="contact-form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
