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
        "feature-card bg-white rounded-3xl p-4 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 h-full",
        highlighted && "ring-2 ring-[#E1C16E]/30",
        className
      )}
      style={{
        fontFamily: 'Nunito Sans'
      }}
    >
      {/* Phone Mockup Section */}
      <div className="flex justify-center mb-4">
        <div className="relative w-48 h-[360px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* Phone Frame */}
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-3 text-black text-sm font-medium">
              <span>9:41</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-black rounded-sm"></div>
                <div className="w-4 h-2 bg-black rounded-sm"></div>
                <div className="w-6 h-3 bg-black rounded-sm"></div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="px-3 pb-3">
              {/* Progress Indicator */}
              <div className="flex justify-center space-x-2 mb-3">
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <div
                    key={num}
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium",
                      index === 0 
                        ? "bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] text-white" 
                        : "bg-gray-200 text-gray-400"
                    )}
                  >
                    {num}
                  </div>
                ))}
              </div>
              
              {/* Main Question */}
              <h4 className="text-xs font-semibold text-gray-800 text-center mb-3 leading-tight px-2">
                How do you feel your soul wants to be in the world?
              </h4>
              
              {/* Central Graphic */}
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-1.5">
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 px-2 rounded-full text-xs font-medium transition-colors">
                  Quiet but powerful
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 px-2 rounded-full text-xs font-medium transition-colors">
                  Honest and clear
                </button>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-3 left-3 bg-white rounded-lg shadow-lg p-2 w-36">
              <div className="flex items-center justify-between mb-1">
                <h5 className="text-xs font-semibold text-gray-800">Morning Clarity</h5>
                <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
              </div>
              <div className="flex items-center space-x-1 mb-1">
                <div className="w-4 h-4 bg-gradient-to-r from-[#E1C16E] to-[#BC9B62] rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[2px] border-l-white border-y-[2px] border-y-transparent ml-0.5"></div>
                </div>
                <div className="flex space-x-0.5">
                  {[1, 2, 1, 3, 1, 2, 1].map((height, i) => (
                    <div
                      key={i}
                      className="w-0.5 bg-gray-400 rounded-full"
                      style={{ height: `${height * 2}px` }}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">3 min</span>
              </div>
              <p className="text-xs text-gray-500">Today, 7:15 AM</p>
            </div>
          </div>
        </div>
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
