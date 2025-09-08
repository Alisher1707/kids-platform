import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg px-6 py-4 border-b-4 border-purple-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">KP</span>
          </div>
          <span className="text-2xl font-bold text-purple-800">Kids Platform</span>
        </Link>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-orange-100 rounded-full overflow-hidden border-3 border-orange-300 shadow-md">
            <div className="w-full h-full bg-orange-200 flex items-center justify-center">
              <span className="text-2xl">👶</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;