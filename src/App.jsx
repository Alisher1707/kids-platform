
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Games from './pages/Games';
import Cartoons from './pages/Cartoons';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/games" element={<Games />} />
          <Route path="/cartoons" element={<Cartoons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
