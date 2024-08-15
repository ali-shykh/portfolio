import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import "../styles.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_b33tle9";
    const templateId = "template_zbe32cw";
    const publicKey = "h9UROxoWaWgJnVWU1";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Ali Rehman",
          from_email: form.email,
          to_email: "aliirehman5050@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section ref={ref} className="border-b-2 border-[#f2004a]">
      <div
        className={`py-3 transform transition-all ${
          isIntersecting ? "animate-slide-in-left" : ""
        }`}
        id="contact"
      >
        <h1 className={`${styles.heroHeadText} text-[#efefef] text-center`}>
          Let's Connect
        </h1>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} `}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`flex flex-col gap-6 ${
            isIntersecting ? "animate-slide-in-right" : ""
          }`}
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-transparent text-[#efefef] border-2 border-[#f2004a] py-4 px-6 placeholder:text-[#efefef] rounded-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-transparent text-[#efefef] border-2 border-[#f2004a] py-4 px-6 placeholder:text-[#efefef] rounded-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-transparent text-[#efefef] border-2 border-[#f2004a] py-4 px-6 placeholder:text-[#efefef] rounded-lg font-medium"
            />
          </label>

          <button
            type="submit"
            className="border-2 border-[#f2004a] mb-5 py-3 px-8 w-full sm:w-[10%] rounded-xl outline-none text-[#efefef] hover:text-[#f2004a] font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
