import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface InvitationCardProps {
  onOpen: () => void;
}

export const InvitationCard = ({ onOpen }: InvitationCardProps) => {
  return (
    <Card
      className="relative w-full max-w-md mx-auto border-0 animate-fade-in-up overflow-hidden min-h-[650px] flex flex-col bg-blush"
    >
      {/* Top Glittery Section */}
      <div className="relative h-[250px] bg-blush flex items-center justify-center overflow-hidden">
        {/* Sparkles for glitter effect */}
        {[...Array(30)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-rose-gold-light opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Section with Button */}
      <CardContent className="flex-grow p-8 text-center relative z-10 flex flex-col justify-center items-center">
        {/* Background image div */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/fundo-convite.png')` }}
        />
        
        {/* Content (Button and text) */}
        <div className="relative z-20 w-full flex flex-col items-center">
          <Button
            onClick={onOpen}
            className="w-full max-w-xs h-12 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white transition-all duration-300 text-lg font-semibold"
          >
            Abrir Convite
          </Button>
          <p className="text-sm text-gray-500 mt-2">Toque para abrir</p>
        </div>

        {/* Confetti at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-rose-gold-accent rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};