
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DesenvolvimentoEmbrionario from "./pages/DesenvolvimentoEmbrionario";
import UTINeo from "./pages/UTINeo";
import AvaliacaoNeonatal from "./pages/AvaliacaoNeonatal";
import Apgar from "./pages/Apgar";
import Simulado from "./pages/Simulado";
import PathologiasNeonatais from "./pages/PathologiasNeonatais";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/desenvolvimento-embrionario" element={<Layout><DesenvolvimentoEmbrionario /></Layout>} />
          <Route path="/utideo" element={<Layout><UTINeo /></Layout>} />
          <Route path="/avaliacao-neonatal" element={<Layout><AvaliacaoNeonatal /></Layout>} />
          <Route path="/apgar" element={<Layout><Apgar /></Layout>} />
          <Route path="/simulado" element={<Layout><Simulado /></Layout>} />
          <Route path="/patologias-neonatais" element={<Layout><PathologiasNeonatais /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
