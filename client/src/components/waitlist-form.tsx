import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, ChevronDown } from "lucide-react";

type UserType = "USER" | "PARTNER" | "INVESTOR";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("USER");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !userType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully joined waitlist!",
        description: "We'll be in touch soon with updates.",
      });
      
      setEmail("");
      setUserType("USER");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-3xl mx-auto lg:mx-0 pt-4 lg:px-8 xl:px-12 lg:mt-16"
      data-testid="waitlist-form"
    >
      {/* Desktop: Integrated pill-shaped container */}
      <div 
        className="hidden lg:flex lg:items-stretch lg:gap-0 w-full"
        style={{
          backgroundColor: 'white',
          borderRadius: '60px',
          padding: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* User Type Select */}
        <div className="relative flex-shrink-0">
          <Select value={userType} onValueChange={(value: UserType) => setUserType(value)}>
            <SelectTrigger 
              className="h-full border-0 bg-transparent px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-l-full focus:ring-0 focus:outline-none min-w-[180px]"
              data-testid="select-user-type"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USER">I am a USER</SelectItem>
              <SelectItem value="PARTNER">I am a PARTNER</SelectItem>
              <SelectItem value="INVESTOR">I am an INVESTOR</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-200 self-stretch my-2"></div>
        
        {/* Email Input */}
        <div className="flex items-center flex-1 px-4">
          <Mail className="w-5 h-5 text-gray-400 mr-3" />
          <Input
            type="email"
            placeholder="Insert your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-0 bg-transparent px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            required
            data-testid="input-email"
          />
        </div>

        {/* Submit Button - Integrated */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap disabled:opacity-50 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg h-full rounded-full border-0"
          style={{
            background: 'linear-gradient(to right, #E1C16E, #BC9B62)',
            minWidth: '160px'
          }}
          data-testid="button-join-waitlist"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>

      {/* Mobile: Inline layout */}
      <div className="flex flex-col gap-4 lg:hidden w-full">
        {/* Input Container */}
        <div 
          className="flex items-stretch gap-0 w-full"
          style={{
            backgroundColor: 'white',
            borderRadius: '60px',
            padding: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* User Type Select */}
          <div className="relative flex-shrink-0">
            <Select value={userType} onValueChange={(value: UserType) => setUserType(value)}>
              <SelectTrigger 
                className="h-full border-0 bg-transparent px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-l-full focus:ring-0 focus:outline-none min-w-[140px] text-sm"
                data-testid="select-user-type-mobile"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USER">I am a USER</SelectItem>
                <SelectItem value="PARTNER">I am a PARTNER</SelectItem>
                <SelectItem value="INVESTOR">I am an INVESTOR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-200 self-stretch my-2"></div>
          
          {/* Email Input */}
          <div className="flex items-center flex-1 px-3">
            <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <Input
              type="email"
              placeholder="Insert your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 bg-transparent px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
              required
              data-testid="input-email-mobile"
            />
          </div>
        </div>
        
        {/* Submit Button - Separate */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap disabled:opacity-50 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg h-full rounded-full border-0 w-full"
          style={{
            background: 'linear-gradient(to right, #E1C16E, #BC9B62)',
            minHeight: '48px'
          }}
          data-testid="button-join-waitlist-mobile"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>

      </div>
    </form>
  );
}
