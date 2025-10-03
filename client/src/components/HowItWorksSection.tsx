import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 text-soulstice-foreground"
      >
        How it <span className="gradient-text">works</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {[
            {
              step: "1",
              title: "Get your energy pulse",
              description: "Check in with the Soulstice Orb to see where your energy stands, with the option to connect your wearable device for deeper insights."
            },
            {
              step: "2", 
              title: "Make aligned choices",
              description: "Chat with the Soulstice energy guide to understand how you feel, get clarity and check if decisions align with your path."
            },
            {
              step: "3",
              title: "Reset your energy", 
              description: "Access custom meditations and rituals designed just for you to restore balance and flow."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center relative"
            >
              {/* Step number circle */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-white text-lg font-bold mb-4">
                {item.step}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-heading font-bold mb-3 text-soulstice-foreground">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-soulstice-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Arrow connector - only show between steps */}
              {index < 2 && (
                <div className="hidden md:block absolute top-6 left-full w-full flex items-center justify-center">
                  <img 
                    src="/assets/Arrow.png" 
                    alt="Arrow connector" 
                    className="w-16 h-6 object-contain"
                  />
                </div>
              )}
            </motion.div>
          ))}
      </div>
    </Section>
  );
}

