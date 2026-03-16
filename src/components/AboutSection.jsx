import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import aboutImg from "../assets/about-store.png";

const features = [
  "100% Genuine Supplements",
  "Top International & Indian Brands",
  "Expert Guidance for Fitness Goals",
  "Affordable Prices",
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center uppercase mb-16"
        >
          About <span className="text-gradient">King Nutrition Hub</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="King Nutrition Hub store interior"
              className="rounded-lg w-full object-cover aspect-[4/3] border border-border"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              King Nutrition Hub is a trusted local supplement store in Uttam Nagar, Delhi.
              We are committed to providing 100% authentic fitness supplements from top international and Indian brands.
              Whether you're a beginner or a seasoned athlete, our expert team will guide you to choose the right products for your fitness journey.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="text-secondary text-xl flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
