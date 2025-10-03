import { motion } from "framer-motion";
import { PhoneMockup, GradientOrb } from "@/components/phone-mockup";
import { WaitlistForm } from "@/components/waitlist-form";
import { Play, Check, Facebook, Instagram, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section 
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/Soulstice_logo-color 1 (2).svg"
                alt="Soulstice Logo"
                className="h-8 w-auto"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="text-xl" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <h1 
                className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-normal sm:leading-tight text-white mt-12 mb-4"
                style={{
                  fontFamily: 'Nunito Sans'
                }}
              >
                Spiritual clarity for modern living
              </h1>
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-white/90 mb-10"
                style={{
                  fontFamily: 'Nunito Sans'
                }}
              >
                Soulstice blends ancient wisdom with modern technology to provide clarity and guidance. By uniting AI insights and tailored rituals, it helps you reconnect with your energy, make mindful choices, and bring more balance and purpose into your daily life.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <WaitlistForm />
            </div>

          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center "
          >
            <div className="relative">
              {/* Main Phone */}
              <PhoneMockup size="md" className="relative z-10">
                <div className="text-white text-sm mb-4 opacity-90">Rebalancing Meditation</div>
                <GradientOrb className="mb-6 mx-auto" />
                
                {/* Waveform visualization */}
                <div className="flex items-end justify-center space-x-1 mb-4">
                  {[8, 12, 6, 16, 10, 14, 8, 12, 6].map((height, i) => (
                    <div
                      key={i}
                      className="w-1 bg-white/50 rounded-full animate-pulse"
                      style={{ height: `${height * 4}px`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <div className="text-white text-xs mb-4 opacity-75 text-center">0:08 / 5:23</div>
                <button className="w-12 h-12 rounded-full bg-soulstice-primary flex items-center justify-center mx-auto">
                  <Play className="text-white w-5 h-5 ml-1" />
                </button>
              </PhoneMockup>

              {/* Secondary Phone (Right) */}
              <PhoneMockup size="sm" className="absolute -right-20 top-16 opacity-90">
                <div className="text-white text-sm mb-4 opacity-90">Good Morning, Sarah</div>
                <GradientOrb size="sm" className="mx-auto mb-4" />
                <div className="text-white text-xs text-center mb-6 opacity-75">Find out what to do today</div>
                
                <div className="space-y-3">
                  {[
                    { label: "Nutrition", action: "Daily Rituals", bg: "bg-soulstice-primary/80" },
                    { label: "Sleep", action: "Rest Now", bg: "bg-soulstice-primary/60" },
                    { label: "Library", action: "Daily Ritual", bg: "bg-soulstice-accent/80" },
                    { label: "Today", action: <Check className="w-4 h-4" />, bg: "bg-soulstice-muted/60" }
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} rounded-lg px-4 py-2 text-white text-xs flex items-center justify-between`}>
                      <span>{item.label}</span>
                      <span className="opacity-75">{item.action}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto text-white text-xs text-center opacity-75">Find energy for your future</div>
              </PhoneMockup>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

