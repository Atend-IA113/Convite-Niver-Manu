import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, Gift } from "lucide-react";

interface InvitationMenuProps {
  onPageChange: (page: 'menu' | 'location' | 'confirmation' | 'gifts') => void;
}

export const InvitationMenu = ({ onPageChange }: InvitationMenuProps) => {
  return (
    <Card
      className="relative w-full max-w-lg mx-auto border-0 shadow-xl overflow-hidden min-h-[650px] flex flex-col bg-contain bg-center bg-no-repeat bg-invitation-light-pink"
      style={{ backgroundImage: `url('/menu-background.png')` }}
    >
      <CardContent className="flex-grow p-8 text-center relative z-10 flex flex-col items-center justify-end bg-transparent">
        {/* Container para posicionar os botões */}
        <div className="w-full flex flex-col items-center space-y-4 pb-20">
          <Button
            onClick={() => onPageChange('location')}
            className="w-full max-w-xs h-12 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white transition-all duration-300 text-lg font-semibold"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Localização
          </Button>
          <Button
            onClick={() => onPageChange('confirmation')}
            className="w-full max-w-xs h-12 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white transition-all duration-300 text-lg font-semibold"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Confirmar Presença
          </Button>
          <Button
            onClick={() => onPageChange('gifts')}
            className="w-full max-w-xs h-12 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white transition-all duration-300 text-lg font-semibold"
          >
            <Gift className="w-5 h-5 mr-2" />
            Lista de Presentes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};