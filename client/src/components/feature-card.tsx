import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  className?: string;
  highlighted?: boolean;
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  imageUrl, 
  className, 
  highlighted = false 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "feature-card rounded-3xl p-4 border border-gray-100/50 transition-all duration-300 h-full",
        highlighted && "ring-2 ring-[#E1C16E]/30",
        className
      )}
      style={{
        fontFamily: 'Nunito Sans',
        backgroundColor: '#EDEEEB'
      }}
    >
      {/* Phone Mockup Section */}
      <div className="flex justify-center mb-4">
        <img 
          src="/assets/phone.svg" 
          alt="Phone mockup" 
          className="w-46 h-auto"
        />
      </div>
      
      {/* Text Content */}
      <div className="text-center">
        <h3 
          className="text-xl font-bold mb-2 text-gray-800 leading-tight"
          style={{
            fontFamily: 'Nunito Sans'
          }}
        >
          {title}
        </h3>
        <p 
          className="text-gray-600 leading-relaxed text-sm"
          style={{
            fontFamily: 'Nunito Sans'
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
