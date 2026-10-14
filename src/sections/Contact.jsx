import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "./TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { useTheme } from "../context/ThemeContext";

export const Contact = () => {
  const { t } = useTheme();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center px-5 md:px-10 py-24">
      <div className="w-full h-full max-w-6xl">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="Have questions or ideas? Let's talk"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-16">
          {/* Form */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <div className={`rounded-3xl p-6 sm:p-8 flex flex-col gap-3 ${t.cardBg}`}>
              <p className={`text-sm ${t.mutedText}`}>
                📧 <a href="mailto:bodaspavitra@email.com" className="hover:text-amber-400 underline transition-colors">bodaspavitra@email.com</a>
              </p>
              <p className={`text-sm ${t.mutedText}`}>
                📞 <a href="tel:+917284905992" className="hover:text-amber-400 underline transition-colors">+91-7284905992</a>
              </p>
              <p className={`text-sm ${t.mutedText}`}>
                📍 Vadodara, Gujarat, India
              </p>
            </div>

            <div className={`rounded-3xl p-6 sm:p-10 relative z-[2] ${t.cardBg}`}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 sm:gap-6"
              >
                <div>
                  <label htmlFor="name" className={`block mb-2 text-sm font-medium ${t.mutedText}`}>Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    className={`w-full px-4 py-3.5 rounded-xl outline-none transition-colors duration-300 ${t.inputBg}`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block mb-2 text-sm font-medium ${t.mutedText}`}>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className={`w-full px-4 py-3.5 rounded-xl outline-none transition-colors duration-300 ${t.inputBg}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block mb-2 text-sm font-medium ${t.mutedText}`}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className={`w-full px-4 py-3.5 rounded-xl outline-none transition-colors duration-300 ${t.inputBg}`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side Animation */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden relative z-[0] bg-gradient-to-br from-fuchsia-500/20 via-transparent to-cyan-500/20">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
