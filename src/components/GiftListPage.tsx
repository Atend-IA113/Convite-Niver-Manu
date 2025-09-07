import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Gift } from "lucide-react";

interface GiftListPageProps {
  onBack: () => void;
}

export const GiftListPage = ({ onBack }: GiftListPageProps) => {
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
            Lista de Presentes
          </h2>
        </div>

        <CardContent className="space-y-6 text-center text-gray-700">
          <p className="text-lg">
            Sua presença já é o maior presente! Mas se você quiser me presentear, aqui estão algumas opções:
          </p>

          <div className="text-center">
            <p className="font-semibold">Presente em dinheiro via PIX:</p>
            <p className="text-rose-gold-dark font-mono bg-rose-50 p-2 rounded-md inline-block mt-2">4499828-0952</p>
          </div>
          
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-2 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white mt-4"
          >
            <Gift className="w-5 h-5 mr-2" />
            Clique aqui para presentear
          </a>

          <p className="text-md mt-4">
            Agradeço de coração, e espero por você!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};