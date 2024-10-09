import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeaturedCard from './components/FeaturedCard';
import ProjectDetails from './components/ProjectDetails';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <div className='margins'>
      <Header />
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FeaturedCard />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </BrowserRouter>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
