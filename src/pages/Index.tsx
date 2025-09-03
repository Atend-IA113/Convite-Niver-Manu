import { useState } from "react";
import { InvitationCard } from "@/components/InvitationCard";
import { InvitationMenu } from "@/components/InvitationMenu";
import { LocationPage } from "@/components/LocationPage";
import { ConfirmationPage } from "@/components/ConfirmationPage";
import { GiftListPage } from "@/components/GiftListPage";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'menu' | 'location' | 'confirmation' | 'gifts'>('menu');

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  const handlePageChange = (page: 'menu' | 'location' | 'confirmation' | 'gifts') => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'location':
        return <LocationPage onBack={() => setCurrentPage('menu')} />;
      case 'confirmation':
        return <ConfirmationPage onBack={() => setCurrentPage('menu')} />;
      case 'gifts':
        return <GiftListPage onBack={() => setCurrentPage('menu')} />;
      default:
        return <InvitationMenu onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blush to-champagne overflow-hidden relative">
      {/* Floating sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-rose-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center relative z-10">
        {!isOpen ? (
          <InvitationCard onOpen={handleOpenInvitation} />
        ) : (
          <div className="w-full max-w-4xl animate-fade-in-up">
            {renderCurrentPage()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;