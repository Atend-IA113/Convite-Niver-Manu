import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

interface InvitationCardProps {
  onOpen: () => void;
}

export const InvitationCard = ({ onOpen }: InvitationCardProps) => {
  return (
    <Card className="relative w-full max-w-md mx-auto bg-gradient-to-br from-white to-rose-gold-light border-0 shadow-xl animate-fade-in-up overflow-hidden min-h-[500px] flex flex-col justify-between">
      {/* Top-left diamond */}
      <div className="absolute -top-4 -left-4 w-12 h-12 border border-rose-gold-medium rotate-45 bg-rose-gold-light/50"></div>
      {/* Top-right diamond */}
      <div className="absolute -top-4 -right-4 w-12 h-12 border border-rose-gold-medium rotate-45 bg-rose-gold-light/50"></div>
      {/* Bottom-left diamond */}
      <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-rose-gold-medium rotate-45 bg-rose-gold-light/50"></div>
      {/* Bottom-right diamond */}
      <div className="absolute -bottom-4 -right-4 w-12 h-12 border border-rose-gold-medium rotate-45 bg-rose-gold-light/50"></div>

      <CardContent className="p-8 text-center relative z-10 flex flex-col items-center justify-center flex-grow">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Sparkles className="w-8 h-8 text-rose-gold-accent" />
          <Heart className="w-10 h-10 text-rose-gold-medium" />
          <Sparkles className="w-8 h-8 text-rose-gold-accent" />
        </div>
        <h1 className="text-6xl font-bold text-rose-gold-dark mb-2">
          Emanuelle
        </h1>
        <p className="text-5xl font-bold bg-gradient-to-r from-rose-gold-accent to-rose-gold-medium bg-clip-text text-transparent mb-4">
          15 Anos
        </p>
        <p className="text-lg text-rose-gold-dark mb-6">
          Você está convidado(a) para celebrar este momento especial
        </p>
      </CardContent>
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