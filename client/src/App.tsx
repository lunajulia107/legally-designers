import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import WhatsappPopup from "./components/WhatsappPopup";

import Home from "./pages/Home";

// Componente principal da aplicação
const App: React.FC = () => {
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <main className="my-5">
        <Home onOpenWhatsapp={() => setIsWhatsappOpen(true)} />
        <WhatsappPopup 
          isOpen={isWhatsappOpen} 
          setIsOpen={setIsWhatsappOpen} 
        />
      </main>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;
