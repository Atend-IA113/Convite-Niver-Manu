import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, CalendarCheck, Gift, Home } from "lucide-react";

interface InvitationMenuProps {
  onPageChange: (page: 'menu' | 'location' | 'confirmation' | 'gifts') => void;
}

export const InvitationMenu = ({ onPageChange }: InvitationMenuProps) => {
  return (
    <Card className="bg-gradient-to-br from-white to-pink-100 border-0 shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent mb-8 text-center">
        Menu do Convite
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Button
          onClick={() => onPageChange('location')}
          className="h-24 text-lg bg-rose-400 hover:bg-rose-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          <MapPin className="w-8 h-8 mb-2" />
          Local e Data
        </Button>
        <Button
          onClick={() => onPageChange('confirmation')}
          className="h-24 text-lg bg-amber-400 hover:bg-amber-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          <CalendarCheck className="w-8 h-8 mb-2" />
          Confirmar Presença
        </Button>
        <Button
          onClick={() => onPageChange('gifts')}
          className="h-24 text-lg bg-purple-400 hover:bg-purple-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Gift className="w-8 h-8 mb-2" />
          Lista de Presentes
        </Button>
        <Button
          onClick={() => onPageChange('menu')} // Or a different home action if needed
          className="h-24 text-lg bg-gray-400 hover:bg-gray-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Home className="w-8 h-8 mb-2" />
          Início
        </Button>
      </div>
    </Card>
  );
};