import { motion } from "framer-motion";
import { PhoneMockup, GradientOrb } from "@/components/phone-mockup";
import { WaitlistForm } from "@/components/waitlist-form";
import { Play, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <h1 
                style={{
                  fontFamily: 'Nunito Sans',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: '70px',
                  lineHeight: '70px',
                  letterSpacing: '0%',
                  color: '#FFFFFF'
                }}
              >
                Spiritual clarity for modern living
              </h1>
              <p 
                className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0"
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Nunito Sans'
                }}
              >
                Soulstice blends ancient wisdom with modern technology to provide clarity and guidance. By uniting AI insights and tailored rituals, it helps you reconnect with your energy, make mindful choices, and bring more balance and purpose into your daily life.
              </p>
            </div>

            <WaitlistForm />
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
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

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-soulstice-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-soulstice-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

