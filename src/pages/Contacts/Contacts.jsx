import { motion } from "framer-motion";
import "./contacts.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const text = "#Say_Hello!";
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const form = useRef();

  // EMAIL JS SENDING MAIL
  const sendEmail = (e) => {
    e.preventDefault();
    setErr(false);
    setSuccess(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErr(true);
        }
      );
  };

  return (
    <section className="section-conatct">
      <div className="contact-wrapper">
        {/* TEXT CONATINER */}
        <div className="contact-text-conatiner">
          {text.split("").map((l, i) => (
            <motion.span
              className="contact-animated-text"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
          <span>😊</span>
        </div>
        {/* FORM CONATINER */}
        <div className="contact-form-conatiner">
          <form action="" className="mail-form" ref={form} onSubmit={sendEmail}>
            <span>Dear Mohd. Riyas ,</span>
            <textarea id="" rows="6" name="message" required></textarea>
            <span>My mail address is* :</span>
            <input type="email" name="user_email" required/>
            <span>Regards.</span>
            <button>Send</button>
            {success && (
              <span className="success">
                Your message has been send successfully!
              </span>
            )}
            {err && <span className="err">Something went wrong!</span>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
