import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/feature-card";

export function FeaturesSection() {
  return (
    <Section id="features" variant="light">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 text-soulstice-foreground"
      >
        Why choose <span className="gradient-text">Soulstice</span>?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <FeatureCard
          title="Know your soul from the start"
          description="Soulstice learns about you through quick, intuitive questions about your background, values, and energy. It then reflects back a clear snapshot of your energy and purpose, so you start with instant clarity."
          imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
          highlighted={true}
        />
        
        <FeatureCard
          title="Clarity at a glance"
          description="Soulstice filters out the overwhelm and shows you, in a single pulse, exactly where your energy stands. Simple check-ins help you cut through noise and make choices that feel aligned with your higher self."
          imageUrl="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        />
        
        <FeatureCard
          title="Guidance that adapts to you"
          description="Whether you need a quick reset or a deeper ritual, Soulstice delivers practices aligned with your energetic path. Science-based spiritual exercises tailored to your unique journey."
          imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500"
        />
      </div>
    </Section>
  );
}

