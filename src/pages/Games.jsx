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
    {
      id: 3,
      title: "Hayvonlarni Top",
      description: "Hayvon ovozlarini eshiting va toping",
      icon: '🐾',
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      game: 'animalSound',
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
        {selectedGame && selectedGame.game === 'animalSound' && (
          <AnimalSoundGame onClose={closeGame} />
        )}

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-pink-800 mb-6">🎮 O'yinlar</h1>
          <p className="text-xl text-pink-600 mb-8">
            Bolalar uchun qiziqarli va rivojlantiruvchi o'yinlar
          </p>
        </div>

        {/* O'yinlar kartochkalari */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white border-opacity-30 flex flex-col max-w-3xl w-full max-h-[90vh]">
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
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
              <h3 className="text-4xl font-bold text-pink-800 mb-10">🎯 Darajani tanlang:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {levels.map((lvl, index) => (
                  <button
                    key={lvl.name}
                    onClick={() => initializeGame(lvl.size)}
                    className={`
                      ${index === 0 ? 'bg-green-100 hover:bg-green-200 border-green-300' : ''}
                      ${index === 1 ? 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300' : ''}
                      ${index === 2 ? 'bg-red-100 hover:bg-red-200 border-red-300' : ''}
                      text-gray-800 font-bold py-6 px-4 rounded-3xl border-4 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-visible
                    `}
                    style={{ transform: 'scale(1)', transformOrigin: 'center' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    <div className="text-4xl mb-3">{index === 0 ? '😊' : index === 1 ? '🤔' : '🤯'}</div>
                    <div className="text-xl font-bold mb-2">{lvl.title}</div>
                    <div className="text-lg text-gray-600">{lvl.name}</div>
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


              <div className="bg-white p-4 rounded-3xl shadow-inner border-4 border-gray-200 flex-shrink-0">
                <div
                  className="grid gap-3 mx-auto"
                  style={{
                    gridTemplateColumns: `repeat(${level}, 1fr)`,
                    width: level === 2 ? '240px' : level === 3 ? '300px' : '360px',
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

function AnimalSoundGame({ onClose }) {
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [stageScore, setStageScore] = useState(0);
  const [stageResults, setStageResults] = useState([]);
  const [showStageResult, setShowStageResult] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [usedAnimals, setUsedAnimals] = useState([]);

  const animals = [
    { id: 1, name: 'Mushuk', emoji: '🐱', sound: 'Myav myav', description: 'Miyovlaydi' },
    { id: 2, name: 'It', emoji: '🐶', sound: 'Vov vov', description: 'Vovlaydi' },
    { id: 3, name: 'Sigir', emoji: '🐮', sound: 'Moo moo', description: 'Moolaydi' },
    { id: 4, name: 'Qo\'y', emoji: '🐑', sound: 'Baa baa', description: 'Baalaydi' },
    { id: 5, name: 'Pishiq', emoji: '😸', sound: 'Purr purr', description: 'Shingillaydi' },
    { id: 6, name: 'O\'rdak', emoji: '🦆', sound: 'Quack quack', description: 'Vaqlaydi' },
    { id: 7, name: 'Tovuq', emoji: '🐔', sound: 'Kokko kokko', description: 'Xo\'rozlaydi' },
    { id: 8, name: 'Sher', emoji: '🦁', sound: 'Roar roar', description: 'Bo\'kiraydi' },
    { id: 9, name: 'Fil', emoji: '🐘', sound: 'Trumpet trumpet', description: 'Karnay chalib ovoz chiqaradi' },
    { id: 10, name: 'Ot', emoji: '🐎', sound: 'Neigh neigh', description: 'Kishnaganday ovoz chiqaradi' },
    { id: 11, name: 'Qush', emoji: '🐦', sound: 'Chirp chirp', description: 'Sayraydi' },
    { id: 12, name: 'Maymun', emoji: '🐵', sound: 'Ooh ooh', description: 'Maymuncha ovoz chiqaradi' },
    { id: 13, name: 'Ayiq', emoji: '🐻', sound: 'Grrrr', description: 'Homirlab ovoz chiqaradi' },
    { id: 14, name: 'Qoplonbars', emoji: '🐅', sound: 'Growl growl', description: 'Xirillaydi' },
    { id: 15, name: 'Zebra', emoji: '🦓', sound: 'Neigh whinny', description: 'Otday ovoz chiqaradi' },
    { id: 16, name: 'Jiraf', emoji: '🦒', sound: 'Hmm hmm', description: 'Jimgina ovoz chiqaradi' },
    { id: 17, name: 'Pingvin', emoji: '🐧', sound: 'Squawk squawk', description: 'Chiyillaydi' },
    { id: 18, name: 'Burgut', emoji: '🦅', sound: 'Screech screech', description: 'Qichqiradi' },
    { id: 19, name: 'Qo\'zi', emoji: '🐑', sound: 'Baa baa', description: 'Mayda ovozda baalaydi' },
    { id: 20, name: 'Mushukcha', emoji: '🐈', sound: 'Meow meow', description: 'Mayda ovozda miyovlaydi' },
    { id: 21, name: 'Itcha', emoji: '🐕', sound: 'Yip yip', description: 'Mayda ovozda vovlaydi' },
    { id: 22, name: 'Xo\'roz', emoji: '🐓', sound: 'Kukuriku', description: 'Ertalab qo\'shiq aytadi' },
    { id: 23, name: 'G\'oz', emoji: '🪿', sound: 'Honk honk', description: 'G\'ozday ovoz chiqaradi' },
    { id: 24, name: 'Orol', emoji: '🦎', sound: 'Hiss hiss', description: 'Shivirlaydi' },
    { id: 25, name: 'Baliq', emoji: '🐟', sound: 'Blub blub', description: 'Suv ostida pufakcha chiqaradi' }
  ];

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setStageScore(0);
    setCurrentStage(1);
    setCurrentQuestion(1);
    setStageResults([]);
    setShowResult(false);
    setShowStageResult(false);
    setShowFinalResult(false);
    setGameComplete(false);
    setUsedAnimals([]);
    nextRound();
  };

  const getRandomAnimalsForChoice = (correctAnimal) => {
    // To'g'ri hayvonni ro'yxatga qo'shish
    const choices = [correctAnimal];
    
    // Qolgan hayvonlardan tasodifiy 7 tasini tanlash
    const otherAnimals = animals.filter(animal => animal.id !== correctAnimal.id);
    const shuffledOthers = otherAnimals.sort(() => Math.random() - 0.5);
    
    // Jami 8 ta hayvon bo'lishi uchun 7 ta qo'shish
    for (let i = 0; i < Math.min(7, shuffledOthers.length); i++) {
      choices.push(shuffledOthers[i]);
    }
    
    // Natijani aralashtirib qaytarish
    return choices.sort(() => Math.random() - 0.5);
  };

  const nextRound = () => {
    // Ishlatilmagan hayvonlarni topish
    const availableAnimals = animals.filter(animal => !usedAnimals.includes(animal.id));
    
    if (availableAnimals.length === 0) {
      // Agar barcha hayvonlar ishlatilgan bo'lsa, o'yinni tugatish
      setGameComplete(true);
      setShowFinalResult(true);
      return;
    }
    
    const randomAnimal = availableAnimals[Math.floor(Math.random() * availableAnimals.length)];
    setCurrentAnimal(randomAnimal);
    setUsedAnimals([...usedAnimals, randomAnimal.id]);
    setSelectedAnimal(null);
    setShowResult(false);
  };

  const playAnimalSound = () => {
    if (currentAnimal) {
      // Web Speech API bilan ovoz chiqarish
      const utterance = new SpeechSynthesisUtterance(currentAnimal.sound);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const selectAnimal = (animal) => {
    setSelectedAnimal(animal);
    
    if (animal.id === currentAnimal.id) {
      const newStageScore = stageScore + 20;
      const newScore = score + 20;
      setStageScore(newStageScore);
      setScore(newScore);
      setShowResult(true);
      
      toast.success(`To'g'ri! ${animal.name} ${animal.sound} qiladi! 🎉`, {
        position: "top-center",
        autoClose: 2000,
      });
      
      setTimeout(() => {
        if (currentQuestion >= 5) {
          // Bosqich tugadi
          const stageResult = {
            stage: currentStage,
            score: newStageScore,
            questions: 5
          };
          setStageResults([...stageResults, stageResult]);
          
          if (currentStage >= 5) {
            // O'yin tugadi
            setGameComplete(true);
            setShowFinalResult(true);
          } else {
            // Keyingi bosqichga o'tish
            setShowStageResult(true);
          }
        } else {
          // Keyingi savol
          setCurrentQuestion(currentQuestion + 1);
          nextRound();
        }
      }, 2000);
    } else {
      toast.error(`Xato! ${currentAnimal.name} ${currentAnimal.sound} qiladi 😊`, {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => {
        setSelectedAnimal(null);
        if (currentQuestion >= 5) {
          // Bosqich tugadi (xato javob bilan)
          const stageResult = {
            stage: currentStage,
            score: stageScore,
            questions: 5
          };
          setStageResults([...stageResults, stageResult]);
          
          if (currentStage >= 5) {
            setGameComplete(true);
            setShowFinalResult(true);
          } else {
            setShowStageResult(true);
          }
        } else {
          setCurrentQuestion(currentQuestion + 1);
          nextRound();
        }
      }, 1500);
    }
  };

  const nextStage = () => {
    setCurrentStage(currentStage + 1);
    setCurrentQuestion(1);
    setStageScore(0);
    setShowStageResult(false);
    nextRound();
  };

  const restartGame = () => {
    startGame();
  };

  return (
    <div className="fixed inset-0 bg-purple-200 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-2 h-screen overflow-hidden">
      <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white border-opacity-30 flex flex-col max-w-4xl w-full max-h-[90vh]">
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">🐾</span>
            </div>
            <h2 className="text-4xl font-bold text-green-800">Hayvonlarni Top</h2>
          </div>
          <button
            onClick={onClose}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-full text-2xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          {!gameStarted ? (
            <div className="text-center">
              <div className="text-8xl mb-6">🎵</div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">Hayvon ovozlarini toping!</h3>
              <p className="text-xl text-gray-600 mb-4">
                5 bosqich, har bosqichda 5 ta savol
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Hayvon ovozini eshitib, to'g'ri hayvonni tanlang
              </p>
              <button
                onClick={startGame}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🎮 O'yinni boshlash
              </button>
            </div>
          ) : showStageResult ? (
            <div className="text-center">
              <div className="text-8xl mb-6">🏆</div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                {currentStage}-bosqich tugadi!
              </h3>
              <div className="bg-green-100 rounded-3xl p-6 mb-6 border-4 border-green-200">
                <p className="text-2xl font-bold text-green-800 mb-3">
                  Natija: {stageScore}/100 ball
                </p>
                <p className="text-lg text-green-600">
                  {stageScore >= 80 ? '🌟 Ajoyib!' : stageScore >= 60 ? '👍 Yaxshi!' : '💪 Harakat qiling!'}
                </p>
              </div>
              <button
                onClick={nextStage}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                ➡️ Keyingi bosqich
              </button>
            </div>
          ) : showFinalResult ? (
            <div className="text-center">
              <div className="text-8xl mb-6">🎉</div>
              <h3 className="text-3xl font-bold text-green-800 mb-6">
                O'yin tugadi!
              </h3>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-6 mb-6 border-4 border-green-200">
                <p className="text-3xl font-bold text-green-800 mb-4">
                  Umumiy ball: {score}/500
                </p>
                <div className="space-y-2 mb-4">
                  {stageResults.map((result, index) => (
                    <div key={index} className="flex justify-between items-center bg-white rounded-xl p-3">
                      <span className="text-lg font-semibold">{result.stage}-bosqich:</span>
                      <span className="text-lg font-bold text-blue-600">{result.score}/100</span>
                    </div>
                  ))}
                </div>
                <p className="text-xl text-green-600">
                  {score >= 400 ? '🌟 Mukammal!' : score >= 300 ? '👍 Juda yaxshi!' : score >= 200 ? '😊 Yaxshi!' : '💪 Yana urinib ko\'ring!'}
                </p>
              </div>
              <button
                onClick={restartGame}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🔄 Qayta boshlash
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-center items-center mb-6 flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 px-4 py-2 rounded-full border-3 border-green-200">
                    <span className="text-green-800 font-bold text-sm">🏆 {score} ball</span>
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-full border-3 border-blue-200">
                    <span className="text-blue-800 font-bold text-sm">📊 {currentStage}-bosqich</span>
                  </div>
                  <div className="bg-purple-100 px-4 py-2 rounded-full border-3 border-purple-200">
                    <span className="text-purple-800 font-bold text-sm">❓ {currentQuestion}/5</span>
                  </div>
                  <div className="bg-yellow-100 px-4 py-2 rounded-full border-3 border-yellow-200">
                    <span className="text-yellow-800 font-bold text-sm">⭐ {stageScore}</span>
                  </div>
                </div>
              </div>

              {currentAnimal && (
                <div className="bg-white p-6 rounded-3xl shadow-inner border-4 border-gray-200 flex-shrink-0">
                  <div className="text-center mb-8">
                    <button
                      onClick={playAnimalSound}
                      className="text-8xl mb-4 hover:scale-110 transition-transform duration-300 bg-blue-100 rounded-full p-4 shadow-lg hover:shadow-xl border-4 border-blue-200 hover:border-blue-400"
                    >
                      🔊
                    </button>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Bu hayvon qanday ovoz chiqaradi?</h3>
                    <div className="bg-yellow-100 rounded-2xl p-4 border-4 border-yellow-200 mb-6">
                      <p className="text-3xl font-bold text-yellow-800">"{currentAnimal.sound}"</p>
                      <p className="text-lg text-yellow-600 mt-2">{currentAnimal.description}</p>
                      <button
                        onClick={playAnimalSound}
                        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        🔊 Ovozni eshitish
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
                    {currentAnimal && getRandomAnimalsForChoice(currentAnimal).map((animal) => (
                      <button
                        key={animal.id}
                        onClick={() => selectAnimal(animal)}
                        disabled={selectedAnimal !== null}
                        className={`
                          p-3 rounded-2xl border-3 transition-all duration-300 transform
                          ${selectedAnimal === animal
                            ? animal.id === currentAnimal.id
                              ? 'bg-green-200 border-green-400 scale-110 shadow-lg'
                              : 'bg-red-200 border-red-400 scale-95'
                            : 'bg-gray-100 border-gray-300 hover:border-green-300 hover:bg-green-50 hover:scale-105'
                          }
                          ${selectedAnimal ? 'cursor-not-allowed' : 'cursor-pointer'}
                          shadow-md hover:shadow-xl
                        `}
                      >
                        <div className="text-3xl mb-1">{animal.emoji}</div>
                        <div className="text-base font-bold text-gray-700">{animal.name}</div>
                      </button>
                    ))}
                  </div>

                  <div className="text-center mt-6">
                    <button
                      onClick={nextRound}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 mr-4"
                    >
                      🔄 Keyingi savol
                    </button>
                    <button
                      onClick={() => setGameStarted(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      ⬅️ Boshiga qaytish
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games