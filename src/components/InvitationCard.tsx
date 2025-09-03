import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface InvitationCardProps {
  onOpen: () => void;
}

export const InvitationCard = ({ onOpen }: InvitationCardProps) => {
  return (
    <Card
      className="relative w-full max-w-md mx-auto border-0 shadow-xl animate-fade-in-up overflow-hidden min-h-[650px] flex flex-col"
      // Removido o onClick do Card para que apenas o botão seja clicável
    >
      {/* Top Glittery Section */}
      <div className="relative h-[250px] bg-gradient-to-br from-rose-gold-medium to-rose-gold-accent flex items-center justify-center overflow-hidden">
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
        {/* "15" text */}
        <span className="absolute text-white text-[150px] font-bold leading-none z-10">
          15
        </span>
        {/* "sweet" text */}
        <span className="absolute text-rose-gold-dark text-7xl font-serif italic z-20" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          sweet
        </span>
      </div>

      {/* Main Content Section (light pink) */}
      <CardContent className="flex-grow p-8 text-center relative z-10 bg-blush flex flex-col justify-between">
        {/* Descriptive text */}
        <p className="text-sm text-rose-gold-dark mb-6 leading-relaxed">
          Há momentos inesquecíveis que são guardados no coração para sempre.
          Por essa razão, quero compartilhar este dia especial com você.
          Sua presença trará ainda mais alegria e significado a esta ocasião.
          Vamos criar memórias juntos que durarão uma vida inteira.
        </p>

        {/* Name */}
        <h2 className="text-5xl font-serif italic text-rose-gold-dark mb-8">
          Emanuelle
        </h2>

        {/* Date, Time, Location */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-center items-center text-rose-gold-dark text-sm">
            <span className="border-b border-rose-gold-medium w-1/4 mr-2"></span>
            <span>SÁBADO</span>
            <span className="border-b border-rose-gold-medium w-1/4 ml-2"></span>
          </div>
          <div className="flex justify-center items-center text-rose-gold-dark text-2xl font-bold">
            <span className="mr-2">DEZEMBRO</span>
            <span className="text-5xl">15</span>
            <span className="ml-2">2024</span>
          </div>
          <div className="flex justify-center items-center text-rose-gold-dark text-sm">
            <span className="border-b border-rose-gold-medium w-1/4 mr-2"></span>
            <span>19:00</span>
            <span className="border-b border-rose-gold-medium w-1/4 ml-2"></span>
          </div>
          <p className="text-sm text-rose-gold-dark mt-4">
            Rua das Flores, 123 - Cidade Feliz
          </p>
        </div>

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
      {/* Botão "Abrir Convite" */}
      <div className="p-8 pt-0 text-center relative z-10">
        <Button
          onClick={onOpen}
          className="w-full h-12 bg-rose-gold-light text-rose-gold-dark border border-rose-gold-medium hover:bg-rose-gold-medium hover:text-white transition-all duration-300 text-lg font-semibold"
        >
          Abrir Convite
        </Button>
        <p className="text-sm text-gray-500 mt-2">Toque para abrir</p>
      </div>
    </Card>
  );
};