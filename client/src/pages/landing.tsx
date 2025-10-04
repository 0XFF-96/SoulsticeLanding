import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ElaborationFeaturesSection } from "@/components/ElaborationFeaturesSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { ZapierChatbot } from "@/components/ZapierChatbot";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ElaborationFeaturesSection />
      <WaitlistSection />
      <Footer />
      
      {/* Zapier Chatbot */}
      <ZapierChatbot />
    </div>
  );
}
