import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
// TypingText não é mais necessário, pois o texto "Anos" será removido
// import { TypingText } from "@/components/TypingText"; 

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
        {/* O texto "15" e "Anos" foi removido daqui */}
      </div>

      {/* Main Content Section with Button */}
      <CardContent className="flex-grow p-8 text-center relative z-10 bg-blush flex flex-col justify-center items-center"> {/* Adicionado justify-center e items-center */}
        {/* O texto descritivo e o nome "Emanuelle" foram removidos daqui */}
        
        <Button
          onClick={onOpen}
          className="w-full max-w-xs h-12 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white transition-all duration-300 text-lg font-semibold"
        >
          Abrir Convite
        </Button>
        <p className="text-sm text-gray-500 mt-2">Toque para abrir</p>

        {/* Confetti at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
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
      {/* A div do botão separada foi removida */}
    </Card>
  );
};