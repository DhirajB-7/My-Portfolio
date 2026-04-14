"use client";

import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import SectionIntro from "../components/SectionIntro";
import { profile } from "../data/siteData";

const emailConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
};

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const canUseEmailJs = useMemo(
    () => Object.values(emailConfig).every(Boolean),
    []
  );

  useEffect(() => {
    if (canUseEmailJs) {
      emailjs.init({ publicKey: emailConfig.publicKey });
    }
  }, [canUseEmailJs]);

  const onSubmit = (data) => {
    if (!canUseEmailJs) {
      setStatus("Email service is not configured yet. Add EmailJS environment variables.");
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .send(emailConfig.serviceId, emailConfig.templateId, data)
      .then(() => {
        setStatus("Message sent successfully.");
        reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Please email me directly.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="section panel">
      <SectionIntro
        eyebrow="Contact"
        title="Let&apos;s build something that people remember"
        text="Share your idea, role, or project context. I will reply with a clear plan and timeline."
      />

      <div className="contact-grid">
        <aside className="story-card">
          <h3>Reach Out</h3>
          <p>
            I enjoy collaborating on products that value clean UX, speed, and thoughtful details.
          </p>
          <p>
            Direct email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            If EmailJS keys are missing, the form will not send and you can still contact me by email.
          </p>
        </aside>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name ? <p className="error">{errors.name.message}</p> : null}

          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email ? <p className="error">{errors.email.message}</p> : null}

          <input
            type="tel"
            placeholder="Phone Number"
            {...register("contact", {
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be exactly 10 digits"
              }
            })}
          />
          {errors.contact ? <p className="error">{errors.contact.message}</p> : null}

          <textarea
            placeholder="Tell me about your project"
            rows={6}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message ? <p className="error">{errors.message.message}</p> : null}

          <button type="submit" disabled={loading} className="button button-primary">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status ? <p className="notice">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
