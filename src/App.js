import './App.css';
import Home from './pages/home';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Hero from './components/common/hero';
import Features from './components/features/features';
import {  UseAuth } from './contexts/AuthContext'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <Footer />

    </div>
  );
}

export default App;
