import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

interface InvitationCardProps {
  onOpen: () => void;
}

export const InvitationCard = ({ onOpen }: InvitationCardProps) => {
  return (
    <Card className="relative w-full max-w-md mx-auto bg-gradient-to-br from-white to-pink-100 border-0 shadow-xl animate-fade-in-up overflow-hidden">
      {/* Top-left diamond */}
      <div className="absolute -top-4 -left-4 w-12 h-12 border border-rose-200 rotate-45 bg-white/50"></div>
      {/* Top-right diamond */}
      <div className="absolute -top-4 -right-4 w-12 h-12 border border-rose-200 rotate-45 bg-white/50"></div>
      {/* Bottom-left diamond */}
      <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-rose-200 rotate-45 bg-white/50"></div>
      {/* Bottom-right diamond */}
      <div className="absolute -bottom-4 -right-4 w-12 h-12 border border-rose-200 rotate-45 bg-white/50"></div>

      <CardContent className="p-8 text-center relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Sparkles className="w-8 h-8 text-rose-300" />
          <Heart className="w-10 h-10 text-rose-500" />
          <Sparkles className="w-8 h-8 text-rose-300" />
        </div>
        <h1 className="text-5xl font-bold text-pink-200 mb-2">
          Emanuelle
        </h1>
        <p className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent mb-4">
          15 Anos
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Você está convidado(a) para celebrar este momento especial
        </p>
        <Button
          onClick={onOpen}
          className="w-full h-12 bg-pink-50 text-rose-500 border border-rose-200 hover:bg-pink-100 transition-all duration-300 text-lg font-semibold"
        >
          Abrir Convite
        </Button>
        <p className="text-sm text-gray-500 mt-2">Toque para abrir</p>
      </CardContent>
    </Card>
  );
};