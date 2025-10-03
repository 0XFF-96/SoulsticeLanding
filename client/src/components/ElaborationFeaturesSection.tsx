import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { FileText, Wifi, List } from "lucide-react";

export function ElaborationFeaturesSection() {
  return (
    <Section 
      id="elaboration-features" 
      variant="light"
      className="!bg-[#FCFCFC]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-soulstice-foreground"
        style={{
          fontFamily: 'Nunito Sans'
        }}
      >
        Elaboration on features
      </motion.h2>

      <div className="space-y-24">
        {/* Smart Energy Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] flex items-center justify-center">
                <FileText className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-soulstice-foreground">
                Smart Energy Guide
              </h3>
            </div>
            <p className="text-soulstice-muted-foreground text-lg leading-relaxed">
              Receive gentle, personalised insights drawn from your energy and daily rhythms. Simple check-ins help you cut through noise and make choices that feel aligned with your higher self.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-48 h-[300px] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[1.25rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-3 py-2 text-black text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-1 bg-black rounded-sm"></div>
                    <div className="w-2 h-1 bg-black rounded-sm"></div>
                    <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="px-3 pb-3">
                  <h4 className="text-sm font-semibold text-gray-800 text-center mb-4">Emotional Pulse</h4>
                  
                  {/* Golden Orb */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-gray-800">Balance score: 65%</p>
                    <p className="text-xs text-gray-600 mt-1">You're moderately balanced today. Your creativity feels strong, but grounding and rest need extra care.</p>
                  </div>
                  
                  {/* Energy Categories */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full p-2 text-center">
                      <p className="text-xs text-white font-medium">Grounding</p>
                    </div>
                    <div className="bg-gray-200 rounded-full p-2 text-center">
                      <p className="text-xs text-gray-600">Creativity</p>
                    </div>
                    <div className="bg-gray-200 rounded-full p-2 text-center">
                      <p className="text-xs text-gray-600">Confidence</p>
                    </div>
                    <div className="bg-gray-200 rounded-full p-2 text-center">
                      <p className="text-xs text-gray-600">Love Energy</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-gray-600">Root Chakra</p>
                    <p className="text-xs text-gray-600">Analytics Low Energy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wearable Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <div className="flex justify-center">
              <div className="relative w-48 h-[300px] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[1.25rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-3 py-2 text-black text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-1 bg-black rounded-sm"></div>
                      <div className="w-2 h-1 bg-black rounded-sm"></div>
                      <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="px-3 pb-3">
                    <div className="flex items-center mb-4">
                      <span className="text-xs text-gray-600">← Back to home</span>
                    </div>
                    
                    <div className="text-center mb-6">
                      <p className="text-sm text-gray-800 italic">Whispering to the currents of your highest path...</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">Growth</p>
                          <p className="text-xs text-gray-600">Aurora Collective's role sings to your soul's calling for expansion and creative leadership.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">Stability</p>
                          <p className="text-xs text-gray-600">Staying at Horizon Partners offers grounded security, ensure you guard time for rest if you choose stability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] flex items-center justify-center">
                <Wifi className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-soulstice-foreground">
                Wearable Integration
              </h3>
            </div>
            <p className="text-soulstice-muted-foreground text-lg leading-relaxed">
              Turn real-time signals from devices like Apple Watch or Oura into clear, actionable insights. Soulstice translates your body's data into guidance you can trust in the moment.
            </p>
          </div>
        </motion.div>

        {/* Custom Ritual Library */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] flex items-center justify-center">
                <List className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-soulstice-foreground">
                Custom Ritual Library
              </h3>
            </div>
            <p className="text-soulstice-muted-foreground text-lg leading-relaxed">
              Choose from quick resets or deeper practices such as tailored meditations, affirmations, and manifestations designed around your unique energy needs.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            {/* Left Phone */}
            <div className="relative w-48 h-[300px] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[1.25rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-3 py-2 text-black text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-1 bg-black rounded-sm"></div>
                    <div className="w-2 h-1 bg-black rounded-sm"></div>
                    <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="px-3 pb-3">
                  <h4 className="text-sm font-semibold text-gray-800 text-center mb-3">Library</h4>
                  
                  <div className="mb-3">
                    <div className="w-full bg-gray-100 rounded-full px-3 py-1">
                      <span className="text-xs text-gray-500">Search...</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-800">Morning Clarity Meditation</span>
                      </div>
                      <span className="text-xs text-gray-500">3 min</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-800">Let go and flow</span>
                      </div>
                      <span className="text-xs text-gray-500">5 min</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-800">Grounding Root Breath</span>
                      </div>
                      <span className="text-xs text-gray-500">2 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Phone */}
            <div className="relative w-48 h-[300px] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl -ml-4">
              <div className="w-full h-full bg-white rounded-[1.25rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-3 py-2 text-black text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-1 bg-black rounded-sm"></div>
                    <div className="w-2 h-1 bg-black rounded-sm"></div>
                    <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="px-3 pb-3">
                  <div className="text-center mb-4">
                    <p className="text-xs text-gray-600">10 Sep 2025</p>
                    <p className="text-sm font-semibold text-gray-800">Good morning, Sarah</p>
                  </div>
                  
                  {/* Golden Orb */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <p className="text-xs text-gray-600">Tap the orb to read your energy</p>
                  </div>
                  
                  <div className="space-y-2">
                    <button className="w-full bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] text-white py-2 rounded-full text-xs font-medium">
                      Check
                    </button>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-full text-xs font-medium">
                      Shield Me Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
