import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IkhtiarUmrah from './pages/IkhtiarUmrah';
import Taawun from './pages/Taawun';
import IkhtiarPro from './pages/IkhtiarPro';
import SyiarIkhtiarUmrah from './pages/SyiarIkhtiarUmrah';
import Home from './pages/Home'; // Optional: If you have a home page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ikhtiarumrah/*" element={<IkhtiarUmrah />} />
        <Route path="/taawun/*" element={<Taawun />} />
        <Route path="/ikhtiarpro/*" element={<IkhtiarPro />} />
        <Route path="/syiarikhtiarumrah/*" element={<SyiarIkhtiarUmrah />} />
      </Routes>
    </Router>
  );
}

export default App;