import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin } from "lucide-react";

interface LocationPageProps {
  onBack: () => void;
}

export const LocationPage = ({ onBack }: LocationPageProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gradient-to-br from-white to-invitation-medium-pink border-0 shadow-xl p-8">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="p-2 hover:bg-rose-100"
          >
            <ArrowLeft className="w-6 h-6 text-rose-500" />
          </Button>
          <h2 className="text-3xl font-bold text-invitation-title ml-4">
            Localização
          </h2>
        </div>

        <CardContent className="space-y-4 text-gray-700">
          <p className="text-lg">
            A celebração acontecerá em um lugar muito especial!
          </p>
          <div className="flex items-center text-xl font-semibold">
            <MapPin className="w-6 h-6 mr-2 text-rose-500" />
            <span>Chacara cantinho da mata</span>
          </div>
          <p>
            Rua Mitugo Miyabayashi, 1229 - Parque das Grevileas, Maringá
          </p>
          <p>
            Data: 12/10/2025
          </p>
          <p>
            Horário: 17:00
          </p>
          <p className="text-md font-medium text-red-600">
            Nossa festa vai ter piscina e começa cedinho, traga roupa de banho pra aproveitarmos bem o dia, combinado!!
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Mitugo+Miyabayashi,+1229,+Parque+das+Grevileas,+Maringá" // Link de pesquisa do Google Maps
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white mt-4"
          >
            Ver no Google Maps
          </a>
        </CardContent>
      </Card>
    </div>
  );
};