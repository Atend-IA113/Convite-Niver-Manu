import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface InvitationCardProps {
  onOpen: () => void;
}

export const InvitationCard = ({ onOpen }: InvitationCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-pink-100 border-0 shadow-xl animate-fade-in-up">
      <CardContent className="p-8 text-center">
        <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6 animate-pulse" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent mb-4">
          Celebração Especial
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Você está convidado(a) para celebrar o aniversário da Emanuelle!
        </p>
        <Button
          onClick={onOpen}
          className="w-full h-12 bg-gradient-to-r from-rose-400 to-amber-400 text-white border-0 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 text-lg font-semibold"
        >
          Abrir Convite
        </Button>
      </CardContent>
    </Card>
  );
};