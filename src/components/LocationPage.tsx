import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

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
            Local e Data
          </h2>
        </div>

        <div className="space-y-6 text-gray-700">
          <div className="flex items-center">
            <Calendar className="w-6 h-6 text-rose-500 mr-3" />
            <div>
              <h3 className="text-xl font-semibold">Data:</h3>
              <p className="text-lg">15 de Dezembro de 2024</p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="w-6 h-6 text-rose-500 mr-3 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Local:</h3>
              <p className="text-lg">Salão de Festas Alegria</p>
              <p className="text-md">Rua das Flores, 123 - Bairro Jardim</p>
              <p className="text-md">Cidade, Estado</p>
              <a
                href="https://maps.google.com/?q=Salão de Festas Alegria, Rua das Flores, 123, Cidade, Estado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm mt-2 inline-block"
              >
                Ver no mapa
              </a>
            </div>
          </div>

          <p className="text-md pt-4">
            Aguardamos sua presença para celebrar este dia especial!
          </p>
        </div>
      </Card>
    </div>
  );
};