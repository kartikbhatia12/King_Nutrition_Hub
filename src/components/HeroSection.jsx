import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="King Nutrition Hub supplements"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
       </div>

        

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display uppercase font-bold leading-tight mb-6
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-white block">
            Authentic Supplements
          </span>

          <span className="text-gradient block">
            For Real Results
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Helping you achieve your fitness and bodybuilding goals with genuine supplements.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#products" className="btn-primary">
            Explore Products
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;