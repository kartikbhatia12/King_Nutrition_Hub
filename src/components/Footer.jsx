import { useState } from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMsg = encodeURIComponent(
      `Hi, I'm ${formData.name}.\nPhone: ${formData.phone}\n\n${formData.message}`
    );

    window.open(`https://wa.me/917503723653?text=${whatsappMsg}`, "_blank");
  };

  return (
    <footer className="border-t border-border pt-16 pb-8 px-8">
      <div className="container mx-auto">

        {/* Top Layout */}
        <div className="grid lg:grid-cols-2 gap-14 mb-12">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-display text-xl font-bold tracking-wider text-white">
                  KING <span className="text-red-500">NUTRITION</span> HUB
                </span>
              </div>

              <p className="text-muted-foreground text-sm max-w-md">
                Your trusted destination for 100% authentic fitness supplements
                in Uttam Nagar, Delhi.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">

              <div className="flex gap-3 items-start">
                <FiMapPin className="text-red-500 mt-1 flex-shrink-0" />
                <span>
                  WZ 10A, Shukkar Bazar Rd, Uttam Nagar,<br/>
                  New Delhi – 110059
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <FiPhone className="text-red-500 flex-shrink-0" />
                <a
                  href="tel:+917503723653"
                  className="hover:text-white transition-colors"
                >
                  +91 75037 23653
                </a>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-4 pt-3">

              <a
              href="https://www.instagram.com/king_nutrition_hub/"
              target="_blank"
              className="cursor-pointer w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition">
                <FaInstagram />
              </a>

              <a className="cursor-pointer w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition">
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/917503723653"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>


          {/* RIGHT SIDE (GET IN TOUCH) */}
          <div>

            <h3 className="font-display text-3xl font-bold uppercase mb-8">
              Get In <span className="text-gradient">Touch</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />

              <button
                type="submit"
                className="btn-primary w-full py-3"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>


        {/* Bottom Copyright */}
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} King Nutrition Hub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;