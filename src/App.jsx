import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import IkhtiarUmrah from './pages/IkhtiarUmrah';
import Taawun from './pages/Taawun';
import IkhtiarPro from './pages/IkhtiarPro';
import SyiarIkhtiarUmrah from './pages/SyiarIkhtiarUmrah';
import Home from './pages/Home'; // Optional: If you have a home page
import { useEffect } from "react";

// Main App component
function App() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to the top whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  }, [location.pathname]); // Trigger effect on route change

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ikhtiarumrah/*" element={<IkhtiarUmrah />} />
      <Route path="/taawun/*" element={<Taawun />} />
      <Route path="/ikhtiarpro/*" element={<IkhtiarPro />} />
      <Route path="/syiarikhtiarumrah/*" element={<SyiarIkhtiarUmrah />} />
    </Routes>
  );
}

// Wrap the App component with Router
function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;