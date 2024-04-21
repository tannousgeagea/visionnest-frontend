import './App.css';
import Home from './pages/home';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import UploadFilesPage from './pages/features/uploadFiles';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/upload' element={<UploadFilesPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>

  );
}

export default App;
