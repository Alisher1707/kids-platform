import { Link } from 'react-router';

function Navbar() {
  return (
    <nav 
      className="shadow-md px-6 py-4"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-primary-500)' }}
          >
            <span 
              className="font-bold text-sm"
              style={{ color: 'var(--color-white)' }}
            >
              KP
            </span>
          </div>
          <span 
            className="text-xl font-bold"
            style={{ color: 'var(--color-gray-800)' }}
          >
            Kids Platform
          </span>
        </Link>
        
        <div className="flex items-center">
          <div 
            className="w-10 h-10 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--color-gray-300)' }}
          >
            <img 
              src="https://picsum.photos/200/300" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;