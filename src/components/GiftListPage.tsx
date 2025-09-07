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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent ml-4">
            Lista de Presentes
          </h2>
        </div>

        <CardContent className="space-y-4 text-gray-700">
          <p className="text-lg">
            Sua presença já é o maior presente! Mas se você quiser nos presentear, aqui estão algumas sugestões:
          </p>
          <div className="flex items-center text-xl font-semibold">
            <Gift className="w-6 h-6 mr-2 text-rose-500" />
            <span>Sugestões de Presentes:</span>
          </div>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Presentes em dinheiro (PIX: emanuelle.aniversario@email.com)</li>
            <li>Vale-presente em lojas de departamento</li>
            <li>Itens para casa (decoração, utensílios)</li>
            <li>Experiências (jantar, passeio)</li>
          </ul>
          <p className="text-md mt-4">
            Agradecemos de coração sua generosidade!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};