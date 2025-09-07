import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle, Heart, Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ConfirmationPageProps {
  onBack: () => void;
}

export const ConfirmationPage = ({ onBack }: ConfirmationPageProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [companions, setCompanions] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !attendance) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('confirmations')
        .insert([{ name, phone, attendance, companions, message }]);

      if (error) {
        console.error("Error inserting data:", error);
        toast({
          title: "Erro ao confirmar",
          description: "Ocorreu um erro ao enviar sua confirmação. Tente novamente.",
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: "Confirmação enviada!",
        description: `Obrigada por confirmar sua presença, ${name}! 💕`,
      });

      // Reset form
      setName("");
      setPhone("");
      setAttendance(null);
      setCompanions("");
      setMessage("");
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro inesperado. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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
            Confirmar Presença
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gray-800 font-semibold">
                Nome completo *
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 bg-white/70 border-rose-200 focus:border-rose-400"
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-800 font-semibold">
                Telefone/WhatsApp *
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 bg-white/70 border-rose-200 focus:border-rose-400"
                placeholder="(44) 99999-9999"
                required
              />
            </div>
          </div>

          <div>
            <Label className="text-gray-800 font-semibold mb-3 block">
              Você confirma sua presença? *
            </Label>
            <div className="flex gap-4">
              <Button
                type="button"
                variant={attendance === "yes" ? "default" : "outline"}
                onClick={() => setAttendance("yes")}
                className={`flex-1 h-12 transition-all duration-300 ${
                  attendance === "yes"
                    ? "bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white"
                    : "border-rose-200 text-gray-800 hover:bg-rose-50"
                }`}
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Sim, estarei presente!
              </Button>
              
              <Button
                type="button"
                variant={attendance === "no" ? "default" : "outline"}
                onClick={() => setAttendance("no")}
                className={`flex-1 h-12 transition-all duration-300 ${
                  attendance === "no"
                    ? "bg-gray-400 text-white hover:bg-gray-500"
                    : "border-rose-200 text-gray-800 hover:bg-rose-50"
                }`}
              >
                <Heart className="w-5 h-5 mr-2" />
                Não poderei comparecer
              </Button>
            </div>
          </div>

          {attendance === "yes" && (
            <div>
              <Label htmlFor="companions" className="text-gray-800 font-semibold">
                Acompanhantes
              </Label>
              <Input
                id="companions"
                value={companions}
                onChange={(e) => setCompanions(e.target.value)}
                className="mt-1 bg-white/70 border-rose-200 focus:border-rose-400"
                placeholder="Nome dos acompanhantes (se houver)"
              />
              <p className="text-sm text-gray-500 mt-1">
                Informe os nomes dos acompanhantes que virão com você
              </p>
            </div>
          )}

          <div>
            <Label htmlFor="message" className="text-gray-800 font-semibold">
              Mensagem especial (opcional)
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 bg-white/70 border-rose-200 focus:border-rose-400 min-h-[100px]"
              placeholder="Deixe uma mensagem carinhosa para a Emanuelle..."
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-rose-300 text-rose-gold-dark border border-rose-400 hover:bg-rose-400 hover:text-white hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 text-lg font-semibold"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {loading ? "Enviando..." : "Enviar Confirmação"}
          </Button>

          <p className="text-center text-sm text-gray-500">
            * Campos obrigatórios
          </p>
        </form>
      </Card>
    </div>
  );
};