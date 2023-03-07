
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Sidebar from './pages/sidebar/Sidebar';

import { Routes,Route } from 'react-router-dom';
import Portfolio from './pages/portfolio/Portfolio';
function App() {
  
  

  return (
    <div className="App">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  </div>
   

  )
}

export default App;
