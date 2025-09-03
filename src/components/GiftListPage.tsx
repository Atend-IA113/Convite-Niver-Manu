import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Gift } from "lucide-react";

interface GiftListPageProps {
  onBack: () => void;
}

export const GiftListPage = ({ onBack }: GiftListPageProps) => {
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
            Lista de Presentes
          </h2>
        </div>

        <div className="space-y-4 text-gray-700">
          <p className="text-lg">
            Sua presença já é o maior presente! Mas se você quiser nos presentear,
            aqui estão algumas sugestões:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-4">
            <li className="flex items-center">
              <Gift className="w-5 h-5 text-rose-400 mr-2" />
              <span>Loja de Brinquedos "Mundo Mágico"</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-2 text-sm"
              >
                (Link da loja)
              </a>
            </li>
            <li className="flex items-center">
              <Gift className="w-5 h-5 text-rose-400 mr-2" />
              <span>Loja de Roupas Infantis "Pequenos Estilos"</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-2 text-sm"
              >
                (Link da loja)
              </a>
            </li>
            <li className="flex items-center">
              <Gift className="w-5 h-5 text-rose-400 mr-2" />
              <span>Ou um presente em dinheiro/PIX para a poupança da Manu!</span>
            </li>
          </ul>

          <p className="text-md pt-4">
            Agradecemos de coração sua generosidade!
          </p>
        </div>
      </Card>
    </div>
  );
};