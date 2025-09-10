import { useState } from 'react';

function LessonDetail({ lesson, onBack }) {
  const playLetterSound = (letter) => {
    // Web Speech API yordamida harfni talaffuz qilish
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(letter);
      // Set Russian language for Russian letters, English for English letters
      const isRussianLetter = /[А-Яа-яЁё]/.test(letter);
      utterance.lang = isRussianLetter ? 'ru-RU' : 'en-US';
      utterance.rate = 0.8; // Sekin talaffuz
      utterance.pitch = 1.2; // Yuqori ovoz
      speechSynthesis.speak(utterance);
    }
  };

  const getLetterImage = (letter, _words) => {
    const letterImageMap = {
      // Ingliz harflari
      'A': '🍎', // Apple
      'B': '⚽', // Ball
      'C': '🐱', // Cat
      'D': '🐕', // Dog
      'E': '🐘', // Elephant
      'F': '🐟', // Fish
      'G': '🐐', // Goat
      'H': '🏠', // House
      'I': '🧊', // Ice
      'J': '🦘', // Jump
      'K': '🗝️', // Key
      'L': '❤️', // Love
      'M': '🌙', // Moon
      'N': '👃', // Nose
      'O': '🍊', // Orange
      'P': '✏️', // Pen
      'Q': '👸', // Queen
      'R': '🔴', // Red
      'S': '☀️', // Sun
      'T': '🌳', // Tree
      'U': '☂️', // Umbrella
      'V': '🗣️', // Voice
      'W': '💧', // Water
      'X': '🩻', // X-ray
      'Y': '💛', // Yellow
      'Z': '🦓', // Zebra
      // Rus harflari
      'А': '🍉', // Арбуз
      'Б': '🍌', // Банан
      'В': '🐺', // Волк
      'Г': '🦢', // Гусь
      'Д': '🏠', // Дом
      'Е': '🦝', // Енот
      'Ё': '🦔', // Ёж
      'Ж': '🪲', // Жук
      'З': '🐰', // Заяц
      'И': '🎮', // Игра
      'Й': '🥛', // Йогурт
      'К': '🐱', // Кот
      'Л': '🦁', // Лев
      'М': '🐻', // Медведь
      'Н': '🦏', // Носорог
      'О': '🦌', // Олень
      'П': '🐓', // Петух
      'Р': '🐟', // Рыба
      'С': '☀️', // Солнце
      'Т': '🐅', // Тигр
      'У': '🦆', // Утка
      'Ф': '🦩', // Фламинго
      'Х': '🐹', // Хомяк
      'Ц': '🌸', // Цветок
      'Ч': '🐢', // Черепаха
      'Ш': '🎈', // Шар
      'Щ': '🐶', // Щенок
      'Ъ': '🏢', // Подъезд
      'Ы': '🧼', // Мыло
      'Ь': '🐻', // Медведь
      'Э': '🍦', // Эскимо
      'Ю': '🌀', // Юла
      'Я': '🍎', // Яблоко
    };
    return letterImageMap[letter] || '';
  };
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const nextWord = () => {
    if (currentWordIndex < lesson.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const prevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  const currentWord = lesson.words[currentWordIndex];

  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 mr-6"
          >
            {/[А-Яа-яЁё]/.test(lesson.letter) ? '⬅️ Назад' : 
             (lesson.title && lesson.title.includes('harfi')) ? '⬅️ Orqaga' :
             '⬅️ Back'}
          </button>
          <div className="flex items-center space-x-6 flex-1">
            <div className={`w-16 h-16 ${lesson.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
              <span className="text-3xl font-bold text-white">{lesson.letter}</span>
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${lesson.textColor}`}>{lesson.title}</h1>
              <p className={`text-lg ${lesson.textColor} opacity-80`}>{lesson.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Letter and current word */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-green-200">
              <div className="text-center">
                <div className={`w-40 h-40 mx-auto mb-6 rounded-3xl flex items-center justify-center ${lesson.iconBg} text-white shadow-2xl relative`}>
                  <span className="text-8xl font-bold">{lesson.letter}</span>
                  {(lesson.letterImage || getLetterImage(lesson.letter, lesson.words)) && (
                    <div className="absolute -top-4 -right-4 text-6xl animate-bounce">
                      {lesson.letterImage || getLetterImage(lesson.letter, lesson.words)}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <h2 className={`text-3xl font-bold ${lesson.textColor}`}>
                    {/[А-Яа-яЁё]/.test(lesson.letter) ? `Буква ${lesson.letter}` : 
                     (lesson.title && lesson.title.includes('harfi')) ? `${lesson.letter} harfi` :
                     `Letter ${lesson.letter}`}
                  </h2>
                  {((/[A-Za-z]/.test(lesson.letter) && lesson.words && lesson.words.some(word => /^[A-Za-z]+$/.test(word))) || /[А-Яа-яЁё]/.test(lesson.letter)) && (
                    <button
                      onClick={() => playLetterSound(lesson.letter)}
                      className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-200 animate-pulse"
                      title={/[А-Яа-яЁё]/.test(lesson.letter) ? `Послушайте букву ${lesson.letter}` : 
                             (lesson.title && lesson.title.includes('harfi')) ? `${lesson.letter} harfini tinglang` :
                             `Listen to letter ${lesson.letter}`}
                    >
                      <span className="text-xl">🔊</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-blue-200">
              <h3 className={`text-2xl font-bold ${lesson.textColor} mb-6 text-center`}>
                {/[А-Яа-яЁё]/.test(lesson.letter) ? 'Текущее слово:' : 
                 (lesson.title && lesson.title.includes('harfi')) ? 'Joriy so\'z:' :
                 'Current Word:'}
              </h3>
              <div className="text-center overflow-hidden">
                <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${lesson.textColor} mb-6 whitespace-nowrap px-2`}>
                  {currentWord}
                </div>
                
                <div className="flex justify-center items-center space-x-4 mb-6">
                  <button
                    onClick={prevWord}
                    disabled={currentWordIndex === 0}
                    className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 ${currentWordIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {/[А-Яа-яЁё]/.test(lesson.letter) ? '⬅️ Предыдущее' : 
                     (lesson.title && lesson.title.includes('harfi')) ? '⬅️ Oldingi' :
                     '⬅️ Previous'}
                  </button>
                  
                  <div className={`px-6 py-3 rounded-full ${lesson.bgColor} ${lesson.borderColor} border-3`}>
                    <span className={`font-bold ${lesson.textColor}`}>
                      {currentWordIndex + 1} / {lesson.words.length}
                    </span>
                  </div>
                  
                  <button
                    onClick={nextWord}
                    disabled={currentWordIndex === lesson.words.length - 1}
                    className={`bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 ${currentWordIndex === lesson.words.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {/[А-Яа-яЁё]/.test(lesson.letter) ? 'Следующее ➡️' : 
                     (lesson.title && lesson.title.includes('harfi')) ? 'Keyingi ➡️' :
                     'Next ➡️'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - All words */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-200">
              <h3 className={`text-2xl font-bold ${lesson.textColor} mb-6 text-center`}>
                {/[А-Яа-яЁё]/.test(lesson.letter) ? 'Все слова:' : 
                 (lesson.title && lesson.title.includes('harfi')) ? 'Barcha so\'zlar:' :
                 'All Words:'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lesson.words.map((word, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentWordIndex(index)}
                    className={`p-6 rounded-xl border-3 transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                      index === currentWordIndex 
                        ? `${lesson.bgColor} ${lesson.borderColor}` 
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`font-bold text-lg whitespace-nowrap ${
                      index === currentWordIndex ? lesson.textColor : 'text-gray-800'
                    }`}>
                      {word}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-yellow-200">
              <h3 className={`text-2xl font-bold ${lesson.textColor} mb-4 text-center`}>
                {/[А-Яа-яЁё]/.test(lesson.letter) ? '📖 Практика' : 
                 (lesson.title && lesson.title.includes('harfi')) ? '📖 Mashq qilish' :
                 '📖 Practice'}
              </h3>
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">
                  {/[А-Яа-яЁё]/.test(lesson.letter) 
                    ? `Найдите предметы на букву ${lesson.letter}` 
                    : (lesson.title && lesson.title.includes('harfi'))
                    ? `Rasmdan ${lesson.letter} harfiga oid narsalarni toping`
                    : `Find things that start with letter ${lesson.letter}`
                  }
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-4 border-blue-200">
                  <div className="grid grid-cols-5 gap-4">
                    {lesson.images && lesson.images.map((image, index) => (
                      <div key={index} className="text-6xl hover:scale-110 transition-transform duration-200 cursor-pointer">{image}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonDetail;