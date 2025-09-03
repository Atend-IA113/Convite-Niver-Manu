import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeartHandshake } from "lucide-react";

interface InvitationCardProps {
  onOpen: () => void;
}

export const InvitationCard = ({ onOpen }: InvitationCardProps) => {
  return (
    <Card className="p-8 text-center bg-white/90 backdrop-blur-sm shadow-2xl rounded-lg max-w-md w-full animate-fade-in">
      <HeartHandshake className="w-16 h-16 text-rose-500 mx-auto mb-6 animate-bounce-slow" />
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
        Você está convidado(a)!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Venha celebrar conosco o aniversário da Emanuelle!
      </p>
      <Button
        onClick={onOpen}
        className="w-full py-3 text-lg bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Abrir Convite
      </Button>
    </Card>
  );
};