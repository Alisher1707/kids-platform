import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

function MatematikaTest({ onBack }) {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const testTypes = [
    {
      id: 1,
      title: "Boshlang'ich Test",
      description: "1-10 gacha sonlar bilan",
      icon: "🌱",
      difficulty: "easy",
      questionCount: 5,
      timePerQuestion: 30,
      bgColor: 'bg-green-100 hover:bg-green-200',
      iconBg: 'bg-green-400',
      textColor: 'text-green-800',
    },
    {
      id: 2,
      title: "O'rta Test",
      description: "1-20 gacha sonlar bilan",
      icon: "🎯",
      difficulty: "medium",
      questionCount: 8,
      timePerQuestion: 25,
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      iconBg: 'bg-blue-400',
      textColor: 'text-blue-800',
    },
    {
      id: 3,
      title: "Murakkab Test",
      description: "1-50 gacha sonlar bilan",
      icon: "🏆",
      difficulty: "hard",
      questionCount: 10,
      timePerQuestion: 20,
      bgColor: 'bg-purple-100 hover:bg-purple-200',
      iconBg: 'bg-purple-400',
      textColor: 'text-purple-800',
    },
    {
      id: 4,
      title: "Aql-Idrok O'yini",
      description: "Matematik jumboqlar",
      icon: "🧠",
      difficulty: "puzzle",
      questionCount: 6,
      timePerQuestion: 45,
      bgColor: 'bg-orange-100 hover:bg-orange-200',
      iconBg: 'bg-orange-400',
      textColor: 'text-orange-800',
    },
  ];

  const generateQuestions = (difficulty, count) => {
    const questions = [];
    
    for (let i = 0; i < count; i++) {
      const question = generateQuestion(difficulty);
      questions.push(question);
    }
    
    return questions;
  };

  const generateQuestion = (difficulty) => {
    const questionTypes = ['addition', 'subtraction', 'comparison', 'pattern', 'logic'];
    
    if (difficulty === 'puzzle') {
      return generatePuzzleQuestion();
    }
    
    const type = questionTypes[Math.floor(Math.random() * (difficulty === 'easy' ? 3 : questionTypes.length))];
    const maxNum = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 50;
    
    switch (type) {
      case 'addition':
        return generateAdditionQuestion(maxNum);
      case 'subtraction':
        return generateSubtractionQuestion(maxNum);
      case 'comparison':
        return generateComparisonQuestion(maxNum);
      case 'pattern':
        return generatePatternQuestion(maxNum);
      case 'logic':
        return generateLogicQuestion();
      default:
        return generateAdditionQuestion(maxNum);
    }
  };

  const generateAdditionQuestion = (maxNum) => {
    const num1 = Math.floor(Math.random() * maxNum) + 1;
    const num2 = Math.floor(Math.random() * maxNum) + 1;
    const correctAnswer = num1 + num2;
    
    const options = generateOptions(correctAnswer, maxNum * 2);
    
    return {
      type: 'addition',
      question: `${num1} + ${num2} = ?`,
      visual: `${"🍎".repeat(Math.min(num1, 5))} + ${"🍊".repeat(Math.min(num2, 5))} = ?`,
      options,
      correctAnswer,
      emoji: "➕"
    };
  };

  const generateSubtractionQuestion = (maxNum) => {
    const num1 = Math.floor(Math.random() * maxNum) + 2;
    const num2 = Math.floor(Math.random() * num1) + 1;
    const correctAnswer = num1 - num2;
    
    const options = generateOptions(correctAnswer, maxNum);
    
    return {
      type: 'subtraction',
      question: `${num1} - ${num2} = ?`,
      visual: `${num1} ta 🍎 dan ${num2} ta olib tashlasak = ?`,
      options,
      correctAnswer,
      emoji: "➖"
    };
  };

  const generateComparisonQuestion = (maxNum) => {
    const num1 = Math.floor(Math.random() * maxNum) + 1;
    const num2 = Math.floor(Math.random() * maxNum) + 1;
    
    let correctAnswer, question;
    if (num1 > num2) {
      correctAnswer = '>';
      question = `${num1} __ ${num2}`;
    } else if (num1 < num2) {
      correctAnswer = '<';
      question = `${num1} __ ${num2}`;
    } else {
      correctAnswer = '=';
      question = `${num1} __ ${num2}`;
    }
    
    return {
      type: 'comparison',
      question: `Qaysi belgi to'g'ri? ${question}`,
      visual: `${"⭐".repeat(Math.min(num1, 8))} va ${"🌟".repeat(Math.min(num2, 8))}`,
      options: ['>', '<', '=', 'Bilmayman'],
      correctAnswer,
      emoji: "⚖️"
    };
  };

  const generatePatternQuestion = (maxNum) => {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 3) + 1;
    const sequence = [start, start + step, start + 2*step, start + 3*step];
    const correctAnswer = start + 4*step;
    
    const options = generateOptions(correctAnswer, Math.max(maxNum, correctAnswer + 10));
    
    return {
      type: 'pattern',
      question: `Ketma-ketlikni davom ettiring: ${sequence.join(', ')}, ?`,
      visual: `🔗 Qoida: har gal ${step} ga ko'payadi`,
      options,
      correctAnswer,
      emoji: "🔄"
    };
  };

  const generateLogicQuestion = () => {
    const scenarios = [
      {
        question: "Maryamda 7 ta olma bor. U 3 tasini ye'di. Nechta olma qoldi?",
        answer: 4,
        visual: "🍎🍎🍎🍎🍎🍎🍎 - 🍎🍎🍎 = ?"
      },
      {
        question: "Bir savatchada 5 ta tuxum bor, ikkinchisida 6 ta. Jami nechta?",
        answer: 11,
        visual: "🥚🥚🥚🥚🥚 + 🥚🥚🥚🥚🥚🥚 = ?"
      },
      {
        question: "12 ta qalam bor edi, 4 tasini berdim. Nechta qoldi?",
        answer: 8,
        visual: "✏️ dan 4 ta kamaydi"
      }
    ];
    
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    const options = generateOptions(scenario.answer, 15);
    
    return {
      type: 'logic',
      question: scenario.question,
      visual: scenario.visual,
      options,
      correctAnswer: scenario.answer,
      emoji: "🤔"
    };
  };

  const generatePuzzleQuestion = () => {
    const puzzles = [
      {
        question: "Men 2 oyoqli va 4 oyoqli hayvonlarni hisobladim. Jami 6 ta bosh va 16 ta oyoq. Nechta 4 oyoqli hayvon bor?",
        options: [2, 3, 4, 5],
        correctAnswer: 2,
        visual: "🐔 + 🐄 = 6 ta bosh, 16 ta oyoq"
      },
      {
        question: "Bir raqam o'ylab ko'ring: uni 2 ga ko'paytirib, 6 ni qo'shsam, 14 chiqadi. Bu qaysi raqam?",
        options: [2, 3, 4, 5],
        correctAnswer: 4,
        visual: "? × 2 + 6 = 14"
      },
      {
        question: "3 ta bola 3 ta olmani 3 daqiqada yeydi. 9 ta bola 9 ta olmani necha daqiqada yeydi?",
        options: [3, 6, 9, 27],
        correctAnswer: 3,
        visual: "🧒🧒🧒 = 3 daqiqa"
      }
    ];
    
    const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    
    return {
      type: 'puzzle',
      question: puzzle.question,
      visual: puzzle.visual,
      options: puzzle.options,
      correctAnswer: puzzle.correctAnswer,
      emoji: "🧩"
    };
  };

  const generateOptions = (correct, max) => {
    const options = [correct];
    while (options.length < 4) {
      const wrong = Math.floor(Math.random() * Math.max(max, 20));
      if (!options.includes(wrong)) {
        options.push(wrong);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const startTest = (test) => {
    setSelectedTest(test);
    const newQuestions = generateQuestions(test.difficulty, test.questionCount);
    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setScore(0);
    setTimeLeft(test.timePerQuestion);
    setGameStarted(true);
  };

  const selectAnswer = useCallback((answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(selectedTest.timePerQuestion);
    } else {
      finishTest(newAnswers);
    }
  }, [userAnswers, currentQuestion, questions.length, selectedTest, finishTest]);

  const finishTest = useCallback((answers) => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
    setGameStarted(false);

    if (correct === questions.length) {
      toast.success("🏆 Mukammal! Barcha savolga to'g'ri javob berdingiz!");
    } else if (correct >= questions.length * 0.7) {
      toast.success("🎉 Ajoyib! Ko'p savolga to'g'ri javob berdingiz!");
    } else {
      toast.info("👍 Yaxshi harakat! Yana mashq qiling!");
    }
  }, [questions]);

  // Timer effect
  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameStarted && timeLeft === 0) {
      selectAnswer(null); // Auto-move to next question
    }
  }, [timeLeft, gameStarted, selectAnswer]);

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-purple-200">
              <h2 className="text-5xl font-bold text-purple-800 mb-6">
                🎉 Test Yakunlandi!
              </h2>
              
              <div className="text-8xl mb-8">
                {percentage >= 90 ? "🏆" : percentage >= 70 ? "🥇" : percentage >= 50 ? "🥈" : "🥉"}
              </div>
              
              <div className="text-6xl font-bold text-purple-600 mb-4">
                {score}/{questions.length}
              </div>
              
              <div className="text-2xl text-purple-700 mb-8">
                {percentage}% to'g'ri javob
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-100 p-6 rounded-2xl">
                  <div className="text-3xl mb-2">✅</div>
                  <div className="text-xl font-bold text-purple-800">To'g'ri</div>
                  <div className="text-2xl text-purple-600">{score}</div>
                </div>
                <div className="bg-red-100 p-6 rounded-2xl">
                  <div className="text-3xl mb-2">❌</div>
                  <div className="text-xl font-bold text-red-800">Noto'g'ri</div>
                  <div className="text-2xl text-red-600">{questions.length - score}</div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => startTest(selectedTest)}
                  className="bg-purple-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-purple-600 transform hover:scale-105 transition-all"
                >
                  🔄 Qayta urinish
                </button>
                <button
                  onClick={() => {setSelectedTest(null); setShowResults(false);}}
                  className="bg-gray-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-gray-600 transform hover:scale-105 transition-all"
                >
                  🏠 Menyu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedTest && gameStarted) {
    const currentQ = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    return (
      <div className="min-h-screen bg-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {setSelectedTest(null); setGameStarted(false);}}
              className="flex items-center gap-2 px-6 py-3 bg-purple-200 text-purple-800 rounded-full hover:bg-purple-300 transition-colors font-medium shadow-lg"
            >
              <span>←</span> Chiqish
            </button>
            
            <div className="flex gap-4 items-center">
              <div className="text-xl font-bold text-purple-600">
                {currentQuestion + 1}/{questions.length}
              </div>
              <div className={`text-2xl font-bold ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`}>
                ⏱️ {timeLeft}s
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-gray-200 rounded-full h-4 mb-8">
            <div 
              className="bg-purple-500 rounded-full h-4 transition-all duration-300"
              style={{width: `${progress}%`}}
            ></div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-purple-200">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">{currentQ.emoji}</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                {currentQ.question}
              </h3>
              {currentQ.visual && (
                <div className="text-lg text-purple-600 bg-purple-50 p-4 rounded-xl">
                  {currentQ.visual}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(option)}
                  className="bg-purple-100 hover:bg-purple-200 p-6 rounded-2xl text-xl font-bold text-purple-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-purple-200"
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

  return (
    <div className="min-h-screen bg-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 bg-purple-200 text-purple-800 rounded-full hover:bg-purple-300 transition-colors font-medium shadow-lg"
          >
            <span>←</span> Orqaga
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-800 mb-6">🧠 Matematik Testlar</h1>
          <p className="text-xl text-purple-600 mb-8">
            Bilimingizni sinab ko'ring va qiziqarli testlar yeching!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testTypes.map((test) => (
            <div
              key={test.id}
              onClick={() => startTest(test)}
              className={`${test.bgColor} rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[320px] flex flex-col justify-center border-4 border-purple-200`}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${test.iconBg} text-white shadow-lg`}
                >
                  <span className="text-3xl">{test.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${test.textColor} mb-3`}>
                  {test.title}
                </h3>
                <p className={`text-lg ${test.textColor} opacity-80 mb-4`}>
                  {test.description}
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>📊 {test.questionCount} ta savol</div>
                  <div>⏱️ {test.timePerQuestion} soniya/savol</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatematikaTest;