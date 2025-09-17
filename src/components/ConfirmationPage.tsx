import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

interface ConfirmationPageProps {
  onBack: () => void;
}

export const ConfirmationPage = ({ onBack }: ConfirmationPageProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");
  const [companions, setCompanions] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !phone || !attendance) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("confirmations").insert([
      {
        name,
        phone,
        attendance,
        companions: attendance === "yes" ? companions : null,
        message,
      },
    ]);

    if (error) {
      toast.error("Erro ao enviar confirmação: " + error.message);
      console.error("Erro ao enviar confirmação:", error);
    } else {
      toast.success("Confirmação enviada com sucesso!");
      setName("");
      setPhone("");
      setAttendance("");
      setCompanions("");
      setMessage("");
    }
    setLoading(false);
  };

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
            Confirmação de Presença
          </h2>
        </div>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg text-gray-700">
                Seu Nome Completo
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Maria da Silva"
                className="mt-2 p-3 border-rose-300 focus:border-rose-500 focus:ring-rose-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-lg text-gray-700">
                Seu Telefone (com DDD)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: (99) 99999-9999"
                className="mt-2 p-3 border-rose-300 focus:border-rose-500 focus:ring-rose-500"
                required
              />
            </div>

            <div>
              <Label className="text-lg text-gray-700">Você irá comparecer?</Label>
              <RadioGroup
                value={attendance}
                onValueChange={setAttendance}
                className="flex space-x-4 mt-2"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="r1" className="text-rose-500" />
                  <Label htmlFor="r1" className="text-base text-gray-700">
                    Sim, com certeza!
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="r2" className="text-rose-500" />
                  <Label htmlFor="r2" className="text-base text-gray-700">
                    Não poderei ir
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {attendance === "yes" && (
              <div>
                <Label htmlFor="companions" className="text-lg text-gray-700">
                  Quantos acompanhantes (adultos e crianças)?
                </Label>
                <Input
                  id="companions"
                  type="number"
                  value={companions}
                  onChange={(e) => setCompanions(e.target.value)}
                  placeholder="Ex: 2"
                  className="mt-2 p-3 border-rose-300 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
            )}

            <div>
              <Label htmlFor="message" className="text-lg text-gray-700">
                Deixe uma mensagem para a Emanuelle (opcional)
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ex: Parabéns, Emanuelle! Mal posso esperar para celebrar com você!"
                className="mt-2 p-3 border-rose-300 focus:border-rose-500 focus:ring-rose-500 min-h-[100px]"
              />
            </div>
            
            <p className="text-md font-medium text-red-600 text-center mb-4">
              Nossa festa vai ter piscina e começa cedinho, traga roupa de banho pra aproveitarmos bem o dia, combinado!! 🏊‍♀️🎉
            </p>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 text-lg font-semibold"
            >
              {loading ? "Enviando..." : "Confirmar Presença"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};