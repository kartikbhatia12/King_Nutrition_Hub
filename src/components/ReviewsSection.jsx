import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { useState } from "react";

const reviews = [
  { name: "Himanshu Goyal", text: "I recently discovered this supplements store, and I’m genuinely impressed! The staff is knowledgeable, friendly, and always ready to guide you to the right products based on your fitness goals. They stock a wide range of high-quality brands, from protein powders and pre-workouts to vitamins and wellness essentials. The store is clean, well-organized, and offers great prices compared to other places. I especially appreciate the honest advice and personal attention—no pushy sales tactics, just real help. Whether you’re a beginner or a fitness enthusiast, this place has something for everyone. Highly recommend for all your supplement needs!" },

  { name: "Digi Corner2", text: "Excellent Store with Genuine Products and Great Guidance! King Nutrition Hub is my go-to place for all things health and fitness. Bhupinder Singh, the owner, is incredibly knowledgeable and always takes the time to understand your needs before recommending any product. You can tell he truly cares about helping people reach their fitness goals. The store stocks only genuine supplements, and the variety is impressive. Clean, well-organized, and trustworthy—highly recommend it to anyone looking for quality and honest advice!" },

  { name: "Nihal Rai", text: "Do visit guyz Extreme results. Products here are authenticated. Genuine guy ( appa prah hai ga ji )." },

  { name: "Puneet Kabir", text: "All genuine products and supplements. I get great suggestions and the products they recommended are amazing. It suits me very well and the results are unbelievable." },

  { name: "Nihal Kumar", text: "Hey thank you sir, genuine and authenticated product received… great results ♥️😍." },

  { name: "Gourav Rathor", text: "One of the best supplement stores around! I've been visiting King Nutrition Hub for a while now, and it's hands down the most reliable place for quality supplements. The owner is super knowledgeable and always ready to help with honest advice based on your fitness goals. Whether you're looking for proteins, pre-workouts, or vitamins, they have a great range of authentic products. Prices are fair and they often have good offers too. Highly recommended for anyone serious about fitness and health!" }
];

const ReviewsSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const MAX_LENGTH = 180;

  return (
    <section id="reviews" className="scroll-mt-20 section-padding bg-muted/30">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-center uppercase mb-6"
        >
          Customer <span className="text-gradient">Reviews</span>
        </motion.h2>

        {/* Google Rating */}
        <div className="flex justify-center items-center gap-3 mb-14 text-muted-foreground">
          <div className="flex text-yellow-400 text-lg">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="fill-current" />
            ))}
          </div>

          <span>
            <strong className="text-foreground">5.0</strong> Rating —
            Based on{" "}
            <a
              href="https://www.google.com/search?q=King+Nutrition+Hub+Uttam+Nagar+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              42 Google Reviews
            </a>
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => {
            const isExpanded = expanded[i];
            const text = review.text;

            const displayText =
              !isExpanded && text.length > MAX_LENGTH
                ? text.substring(0, MAX_LENGTH) + "..."
                : text;

            return (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-lg p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, j) => (
                    <FiStar key={j} className="fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-3 italic">
                  "{displayText}"
                </p>

                {text.length > MAX_LENGTH && (
                  <button
                    onClick={() => toggleReadMore(i)}
                    className="cursor-pointer text-primary text-sm font-semibold hover:underline mb-4"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}

                <p className="font-display font-bold text-foreground uppercase text-sm">
                  {review.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;