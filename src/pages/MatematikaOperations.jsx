import { useState } from 'react';
import { toast } from 'react-toastify';

function MatematikaOperations({ onBack }) {
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showVisualHelp, setShowVisualHelp] = useState(true);

  const operations = [
    {
      id: 1,
      title: "Qo'shish (+)",
      description: "Sonlarni qo'shishni o'rganamiz",
      icon: "➕",
      type: "addition",
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
      maxNumber: 10,
    },
    {
      id: 2,
      title: "Ayirish (-)",
      description: "Sonlarni ayirishni o'rganamiz",
      icon: "➖",
      type: "subtraction",
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
      maxNumber: 10,
    },
    {
      id: 3,
      title: "Aralash Masalalar",
      description: "Qo'shish va ayirishni birgalikda",
      icon: "🧮",
      type: "mixed",
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
      maxNumber: 20,
    },
  ];

  const fruits = ["🍎", "🍊", "🍌", "🍇", "🍓", "🥝", "🍑", "🍒", "🥭", "🍍"];
  const animals = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];
  const toys = ["⚽", "🏀", "🎾", "🏐", "🏈", "⚾", "🎱", "🪀", "🎯", "🎮"];

  const generateProblem = (type, maxNum) => {
    let num1, num2, operation, answer;
    
    if (type === 'addition' || (type === 'mixed' && Math.random() > 0.5)) {
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * maxNum) + 1;
      operation = '+';
      answer = num1 + num2;
    } else {
      num1 = Math.floor(Math.random() * maxNum) + 2;
      num2 = Math.floor(Math.random() * num1) + 1; // Ensure positive result
      operation = '-';
      answer = num1 - num2;
    }

    const visualItems = operation === '+' ? [...fruits, ...animals, ...toys] : fruits;
    const randomItem = visualItems[Math.floor(Math.random() * visualItems.length)];

    return { num1, num2, operation, answer, visualItem: randomItem };
  };

  const renderVisualRepresentation = (problem) => {
    if (!showVisualHelp || !problem) return null;

    const { num1, num2, operation, visualItem } = problem;
    
    if (operation === '+') {
      return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-200 mb-6">
          <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
            Ko'rish uchun yordam:
          </h4>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex flex-wrap justify-center gap-1">
              {Array.from({length: num1}, (_, i) => (
                <span key={i} className="text-3xl">{visualItem}</span>
              ))}
            </div>
            <span className="text-4xl font-bold text-blue-600">+</span>
            <div className="flex flex-wrap justify-center gap-1">
              {Array.from({length: num2}, (_, i) => (
                <span key={i} className="text-3xl">{visualItem}</span>
              ))}
            </div>
            <span className="text-4xl font-bold text-green-600">=</span>
            <span className="text-4xl font-bold text-purple-600">?</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-red-200 mb-6">
          <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
            Ko'rish uchun yordam:
          </h4>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex flex-wrap justify-center gap-1">
              {Array.from({length: num1}, (_, i) => (
                <span 
                  key={i} 
                  className={`text-3xl ${i >= num2 ? '' : 'opacity-30 line-through'}`}
                >
                  {visualItem}
                </span>
              ))}
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold text-red-600">-</span>
              <div className="text-sm text-gray-500">({num2} ta olib tashlash)</div>
            </div>
            <span className="text-4xl font-bold text-green-600">=</span>
            <span className="text-4xl font-bold text-purple-600">?</span>
          </div>
        </div>
      );
    }
  };

  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    if (isNaN(answer)) {
      toast.error("Iltimos, son kiriting!");
      return;
    }

    if (answer === currentProblem.answer) {
      setScore(score + 1);
      setStreak(streak + 1);
      toast.success(`🎉 To'g'ri! Javob: ${currentProblem.answer}`);
      
      // Generate new problem
      setTimeout(() => {
        setCurrentProblem(generateProblem(selectedOperation.type, selectedOperation.maxNumber));
        setUserAnswer('');
      }, 1500);
    } else {
      setStreak(0);
      toast.error(`❌ Noto'g'ri! To'g'ri javob: ${currentProblem.answer}`);
      setTimeout(() => {
        setCurrentProblem(generateProblem(selectedOperation.type, selectedOperation.maxNumber));
        setUserAnswer('');
      }, 2500);
    }
  };

  const startOperation = (operation) => {
    setSelectedOperation(operation);
    setCurrentProblem(generateProblem(operation.type, operation.maxNumber));
    setScore(0);
    setStreak(0);
    setUserAnswer('');
  };

  if (selectedOperation && currentProblem) {
    return (
      <div className="min-h-screen bg-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => {setSelectedOperation(null); setCurrentProblem(null);}}
              className="flex items-center gap-2 px-6 py-3 bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300 transition-colors font-medium shadow-lg"
            >
              <span>←</span> Orqaga
            </button>
            <div className="flex gap-4">
              <div className="text-xl font-bold text-blue-600">
                Ball: {score} 🏆
              </div>
              <div className="text-xl font-bold text-green-600">
                Ketma-ket: {streak} 🔥
              </div>
              <button
                onClick={() => setShowVisualHelp(!showVisualHelp)}
                className="px-4 py-2 bg-yellow-200 text-yellow-800 rounded-full hover:bg-yellow-300 transition-colors font-medium"
              >
                {showVisualHelp ? '👁️ Yashirish' : '👁️ Ko\'rsatish'}
              </button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-800 mb-2">
              {selectedOperation.title}
            </h2>
            <p className="text-lg text-blue-600">{selectedOperation.description}</p>
          </div>

          {renderVisualRepresentation(currentProblem)}

          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-blue-200 mb-8">
            <div className="text-center">
              <div className="text-8xl font-bold text-blue-600 mb-8">
                {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} = ?
              </div>
              
              <div className="max-w-xs mx-auto mb-8">
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  className="w-full text-4xl text-center p-4 border-4 border-blue-300 rounded-2xl focus:outline-none focus:border-blue-500"
                  placeholder="?"
                  autoFocus
                />
              </div>

              <button
                onClick={checkAnswer}
                className="bg-green-500 text-white px-12 py-4 rounded-2xl text-2xl font-bold shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all"
              >
                Tekshirish 🎯
              </button>
            </div>
          </div>

          {/* Quick number buttons for younger kids */}
          <div className="max-w-2xl mx-auto">
            {/* Basic digits 0-9 */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              {Array.from({length: 10}, (_, i) => i).map(num => (
                <button
                  key={num}
                  onClick={() => setUserAnswer(userAnswer + num.toString())}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg text-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-105"
                >
                  {num}
                </button>
              ))}
            </div>
            
            
            {/* Clear and Backspace buttons */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setUserAnswer('')}
                className="bg-red-100 px-6 py-3 rounded-lg shadow-md hover:shadow-lg text-lg font-bold text-red-700 hover:bg-red-200 transition-all transform hover:scale-105"
              >
                Tozalash
              </button>
              <button
                onClick={() => setUserAnswer(userAnswer.slice(0, -1))}
                className="bg-yellow-100 px-6 py-3 rounded-lg shadow-md hover:shadow-lg text-lg font-bold text-yellow-700 hover:bg-yellow-200 transition-all transform hover:scale-105"
              >
                ←
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300 transition-colors font-medium shadow-lg"
          >
            <span>←</span> Orqaga
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">🧮 Qo'shish va Ayirish</h1>
          <p className="text-xl text-blue-600 mb-8">
            Rasmlar bilan matematik amallarni o'rganamiz!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operations.map((operation) => (
            <div
              key={operation.id}
              onClick={() => startOperation(operation)}
              className={`${operation.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[280px] flex flex-col justify-center border-4 border-blue-200`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${operation.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{operation.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${operation.textColor} mb-3`}>
                  {operation.title}
                </h3>
                <p className={`text-lg ${operation.textColor} opacity-80`}>
                  {operation.description}
                </p>
                <div className="mt-4 text-3xl">
                  ⭐ 🎯 ✨
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border-2 border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              🌟 Matematik sarguzashtlar!
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-bold text-blue-700 mb-1">Aniq hisoblash</h4>
                <p className="text-blue-600">Rasmlar yordamida masalalarni yeching</p>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">🏆</div>
                <h4 className="font-bold text-blue-700 mb-1">Ball to'plash</h4>
                <p className="text-blue-600">Har to'g'ri javob uchun ball oling</p>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">🔥</div>
                <h4 className="font-bold text-blue-700 mb-1">Ketma-ketlik</h4>
                <p className="text-blue-600">Ketma-ket to'g'ri javoblar bering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatematikaOperations;