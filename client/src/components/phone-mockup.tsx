import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PhoneMockup({ children, className, size = "md" }: PhoneMockupProps) {
  const sizeClasses = {
    sm: "w-56 h-[450px]",
    md: "w-64 h-[520px]",
    lg: "w-72 h-[580px]"
  };

  return (
    <div className={cn("phone-mockup", sizeClasses[size], className)}>
      <div className="phone-notch" />
      <div className="absolute inset-0 flex flex-col p-6">
        {children}
      </div>
    </div>
  );
}

interface GradientOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function GradientOrb({ className, size = "md" }: GradientOrbProps) {
  const sizeClasses = {
    sm: "w-28 h-28",
    md: "w-40 h-40",
    lg: "w-48 h-48"
  };

  return (
    <div className={cn("gradient-orb", sizeClasses[size], className)} />
  );
}
