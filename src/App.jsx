
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Games from './pages/Games';
import Cartoons from './pages/Cartoons';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;
