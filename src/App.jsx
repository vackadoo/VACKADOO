import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbarwhite from "./components/NavigationBar"; // Navbar for other pages
import Home from "./pages/Home"; // Home page component
import TedxPage from "./pages/clientpage/TedxPage";
import Pauls from "./pages/clientpage/Pauls";
import HorizonStudy from "./pages/clientpage/HorizonStudy";
import FiemFoundation from "./pages/clientpage/FiemFoundation";
import Info from "./pages/clientpage/Info";
import Service from "./pages/clientpage/Service";
import JurisDomain from "./pages/clientpage/JurisDomain";
import Leather from "./pages/clientpage/Leather";
import ScheduleCall from "./pages/ScheduleCall";
import Calls from "./pages/clientpage/calls";
import Design from "./pages/Design";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar or Navbarwhite based on the current path */}
      {location.pathname === "/" ? <Navbarwhite /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tedx" element={<TedxPage />} />
        <Route path="/pauls" element={<Pauls />} />
        <Route path="/HorzionStudy" element={<HorizonStudy />} />
        <Route path="/FiemFoundation" element={<FiemFoundation />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/service" element={<Service />} />
        <Route path="/JurisDomain" element={<JurisDomain />} />
        <Route path="/Leather" element={<Leather />} />
        <Route path="/ScheduleCall" element={<ScheduleCall />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/Design" element={<Design />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
