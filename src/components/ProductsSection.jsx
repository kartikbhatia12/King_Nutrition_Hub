import { motion } from "framer-motion";
import wheyProtein from "../assets/whey-protein.png";
import massGainer from "../assets/mass-gainer.png";
import creatine from "../assets/creatine.png";
import preWorkout from "../assets/pre-workout.png";
import fatBurner from "../assets/fat-burner.png";
import multivitamins from "../assets/multivitamins.png";

const products = [
  { title: "Whey Protein", desc: "Premium protein for muscle recovery and growth.", image: wheyProtein },
  { title: "Mass Gainers", desc: "High-calorie formulas for bulking and weight gain.", image: massGainer },
  { title: "Creatine", desc: "Boost strength, power, and workout performance.", image: creatine },
  { title: "Pre Workout", desc: "Explosive energy and focus for intense training.", image: preWorkout },
  { title: "Fat Burners", desc: "Accelerate fat loss and boost metabolism.", image: fatBurner },
  { title: "Multivitamins", desc: "Essential nutrients for overall health and wellness.", image: multivitamins },
];

const ProductsSection = () => {
  return (
    <section id="products" className="scroll-mt-20 section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center uppercase mb-16"
        >
          Our <span className="text-gradient">Products</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card border border-border rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold uppercase mb-2 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
