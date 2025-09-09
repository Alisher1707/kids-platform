import { useState } from 'react';
import { toast } from 'react-toastify';

function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      title: "Puzzle O'yin",
      description: "Rangli bo'lakchalarni to'g'ri joyga qo'ying",
      icon: '🧩',
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
      game: 'puzzle',
    },
    {
      id: 2,
      title: "Color Tap",
      description: "Ranglarni eslab qoling va takrorlang",
      icon: '🎨',
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
      game: 'colorTap',
    },
  ];

  const openGame = (game) => {
    setSelectedGame(game);
  };

  const closeGame = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Game Modal */}
        {selectedGame && selectedGame.game === 'puzzle' && (
          <PuzzleGame onClose={closeGame} />
        )}
        {selectedGame && selectedGame.game === 'colorTap' && (
          <ColorTapGame onClose={closeGame} />
        )}

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-pink-800 mb-6">🎮 O'yinlar</h1>
          <p className="text-xl text-pink-600 mb-8">
            Bolalar uchun qiziqarli va rivojlantiruvchi o'yinlar
          </p>
        </div>

        {/* O'yinlar kartochkalari */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => openGame(game)}
              className={`${game.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 border-white`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${game.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{game.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${game.textColor} mb-3`}>
                  {game.title}
                </h3>
                <p className={`text-lg ${game.textColor} opacity-80`}>
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PuzzleGame({ onClose }) {
  const [level, setLevel] = useState(null);
  const [grid, setGrid] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const levels = [
    { name: '2x2', size: 2, title: 'Oson' },
    { name: '3x3', size: 3, title: "O'rta" },
    { name: '4x4', size: 4, title: 'Qiyin' },
  ];

  const colors = [
    'bg-blue-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-purple-200',
    'bg-orange-200',
    'bg-pink-200',
    'bg-indigo-200',
    'bg-red-200',
    'bg-teal-200',
    'bg-cyan-200',
    'bg-lime-200',
    'bg-amber-200',
    'bg-emerald-200',
    'bg-violet-200',
    'bg-rose-200',
    'bg-sky-200',
  ];

  const initializeGame = (size) => {
    const totalTiles = size * size;
    const newGrid = [];

    for (let i = 0; i < totalTiles - 1; i++) {
      newGrid.push({
        id: i + 1,
        value: i + 1,
        color: colors[i % colors.length],
      });
    }
    newGrid.push(null); // Empty space

    // Shuffle the grid
    const shuffled = [...newGrid];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setGrid(shuffled);
    setEmptyIndex(shuffled.indexOf(null));
    setMoves(0);
    setIsWon(false);
    setLevel(size);
  };

  const canMove = (index) => {
    const size = level;
    const row = Math.floor(index / size);
    const col = index % size;
    const emptyRow = Math.floor(emptyIndex / size);
    const emptyCol = emptyIndex % size;

    return (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    );
  };

  const moveTile = (index) => {
    if (!canMove(index)) return;

    const newGrid = [...grid];
    [newGrid[index], newGrid[emptyIndex]] = [newGrid[emptyIndex], newGrid[index]];

    setGrid(newGrid);
    setEmptyIndex(index);
    setMoves(moves + 1);

    // Check if won
    const isComplete = newGrid.every((tile, idx) => {
      if (idx === newGrid.length - 1) return tile === null;
      return tile && tile.value === idx + 1;
    });

    if (isComplete) {
      setIsWon(true);
      // Toast bilan tabriknoma ko'rsatish
      setTimeout(() => {
        toast.success(`🎉 Tabriklaymiz! ${moves + 1} harakatda yechildi! 🏆`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }, 500);
      
      // 3 soniyadan keyin o'yinni avtomatik yangilash
      setTimeout(() => {
        initializeGame(level);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-purple-200 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-2 h-screen overflow-hidden">
      <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white border-opacity-30 flex flex-col max-w-4xl w-full max-h-full">
        <div className="flex justify-between items-center mb-8 flex-shrink-0">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🧩</span>
            </div>
            <h2 className="text-4xl font-bold text-pink-800">Puzzle O'yin</h2>
          </div>
          <button
            onClick={onClose}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-full text-2xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          {!level ? (
            <div className="text-center px-8">
              <h3 className="text-3xl font-bold text-pink-800 mb-8">🎯 Darajani tanlang:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {levels.map((lvl, index) => (
                  <button
                    key={lvl.name}
                    onClick={() => initializeGame(lvl.size)}
                    className={`
                      ${index === 0 ? 'bg-green-100 hover:bg-green-200 border-green-300' : ''}
                      ${index === 1 ? 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300' : ''}
                      ${index === 2 ? 'bg-red-100 hover:bg-red-200 border-red-300' : ''}
                      text-gray-800 font-bold py-8 px-6 rounded-3xl border-4 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-visible
                    `}
                    style={{ transform: 'scale(1)', transformOrigin: 'center' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    <div className="text-5xl mb-4">{index === 0 ? '😊' : index === 1 ? '🤔' : '🤯'}</div>
                    <div className="text-2xl font-bold mb-3">{lvl.title}</div>
                    <div className="text-xl text-gray-600">{lvl.name}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6 flex-shrink-0">
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-100 px-6 py-3 rounded-full border-3 border-blue-200">
                    <span className="text-blue-800 font-bold text-lg">🏃‍♂️ {moves}</span>
                  </div>
                  <div className="bg-purple-100 px-6 py-3 rounded-full border-3 border-purple-200">
                    <span className="text-purple-800 font-bold text-lg">🎯 {level}x{level}</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => initializeGame(level)}
                    className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    🔄 Qayta
                  </button>
                  <button
                    onClick={() => setLevel(null)}
                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    ⬅️ Orqaga
                  </button>
                </div>
              </div>


              <div className="bg-white p-8 rounded-3xl shadow-inner border-4 border-gray-200 flex-shrink-0">
                <div
                  className="grid gap-4 mx-auto"
                  style={{
                    gridTemplateColumns: `repeat(${level}, 1fr)`,
                    width: level === 2 ? '320px' : level === 3 ? '400px' : '480px',
                  }}
                >
                  {grid.map((tile, index) => (
                    <div
                      key={index}
                      onClick={() => moveTile(index)}
                      className={`
                        aspect-square flex items-center justify-center font-bold rounded-xl border-3 transition-all duration-300 shadow-md
                        ${tile ? `${tile.color} border-white cursor-pointer hover:scale-110 hover:shadow-xl hover:rotate-2 active:scale-95` : 'bg-gray-50 border-gray-300 shadow-inner'}
                        ${canMove(index) && tile ? 'hover:brightness-110' : ''}
                        ${level === 2 ? 'text-3xl' : level === 3 ? 'text-2xl' : 'text-xl'}
                      `}
                    >
                      {tile ? (
                        <span className="text-white font-black drop-shadow-lg">{tile.value}</span>
                      ) : (
                        <span className="text-4xl text-gray-300">✨</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ColorTapGame({ onClose }) {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [activeColor, setActiveColor] = useState(null);

  const colors = [
    { id: 0, name: 'Qizil', bgColor: 'bg-red-300', activeBg: 'bg-red-500', sound: '🔴', shadow: 'shadow-red-400' },
    { id: 1, name: 'Yashil', bgColor: 'bg-green-300', activeBg: 'bg-green-500', sound: '🟢', shadow: 'shadow-green-400' },
    { id: 2, name: 'Sariq', bgColor: 'bg-yellow-300', activeBg: 'bg-yellow-500', sound: '🟡', shadow: 'shadow-yellow-400' },
    { id: 3, name: 'Ko\'k', bgColor: 'bg-blue-300', activeBg: 'bg-blue-500', sound: '🔵', shadow: 'shadow-blue-400' }
  ];

  const startGame = () => {
    setSequence([]);
    setUserSequence([]);
    setCurrentStep(0);
    setScore(0);
    setLevel(1);
    setGameOver(false);
    setIsPlaying(true);
    nextRound();
  };

  const nextRound = () => {
    const newColor = Math.floor(Math.random() * 4);
    const newSequence = [...sequence, newColor];
    setSequence(newSequence);
    setUserSequence([]);
    setCurrentStep(0);
    showSequence(newSequence);
  };

  const showSequence = async (seq) => {
    setIsShowingSequence(true);
    
    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setActiveColor(seq[i]);
      await new Promise(resolve => setTimeout(resolve, 400));
      setActiveColor(null);
    }
    
    setIsShowingSequence(false);
  };

  const handleColorClick = (colorId) => {
    if (!isPlaying || isShowingSequence) return;

    setActiveColor(colorId);
    setTimeout(() => setActiveColor(null), 200);

    const newUserSequence = [...userSequence, colorId];
    setUserSequence(newUserSequence);

    if (colorId !== sequence[currentStep]) {
      // Noto'g'ri rang
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    if (newUserSequence.length === sequence.length) {
      // To'g'ri ketma-ketlik tugallandi
      setScore(score + sequence.length * 10);
      setLevel(level + 1);
      
      setTimeout(() => {
        nextRound();
      }, 1000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-purple-200 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-2 h-screen overflow-hidden">
      <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white border-opacity-30 flex flex-col max-w-3xl w-full max-h-full">
        <div className="flex justify-between items-center mb-8 flex-shrink-0">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🎨</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-800">Color Tap</h2>
          </div>
          <button
            onClick={onClose}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-full text-2xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          {!isPlaying && !gameOver ? (
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-6">🎯 O'yinni boshlang!</h3>
              <p className="text-xl text-gray-600 mb-8">
                Ranglar ketma-ketligini eslab qoling va takrorlang
              </p>
              <button
                onClick={startGame}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🎮 Boshlash
              </button>
            </div>
          ) : gameOver ? (
            <div className="text-center">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">O'yin tugadi!</h3>
              <p className="text-xl text-gray-600 mb-2">Ball: {score}</p>
              <p className="text-lg text-gray-600 mb-8">Daraja: {level - 1}</p>
              <button
                onClick={startGame}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🔄 Qayta boshlash
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-center items-center mb-6 flex-shrink-0">
                <div className="flex items-center space-x-6">
                  <div className="bg-green-100 px-6 py-3 rounded-full border-3 border-green-200">
                    <span className="text-green-800 font-bold text-lg">🏆 Ball: {score}</span>
                  </div>
                  <div className="bg-purple-100 px-6 py-3 rounded-full border-3 border-purple-200">
                    <span className="text-purple-800 font-bold text-lg">📈 Daraja: {level}</span>
                  </div>
                  <div className="bg-orange-100 px-6 py-3 rounded-full border-3 border-orange-200">
                    <span className="text-orange-800 font-bold text-lg">
                      {isShowingSequence ? '👀 Kuzating' : '✋ Siz navbatdasi'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-inner border-4 border-gray-200 flex-shrink-0">
                <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorClick(color.id)}
                      disabled={isShowingSequence}
                      className={`
                        w-36 h-36 rounded-3xl border-4 transition-all duration-300 font-bold text-white text-xl relative overflow-hidden
                        ${activeColor === color.id 
                          ? `${color.activeBg} border-yellow-400 shadow-2xl ${color.shadow} scale-110 brightness-125` 
                          : `${color.bgColor} border-white shadow-lg`
                        }
                        ${isShowingSequence ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'}
                        transform
                      `}
                      style={{
                        boxShadow: activeColor === color.id 
                          ? `0 0 30px ${color.id === 0 ? '#ef4444' : color.id === 1 ? '#22c55e' : color.id === 2 ? '#eab308' : '#3b82f6'}, 0 0 60px ${color.id === 0 ? '#ef4444' : color.id === 1 ? '#22c55e' : color.id === 2 ? '#eab308' : '#3b82f6'}80`
                          : undefined
                      }}
                    >
                      {activeColor === color.id && (
                        <div className="absolute inset-0 bg-white bg-opacity-30 animate-pulse"></div>
                      )}
                      <div className="relative z-10">
                        <div className="text-5xl mb-2">{color.sound}</div>
                        <div className="text-base font-black drop-shadow-lg">{color.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-lg text-gray-600">
                    Ketma-ketlik: {sequence.length} rang
                  </p>
                  {userSequence.length > 0 && (
                    <p className="text-md text-blue-600 mt-2">
                      Sizning javobingiz: {userSequence.length}/{sequence.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games