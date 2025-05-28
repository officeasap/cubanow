
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import WhoIsItFor from "./pages/about/WhoIsItFor";
import RulesRequirements from "./pages/about/RulesRequirements";
import DailySchedule from "./pages/about/DailySchedule";
import CriticalThinking from "./pages/about/CriticalThinking";
import Boxing from "./pages/about/Boxing";
import MusicPreservation from "./pages/about/MusicPreservation";
import AfroCubanReligion from "./pages/about/AfroCubanReligion";
import TeamPage from "./pages/Team";
import SpecialGuests from "./pages/team/SpecialGuests";
import GalleryPage from "./pages/Gallery";
import Photos from "./pages/gallery/Photos";
import Videos from "./pages/gallery/Videos";
import PlansPage from "./pages/Plans";
import TestimonialsPage from "./pages/Testimonials";
import BookConsultationPage from "./pages/BookConsultation";
import ContactPage from "./pages/Contact";
import ProjectDetailsPage from "./pages/ProjectDetails";
import PaymentPage from "./pages/Payment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/who-is-it-for" element={<WhoIsItFor />} />
          <Route path="/about/rules-requirements" element={<RulesRequirements />} />
          <Route path="/about/daily-schedule" element={<DailySchedule />} />
          <Route path="/about/critical-thinking" element={<CriticalThinking />} />
          <Route path="/about/boxing" element={<Boxing />} />
          <Route path="/about/music-preservation" element={<MusicPreservation />} />
          <Route path="/about/afro-cuban-religion" element={<AfroCubanReligion />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/special-guests" element={<SpecialGuests />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/photos" element={<Photos />} />
          <Route path="/gallery/videos" element={<Videos />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
