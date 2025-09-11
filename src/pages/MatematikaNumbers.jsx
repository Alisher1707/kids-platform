import { useState } from 'react';
import { toast } from 'react-toastify';

function MatematikaNumbers({ onBack }) {
  const [selectedRange, setSelectedRange] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [gameNumber, setGameNumber] = useState(null);
  const [gameOptions, setGameOptions] = useState([]);
  const [score, setScore] = useState(0);

  const numberRanges = [
    {
      id: 1,
      title: "1 dan 10 gacha",
      description: "Birinchi sonlar bilan tanishish",
      icon: "1️⃣",
      range: [1, 10],
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
    },
    {
      id: 2,
      title: "11 dan 20 gacha",
      description: "O'nliklar bilan tanishish",
      icon: "2️⃣",
      range: [11, 20],
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
    },
    {
      id: 3,
      title: "21 dan 50 gacha",
      description: "Kattaroq sonlar",
      icon: "5️⃣",
      range: [21, 50],
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
    },
    {
      id: 4,
      title: "51 dan 100 gacha",
      description: "Yuzgacha sonlar",
      icon: "💯",
      range: [51, 100],
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
    },
  ];

  const getNumberEmoji = (num) => {
    const emojiMap = {
      1: "🍎", 2: "🍊", 3: "🍌", 4: "🍇", 5: "🍓",
      6: "🥝", 7: "🍑", 8: "🍒", 9: "🥭", 10: "🍍"
    };
    return emojiMap[num] || "🔢";
  };

  const getNumberInWords = (num) => {
    const words = {
      1: "bir", 2: "ikki", 3: "uch", 4: "to'rt", 5: "besh",
      6: "olti", 7: "yetti", 8: "sakkiz", 9: "to'qqiz", 10: "o'n",
      11: "o'n bir", 12: "o'n ikki", 13: "o'n uch", 14: "o'n to'rt", 15: "o'n besh",
      16: "o'n olti", 17: "o'n yetti", 18: "o'n sakkiz", 19: "o'n to'qqiz", 20: "yigirma"
    };
    
    if (words[num]) return words[num];
    if (num <= 100) {
      const tens = Math.floor(num / 10);
      const ones = num % 10;
      const tensWords = {
        2: "yigirma", 3: "o'ttiz", 4: "qirq", 5: "ellik",
        6: "oltmish", 7: "yetmish", 8: "sakson", 9: "to'qson", 10: "yuz"
      };
      return ones === 0 ? tensWords[tens] : `${tensWords[tens]} ${words[ones]}`;
    }
    return num.toString();
  };

  const startGame = (range) => {
    const randomNum = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
    const correctAnswer = getNumberInWords(randomNum);
    
    // Create wrong options
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const wrongNum = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
      const wrongAnswer = getNumberInWords(wrongNum);
      if (wrongAnswer !== correctAnswer && !wrongOptions.includes(wrongAnswer)) {
        wrongOptions.push(wrongAnswer);
      }
    }
    
    const allOptions = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    setGameNumber(randomNum);
    setGameOptions(allOptions);
    setShowGame(true);
  };

  const checkAnswer = (answer) => {
    const correct = getNumberInWords(gameNumber);
    if (answer === correct) {
      setScore(score + 1);
      toast.success("🎉 To'g'ri javob!");
      
      // Next question
      setTimeout(() => {
        if (selectedRange) {
          startGame(selectedRange.range);
        }
      }, 1500);
    } else {
      toast.error(`❌ Noto'g'ri! To'g'ri javob: ${correct}`);
      setTimeout(() => {
        if (selectedRange) {
          startGame(selectedRange.range);
        }
      }, 2000);
    }
  };

  const renderNumbers = (range) => {
    const numbers = [];
    for (let i = range[0]; i <= range[1]; i++) {
      numbers.push(
        <div
          key={i}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-200"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">{i <= 10 ? getNumberEmoji(i) : "🔢"}</div>
            <div className="text-4xl font-bold text-orange-600 mb-2">{i}</div>
            <div className="text-lg text-orange-700 font-medium">
              {getNumberInWords(i)}
            </div>
            {i <= 10 && (
              <div className="mt-3 flex justify-center flex-wrap">
                {Array.from({length: i}, (_, index) => (
                  <span key={index} className="text-lg">⭐</span>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }
    return numbers;
  };

  if (showGame && gameNumber) {
    return (
      <div className="min-h-screen bg-orange-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => {setShowGame(false); setSelectedRange(null);}}
              className="flex items-center gap-2 px-6 py-3 bg-orange-200 text-orange-800 rounded-full hover:bg-orange-300 transition-colors font-medium shadow-lg"
            >
              <span>←</span> Orqaga
            </button>
            <div className="text-2xl font-bold text-orange-600">
              Ball: {score} 🏆
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-6">
              Bu qaysi son?
            </h2>
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-orange-200 mb-8">
              <div className="text-9xl font-bold text-orange-600 mb-4">
                {gameNumber}
              </div>
              {gameNumber <= 10 && (
                <div className="flex justify-center mb-6">
                  {Array.from({length: gameNumber}, (_, index) => (
                    <span key={index} className="text-4xl mx-1">⭐</span>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {gameOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => checkAnswer(option)}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 text-xl font-medium text-orange-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedRange) {
    return (
      <div className="min-h-screen bg-orange-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setSelectedRange(null)}
              className="flex items-center gap-2 px-6 py-3 bg-orange-200 text-orange-800 rounded-full hover:bg-orange-300 transition-colors font-medium shadow-lg"
            >
              <span>←</span> Orqaga
            </button>
            <button
              onClick={() => startGame(selectedRange.range)}
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium shadow-lg"
            >
              <span>🎮</span> O'yin o'ynash
            </button>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">
              {selectedRange.title}
            </h2>
            <p className="text-xl text-orange-600">{selectedRange.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {renderNumbers(selectedRange.range)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-orange-200 text-orange-800 rounded-full hover:bg-orange-300 transition-colors font-medium shadow-lg"
          >
            <span>←</span> Orqaga
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-800 mb-6">🔢 Sonlar Bilan Tanishish</h1>
          <p className="text-xl text-orange-600 mb-8">
            1 dan 100 gacha sonlarni o'rganamiz va o'ynaymiz!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {numberRanges.map((range) => (
            <div
              key={range.id}
              onClick={() => setSelectedRange(range)}
              className={`${range.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[250px] flex flex-col justify-center border-4 border-orange-200`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${range.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{range.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${range.textColor} mb-3`}>
                  {range.title}
                </h3>
                <p className={`text-lg ${range.textColor} opacity-80`}>
                  {range.description}
                </p>
                <div className="mt-4 text-3xl">
                  ✨ 🎯 ⭐
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatematikaNumbers;