import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { PhoneMockup, GradientOrb } from "@/components/phone-mockup";
import { FeatureCard } from "@/components/feature-card";
import { WaitlistForm } from "@/components/waitlist-form";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Play, 
  BookOpen, 
  Watch, 
  Waves, 
  User, 
  Handshake, 
  TrendingUp,
  Menu,
  Zap,
  Check
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-soulstice-bg/80 backdrop-blur-md border-b border-soulstice-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <img 
                src="/assets/slogo.svg" 
                alt="Soulstice Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-heading font-bold gradient-text">soulstice</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-soulstice-muted-foreground hover:text-soulstice-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-soulstice-muted-foreground hover:text-soulstice-foreground transition-colors">
                How it Works
              </a>
              <a href="#waitlist" className="text-soulstice-muted-foreground hover:text-soulstice-foreground transition-colors">
                Waitlist
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="text-xl" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-soulstice-foreground">
                Spiritual clarity for <span className="gradient-text">modern living</span>
              </h1>
              <p className="text-lg md:text-xl text-soulstice-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Soulstice blends ancient wisdom with modern technology to provide clarity and guidance. By uniting AI insights and tailored rituals, it helps you reconnect with your energy, make mindful choices, and bring more balance and purpose into your daily life.
              </p>
            </div>

            <WaitlistForm />
{/* 
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="btn-secondary flex items-center gap-2"
                data-testid="button-see-features"
              >
                <Play className="w-4 h-4" />
                See Features
              </Button>
            </div> */}
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

      {/* Why Choose Soulstice Section */}
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

      {/* How it Works Section */}
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

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
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
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-soulstice-primary to-soulstice-accent text-white text-2xl font-bold mb-6">
                {item.step}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-soulstice-foreground">
                {item.title}
              </h3>
              <p className="text-soulstice-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Elaboration on Features Section */}
      <Section variant="light">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 text-soulstice-foreground"
        >
          Elaboration on <span className="gradient-text">features</span>
        </motion.h2>

        <div className="space-y-24">
          {/* Feature 1: Smart Energy Guide */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="icon-circle">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-soulstice-foreground">Smart Energy Guide</h3>
              <p className="text-lg text-soulstice-muted-foreground">
                Receive gentle, personalised insights drawn from your energy and daily rhythms. Simple check-ins help you cut through noise and make choices that feel aligned with your higher self.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-soulstice-primary/10 text-soulstice-primary rounded-full text-sm font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  AI-Powered
                </span>
                <span className="px-4 py-2 bg-soulstice-accent/20 text-soulstice-accent-foreground rounded-full text-sm font-medium">
                  Daily Check-ins
                </span>
                <span className="px-4 py-2 bg-soulstice-secondary/30 text-soulstice-secondary-foreground rounded-full text-sm font-medium">
                  Personalized
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <PhoneMockup size="lg" className="mx-auto">
                <div className="text-white text-xs mb-4 opacity-75">9:41</div>
                <div className="text-white text-lg font-bold mb-2">Emotional Pulse</div>
                <GradientOrb size="sm" className="mx-auto my-6" />
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <div className="text-2xl font-bold mb-2">Balance score: 85%</div>
                  <p className="text-sm opacity-90 mb-4">You've been feeling grounded today. Your energy aligns beautifully with your heart's needs right now.</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="px-3 py-1 bg-soulstice-primary/80 rounded-full text-xs">Grounding</span>
                    <span className="px-3 py-1 bg-soulstice-accent/60 rounded-full text-xs">Creativity</span>
                    <span className="px-3 py-1 bg-soulstice-secondary/70 rounded-full text-xs">Confidence</span>
                    <span className="px-3 py-1 bg-soulstice-muted/50 rounded-full text-xs">Rest</span>
                  </div>
                  <div className="text-sm font-medium">Your Oracle:</div>
                  <div className="text-xs opacity-75 mt-1">Analyze Energy <span className="text-red-400">Low Energy</span></div>
                </div>
              </PhoneMockup>
            </motion.div>
          </div>

          {/* Feature 2: Wearable Integration */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <PhoneMockup size="lg" className="mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white text-sm">Back to home</span>
                </div>
                <div className="bg-white rounded-2xl p-6 mb-4">
                  <h4 className="font-bold mb-3 text-soulstice-foreground">Whispering to the currents of your highest path...</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded bg-soulstice-primary flex items-center justify-center mt-1">
                        <span className="text-white text-xs">G</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-soulstice-foreground">Growth</div>
                        <p className="text-xs text-soulstice-muted-foreground">Soulstice reads vital signs to your subconscious and pinpoint opportunities to expand and nurture your inner landscape.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded bg-soulstice-accent flex items-center justify-center mt-1">
                        <span className="text-white text-xs">S</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-soulstice-foreground">Stability</div>
                        <p className="text-xs text-soulstice-muted-foreground">Staying at Human Partners offers grounded security: return too quiet firm if you need steady clarity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="icon-circle bg-gradient-to-br from-soulstice-accent to-soulstice-primary">
                <Watch className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-soulstice-foreground">Wearable Integration</h3>
              <p className="text-lg text-soulstice-muted-foreground">
                Turn real-time signals from devices like Apple Watch or Oura into clear, actionable insights. Soulstice translates your body's data into guidance you can trust in the moment.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time biometric sync",
                  "Heart rate variability insights", 
                  "Sleep pattern analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-soulstice-muted-foreground">
                    <Check className="text-soulstice-primary mr-3 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 3: Custom Ritual Library */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="icon-circle bg-gradient-to-br from-soulstice-secondary to-soulstice-primary">
                <Waves className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-soulstice-foreground">Custom Ritual Library</h3>
              <p className="text-lg text-soulstice-muted-foreground">
                Choose from quick resets or deeper practices such as tailored meditations, affirmations, and manifestations designed around your unique energy needs.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold mb-4 text-soulstice-foreground">Popular Rituals</h4>
                <div className="space-y-3">
                  {[
                    { name: "Morning Meditation", duration: "5 min", icon: "🌙" },
                    { name: "Energy Boost", duration: "3 min", icon: "☀️" },
                    { name: "Heart Chakra Opening", duration: "10 min", icon: "❤️" }
                  ].map((ritual, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-soulstice-bg rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span>{ritual.icon}</span>
                        <span className="font-medium text-soulstice-foreground">{ritual.name}</span>
                      </div>
                      <span className="text-sm text-soulstice-muted-foreground">{ritual.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex gap-4"
            >
              <PhoneMockup size="md">
                <div className="text-white text-sm mb-4">Library</div>
                <div className="flex gap-2 mb-4">
                  <button className="px-4 py-1.5 bg-white/30 rounded-full text-white text-xs">Meditation</button>
                  <button className="px-4 py-1.5 bg-white/20 rounded-full text-white text-xs">Affirmation</button>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Morning Energy Meditation", duration: "5 min" },
                    { name: "Grounding Body Scan", duration: "8 min" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-white text-sm font-medium mb-1">{item.name}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs opacity-75">{item.duration}</span>
                        <Play className="text-white w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </PhoneMockup>
              
              <PhoneMockup size="md">
                <div className="text-white text-sm mb-4 opacity-90">It's the 1st: Good morning, Sarah</div>
                <GradientOrb className="mb-6 mx-auto" />
                <div className="text-white text-lg font-bold mb-2">Today</div>
                <div className="w-full space-y-2">
                  <div className="bg-soulstice-primary/70 rounded-lg px-4 py-2 text-white text-sm">
                    🍽️ Nutrition
                  </div>
                  <div className="bg-soulstice-primary/50 rounded-lg px-4 py-2 text-white text-sm flex items-center justify-between">
                    <span>🛏️ Sleep</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Start Now</span>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Waitlist CTA Section */}
      <Section id="waitlist">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 border-4 border-dashed border-soulstice-primary/30 rounded-2xl py-8 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-soulstice-foreground">
            Step into Soulstice and be the first to experience it.
          </h2>
          <p className="text-lg text-soulstice-muted-foreground">Join the waitlist today.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <User className="text-white text-xl" />,
              title: "For Users",
              description: "Sign up for early access and discover personalized insights that meet you where you are, with daily clarity and soul-aligned living.",
              bgColor: "bg-soulstice-accent/20",
              borderColor: "border-soulstice-accent/40",
              iconBg: "bg-soulstice-accent"
            },
            {
              icon: <Handshake className="text-white text-xl" />,
              title: "For Partners", 
              description: "Join the waitlist to bring your technology, expertise, or wellness content onto Soulstice and share it with a growing audience at launch.",
              bgColor: "bg-soulstice-primary/10",
              borderColor: "border-soulstice-primary/30",
              iconBg: "bg-soulstice-primary"
            },
            {
              icon: <TrendingUp className="text-white text-xl" />,
              title: "For Investors",
              description: "Register your interest and be part of launching the next big thing in the fast-growing spiritual wellness market.",
              bgColor: "bg-soulstice-secondary/30", 
              borderColor: "border-soulstice-secondary/50",
              iconBg: "bg-gradient-to-br from-soulstice-primary to-soulstice-secondary"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${card.bgColor} rounded-2xl p-8 border-4 border-dashed ${card.borderColor}`}
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

      {/* Footer */}
      <footer className="bg-soulstice-accent/30 border-t border-soulstice-border">
        <div className="bg-soulstice-primary w-full h-1"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/slogo.svg" 
                  alt="Soulstice Logo" 
                  className="w-10 h-10"
                />
                <span className="text-2xl font-heading font-bold gradient-text">soulstice</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-soulstice-muted-foreground">Email: Soulstice@Soulstice.com</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                    data-testid="footer-link-facebook"
                  >
                    <Facebook className="text-2xl" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                    data-testid="footer-link-instagram"
                  >
                    <Instagram className="text-2xl" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors"
                    data-testid="footer-link-linkedin"
                  >
                    <Linkedin className="text-2xl" />
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-soulstice-muted-foreground">
                <span>Launched with</span>
                <Zap className="text-soulstice-primary w-4 h-4" />
                <span className="font-bold">HYPER</span>
              </div>
              <p className="text-xs text-soulstice-muted-foreground">
                The best way to fund and launch your app. Celebrating $32M raised in the past 12 months.
              </p>
            </div>

            {/* Right Side */}
            <div className="space-y-4 md:text-right">
              <div>
                <h4 className="font-heading font-bold text-lg mb-2 text-soulstice-foreground">Get in Touch</h4>
                <p className="text-sm text-soulstice-muted-foreground mb-4">
                  Whether you're user, partner, or investor: leave your details and we'll be in touch.
                </p>
                <Button 
                  className="btn-primary"
                  data-testid="footer-button-join-waitlist"
                >
                  Join Waitlist
                </Button>
              </div>
              <div className="text-xs text-soulstice-muted-foreground space-x-4">
                <span>©2025 Soulstice. All rights reserved.</span>
              </div>
              <div className="flex md:justify-end space-x-4 text-xs">
                <a href="#" className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors">Term of Service</a>
                <a href="#" className="text-soulstice-muted-foreground hover:text-soulstice-primary transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
