import { motion } from "framer-motion";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const LocationSection = () => {
  return (
    <section id="location" className="scroll-mt-20 section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center uppercase mb-16"
        >
          Find <span className="text-gradient">Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start">
              <FiMapPin className="text-red-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-foreground uppercase mb-1">Store Address</h3>
                <p className="text-muted-foreground">
                  WZ 10A, Shukkar Bazar Rd<br />
                  Near Adarsh Public School<br />
                  Om Vihar Extn Part 1<br />
                  Uttam Nagar, New Delhi – 110059
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FiPhone className="text-red-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-foreground uppercase mb-1">Phone</h3>
                <a href="tel:+917503723653" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91 75037 23653
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/917503723653"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-md font-semibold hover:bg-[hsl(142,70%,35%)] transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-border aspect-video"
          >
          <iframe src="https://www.google.com/maps?q=WZ%2010A%20Shukkar%20Bazar%20Rd%20Om%20Vihar%20Extn%20Part%201%20Uttam%20Nagar%20New%20Delhi%20110059&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="King Nutrition Hub location"
          ></iframe>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
