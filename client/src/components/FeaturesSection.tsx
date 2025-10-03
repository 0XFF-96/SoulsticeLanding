import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/feature-card";

export function FeaturesSection() {
  return (
    <Section 
      id="features" 
      variant="light"
      className="!bg-[#FCFCFC]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-soulstice-foreground"
        style={{
          fontFamily: 'Nunito Sans'
        }}
      >
        Why choose Soulstice ?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-2 lg:gap-4">
        <FeatureCard
          title="Know your soul from the start"
          description="Soulstice learns about you through quick, intuitive questions about your background, values, and goals. It then reflects back a clear snapshot of your energy and purpose, so you start with instant clarity."
        />
        
        <FeatureCard
          title="Clarity at a glance"
          description="Soulstice filters out the overwhelm and shows you, in a single pulse, exactly where your energy stands."
        />
        
        <FeatureCard
          title="Guidance that adapts to you"
          description="Whether you need a quick reset or a deeper ritual, Soulstice delivers practices aligned with your energetic path."
        />
      </div>
    </Section>
  );
}

