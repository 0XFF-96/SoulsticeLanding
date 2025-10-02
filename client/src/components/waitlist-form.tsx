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
      className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto lg:mx-0"
      data-testid="waitlist-form"
    >
      <div className="relative flex-1">
        <Select value={userType} onValueChange={(value: UserType) => setUserType(value)}>
          <SelectTrigger 
            className="w-full bg-white border-2 border-soulstice-border rounded-lg px-4 py-3.5 text-soulstice-foreground focus:border-soulstice-primary transition-colors"
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
      
      <Input
        type="email"
        placeholder="Insert your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white border-2 border-soulstice-border rounded-lg px-4 py-3.5 text-soulstice-foreground placeholder:text-soulstice-muted-foreground focus:border-soulstice-primary transition-colors"
        required
        data-testid="input-email"
      />
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
        data-testid="button-join-waitlist"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}
