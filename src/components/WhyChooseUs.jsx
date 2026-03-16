import { motion } from "framer-motion";
import { FiShield, FiDollarSign, FiUsers, FiLayers } from "react-icons/fi";

const features = [
  {
    icon: FiShield,
    title: "100% Authentic Products",
    desc: "Only genuine supplements from verified sources.",
  },
  {
    icon: FiDollarSign,
    title: "Best Prices",
    desc: "Competitive pricing you won't find elsewhere.",
  },
  {
    icon: FiUsers,
    title: "Expert Guidance",
    desc: "Personalized advice for your fitness journey.",
  },
  {
    icon: FiLayers,
    title: "Wide Range of Brands",
    desc: "Top international and Indian supplement brands.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-center uppercase mb-16"
        >
          Why <span className="text-gradient">Choose Us</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-xl p-8 text-center transition hover:border-primary/40"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                <f.icon className="text-red-500 text-2xl" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold uppercase mb-3 text-white">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;