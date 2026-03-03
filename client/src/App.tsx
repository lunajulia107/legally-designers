import React from "react";
import { BrowserRouter } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import WhatsappPopup from "./components/WhatsappPopup";

import Home from "./pages/Home";

// Componente principal da aplicação
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="my-5">
        <Home /> 
        <WhatsappPopup /> 
      </main>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;
