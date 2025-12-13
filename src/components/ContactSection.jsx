import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_grusd6c",
        "template_kp2ndck",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "RrxIEYAonv1FA-Iyb"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-primary" />,
                  title: "Email",
                  info: "abdurrazzak118348@gmail.com",
                  href: "mailto:abdurrazzak118348@gmail.com",
                },
                {
                  icon: <Phone className="h-6 w-6 text-primary" />,
                  title: "Phone",
                  info: "+8801690298525",
                  href: "tel:+8801690298525",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-primary" />,
                  title: "Location",
                  info: "HSTU, Dinajpur, Bangladesh",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/in/abdur-razzak-0a3b91321" target="_blank">
                  <Linkedin className="h-6 w-6 text-primary hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/Razzak118348" target="_blank">
                  <Github className="h-6 w-6 text-primary hover:scale-110 transition-transform" />
                </a>
                <a
          href="https://www.facebook.com/abdurrazzak118348"
          target="_blank"
          className="hover:text-primary transition-colors"
        >
          <Facebook Github className="h-6 w-6 text-primary hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://medium.com/@abdurrazzak118348"
          target="_blank"
          className="hover:text-primary transition-colors"
        ></a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
{/* {use framer-motion react-parallax-tilt for animation design and motion div} */}
            <Tilt glareEnable={true} glareMaxOpacity={0.2} glareColor="" glarePosition="all">
              <form
                className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
                onSubmit={handleSubmit}
              >
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Pedro Machado..."
                    className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                    className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
