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
  const [usedQuestions, setUsedQuestions] = useState(() => {
    const stored = localStorage.getItem('matematika-used-questions');
    return stored ? JSON.parse(stored) : [];
  });

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
    {
      id: 5,
      title: "Geometriya O'yini",
      description: "Shakllar va geometrik figuralar",
      icon: "⬜",
      difficulty: "geometry",
      questionCount: 7,
      timePerQuestion: 35,
      bgColor: 'bg-teal-100 hover:bg-teal-200',
      iconBg: 'bg-teal-400',
      textColor: 'text-teal-800',
    },
    {
      id: 6,
      title: "Tezlik Testi",
      description: "Vaqt bilan poyga qiling!",
      icon: "⚡",
      difficulty: "speed",
      questionCount: 15,
      timePerQuestion: 10,
      bgColor: 'bg-red-100 hover:bg-red-200',
      iconBg: 'bg-red-400',
      textColor: 'text-red-800',
    },
    {
      id: 7,
      title: "Rang-Ranglar",
      description: "Ranglar bilan matematik",
      icon: "🌈",
      difficulty: "color",
      questionCount: 6,
      timePerQuestion: 25,
      bgColor: 'bg-pink-100 hover:bg-pink-200',
      iconBg: 'bg-pink-400',
      textColor: 'text-pink-800',
    },
    {
      id: 8,
      title: "Hayvonlar Dunyosi",
      description: "Hayvonlar bilan matematik",
      icon: "🐾",
      difficulty: "animal",
      questionCount: 8,
      timePerQuestion: 30,
      bgColor: 'bg-amber-100 hover:bg-amber-200',
      iconBg: 'bg-amber-400',
      textColor: 'text-amber-800',
    },
  ];

  const generateQuestions = (difficulty, count) => {
    const questions = [];
    const currentUsedQuestions = [...usedQuestions]; // Local copy to track during generation
    
    for (let i = 0; i < count; i++) {
      let attempts = 0;
      let question;
      let questionId;
      const maxAttempts = 500;
      
      do {
        question = generateQuestion(difficulty);
        questionId = createQuestionId(question);
        attempts++;
        
        // Agar juda ko'p urinish bo'lsa va savollar tugab qolsa, reset qilamiz
        if (attempts > maxAttempts) {
          console.log(`Resetting questions after ${attempts} attempts for ${difficulty} difficulty`);
          localStorage.removeItem('matematika-used-questions');
          setUsedQuestions([]);
          currentUsedQuestions.length = 0; // Clear local copy
          toast.info('🔄 Yangi savollar yaratildi!');
          break;
        }
      } while (currentUsedQuestions.includes(questionId));
      
      // Savol topildi, uni saqlash
      question.id = questionId;
      questions.push(question);
      currentUsedQuestions.push(questionId);
    }
    
    // Barcha yangi savollarni localStorage ga saqlash
    setUsedQuestions(currentUsedQuestions);
    localStorage.setItem('matematika-used-questions', JSON.stringify(currentUsedQuestions));
    
    return questions;
  };

  // Savol uchun unique ID yaratish
  const createQuestionId = (question) => {
    // Savol matni va javoblarni birlashtiramiz
    const fullContent = `${question.question}|${question.visual || ''}|${question.correctAnswer}|${JSON.stringify(question.options)}`;
    const cleanText = fullContent.toLowerCase().replace(/[^\w\s]/g, '');
    
    // Murakkab hash algoritmi
    let hash1 = 0;
    let hash2 = 0;
    
    for (let i = 0; i < cleanText.length; i++) {
      const char = cleanText.charCodeAt(i);
      hash1 = ((hash1 << 5) - hash1) + char;
      hash1 = hash1 & hash1; // 32bit integer
      hash2 = ((hash2 << 3) + hash2) + char;
      hash2 = hash2 & hash2;
    }
    
    // Type, hash va javobni birlashtirish
    return `${question.type}_${Math.abs(hash1)}_${Math.abs(hash2)}_${question.correctAnswer}`;
  };

  const generateQuestion = (difficulty) => {
    const questionTypes = ['addition', 'subtraction', 'comparison', 'pattern', 'logic'];
    
    if (difficulty === 'puzzle') {
      return generatePuzzleQuestion();
    }
    
    if (difficulty === 'geometry') {
      return generateGeometryQuestion();
    }
    
    if (difficulty === 'speed') {
      return generateSpeedQuestion();
    }
    
    if (difficulty === 'color') {
      return generateColorQuestion();
    }
    
    if (difficulty === 'animal') {
      return generateAnimalQuestion();
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
    const fruits = ["🍎", "🍊", "🍌", "🍓", "🥝", "🍇"];
    const objects = ["📚", "✏️", "🎈", "⚽", "🧸", "🪀"];
    const names = ["Ali", "Malika", "Jasur", "Zarina", "Bobur", "Nigora"];
    
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    
    const num1 = Math.floor(Math.random() * 8) + 3; // 3-10
    const num2 = Math.floor(Math.random() * Math.min(num1-1, 5)) + 1; // 1 dan num1-1 gacha
    const num3 = Math.floor(Math.random() * 6) + 2; // 2-7
    const num4 = Math.floor(Math.random() * 4) + 2; // 2-5
    
    const scenarios = [
      {
        question: `${name}da ${num1} ta ${fruit} bor. U ${num2} tasini yedi. Nechta ${fruit} qoldi?`,
        answer: num1 - num2,
        visual: `${fruit.repeat(Math.min(num1, 8))} - ${fruit.repeat(num2)} = ?`
      },
      {
        question: `Bir qutida ${num3} ta ${object} bor, ikkinchisida ${num4} ta. Jami nechta?`,
        answer: num3 + num4,
        visual: `${object.repeat(num3)} + ${object.repeat(num4)} = ?`
      },
      {
        question: `${name} ${num1} ta ${object} sotib oldi, ${num2} tasini do'stiga berdi. Nechta qoldi?`,
        answer: num1 - num2,
        visual: `${object} dan ${num2} ta kamaydi`
      },
      {
        question: `Har kuni ${num2} ta ${fruit} yesam, ${num3} kunda nechta ${fruit} yeyaman?`,
        answer: num2 * num3,
        visual: `${fruit.repeat(num2)} × ${num3} kun = ?`
      },
      {
        question: `${num1} ta ${object}ni ${num2} ta bolaga teng bo'lib bersak, har biriga nechta tegadi?`,
        answer: Math.floor(num1 / num2),
        visual: `${object.repeat(num1)} ÷ ${num2} = ?`
      }
    ];
    
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    const options = generateOptions(scenario.answer, 20);
    
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
    const num1 = Math.floor(Math.random() * 3) + 2; // 2-4
    const num2 = Math.floor(Math.random() * 4) + 3; // 3-6
    const num3 = Math.floor(Math.random() * 5) + 2; // 2-6
    const multiplier = Math.floor(Math.random() * 3) + 2; // 2-4
    
    const puzzles = [
      {
        question: `Men 2 oyoqli va 4 oyoqli hayvonlarni hisobladim. Jami ${num1 + num2} ta bosh va ${(num1 * 2) + (num2 * 4)} ta oyoq. Nechta 4 oyoqli hayvon bor?`,
        options: [num2 - 1, num2, num2 + 1, num2 + 2],
        correctAnswer: num2,
        visual: "🐔 + 🐄 = ? bosh, ? oyoq"
      },
      {
        question: `Bir raqam o'ylab ko'ring: uni ${multiplier} ga ko'paytirib, ${num3} ni qo'shsam, ${(num1 * multiplier) + num3} chiqadi. Bu qaysi raqam?`,
        options: [num1 - 1, num1, num1 + 1, num1 + 2],
        correctAnswer: num1,
        visual: `? × ${multiplier} + ${num3} = ${(num1 * multiplier) + num3}`
      },
      {
        question: `${num3} ta bola ${num3} ta olmani ${num3} daqiqada yeydi. ${num3 * 3} ta bola ${num3 * 3} ta olmani necha daqiqada yeydi?`,
        options: [num3, num3 * 2, num3 * 3, num3 * 9],
        correctAnswer: num3,
        visual: `${"🧒".repeat(num3)} = ${num3} daqiqa`
      },
      {
        question: `Bir tanga tashlasam, ${num1} marta "raqam" chiqdi. Yana ${num2} marta tashlasam, jami necha marta tashlagan bo'laman?`,
        options: [num1 + num2 - 1, num1 + num2, num1 + num2 + 1, num1 * num2],
        correctAnswer: num1 + num2,
        visual: `🪙 × ${num1} + 🪙 × ${num2} = ?`
      },
      {
        question: `Mening yoshim ${num3 * 2}. ${num3} yil oldin necha yoshda edim?`,
        options: [num3, num3 + 1, num3 - 1, num3 * 2],
        correctAnswer: num3,
        visual: `${num3 * 2} - ${num3} = ?`
      },
      {
        question: `Bitta savatchada ${num1} ta tuxum bor. ${num2} ta savatchada jami nechta tuxum?`,
        options: [num1 * num2 - 1, num1 * num2, num1 * num2 + 1, num1 + num2],
        correctAnswer: num1 * num2,
        visual: `🥚 × ${num1} × ${num2} savat = ?`
      }
    ];
    
    const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    
    return {
      type: 'puzzle',
      question: puzzle.question,
      visual: puzzle.visual,
      options: puzzle.options.sort(() => Math.random() - 0.5),
      correctAnswer: puzzle.correctAnswer,
      emoji: "🧩"
    };
  };

  const generateGeometryQuestion = () => {
    const shapes = [
      { name: "Uchburchak", emoji: "🔺", sides: 3, corners: 3 },
      { name: "Kvadrat", emoji: "🟫", sides: 4, corners: 4 },
      { name: "Doira", emoji: "🟠", sides: 0, corners: 0 },
      { name: "To'rtburchak", emoji: "🟦", sides: 4, corners: 4 },
      { name: "Beshburchak", emoji: "⭐", sides: 5, corners: 5 }
    ];
    
    const selectedShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomNum = Math.floor(Math.random() * 3) + 2;
    
    const questions = [
      {
        question: `${selectedShape.name}da nechta tomonlar bor?`,
        options: [selectedShape.sides - 1, selectedShape.sides, selectedShape.sides + 1, selectedShape.sides + 2].filter(n => n >= 0),
        correctAnswer: selectedShape.sides,
        visual: `${selectedShape.emoji} ${selectedShape.name}`,
        emoji: "📐"
      },
      {
        question: "Kvadratning barcha tomonlari qanday?",
        options: ["Teng", "Har xil", "2 ta uzun", "3 ta qisqa"],
        correctAnswer: "Teng",
        visual: "⬜ Barcha tomonlar bir xil",
        emoji: "🟫"
      },
      {
        question: "Qaysi shakl yumaloq?",
        options: ["Doira", "Kvadrat", "Uchburchak", "To'rtburchak"],
        correctAnswer: "Doira",
        visual: "🔺 🟫 ⬜ 🟠",
        emoji: "🟠"
      },
      {
        question: `${randomNum} ta ${selectedShape.name} bo'lsa, jami nechta tomon bor?`,
        options: [(selectedShape.sides * randomNum) - 1, selectedShape.sides * randomNum, (selectedShape.sides * randomNum) + 1, selectedShape.sides + randomNum],
        correctAnswer: selectedShape.sides * randomNum,
        visual: `${selectedShape.emoji.repeat(randomNum)} = ? tomon`,
        emoji: "🔢"
      },
      {
        question: `Qaysi shaklning eng ko'p tomonlari bor?`,
        options: ["Uchburchak", "Kvadrat", "Beshburchak", "Doira"],
        correctAnswer: "Beshburchak",
        visual: "🔺 🟫 ⭐ 🟠",
        emoji: "⭐"
      },
      {
        question: `To'rtburchakda nechta burchaklar bor?`,
        options: [3, 4, 5, 6],
        correctAnswer: 4,
        visual: "🟦 burchaklari = ?",
        emoji: "📐"
      }
    ];
    
    const questionIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[questionIndex];
    
    return {
      type: 'geometry',
      question: selectedQuestion.question,
      visual: selectedQuestion.visual,
      options: selectedQuestion.options.sort(() => Math.random() - 0.5),
      correctAnswer: selectedQuestion.correctAnswer,
      emoji: selectedQuestion.emoji
    };
  };

  const generateSpeedQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    const operations = [
      { op: '+', symbol: '➕', answer: num1 + num2 },
      { op: '-', symbol: '➖', answer: Math.max(num1 - num2, 0) },
      { op: 'double', symbol: '✖️2', answer: num1 * 2 }
    ];
    
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let question, correctAnswer;
    
    if (operation.op === 'double') {
      question = `${num1} × 2 = ?`;
      correctAnswer = operation.answer;
    } else {
      question = `${num1} ${operation.op} ${num2} = ?`;
      correctAnswer = operation.answer;
    }
    
    return {
      type: 'speed',
      question,
      visual: `${operation.symbol} Tez hisoblang!`,
      options: generateOptions(correctAnswer, 30),
      correctAnswer,
      emoji: "⚡"
    };
  };

  const generateColorQuestion = () => {
    const colors = [
      { name: "qizil", emoji: "🔴" },
      { name: "ko'k", emoji: "🔵" },
      { name: "yashil", emoji: "🟢" },
      { name: "sariq", emoji: "🟡" },
      { name: "binafsha", emoji: "🟣" },
      { name: "jigarrang", emoji: "🟤" }
    ];
    
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    
    const num1 = Math.floor(Math.random() * 6) + 2; // 2-7
    const num2 = Math.floor(Math.random() * 5) + 1; // 1-5
    const num3 = Math.floor(Math.random() * 4) + 2; // 2-5
    const groups = Math.floor(Math.random() * 3) + 2; // 2-4
    
    const colorQuestions = [
      {
        question: `${num1} ta ${color1.emoji} va ${num2} ta ${color2.emoji} bor. Jami nechta?`,
        correctAnswer: num1 + num2,
        visual: `${color1.emoji.repeat(Math.min(num1, 6))} + ${color2.emoji.repeat(Math.min(num2, 6))} = ?`,
        emoji: "🌈"
      },
      {
        question: `${num1} ta ${color1.emoji} dan ${num2} ta ${color1.emoji} olib tashlasak?`,
        correctAnswer: num1 - num2,
        visual: `${color1.emoji.repeat(Math.min(num1, 7))} - ${color1.emoji.repeat(num2)} = ?`,
        emoji: color1.emoji
      },
      {
        question: `Har birida ${num3} tadan ${color1.emoji} bor. ${groups} ta guruh. Jami?`,
        correctAnswer: num3 * groups,
        visual: `(${color1.emoji.repeat(num3)}) × ${groups} = ?`,
        emoji: "💜"
      },
      {
        question: `${num1} ta ${color1.emoji}ni ${num2} ta bolaga teng bo'lib bersak, har biriga nechta tegadi?`,
        correctAnswer: Math.floor(num1 / num2),
        visual: `${color1.emoji.repeat(num1)} ÷ ${num2} = ?`,
        emoji: color1.emoji
      },
      {
        question: `${num1} ta ${color1.emoji} va ${num2} ta ${color2.emoji}dan qaysi rang ko'proq?`,
        correctAnswer: num1 > num2 ? color1.name : (num2 > num1 ? color2.name : "Teng"),
        visual: `${color1.emoji.repeat(num1)} vs ${color2.emoji.repeat(num2)}`,
        emoji: "⚖️"
      }
    ];
    
    const question = colorQuestions[Math.floor(Math.random() * colorQuestions.length)];
    
    if (question.question.includes("qaysi rang")) {
      const options = [color1.name, color2.name, "Teng", "Bilmayman"];
      return {
        type: 'color',
        question: question.question,
        visual: question.visual,
        options: options.sort(() => Math.random() - 0.5),
        correctAnswer: question.correctAnswer,
        emoji: question.emoji
      };
    }
    
    return {
      type: 'color',
      question: question.question,
      visual: question.visual,
      options: generateOptions(question.correctAnswer, 15),
      correctAnswer: question.correctAnswer,
      emoji: question.emoji
    };
  };

  const generateAnimalQuestion = () => {
    const animals = [
      { name: "mushuk", emoji: "🐱", legs: 4, ears: 2 },
      { name: "it", emoji: "🐶", legs: 4, ears: 2 },
      { name: "tovuq", emoji: "🐔", legs: 2, ears: 0 },
      { name: "sigir", emoji: "🐄", legs: 4, ears: 2 },
      { name: "quyon", emoji: "🐰", legs: 4, ears: 2 },
      { name: "baliq", emoji: "🐠", legs: 0, ears: 0 },
      { name: "qush", emoji: "🐦", legs: 2, ears: 0 },
      { name: "ot", emoji: "🐴", legs: 4, ears: 2 },
      { name: "echki", emoji: "🐐", legs: 4, ears: 2 }
    ];
    
    const animal1 = animals[Math.floor(Math.random() * animals.length)];
    const animal2 = animals[Math.floor(Math.random() * animals.length)];
    const animal3 = animals.filter(a => a.legs === 4)[Math.floor(Math.random() * animals.filter(a => a.legs === 4).length)];
    
    const count1 = Math.floor(Math.random() * 4) + 2; // 2-5
    const count2 = Math.floor(Math.random() * 3) + 2; // 2-4
    const count3 = Math.floor(Math.random() * 5) + 3; // 3-7
    
    const animalQuestions = [
      {
        question: `${animal1.name}da ${animal1.legs} ta oyoq, ${animal2.name}da ${animal2.legs} ta. Jami nechta oyoq?`,
        correctAnswer: animal1.legs + animal2.legs,
        visual: `${animal1.emoji} + ${animal2.emoji} = ? ta oyoq`,
        emoji: "🐾"
      },
      {
        question: `${count1} ta ${animal3.name}da jami nechta oyoq bor?`,
        correctAnswer: count1 * animal3.legs,
        visual: `${animal3.emoji.repeat(count1)} × ${animal3.legs} oyoq = ?`,
        emoji: animal3.emoji
      },
      {
        question: `${count3} ta ${animal1.name}da jami nechta quloq bor?`,
        correctAnswer: count3 * animal1.ears,
        visual: `${animal1.emoji.repeat(Math.min(count3, 6))} × ${animal1.ears} quloq = ?`,
        emoji: animal1.emoji
      },
      {
        question: `${count1} ta ${animal1.name} va ${count2} ta ${animal2.name} bor. Jami nechta hayvon?`,
        correctAnswer: count1 + count2,
        visual: `${animal1.emoji.repeat(count1)} + ${animal2.emoji.repeat(count2)} = ?`,
        emoji: "🐾"
      },
      {
        question: `Agar ${animal1.name}da ${animal1.legs} ta oyoq bo'lsa, ${count2} ta ${animal1.name}da nechta?`,
        correctAnswer: animal1.legs * count2,
        visual: `${animal1.emoji} × ${count2} = ? oyoq`,
        emoji: animal1.emoji
      },
      {
        question: `${animal1.name} va ${animal2.name}dan qaysi biri ko'p oyoqli?`,
        correctAnswer: animal1.legs > animal2.legs ? animal1.name : (animal2.legs > animal1.legs ? animal2.name : "Teng"),
        visual: `${animal1.emoji}(${animal1.legs}) vs ${animal2.emoji}(${animal2.legs})`,
        emoji: "⚖️"
      },
      {
        question: `${count1} ta ${animal1.name}dan ${count2} tasini olib tashlasak, nechta qoladi?`,
        correctAnswer: count1 - count2,
        visual: `${animal1.emoji.repeat(count1)} - ${count2} = ?`,
        emoji: animal1.emoji
      }
    ];
    
    const question = animalQuestions[Math.floor(Math.random() * animalQuestions.length)];
    
    if (question.question.includes("qaysi biri")) {
      const options = [animal1.name, animal2.name, "Teng", "Bilmayman"];
      return {
        type: 'animal',
        question: question.question,
        visual: question.visual,
        options: options.sort(() => Math.random() - 0.5),
        correctAnswer: question.correctAnswer,
        emoji: question.emoji
      };
    }
    
    return {
      type: 'animal',
      question: question.question,
      visual: question.visual,
      options: generateOptions(question.correctAnswer, 20),
      correctAnswer: question.correctAnswer,
      emoji: question.emoji
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
          
          {/* Savollar statistikasi */}
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-lg mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <div className="text-sm text-gray-600">Ishlatilgan savollar:</div>
                <div className="text-2xl font-bold text-purple-600">{usedQuestions.length}</div>
              </div>
              <div className="text-right">
                <button
                  onClick={() => {
                    localStorage.removeItem('matematika-used-questions');
                    setUsedQuestions([]);
                    toast.success('✨ Barcha savollar yangilandi!');
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-600 transition-colors"
                >
                  🔄 Reset
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
              <div className="bg-purple-50 p-2 rounded-lg">
                <div className="font-medium">🚫 Takrorlanmaydi</div>
                <div>100% noyob savollar</div>
              </div>
              <div className="bg-green-50 p-2 rounded-lg">
                <div className="font-medium">💾 Saqlanadi</div>
                <div>localStorage orqali</div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mt-3 text-center">
              ⚡ Har bir savol faqat bir marta beriladi, hech qachon takrorlanmaydi
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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