import { useState } from 'react';
import { toast } from 'react-toastify';
import fishesVideo from '/Fishes.mp4';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('👶');

  const avatars = [
    '👶', '👧', '👦', '🧒', '👨‍🎓', '👩‍🎓',
    '🐶', '🐱', '🐻', '🦄', '🌟', '🎈'
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast.error('Iltimos, ismingizni kiriting! 😊', {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Xush kelibsiz, ${username}! 🎉`, {
        position: "top-center",
        autoClose: 2000,
      });
      
      // Store user data
      localStorage.setItem('kidsUser', JSON.stringify({
        name: username,
        avatar: selectedAvatar,
        loginTime: new Date().toISOString()
      }));
      
      // Redirect to home (you can implement routing logic here)
      window.location.href = '/';
    }, 2000);
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ minWidth: '100%', minHeight: '100%' }}
      >
        <source src={fishesVideo} type="video/mp4" />
      </video>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-start justify-center pt-16 p-4">

        <div className="w-full max-w-sm">
          {/* Main login card */}
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl shadow-2xl border-3 border-white p-5 transform hover:scale-102 transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-5">
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-2xl font-bold text-purple-800 mb-2">Xush kelibsiz!</h1>
            <p className="text-sm text-purple-600">
              Ismingizni kiriting
            </p>
          </div>

          {/* Avatar selection */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-purple-800 mb-2 text-center">
              Avatar tanlang:
            </label>
            <div className="grid grid-cols-6 gap-1">
              {avatars.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`
                    w-9 h-9 rounded-full border-2 transition-all duration-300 text-sm
                    ${selectedAvatar === avatar 
                      ? 'border-purple-400 bg-purple-100 scale-110 shadow-md' 
                      : 'border-gray-200 bg-white hover:border-purple-200 hover:scale-105'
                    }
                  `}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-purple-800 mb-2">
                Ismingiz:
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg">
                  {selectedAvatar}
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ismingizni yozing..."
                  className="w-full pl-12 pr-3 py-3 text-base rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none transition-all duration-300 bg-purple-50"
                  maxLength={20}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 transform shadow-lg
                ${isLoading 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95'
                }
                text-white
              `}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Kirmoqda...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Kiring</span>
                  <span>🎉</span>
                </div>
              )}
            </button>
          </form>

          {/* Fun facts */}
          <div className="mt-4 text-center">
            <p className="text-sm text-purple-600 mb-1">🎯 Qiziqarli fakt:</p>
            <p className="text-xs text-purple-500">
              Bizda {Math.floor(Math.random() * 1000 + 500)} dan ortiq bolalar o'qiydi!
            </p>
          </div>
        </div>

          {/* Additional decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-4 -right-4 w-7 h-7 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;