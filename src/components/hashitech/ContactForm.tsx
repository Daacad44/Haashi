"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="form-success panel-dark">
        <p>Thank you! Your message has been received. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form panel-dark" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Your Email</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="form-field">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Write your message..." required />
      </div>
      <button type="submit" className="btn-el btn-shadow btn-gradient form-submit">
        Send Message
      </button>
    </form>
  );
}
