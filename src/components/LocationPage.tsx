import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin } from "lucide-react";

interface LocationPageProps {
  onBack: () => void;
}

export const LocationPage = ({ onBack }: LocationPageProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gradient-to-br from-white to-pink-100 border-0 shadow-xl p-8">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="p-2 hover:bg-rose-100"
          >
            <ArrowLeft className="w-6 h-6 text-rose-500" />
          </Button>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent ml-4">
            Localização
          </h2>
        </div>

        <CardContent className="space-y-4 text-gray-700">
          <p className="text-lg">
            A celebração acontecerá em um lugar muito especial!
          </p>
          <div className="flex items-center text-xl font-semibold">
            <MapPin className="w-6 h-6 mr-2 text-rose-500" />
            <span>Salão de Festas Alegria</span>
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
          <a
            href="https://maps.app.goo.gl/your-location-link" // Replace with actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 mt-4"
          >
            Ver no Google Maps
          </a>
        </CardContent>
      </Card>
    </div>
  );
};