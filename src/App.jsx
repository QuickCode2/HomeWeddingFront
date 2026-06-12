import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomeSection from "./Components/Home/HomeSection";
import VideoSection from "./Components/VideoSection/VideoSection";
import LRbridegroom from "./Components/BrideGroom/LRbridegroom";
import Footer from "./Components/Footer/Footer"
import ScrollButton from "./Components/ArrowSection/Arrow";

// Pages
import BrideGroom from "./Pages/BrideGroom";
import PreWedding from "./Pages/PreWedding";
import WeddingEvent from "./Pages/WeddingEvent";
import EventVenuePage from "./Pages/EventVenue";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import RSVP from "./Components/VanueLocation/RSVP";



function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-linear-to-r from-pink-50 via-white to-pink-100 min-h-screen">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeSection />
                <VideoSection />
                <PreWedding />
                <WeddingEvent />
                <LRbridegroom />
                <Footer />
              </>
            }
          />  
          <Route path="/aboutsection" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/bridegroom" element={<BrideGroom />} />
          <Route path="/prewedding" element={<PreWedding />} />
          <Route path="/weddingevent" element={<WeddingEvent />} />
          <Route path="/eventvenue" element={<EventVenuePage />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
        {/* Global Arrow Button */}
        <ScrollButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
