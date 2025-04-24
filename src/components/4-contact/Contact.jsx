import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json";
import { useEffect, useRef } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("manevwrg");
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      // Réinitialisation manuelle
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      
      // Focus sur le champ email
      emailRef.current?.focus();
    }
  }, [state.succeeded]);

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail" />
        Contact Us
      </h1>

      <p className="sub-title">
        Contact us for more information and get notified when we publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
            placeholder="Enter your email address"
              ref={emailRef}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div style={{ marginTop: "24px" }} className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              id="message"
              name="message"
              placeholder="Write your message here..."
              ref={messageRef}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              style={{
                fontSize: "16px",
                marginTop: "1.7rem",
                color: "var(--subtitle)",
                display: "flex",
                fontWeight: "bold",
                alignItems: "center",
                gap: "10px",
                fontFamily:
                  "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: 35, width: 35 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully!👌
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 300, width: 300 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
