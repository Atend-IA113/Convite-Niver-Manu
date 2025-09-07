import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, Gift } from "lucide-react";

interface InvitationMenuProps {
  onPageChange: (page: 'menu' | 'location' | 'confirmation' | 'gifts') => void;
}

export const InvitationMenu = ({ onPageChange }: InvitationMenuProps) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-invitation-medium-pink border-0 shadow-xl">
      <CardContent className="p-8 text-center">
        <h2 className="text-3xl font-bold text-invitation-title mb-6">
          Menu do Convite
        </h2>
        <div className="space-y-4">
          <Button
            onClick={() => onPageChange('location')}
            className="w-full h-12 bg-invitation-title text-white hover:bg-invitation-title/90 transition-colors duration-300 text-lg font-semibold"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Localização
          </Button>
          <Button
            onClick={() => onPageChange('confirmation')}
            className="w-full h-12 bg-invitation-title text-white hover:bg-invitation-title/90 transition-colors duration-300 text-lg font-semibold"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Confirmar Presença
          </Button>
          <Button
            onClick={() => onPageChange('gifts')}
            className="w-full h-12 bg-invitation-title text-white hover:bg-invitation-title/90 transition-colors duration-300 text-lg font-semibold"
          >
            <Gift className="w-5 h-5 mr-2" />
            Lista de Presentes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};