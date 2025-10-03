import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { User, Handshake, DollarSign } from "lucide-react";

export function WaitlistSection() {
  return (
    <Section id="waitlist">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-soulstice-foreground">
          Step into Soulstice and be the first to experience it.
        </h2>
        <p className="text-lg font-heading font-bold text-soulstice-foreground">Join the waitlist today.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: <User className="text-white text-xl" />,
            title: "For Users",
            description: "Sign up for early access and discover personalised rituals that meet you where you are, with daily clarity, real-time insights and soul-aligned living.",
            iconBg: "bg-gray-700"
          },
          {
            icon: <Handshake className="text-white text-xl" />,
            title: "For Partners", 
            description: "Join the waitlist to bring your technology, expertise, or wellness content into Soulstice and share it with a growing audience at launch.",
            iconBg: "bg-gray-700"
          },
          {
            icon: <DollarSign className="text-white text-xl" />,
            title: "For Investors",
            description: "Register your interest and be part of launching Soulstice into the fast-growing spiritual wellness market.",
            iconBg: "bg-gray-700"
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-2xl p-8 border border-gray-200 h-full"
            style={{ backgroundColor: '#BABFAE' }}
          >
            <div className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center mb-4`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-soulstice-foreground">{card.title}</h3>
            <p className="text-soulstice-muted-foreground">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

