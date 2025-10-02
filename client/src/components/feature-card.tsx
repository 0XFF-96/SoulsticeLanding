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
        "feature-card bg-white rounded-2xl p-8 shadow-lg",
        highlighted && "border-4 border-soulstice-primary/30",
        className
      )}
    >
      {imageUrl && (
        <div className="relative mb-6">
          <img 
            src={imageUrl} 
            alt={title}
            className="rounded-xl w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-soulstice-primary/20 to-transparent rounded-xl" />
        </div>
      )}
      
      {icon && (
        <div className="mb-6">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-heading font-bold mb-3 text-soulstice-foreground">
        {title}
      </h3>
      <p className="text-soulstice-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
